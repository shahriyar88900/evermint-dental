# Evermint Dental — portfolio demo

A responsive Next.js 16 dental website concept with a Supabase-backed **demo appointment request** form. Evermint Dental is fictional. Photos, review copy, services, and team profiles illustrate a layout; this repository is not a clinic website or patient portal.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The form needs a Supabase project with `supabase/appointment_requests.sql` applied, plus these server-side variables in `.env.local`:

```text
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=YOUR_SERVER_SECRET_KEY
```

Never commit the key or prefix it with `NEXT_PUBLIC_`. On Vercel, add both variables to the Production environment and redeploy. `npm run lint` and `npm run build` check the code.

## Demo constraints

- The public form accepts only fictional email addresses ending in `@example.invalid`. It records a request as `pending`; it never confirms a booking or sends an email.
- Vercel BotID checks form requests before they reach Supabase. In local development BotID lets requests through, and on Vercel browser challenges run automatically. Direct `curl` submissions are rejected in production. Keep the `/api/appointments` POST route listed in `BotIdClient` when changing this endpoint.
- The table has RLS enabled, no public policies, and INSERT permission only for the private server role. Staff access, notification workflows, and operational controls are not included.
- Before using this for a real clinic, replace all illustrative content with approved details and authentic consented reviews, implement clinic-specific privacy and retention practices, access controls, abuse protection, backups, and applicable legal requirements. Review the demo-only email restriction in the API route as part of that separate launch process.

See [DAY4_SETUP.md](DAY4_SETUP.md) for the database setup and test workflow.
