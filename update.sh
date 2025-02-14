#! /bin/zsh

set -ex

rm -rf package-lock.json dist node_modules .next .contentlayer

yarn 
yarn upgrade 
git add package* yarn.lock
git diff --quiet --staged || git commit -m 'chore(deps): yarn upgrade'

yarn run lint 
git add pages components
git diff --quiet --staged || git commit -m 'chore: lint'

yarn run build

git add public
git diff --quiet --staged || git commit -m 'chore: update build artifacts'

./wordcount.sh
git add wordcount.txt
git diff --quiet --staged || git commit -m 'chore: update wordcount'

git push -u
