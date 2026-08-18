# The Coding Company — Vercel + Postgres Setup

## What this project has

- **Static site** in `www.vybeschool.com/` (SPA shell + growthx-style pages).
- **Serverless API** in `api/` (Node, `@vercel/postgres`):
  - `/api/register`, `/api/login`, `/api/logout`, `/api/me` — members auth (scrypt passkey, session cookie).
  - `/api/forms` — stores form submissions (become-a-member, 100-club-apply, bootcamps, gigs, etc.).
  - `/api/admin` — admin-only view of members/submissions (`?scope=members|submissions`).
- **Static pages**: `/login`, `/member`, `/admin`, `/100-club-apply`.
- **`scripts/schema.js`** — creates the Postgres tables + optional admin promotion.

## 1. Connect Vercel Postgres

1. Push this repo to GitHub and import it into Vercel (`vercel.com` → Add New Project).
2. In Vercel: **Storage → Create Database → Postgres** (any name, e.g. `tcc-db`).
3. In the database's **Env Variables** tab, click *Connect Project* and select your project.
   This injects `POSTGRES_URL`, `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DATABASE` into the project.

No code changes needed — `api/_db.js` reads `POSTGRES_URL`.

## 2. Run the schema

```bash
npm install
npm run db:setup
```

Creates tables: `members`, `sessions`, `submissions`.

### Promote yourself to admin

```bash
ADMIN_EMAIL=you@example.com npm run db:setup
```

Re-running the schema is idempotent — it creates tables if missing and promotes the
`ADMIN_EMAIL` account to `role='admin'` if it exists. Run it again whenever a new
admin needs promoting.

## 3. Local development

```bash
npm run dev        # or: node server.js  → http://localhost:3000
```

`server.js` includes an in-memory mock API (`/api/*`) so forms, signup, login, and the
admin dashboard all work locally **without** a database.

To make a local account an admin, start the server with:
```bash
MOCK_ADMIN_EMAIL=you@example.com node server.js
```

## 4. Deploy

Push to the repo / deploy in Vercel. `vercel.json` rewrites:
- `/become-a-member`, `/bootcamps`, `/bootcamps-loading`, `/100-club-apply`,
  `/login`, `/member`, `/admin` → their static pages
- `/api/(.*)` → serverless functions
- everything else → `spa.html` (SPA fallback)

## 5. Notes

- Passkeys are hashed with scrypt (`salt:hash` format) — never stored in plaintext.
- Session cookie: `tcc_session`, HttpOnly, 30-day expiry.
- The SPA bundle's old `/login` route now redirects to the static `/login` page.
- All Google Apps Script form URLs were removed; every form now posts to `/api/forms`.
