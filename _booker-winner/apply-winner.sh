#!/usr/bin/env bash
# Book & Shores: one command to prep the 2026 Booker winner update.
# Usage: /workspace/bs/booker-winner/apply-winner.sh <slug> [--push]
#   slugs: end-of-everything | disappearers | black-bag | may-we-feed-the-king | things-we-never-say | john-of-john
# Builds branch bs/booker-winner-<slug> off the CURRENT origin/main (so it includes whatever merged
# since, e.g. PR #26), applies the edits with _booker-winner/apply_winner.py from branch
# bs/booker-winner-ready, commits, renders previews to /workspace/bs/booker-winner-<slug>*.png.
# With --push it also pushes the branch and opens a PR. It NEVER merges (AE approves every merge).
set -euo pipefail
SLUG="${1:?usage: apply-winner.sh <slug> [--push]}"; PUSH="${2:-}"
REPO=/workspace/waves; BR="bs/booker-winner-$SLUG"; W="/tmp/waves-winner-$SLUG-$RANDOM"
cd "$REPO" && git fetch -q origin
git worktree add -q -b "$BR" "$W" origin/main
trap 'cd "$REPO"; git worktree remove --force "$W" 2>/dev/null || true' EXIT
cd "$W"
git show origin/bs/booker-winner-ready:_booker-winner/apply_winner.py > /tmp/apply_winner_$$.py
python3 /tmp/apply_winner_$$.py "$SLUG"; rm -f /tmp/apply_winner_$$.py
git add booker-2026-shortlist.html index.html
git commit -q -m "Booker 2026: winner is $SLUG (shortlist page banner + homepage teaser)"
G="google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars --virtual-time-budget=8000"
$G --window-size=1280,1900 --screenshot=/workspace/bs/booker-winner-$SLUG.png "file://$W/booker-2026-shortlist.html" 2>/dev/null
$G --window-size=390,1800 --screenshot=/workspace/bs/booker-winner-$SLUG-mobile.png "file://$W/booker-2026-shortlist.html" 2>/dev/null
echo "Previews: /workspace/bs/booker-winner-$SLUG.png and -mobile.png"
if [ "$PUSH" = "--push" ]; then
  git -c credential.helper= -c credential.helper="!/usr/local/bin/gh auth git-credential" push -q origin "$BR"
  /usr/local/bin/gh pr create --base main --head "$BR" --title "Booker 2026 winner: $SLUG (go live Nov 9)" \
    --body "Flips booker-2026-shortlist.html and the homepage Booker teaser to show the winner. Not merged; needs AE's approval."
else
  echo "Branch $BR committed locally. Re-run with --push (or push manually) to open the PR."
fi
