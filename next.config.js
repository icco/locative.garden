const remarkGfm = require('remark-gfm');
const rehypeSlug = require('rehype-slug');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

module.exports = withMDX({
  // Prefer loading of ES Modules over CommonJS
  experimental: {esmExternals: true},
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})
