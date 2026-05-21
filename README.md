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
npm ci
npm run dev
```

This project targets Node 22. The package manager is pinned in `package.json`,
and `.node-version` is provided for local version managers.

## Codex worktrees

Codex local tasks may begin in detached worktrees and create a named branch later
during the commit or handoff step. Treat each worktree as an isolated task
workspace, and use the repo-local Codex environment at
`.codex/environments/environment.toml` for deterministic setup.

For parallel development, run the normal dev server unless another worktree is
already using the default Astro port:

```bash
npm run dev -- --port 4322
```

## Add a new artwork

1. Add the image file in `src/assets/images/artworks/`.
2. Add a new record in `src/data/artworks.yaml`.
3. Fill all metadata fields:
   - `title`
   - `slug`
   - `artistReference`
   - `sourceWork`
   - `yearOrPeriod`
   - `era`
   - `categories` (array)
   - `image` (asset path, e.g. `artworks/my-piece.png`)
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

- `SITE_URL` defaults to `https://mosfa.art`
- `BASE_PATH` defaults to `/`

If you move back to a repo subpath deployment:

1. Set `SITE_URL` to your domain (for example `https://mosfa.net`).
2. Set `BASE_PATH` to the repo path (for example `/mosfa`).
3. Add `public/CNAME` with your domain value (for example `mosfa.net`).
