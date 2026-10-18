# Roadmap

Benchmark: https://bonedry.com/indianapolis/ (Bone Dry Roofing). It is a mature multi-location site. The notes below pull the pieces worth copying and skip the ones that only make sense at their scale.

## Phase 0: MVP (this repo, now)

- [x] Single-page landing: hero with estimate form, services, why us, process, service area, FAQ, closing CTA, footer
- [x] Thank-you, privacy, and 404 pages
- [x] Netlify Forms lead capture with email notification
- [x] Supabase `leads` table mirror
- [x] LocalBusiness and FAQ structured data, canonical and Open Graph tags
- [ ] Real photos (replace the empty hero area and add a projects gallery; Wes supplies job photos)
- [ ] Google Business Profile link and review count once available

## Phase 1: Trust and conversion

- Reviews section fed by Google reviews (start with 3 to 5 quoted reviews in `site.ts`)
- Before/after project gallery (Indianapolis, Greenwood, Avon jobs from the current site)
- Financing page or section with the actual lender and terms
- Storm damage / insurance claims page (Bone Dry has a dedicated flow for this; it converts well in Indiana hail season)
- Click-to-call tracking and form analytics (Netlify Analytics or a lightweight privacy-friendly tool)

## Phase 2: Service and city pages (SEO)

Bone Dry's structure to borrow, scaled down:

- `/roofing/` with sub-sections or pages: replacement, repair, inspection, storm damage
- `/siding/`
- `/windows-and-doors/`
- `/service-areas/<city>/` for Greenwood, Avon, Plainfield, Brownsburg, Carmel, Fishers, Franklin (one template, data-driven from `site.ts`)
- Blog or "resources" for seasonal content (hail season prep, when to replace a roof)

## Phase 3: Operations

- Lead status workflow in Supabase (`status` column already exists: new, contacted, quoted, won, lost, spam)
- Simple password-protected lead dashboard page, or just use the Supabase table editor
- Online bill pay link (the current GoDaddy site has a placeholder for this)
- Careers page

## Branding

See `docs/BRANDING.md`. The site's colors and fonts are placeholders in `src/styles/global.css` and should be replaced once the guidelines exist.
