# MoSFA — Museum of Shrimp-Folk Art

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

Project npm scripts set `ASTRO_TELEMETRY_DISABLED=1` explicitly. Keep that
environment variable on any new Astro script so Codex worktrees do not fail when
Astro tries to write telemetry state under a user Library path.

## Codex worktrees

Codex task isolation is enforced in two places:

- `.codex/environments/environment.toml` runs `scripts/codex-setup.sh`, which
  creates a `codex/...` branch automatically when setup begins from a shared
  branch or detached `HEAD`.
- `AGENTS.md` tells every newly dispatched agent to verify that setup already
  placed the checkout on an isolated task branch before doing deliverable work.

For mobile or remote dispatch, treat task isolation as mandatory startup work,
not a handoff step. A new task should begin by checking the current branch:

```bash
git status --short --branch
```

If setup already placed the checkout on a non-shared `codex/...` branch, continue
there. Do not run `--new-task` again, because that creates an unnecessary second
task branch.

If a session is still on `main`, `master`, `trunk`, `develop`, `dev`, or detached
`HEAD`, create the task branch manually before doing deliverable work:

```bash
./scripts/codex-task-start.sh --new-task
```

If that command reports a dirty worktree, stop and resolve the existing changes
instead of layering a new task on top of them.

Fresh task branches are based on `main` by default. Set `CODEX_TASK_BASE_REF` in
the environment only when a task should intentionally start from another ref.
These helper scripts are tailored to this repository’s branch layout and workflows.

Do not run simultaneous Codex tasks in the same checkout. Branches separate git
history, but parallel agents need separate worktrees or sessions to avoid
file-level interference.

For any task with a deliverable, assume the normal handoff is user review through
a pull request unless the user explicitly asks for a different workflow. Commit
the deliverable on the task branch, push the branch, and open a PR against
`main`. The PR should summarize the change, call out validation performed, and
note any known follow-up or unverified behavior.

Use the repo-local Codex environment at `.codex/environments/environment.toml`
for deterministic setup.

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
