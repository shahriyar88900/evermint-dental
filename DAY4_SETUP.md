# Day 4: Appointment request storage

1. Create a Supabase Free project in the Supabase dashboard. Wait for the database to finish provisioning.
2. Open **SQL Editor** and run `supabase/appointment_requests.sql`. Check that `public.appointment_requests` appears in **Table Editor** with RLS enabled.
3. In **Project Settings → API Keys**, create or copy a server-side **secret key** (`sb_secret_...`). Copy the project URL from **Project Settings → Data API**. Keep the key private. Do not paste it in chats, commit it, or use a `NEXT_PUBLIC_` prefix.
4. On your own computer, create `.env.local` in the project root with `SUPABASE_URL` and `SUPABASE_SECRET_KEY`. This file is ignored by Git. Restart `npm run dev` after editing it.
5. In **Vercel → Project → Settings → Environment Variables**, add the same two variables for Production. Redeploy after saving. Never expose the key in client-side code.
6. Submit a clearly labeled dummy request through the local form. Check for the request in Supabase Table Editor, then delete that dummy row. Test an invalid date and confirm there is no success message. Test a temporary invalid server configuration and confirm the form retains the fields and shows an error.
7. After deployment, repeat one dummy request on the live URL, verify one row was created, and delete it. Confirm the page calls it a request rather than a confirmed booking.

The database is private to this server route. Anyone can submit requests to a public form, so add abuse controls (for example rate limiting or CAPTCHA) before accepting real customer traffic. Use clinic-owned contact details, approved copy, a privacy policy, controlled staff access and an appropriate retention and backup plan before using patient data. The current sample content is a demo and should not be represented as a real practice.
