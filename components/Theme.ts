import { Nord } from "@icco/react-common"
import { makeTheme } from "@theme-ui/css/utils"
import { toTheme } from "@theme-ui/typography"
import merge from "deepmerge"
import usWeb from "typography-theme-us-web-design-standards"

const typography = toTheme(usWeb)

export default makeTheme(
  merge(typography, {
    config: {
      initialColorModeName: "light",
      useColorSchemeMediaQuery: true,
    },

    colors: {
      text: "#000",
      background: "#fff",
      primary: "#07c",
      secondary: "#b0b",
      modes: {
        dark: {
          text: "#fff",
          background: "#222",
          primary: "#0cf",
          secondary: "#faf",
        },
      },
    },
    fonts: {
      body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: "sans-serif",
    },
    radii: [0, 4],

    styles: {
      root: {
        fontFamily: "body",
        color: "text",
        bg: "background",
        p: 4,
      },
      a: {
        color: "primary",
        fontWeight: "bold",
        textDecoration: "none",
        ":hover": {
          color: "secondary",
          textDecoration: "underline",
        },
      },
    },

    buttons: {
      primary: {
        cursor: "pointer",
      },
    },
  })
)
