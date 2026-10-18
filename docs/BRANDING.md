# Branding brief (to be created with Claude Design)

Goal: a short brand guideline for Prime View Exteriors that the website, estimates, yard signs, and social posts all follow. The website reads its colors and fonts from `src/styles/global.css`, so once the guideline exists it is a ten-minute change to make the site canonical with it.

## What to produce

1. Logo: primary, one-color, and icon versions (SVG). The site currently uses a simple house-outline icon as a stand-in.
2. Color palette: one primary (currently a deep navy), one accent for buttons and highlights (currently amber), neutrals for text and backgrounds. Provide hex values.
3. Typography: one headline and one body typeface available on Google Fonts (currently Inter for both).
4. Voice: three or four adjectives and two example sentences. Current copy is plain, direct, and local ("done right", "no pressure", "we come to you").
5. Photography direction: real crews and real Indianapolis homes over stock imagery.

## Suggested Claude Design prompt

"Create brand guidelines for Prime View Exteriors, a licensed and insured roofing, siding, and window replacement company in Indianapolis, Indiana. The audience is homeowners in Central Indiana, often after storm damage. The brand should feel trustworthy, local, and straightforward, not flashy. Deliver a logo direction, a color palette with hex codes (one primary, one accent, neutrals), Google Fonts typography, voice guidelines with examples, and photography direction. The website at https://primeviewexteriors.netlify.app uses placeholder colors that will be replaced with this palette."

## Applying it to the site

- Colors: edit the `--color-brand-*` and `--color-accent-*` values in `src/styles/global.css`.
- Fonts: change the Google Fonts link in `src/layouts/Layout.astro` and `--font-sans` in `global.css`.
- Logo: drop SVGs in `public/` and update `src/components/Header.astro` and `Footer.astro`.
- Favicon: replace `public/favicon.svg`.
