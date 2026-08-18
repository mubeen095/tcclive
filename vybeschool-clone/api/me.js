const { json, getSessionMember } = require('./_db');

module.exports = async function (req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' });
  const member = await getSessionMember(req);
  if (!member) return json(res, 401, { error: 'Not signed in' });
  return json(res, 200, { member });
};