export default {
  projectLink: 'https://github.com/icco/locative.garden', // GitHub link in the navbar
  docsRepositoryBase: 'https://locative.garden', // base URL for the docs repository
  titleSuffix: ' – locative.garden',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © Nat Welch.`,
  logo: (
    <>
      <svg>...</svg>
      <span>TBD</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="locative.garden: A collection of short stories about art, nature, technology and location." />
      <meta name="og:title" content="locative.garden" />
    </>
  ),
}
