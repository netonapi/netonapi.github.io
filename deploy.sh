#!/usr/bin/env bash
# 构建官网并发布到 netonapi/netonapi.github.io 的 main 分支（GitHub Pages 从 main 根目录直接发布，CNAME = netonapi.com）。
# 源码在同一仓库的 source 分支。用法：./deploy.sh
set -euo pipefail
cd "$(dirname "$0")"
REMOTE=${REMOTE:-git@github.com:netonapi/netonapi.github.io.git}
pnpm build
OUT=docs/.vitepress/dist
test -f "$OUT/CNAME" && test -f "$OUT/index.html"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
cp -a "$OUT/." "$TMP/"
cd "$TMP"
git init -q -b main
git add -A
git commit -qm "Publish site from source $(git -C "$OLDPWD" rev-parse --short HEAD)"
git push -f "$REMOTE" main
