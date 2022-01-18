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
  return <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
}
