# Repository Instructions

## Mandatory Task Isolation

At the start of every newly dispatched Codex task in this repository, run:

```sh
./scripts/codex-task-start.sh --new-task
```

Do this before reading broadly, editing files, generating assets, running formatters,
or starting a dev server. This is especially important for remote and mobile
dispatch, where the task may start on `main`, a detached `HEAD`, or a reused
checkout without an already-created branch.

The task branch is the workspace boundary. Do not perform deliverable work on
`main`, `master`, `trunk`, `develop`, `dev`, or detached `HEAD`.

Fresh task branches start from `main` by default. Set `CODEX_TASK_BASE_REF` only
when the user explicitly asks to base work on another ref.

If the script refuses to create a task branch because the worktree is dirty, stop
and report the dirty files instead of continuing. Starting a new task on top of
uncommitted changes from another task will mix workflows.

Do not run concurrent Codex tasks in the same filesystem checkout. Branches
separate history, but only separate worktrees or sessions separate simultaneous
file edits.

For follow-up messages that are clearly continuing the same task, stay on the
existing task branch. If there is any ambiguity, create a fresh task branch from a
clean state or ask the user which branch/worktree should own the work.

Use the repo-local setup hook in `.codex/environments/environment.toml`; it also
creates a task branch automatically when the environment begins on a shared branch
or detached `HEAD`.

## Image Generation

When generating images, artwork, or visual assets, use the `imagegen` skill so the
result is produced as a high-quality raster image. Do not substitute hand-authored
SVG, HTML/CSS, canvas, or placeholder graphics unless the user specifically asks
for SVG.
