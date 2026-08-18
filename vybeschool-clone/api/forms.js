const { sql, json, readJson } = require('./_db');

const ALLOWED = ['become-a-member', '100-club-apply', 'vybeclub-contact', 'bootcamps', 'gigs', 'gigs-apply', 'gigs-hire', 'contact'];

module.exports = async function (req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  let body;
  try { body = await readJson(req); } catch (e) { return json(res, 400, { error: 'Invalid JSON' }); }

  const formType = String(body.form_type || body.source || 'contact').trim();
  if (!ALLOWED.includes(formType)) {
    return json(res, 400, { error: 'Unknown form type' });
  }

  const email = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').trim();
  const payload = Object.fromEntries(
    Object.entries(body).filter(([k]) => !['form_type', 'sheetId'].includes(k))
  );

  try {
    const { rows } = await sql`
      INSERT INTO submissions (form_type, email, payload)
      VALUES (${formType}, ${email || null}, ${JSON.stringify(payload)}::jsonb)
      RETURNING id, form_type, created_at
    `;
    return json(res, 201, { id: rows[0].id, form_type: rows[0].form_type, ok: true });
  } catch (e) {
    return json(res, 500, { error: 'Failed to store submission' });
  }
};