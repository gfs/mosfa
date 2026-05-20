# MOSFA — Museum of Shrimp-Folk Art

This repository contains the website for **mosfa.net**, built with Astro and deployed
to GitHub Pages.

## Stack

- Astro static site
- Metadata-driven content model for artworks in YAML
- Auto-generated sitemap via `@astrojs/sitemap`
- GitHub Actions deployment to GitHub Pages

## Routes

- `/` homepage with featured works
- `/gallery/` full gallery
- `/artworks/[slug]/` per-piece detail pages
- `/eras/` and `/eras/[era]/` era listings
- `/categories/` and `/categories/[category]/` category listings

All routes are generated from artwork metadata.

## Local development

```bash
npm install
npm run dev
```

## Add a new artwork

1. Add the image file in `public/images/artworks/`.
2. Add a new record in `src/data/artworks.yaml`.
3. Fill all metadata fields:
   - `title`
   - `slug`
   - `artistReference`
   - `sourceWork`
   - `yearOrPeriod`
   - `era`
   - `categories` (array)
   - `image` (public path, e.g. `/images/artworks/my-piece.png`)
   - `imageAlt`
   - `summary`
   - `description` (used on detail pages)
   - `featured` (`true`/`false`)
   - `featuredRank` (number, optional)
   - `published` (`true`/`false`)

The homepage, gallery, era pages, category pages, and detail page are created automatically.

## GitHub Pages deployment

The workflow lives at `.github/workflows/deploy.yml` and runs on pushes to `main`.

Default repository variables:

- `SITE_URL` defaults to `https://gfs.github.io`
- `BASE_PATH` defaults to `/mosfa`

If you move to a custom domain:

1. Set `SITE_URL` to your domain (for example `https://mosfa.net`).
2. Set `BASE_PATH` to `/`.
3. Add `public/CNAME` with your domain value (for example `mosfa.net`).
