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
    text: Nord.nord0,
    background: Nord.nord8,
    primary: "#07c",
    secondary: "#b0b",
    modes: {
      dark: {
        text: Nord.nord6,
        background: Nord.nord0,
        primary: "#0cf",
        secondary: "#faf",
      },
    },
  },
  radii: [0, 4],

  styles: {
    root: {
      color: "text",
      bg: "background",
      p: 4,
    },
    a: {
      color: "primary",
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

export default Theme
