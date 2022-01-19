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
    <main
      sx={{
        padding: 3,
        maxWidth: 768,
        mx: "auto",

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
        padding: 1,
        maxWidth: "auto",
      },
      }}
      {...props}
    ></main>
  )
}
