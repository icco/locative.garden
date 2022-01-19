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
          maxWidth: "auto",
          width: "100%",
        },
      }}
      {...props}
    ></main>
  )
}
