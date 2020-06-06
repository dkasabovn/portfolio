npm run generate
cd dist
git init
git remote add final git@github.com:dkasabovn/dkasabovn.github.io.git
git add -A
git commit -m $1
git push -f final master