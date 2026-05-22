#!/bin/sh
set -eu

usage() {
  cat <<'USAGE'
Usage: scripts/codex-task-start.sh [--setup|--new-task]

  --setup     Create a task branch only when starting from a shared branch or detached HEAD.
  --new-task  Create a fresh task branch from CODEX_TASK_BASE_REF or main; fail if dirty.
USAGE
}

mode="setup"
while [ "$#" -gt 0 ]; do
  case "$1" in
    --setup)
      mode="setup"
      ;;
    --new-task)
      mode="new-task"
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 64
      ;;
  esac
  shift
done

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$repo_root" ]; then
  echo "codex-task-start: not inside a git repository" >&2
  exit 1
fi

cd "$repo_root"

current_branch="$(git branch --show-current 2>/dev/null || true)"
short_sha="$(git rev-parse --short HEAD)"

is_shared_branch() {
  case "$1" in
    main|master|trunk|develop|dev)
      return 0
      ;;
    *)
      return 1
      ;;
  esac
}

has_dirty_worktree() {
  test -n "$(git status --porcelain --untracked-files=all)"
}

task_slug() {
  raw_name="${CODEX_TASK_BRANCH:-${CODEX_TASK_SLUG:-${CODEX_TASK_TITLE:-${CODEX_TASK_ID:-task}}}}"
  slug="$(
    printf '%s' "$raw_name" |
      tr '[:upper:]' '[:lower:]' |
      tr -c 'a-z0-9._-' '-' |
      sed 's/-\{1,\}/-/g; s/^-//; s/-$//; s/^\.*//; s/\.*$//' |
      cut -c 1-40
  )"

  if [ -z "$slug" ]; then
    slug="task"
  fi

  printf '%s' "$slug"
}

create_task_branch() {
  start_point="${1:-HEAD}"
  slug="$(task_slug)"
  timestamp="$(date -u +%Y%m%d%H%M%S)"
  base_branch="codex/${slug}-${timestamp}-${short_sha}"
  branch="$base_branch"
  suffix=2

  while git show-ref --verify --quiet "refs/heads/$branch"; do
    branch="${base_branch}-${suffix}"
    suffix=$((suffix + 1))
  done

  git switch -c "$branch" "$start_point"
  echo "codex-task-start: created task branch '$branch' from '$start_point'"
}

new_task_start_point() {
  if [ -n "${CODEX_TASK_BASE_REF:-}" ]; then
    printf '%s' "$CODEX_TASK_BASE_REF"
    return 0
  fi

  if git rev-parse --verify --quiet "origin/main^{commit}" >/dev/null; then
    printf '%s' "origin/main"
    return 0
  fi

  if git rev-parse --verify --quiet "main^{commit}" >/dev/null; then
    printf '%s' "main"
    return 0
  fi

  printf '%s' "HEAD"
}

if [ "$mode" = "new-task" ]; then
  if has_dirty_worktree; then
    echo "codex-task-start: refusing to start a new task from a dirty worktree" >&2
    git status --short >&2
    exit 2
  fi

  create_task_branch "$(new_task_start_point)"
  exit 0
fi

if [ -z "$current_branch" ] || is_shared_branch "$current_branch"; then
  if has_dirty_worktree; then
    echo "codex-task-start: refusing to create a task branch from a dirty shared/detached checkout" >&2
    git status --short >&2
    exit 2
  fi

  create_task_branch "HEAD"
else
  echo "codex-task-start: using existing branch '$current_branch'"
fi
