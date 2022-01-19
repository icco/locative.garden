import { Nord } from "@icco/react-common"
import { toTheme } from "@theme-ui/typography"
import merge from "lodash.merge"
import oceanBeach from "typography-theme-ocean-beach"

const typography = toTheme(oceanBeach)
const root = {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true,
  },

  colors: {
    text: Nord.nord3,
    background: "#fff",
    primary: Nord.nord4,
    secondary: Nord.nord1,
    link: Nord.nord10,
    modes: {
      dark: {
        text: Nord.nord6,
        background: Nord.nord0,
        primary: Nord.nord1,
        secondary: Nord.nord4,
        link: Nord.nord9,
      },
    },
  },

  styles: {
    root: {
      color: "text",
      bg: "background",
      p: 4,
    },
  },

  buttons: {
    primary: {
      cursor: "pointer",
    },
  },
}

const theme = merge(typography, root)
// console.log(Theme)

export default theme
