-- Run once in the Supabase SQL Editor. Keep the service role key server-side only.
create table if not exists public.appointment_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  preferred_date date not null,
  service text not null,
  message text,
  status text not null default 'pending' check (status in ('pending', 'contacted', 'closed'))
);

alter table public.appointment_requests enable row level security;
revoke all on public.appointment_requests from anon, authenticated;
grant insert on public.appointment_requests to service_role;
-- No public read or write policies. The server route uses its private service role key.
