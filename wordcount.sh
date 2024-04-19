#! /bin/zsh

for i in $(ls ./pages/stories/*.md); do echo $i; cat $i | pandoc --lua-filter ./wordcount.lua; done | tee wordcount.txt
