import { ClassAttributes, HTMLAttributes } from "react"
import { SxProp } from "theme-ui"
import { JSX } from "theme-ui/jsx-runtime"

// See https://theme-ui.com/guides/mdx-layout-components
export default function Layout(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    SxProp
): JSX.Element {
  return (
<div
  sx={{
    display: 'flex',
    flexDirection: 'column',
    // set this to `minHeight: '100vh'` for full viewport height
    minHeight: 256,
  }}>
  <header
    sx={{
      width: '100%',
    }}>
    Header
  </header>
    <main
      sx={{
        maxWidth: 768,
        mx: "auto",
      width: '100%',
      flex: '1 1 auto',

        a: {
          color: "link",
          textDecoration: "none",
          ":link,:any-link,:visited": { color: "link" },
          ":focus,:active,:hover": {
            color: "secondary",
            textDecoration: "underline",
          },
        },

        "@media print": {
          maxWidth: "auto",
          width: "100%",
        },
      }}
      {...props}
    ></main>
  <footer
    sx={{
      width: '100%',
    }}>
    Footer
  </footer>
</div>
  )
}
