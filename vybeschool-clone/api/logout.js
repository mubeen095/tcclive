const { sql, json, getSessionToken, clearCookieHeader } = require('./_db');

module.exports = async function (req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const token = getSessionToken(req);
  if (token) {
    try { await sql`DELETE FROM sessions WHERE token = ${token}`; } catch (e) {}
  }
  clearCookieHeader(res);
  return json(res, 200, { ok: true });
};