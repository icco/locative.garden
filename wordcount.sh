#! /bin/zsh

for i in $(ls ./pages/stories/*.mdx); do echo $i; cat $i | wordcount; done | tee wordcount.txt
