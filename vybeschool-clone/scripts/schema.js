const { sql } = require('@vercel/postgres');

async function main() {
  console.log('Creating tables…');
  await sql`
    CREATE TABLE IF NOT EXISTS members (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      passkey_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'member',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      member_id INT NOT NULL REFERENCES members(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      form_type TEXT NOT NULL,
      email TEXT,
      payload JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // promote the first admin: set your email below, run: ADMIN_EMAIL=you@x.com npm run db:setup
  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    await sql`UPDATE members SET role = 'admin' WHERE email = ${adminEmail.trim().toLowerCase()}`;
    console.log(`Promoted ${adminEmail} to admin (if the account exists).`);
  }
  console.log('Done. Tables ready: members, sessions, submissions.');
}

main().catch((err) => {
  console.error('Schema setup failed:', err.message);
  process.exit(1);
});