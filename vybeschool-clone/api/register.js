const crypto = require('crypto');
const { sql, json, readJson, cookieHeader } = require('./_db');

const hashPass = (pass, salt) => crypto.scryptSync(String(pass), salt, 64).toString('hex');
const genSalt = () => crypto.randomBytes(16).toString('hex');

module.exports = async function (req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  let body;
  try { body = await readJson(req); } catch (e) { return json(res, 400, { error: 'Invalid JSON' }); }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const passkey = String(body.passkey || '');

  if (!name || !email || !passkey) return json(res, 400, { error: 'name, email and passkey are required' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(res, 400, { error: 'Invalid email' });
  if (passkey.length < 6) return json(res, 400, { error: 'Passkey must be at least 6 characters' });

  try {
    const { rows: existing } = await sql`SELECT id FROM members WHERE email = ${email}`;
    if (existing.length) return json(res, 409, { error: 'An account with that email already exists' });

    const salt = genSalt();
    const passkey_hash = hashPass(passkey, salt);
    const { rows } = await sql`
      INSERT INTO members (name, email, passkey_hash)
      VALUES (${name}, ${email}, ${salt + ':' + passkey_hash})
      RETURNING id, name, email, role
    `;
    const member = rows[0];

    const token = crypto.randomBytes(32).toString('hex');
    await sql`INSERT INTO sessions (token, member_id, expires_at) VALUES (${token}, ${member.id}, NOW() + interval '30 days')`;
    cookieHeader(res, token, 30);

    return json(res, 201, { member });
  } catch (e) {
    return json(res, 500, { error: 'Failed to create account' });
  }
};