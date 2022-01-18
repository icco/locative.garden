/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import Theme from 'components/Theme'

// See https://theme-ui.com/guides/mdx-layout-components
export default (props) => (
  <ThemeProvider theme={Theme}>
    <div {...props} />
  </ThemeProvider>
)
