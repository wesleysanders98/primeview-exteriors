# Handoff prompt for Wes's own Claude Code session

Paste everything below the line as the first message in a new Claude Code session opened in this repo (or anywhere; it will clone the repo).

---

I am Wes (Wesley Sanders, wesleysanders98@gmail.com), owner of Prime View Exteriors, a licensed and insured roofing, siding, and window replacement company in Indianapolis (phone 317-908-2986, 7116 Oldham Dr, Indianapolis, IN 46221, serving Central Indiana). My colleague Ryan used Claude Code on 2026-10-18 to scaffold a new website for the business and set up the accounts with me, and I am taking over management with my own Claude account. Continue where that session left off.

Goal: a fast landing page that funnels homeowners to a free-estimate contact form, with every lead emailed to wesleysanders98@gmail.com and logged in Supabase. Stack: Astro plus Tailwind, deployed on Netlify from GitHub, Supabase for the leads table, Cloudflare for DNS. All four accounts are mine (wesleysanders98@gmail.com, GitHub username wesleysanders98), on free tiers.

Repo: https://github.com/wesleysanders98/primeview-exteriors (public). If it is not on this machine, clone it first. Then read, in this order, before doing anything else: README.md, docs/SETUP.md, docs/ROADMAP.md, docs/BRANDING.md.

State as of 2026-10-18, all verified working:
1. Site is live at https://primeviewexteriors.netlify.app (Netlify project `primeviewexteriors`, team "Prime View Exteriors", auto-deploys from main).
2. The estimate form is registered with Netlify Forms. Each submission emails wesleysanders98@gmail.com and the netlify/functions/submission-created.mts function copies it into the Supabase `leads` table (project `primeview-exteriors`, East US Ohio). A test lead named "Test Lead (Ryan)" is in the table and can be deleted or set to status spam.
3. Cloudflare holds primeviewexteriors.com as a pending zone (nameservers bill.ns.cloudflare.com and sydney.ns.cloudflare.com). The domain is still registered at GoDaddy with GoDaddy nameservers and I do not control it yet. The old site there was built by someone else. The domain also carries business email on GoDaddy's Microsoft 365, so mail records must stay intact when DNS moves.
4. Brand colors and fonts are placeholders in src/styles/global.css. There are no real photos or reviews yet.

Next actions, in order:
a. If a Linear connector is available, create a Linear issue in the "Website launch" project (Website team, key WEB) for each Phase 1 item in docs/ROADMAP.md, with a short description and acceptance criteria, and work from those issues from then on: set an issue In Progress when you start it and Done when the change is deployed.
b. Replace placeholder content with real material: job photos, three to five Google review quotes, and the actual financing option. Business facts live in src/data/site.ts.
c. Branding: use Claude Design with the prompt in docs/BRANDING.md to create brand guidelines, then apply the palette and fonts in src/styles/global.css and the logo in src/components/Header.astro and Footer.astro so the site is canonical with the guidelines.
d. Continue through Phase 1 of docs/ROADMAP.md (reviews section, project gallery, financing, storm damage and insurance claims section).
e. When I gain control of primeviewexteriors.com, follow section 4 of docs/SETUP.md (nameservers at GoDaddy, Netlify custom domain, DNS records, keep MX and TXT records), then change url in src/data/site.ts and push.
f. Once the site is stable, remove ryanrominger as a collaborator on the GitHub repo.

Things only I can do, so ask me instead of attempting them: entering passwords or signing in, approving OAuth prompts, pasting API keys or secrets into any dashboard, anything inside GoDaddy, and sending email.

Working rules: never use em dashes in anything you write. Commit in small steps and push to main; Netlify deploys automatically. Never commit the Supabase secret key (.env is gitignored). Run npm run build before pushing. Keep the GitHub repo public, because Netlify's free plan only builds the owner's commits on private repos.
