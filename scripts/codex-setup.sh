#!/bin/sh
set -eu

script_dir="$(CDPATH= cd "$(dirname "$0")" && pwd)"
repo_root="$(CDPATH= cd "$script_dir/.." && pwd)"

cd "$repo_root"

git fetch --prune origin main
"$script_dir/codex-task-start.sh" --setup
npm ci
