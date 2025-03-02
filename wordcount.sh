#! /bin/zsh

for i in $(ls ./stories/*.typ); do echo $i; cat $i | pandoc --lua-filter ./wordcount.lua; done | tee wordcount.txt
