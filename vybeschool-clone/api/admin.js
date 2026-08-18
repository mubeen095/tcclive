const { sql, json, getSessionMember } = require('./_db');

module.exports = async function (req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' });
  const member = await getSessionMember(req);
  if (!member) return json(res, 401, { error: 'Not signed in' });
  if (member.role !== 'admin') return json(res, 403, { error: 'Admin only' });

  const { query } = req;
  const scope = String(query.scope || 'submissions');
  try {
    if (scope === 'members') {
      const { rows } = await sql`SELECT id, name, email, role, created_at FROM members ORDER BY created_at DESC`;
      return json(res, 200, { members: rows });
    }
    const { rows } = await sql`SELECT id, form_type, email, payload, created_at FROM submissions ORDER BY created_at DESC LIMIT 500`;
    return json(res, 200, { submissions: rows });
  } catch (e) {
    return json(res, 500, { error: 'Failed to load data' });
  }
};