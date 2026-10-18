# Prime View Exteriors website

Marketing site and lead-capture form for Prime View Exteriors, an Indianapolis roofing, siding, and window contractor.

Live (interim): https://primeviewexteriors.netlify.app
Primary domain (once DNS is moved): https://primeviewexteriors.com

## Stack

| Layer | Tool | Why |
| --- | --- | --- |
| Site | [Astro](https://astro.build) + Tailwind CSS v4 | Static, fast, SEO-friendly landing page |
| Hosting / CI | Netlify | Builds on every push to `main`, serves the site, collects form submissions |
| Lead email | Netlify Forms notifications | Emails every estimate request to the inbox set in the Netlify dashboard |
| Lead log | Supabase (Postgres) | `leads` table, filled by `netlify/functions/submission-created.mts` |
| DNS | Cloudflare | Points `primeviewexteriors.com` at Netlify once the domain is under our control |
| Code | GitHub | Source of truth; Netlify deploys from it |

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` produces the production build in `dist/`.

## Where things live

- `src/data/site.ts`: every business detail (phone, address, services, FAQ, service cities). Edit here first.
- `src/styles/global.css`: brand colors and fonts as Tailwind theme tokens. Replace with the values from the branding guidelines when ready.
- `src/components/`: one file per section of the home page.
- `src/pages/`: `index` (home), `thank-you`, `privacy`, `404`.
- `netlify/functions/submission-created.mts`: copies each form submission into Supabase.
- `supabase/migrations/`: database schema. Apply with the Supabase SQL editor or `supabase db push`.
- `docs/`: setup checklist, roadmap, and branding brief.

## How a lead flows

1. Visitor submits the "Request My Free Estimate" form.
2. Netlify Forms stores the submission and emails the configured address.
3. Netlify runs `submission-created`, which inserts the lead into the Supabase `leads` table.
4. The visitor lands on `/thank-you`.

See `docs/SETUP.md` for the one-time configuration that makes steps 2 and 3 work.
