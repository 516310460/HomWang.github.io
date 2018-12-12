#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git config user.name "516310460"
git config user.email "516310460@gmail.com"

git add -A
git commit -m 'Updated documentation'
git push -f git@github.com:516310460/516310460.github.io master:gh-pages

cd -
