const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [import("remark-gfm")],
    rehypePlugins: [import("rehype-slug")],
  },
});

module.exports = withMDX({
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
});
