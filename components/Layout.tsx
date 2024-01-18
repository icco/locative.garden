import { Box } from "theme-ui"
import { JSX } from "theme-ui/jsx-runtime"

import Header from "./Header"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any): JSX.Element {
  return (
    <Box
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
      <header>
        <Box
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
        </Box>
      </header>
      <main>
        <Box
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
        />
      </main>
      <footer>
        <Box
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
          <Box sx={{ mx: "auto" }} />
          <Box sx={{ py: 2 }}>
            &copy; 2022 - 2024{" "}
            <a href="https://natwelch.com">Nathaniel &quot;Nat&quot; Welch</a>
          </Box>
        </Box>
      </footer>
    </Box>
  )
}
