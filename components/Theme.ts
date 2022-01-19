import { Nord } from "@icco/react-common"
import { toTheme } from "@theme-ui/typography"
import merge from "deepmerge"
import oceanBeach from "typography-theme-ocean-beach"

const typography = toTheme(oceanBeach)

const Theme = merge(typography, {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true,
  },

  colors: {
    text: Nord.nord3,
    background: "#fff",
    primary: Nord.nord4,
    secondary: Nord.nord1,
    modes: {
      dark: {
        text: Nord.nord6,
        background: Nord.nord0,
        primary: Nord.nord1,
        secondary: Nord.nord4,
      },
    },
  },

  styles: {
    root: {
      color: "text",
      bg: "background",
      p: 4,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":link,:any-link,:visited": { color: "primary" },
      ":focus,:active,:hover": {
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

export default Theme
