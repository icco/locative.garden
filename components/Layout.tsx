/** @jsxImportSource theme-ui */
import Theme from "components/Theme"
import { ThemeProvider } from "theme-ui"

// See https://theme-ui.com/guides/mdx-layout-components
export default function Layout(props) {
  return (
    <ThemeProvider theme={Theme}>
      <div {...props} />
    </ThemeProvider>
  )
}
