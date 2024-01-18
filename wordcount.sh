#! /bin/zsh

for i in $(ls ./pages/stories/*.mdx); do echo $i; cat $i | pandoc --lua-filter ./wordcount.lua; done | tee wordcount.txt
