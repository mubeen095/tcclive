const crypto = require('crypto');
const { sql, json, readJson, cookieHeader } = require('./_db');

const verify = (pass, stored) => {
  const [salt, hash] = String(stored).split(':');
  if (!salt || !hash) return false;
  const candidate = crypto.scryptSync(String(pass), salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(candidate, 'hex'));
};

module.exports = async function (req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  let body;
  try { body = await readJson(req); } catch (e) { return json(res, 400, { error: 'Invalid JSON' }); }

  const email = String(body.email || '').trim().toLowerCase();
  const passkey = String(body.passkey || '');

  if (!email || !passkey) return json(res, 400, { error: 'email and passkey are required' });

  try {
    const { rows } = await sql`SELECT * FROM members WHERE email = ${email}`;
    const member = rows[0];
    if (!member || !verify(passkey, member.passkey_hash)) {
      return json(res, 401, { error: 'Invalid email or passkey' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    await sql`INSERT INTO sessions (token, member_id, expires_at) VALUES (${token}, ${member.id}, NOW() + interval '30 days')`;
    cookieHeader(res, token, 30);

    return json(res, 200, { member: { id: member.id, name: member.name, email: member.email, role: member.role } });
  } catch (e) {
    return json(res, 500, { error: 'Failed to sign in' });
  }
};