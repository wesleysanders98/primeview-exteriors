# One-time setup checklist

Everything below is done by Wes under his own accounts (wesleysanders98@gmail.com). Free tiers are enough for this site at launch.

## 1. GitHub (code)

1. Create the account at https://github.com/signup (free plan).
2. Create a new empty repository named `primeview-exteriors` (private is fine). Do not add a README; the code already exists locally.
3. Push this folder to it:

```bash
git remote add origin https://github.com/<wes-username>/primeview-exteriors.git
git push -u origin main
```

## 2. Netlify (hosting, builds, form email)

1. Sign up at https://app.netlify.com/signup using "Sign up with GitHub" (free Starter plan).
2. Add new project > Import an existing project > GitHub > pick `primeview-exteriors`.
   Build command `npm run build`, publish directory `dist` (already in `netlify.toml`).
3. After the first deploy, Project configuration > Project details > Change project name to `primeviewexteriors` so the URL is `https://primeviewexteriors.netlify.app`.
4. Forms > enable form detection, then redeploy so Netlify registers the `estimate` form.
5. Forms > Form notifications > Add notification > Email notification > form `estimate`, email `wesleysanders98@gmail.com`.
6. Submit a test lead on the live site and confirm the email arrives.

## 3. Supabase (lead database)

1. Sign up at https://supabase.com/dashboard/sign-up with GitHub (free plan).
2. New project: name `primeview-exteriors`, region US East (Ohio) or closest to Indianapolis. Save the database password somewhere safe.
3. SQL Editor > paste the contents of `supabase/migrations/20261018000000_create_leads.sql` > Run.
4. Project Settings > API: copy the Project URL and the `service_role` secret key.
5. In Netlify: Project configuration > Environment variables, add
   - `SUPABASE_URL` = the project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = the service_role key
   Then trigger a redeploy.
6. Submit another test lead and confirm a row appears in Table Editor > `leads`.

## 4. Cloudflare (DNS, later)

Only needed once primeviewexteriors.com is under our control (it is currently registered at GoDaddy with GoDaddy nameservers, expiring 2026-11-17).

1. Sign up at https://dash.cloudflare.com/sign-up (free plan).
2. Add a domain > `primeviewexteriors.com` > Free plan. Cloudflare imports the existing records.
3. At GoDaddy, replace the nameservers with the two Cloudflare gives you.
4. In Netlify: Domain management > Add a domain > `primeviewexteriors.com`. Netlify shows the records to create.
5. In Cloudflare DNS, add those records (an A or ALIAS/CNAME for the apex pointing at Netlify, and a CNAME for `www`). Set them to "DNS only" (grey cloud) so Netlify can issue the SSL certificate; proxying can be turned on afterwards.
6. Update `url` in `src/data/site.ts` to `https://primeviewexteriors.com` and push.

## 5. Claude (ongoing management)

Wes creates his own Claude subscription, installs Claude Code, and pastes the handoff prompt from the email Ryan sent. That prompt points at this repo and `docs/ROADMAP.md`.
