# One-time setup checklist

Everything below is done by Wes under his own accounts (wesleysanders98@gmail.com). Free tiers are enough for this site at launch.

## 1. GitHub (code)

Status 2026-10-18: done. Account `wesleysanders98`, repo https://github.com/wesleysanders98/primeview-exteriors, `main` pushed. `ryanrominger` is a collaborator with write access (remove once Wes no longer needs help). The repo should be **public** so Netlify's free plan builds every commit (see section 2).

## 2. Netlify (hosting, builds, form email)

Status 2026-10-18: account created (team "Prime View Exteriors", free Starter plan), repo connected, project renamed to `primeviewexteriors`, production visibility set to Public, form detection enabled. Live at https://primeviewexteriors.netlify.app.

Gotchas we hit:
- New Netlify projects default to **Private visibility**, which returns a 401 login page to the public. Project configuration > General > Visitor access > Edit visibility > Public.
- On the free plan, a **private GitHub repo only builds commits pushed by the account owner**. Anyone else's push is blocked with "Unrecognized Git contributor". Keep the repo public (fine for a marketing site) or make every commit from Wes's GitHub account.

Done 2026-10-18: the `estimate` form is registered, an email notification goes to `wesleysanders98@gmail.com` on every submission, both Supabase environment variables are set, and the Powered by Netlify badge is off.

## 3. Supabase (lead database)

Status 2026-10-18: account created (email signup in Chrome), organization "Prime View Exteriors" on the Free plan, project `primeview-exteriors` in East US (Ohio) with automatic RLS enabled. The database password is in Wes's password manager only.

Done 2026-10-18: the leads migration was run in the SQL Editor, and Netlify has `SUPABASE_URL` plus `SUPABASE_SERVICE_ROLE_KEY` (the value is the new-style `sb_secret_...` key from Project Settings > API Keys > Secret keys, which supabase-js accepts in place of the legacy service_role JWT).

If the key ever needs rotating: Supabase > Project Settings > API Keys > New secret key, paste it into the Netlify variable, delete the old key, redeploy.

## 4. Cloudflare (DNS, waiting on domain control)

Status 2026-10-18: account created. `primeviewexteriors.com` has been added as a pending zone on the Free plan and Cloudflare imported the existing records (2 A, 8 CNAME, 3 MX, 2 SRV, 3 TXT). The domain is registered at GoDaddy (expires 2026-11-17) with GoDaddy nameservers and currently points at the GoDaddy Website Builder site.

Important: the domain also carries business email. MX records point at GoDaddy's Microsoft 365 / Proofpoint mail (`mx1-usg2.ppe-hosted.com` and friends) and there is an SPF TXT record. Those were imported into Cloudflare, so switching nameservers should not interrupt mail, but confirm mail still works right after the switch.

When the GoDaddy login is in hand:
1. At GoDaddy > DNS > Nameservers, replace `ns03.domaincontrol.com` and `ns04.domaincontrol.com` with:
   - `bill.ns.cloudflare.com`
   - `sydney.ns.cloudflare.com`
2. Wait for Cloudflare to show the zone as Active (minutes to a few hours).
3. In Netlify: Domain management > Add a domain > `primeviewexteriors.com`. Netlify lists the records it wants.
4. In Cloudflare DNS, delete the two GoDaddy `A` records for the apex and the `www` CNAME, then add Netlify's records (apex A record `75.2.60.5` or the ALIAS/CNAME Netlify shows, and `www` CNAME to `primeviewexteriors.netlify.app`). Set them to **DNS only** (grey cloud) until Netlify issues the SSL certificate; proxying can be turned on afterwards.
5. Leave MX, TXT, SRV and other CNAME records alone.
6. Update `url` in `src/data/site.ts` to `https://primeviewexteriors.com` and push.

## 5. Claude (ongoing management)

Wes creates his own Claude subscription, installs Claude Code, and pastes the handoff prompt from the email Ryan sent. That prompt points at this repo and `docs/ROADMAP.md`.
