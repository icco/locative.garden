import { ClassAttributes, HTMLAttributes } from "react"
import { SxProp } from "theme-ui"
import { JSX } from "theme-ui/jsx-runtime"

import Header from "./Header"

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
        display: "flex",
        flexDirection: "column",
        minHeight: 256,

        a: {
          color: "link",
          textDecoration: "none",
          ":link,:any-link,:visited": { color: "link" },
          ":focus,:active,:hover": {
            color: "secondary",
            textDecoration: "underline",
          },
        },
      }}
    >
      <header
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          variant: "styles.footer",
          width: "100%",

          "@media print": {
            display: "none",
          },
        }}
      >
        <Header />
      </header>
      <main
        sx={{
          maxWidth: 768,
          mx: [0, "auto"],
          width: "100%",
          flex: "1 1 auto",

          "@media print": {
            maxWidth: "auto",
            width: "100%",
          },
        }}
        {...props}
      ></main>
      <footer
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          p: [0, 2],
          mt: 5,
          variant: "styles.footer",
          width: "100%",

          "@media print": {
            display: "none",
          },
        }}
      >
        <div sx={{ mx: "auto" }} />
        <div sx={{ py: 2 }}>
          &copy; 2022{" "}
          <a href="https://natwelch.com">Nathaniel &quot;Nat&quot; Welch</a>
        </div>
      </footer>
    </div>
  )
}
