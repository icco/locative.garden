#import "@preview/wonderous-book:0.1.1": book
#import "@preview/cmarker:0.1.2"

#show: book.with(
  title: [locative.garden],
  author: "Nat Welch",
  dedication: [for Melissa],
)

= Introduction

#cmarker.render(read("pages/stories/intro.md"))

