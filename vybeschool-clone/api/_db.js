const { sql } = require('@vercel/postgres');

const SESSION_COOKIE = 'tcc_session';
const SESSION_DAYS = 30;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function cookieHeader(res, token, maxAgeDays) {
  const maxAge = maxAgeDays * 24 * 60 * 60;
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`);
}

function clearCookieHeader(res) {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

function getSessionToken(req) {
  const cookie = req.headers.cookie || '';
  const m = cookie.match(new RegExp(`(?:^|;\\s*)${SESSION_COOKIE}=([^;]+)`));
  return m ? m[1] : null;
}

async function getSessionMember(req) {
  const token = getSessionToken(req);
  if (!token) return null;
  try {
    const { rows } = await sql`
      SELECT m.id, m.name, m.email, m.role
      FROM sessions s
      JOIN members m ON m.id = s.member_id
      WHERE s.token = ${token} AND s.expires_at > NOW()
    `;
    return rows[0] || null;
  } catch (e) {
    return null;
  }
}

module.exports = { sql, SESSION_COOKIE, SESSION_DAYS, json, readJson, cookieHeader, clearCookieHeader, getSessionToken, getSessionMember };

/* ─────────────────────────────────────────────
   SCHEMA — run once via `npm run db:setup`
   ─────────────────────────────────────────────
   members(id serial PK, name text, email text UNIQUE,
           passkey_hash text, role text DEFAULT 'member',
           created_at timestamptz DEFAULT now())
   sessions(token text PK, member_id int REFERENCES members(id),
            expires_at timestamptz)
   submissions(id serial PK, form_type text, email text,
               payload jsonb, created_at timestamptz DEFAULT now())
                                        ───────────────────────────── */