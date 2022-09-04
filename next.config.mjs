// @ts-check

import withMDX from "@next/mdx"
import slug from "rehype-slug"
import gfm from "remark-gfm"

const mdxWrapper = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm],
    rehypePlugins: [slug],
  },
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = mdxWrapper({
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  swcMinify: true,
})

export default nextConfig
