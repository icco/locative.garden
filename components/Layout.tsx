/** @jsxImportSource theme-ui */
import Theme from "components/Theme"
import { ClassAttributes, HTMLAttributes } from "react"
import { SxProp, ThemeProvider } from "theme-ui"
import { JSX } from "theme-ui/jsx-runtime"

// See https://theme-ui.com/guides/mdx-layout-components
export default function Layout(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    SxProp
): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <main
        sx={{
          border: "1px solid",
          borderColor: "text",
          padding: 3,
          borderRadius: 1,
          maxWidth: 768,
          mx: "auto",
        }}
      >
        {props.children}
      </main>
    </ThemeProvider>
  )
}
