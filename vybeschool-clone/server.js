const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PUBLIC = path.join(__dirname, 'www.vybeschool.com');
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg',
};

const COMPRESSABLE = new Set(['.html', '.js', '.css', '.json', '.xml', '.svg']);

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Access-Control-Allow-Origin': '*',
};

/* ── Local dev mock API (replaced by real Vercel functions in prod) ── */
const MOCK = { members: [], sessions: {}, submissions: [], nextId: 1 };
const crypto = require('crypto');

function mockJson(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json', ...SECURITY_HEADERS });
  res.end(JSON.stringify(body));
}

function mockPromote(m) {
  if (process.env.MOCK_ADMIN_EMAIL && m.email === String(process.env.MOCK_ADMIN_EMAIL).toLowerCase()) m.role = 'admin';
  return m;
}

function mockBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch { resolve({}); } });
  });
}

function mockSessionToken(req) {
  const cookie = req.headers.cookie || '';
  const m = cookie.match(/(?:^|;\s*)tcc_session=([^;]+)/);
  return m ? m[1] : null;
}

function mockCurrentMember(req) {
  const token = mockSessionToken(req);
  if (!token || !MOCK.sessions[token]) return null;
  const m = MOCK.sessions[token];
  return { id: m.id, name: m.name, email: m.email, role: m.role };
}

const PASS = (pass, salt) => crypto.scryptSync(String(pass), salt, 64).toString('hex');

async function serveMockApi(req, res, url) {
  const route = url.split('?')[0].replace('/api/', '');
  const method = req.method;
  const setCookie = (token) => res.setHeader('Set-Cookie', `tcc_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000`);

  if (route === 'register' && method === 'POST') {
    const b = await mockBody(req);
    const email = String(b.email || '').trim().toLowerCase();
    if (MOCK.members.some((m) => m.email === email)) return mockJson(res, 409, { error: 'An account with that email already exists' });
    const member = { id: MOCK.nextId++, name: b.name, email, passkey_hash: PASS(b.passkey, 'mock'), role: 'member', created_at: new Date() };
    MOCK.members.push(mockPromote(member));
    const token = crypto.randomBytes(16).toString('hex');
    MOCK.sessions[token] = member;
    setCookie(token);
    return mockJson(res, 201, { member: { id: member.id, name: member.name, email: member.email, role: member.role } });
  }

  if (route === 'login' && method === 'POST') {
    const b = await mockBody(req);
    const email = String(b.email || '').trim().toLowerCase();
    const m = MOCK.members.find((x) => x.email === email && x.passkey_hash === PASS(b.passkey, 'mock'));
    if (!m) return mockJson(res, 401, { error: 'Invalid email or passkey' });
    const token = crypto.randomBytes(16).toString('hex');
    MOCK.sessions[token] = mockPromote(m);
    setCookie(token);
    return mockJson(res, 200, { member: { id: m.id, name: m.name, email: m.email, role: m.role } });
  }

  if (route === 'logout' && method === 'POST') {
    const token = mockSessionToken(req);
    if (token) delete MOCK.sessions[token];
    res.setHeader('Set-Cookie', 'tcc_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
    return mockJson(res, 200, { ok: true });
  }

  if (route === 'me' && method === 'GET') {
    const m = mockCurrentMember(req);
    return m ? mockJson(res, 200, { member: m }) : mockJson(res, 401, { error: 'Not signed in' });
  }

  if (route === 'forms' && method === 'POST') {
    const b = await mockBody(req);
    const row = { id: MOCK.nextId++, form_type: b.form_type || b.source || 'contact', email: b.email || null, payload: b, created_at: new Date() };
    MOCK.submissions.push(row);
    return mockJson(res, 201, { id: row.id, ok: true });
  }

  if (route === 'admin' && method === 'GET') {
    const m = mockCurrentMember(req);
    if (!m) return mockJson(res, 401, { error: 'Not signed in' });
    if (m.role !== 'admin') return mockJson(res, 403, { error: 'Admin only' });
    const scope = new URL('http://x' + url).searchParams.get('scope') || 'submissions';
    if (scope === 'members') return mockJson(res, 200, { members: MOCK.members.map(({ id, name, email, role, created_at }) => ({ id, name, email, role, created_at })) });
    return mockJson(res, 200, { submissions: MOCK.submissions.map(({ id, form_type, email, payload, created_at }) => ({ id, form_type, email, payload, created_at })) });
  }

  return mockJson(res, 404, { error: 'Not found' });
}

function serveFile(res, filePath, statusCode = 200) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';
  const acceptEncoding = (res.req.headers['accept-encoding'] || '');
  const useGzip = COMPRESSABLE.has(ext) && acceptEncoding.includes('gzip');

  const headers = {
    'Content-Type': contentType,
    'Vary': 'Accept-Encoding',
    ...SECURITY_HEADERS,
  };
  if (ext === '.html') headers['Cache-Control'] = 'no-cache, no-store';
  if (ext === '.js' || ext === '.css') headers['Cache-Control'] = 'no-cache';
  if (useGzip) headers['Content-Encoding'] = 'gzip';

  res.writeHead(statusCode, headers);

  if (res.req.method === 'HEAD') {
    res.end();
    return;
  }

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    res.destroy();
  });

  if (useGzip) {
    stream.pipe(zlib.createGzip()).pipe(res);
  } else {
    stream.pipe(res);
  }
}

function serve404(res) {
  const fallback = path.join(PUBLIC, '404.html');
  if (fs.existsSync(fallback)) {
    const ext = path.extname(fallback).toLowerCase();
    const contentType = MIME[ext] || 'text/html; charset=utf-8';
    res.writeHead(404, {
      'Content-Type': contentType,
      ...SECURITY_HEADERS,
    });
    fs.createReadStream(fallback).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS });
    res.end('<h1>404 Not Found</h1>');
  }
}

const server = http.createServer((req, res) => {
  res.req = req;

  let url;
  try {
    url = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    res.writeHead(400, SECURITY_HEADERS);
    res.end('Bad request');
    return;
  }

  if (url.startsWith('/api/')) {
    serveMockApi(req, res, req.url);
    return;
  }

  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { 'Allow': 'GET, HEAD', ...SECURITY_HEADERS });
    res.end('Method not allowed');
    return;
  }

  if (url.includes('\0')) {
    res.writeHead(400, SECURITY_HEADERS);
    res.end('Bad request');
    return;
  }

  const resolved = path.resolve(PUBLIC, `.${url.endsWith('/') ? url + 'index.html' : url}`);

  const isDirectory = fs.existsSync(resolved) && fs.statSync(resolved).isDirectory();
  const filePath = isDirectory ? path.join(resolved, 'index.html') : resolved;

  if (!filePath.startsWith(`${PUBLIC}${path.sep}`)) {
    serve404(res);
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveFile(res, filePath, 200);
  } else if (url.includes('.')) {
    serve404(res);
  } else {
    const spaPath = path.join(PUBLIC, 'spa.html');
    if (fs.existsSync(spaPath)) {
      serveFile(res, spaPath, 200);
    } else {
      serve404(res);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
