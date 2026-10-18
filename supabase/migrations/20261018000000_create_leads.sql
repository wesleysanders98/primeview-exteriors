-- Leads captured by the website contact form.
-- Written by the Netlify function netlify/functions/submission-created.mts
-- using the service role key. Row Level Security is enabled with no policies,
-- so the anon/publishable key cannot read or write this table from a browser.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  submitted_at timestamptz,
  netlify_submission_id text unique,
  form_name text not null default 'estimate',
  name text,
  phone text,
  email text,
  zip text,
  service text,
  message text,
  consent boolean not null default false,
  referrer text,
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'won', 'lost', 'spam')),
  notes text,
  raw jsonb
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

comment on table public.leads is 'Website estimate-request leads mirrored from Netlify Forms.';
