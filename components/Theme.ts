import { Nord } from "@icco/react-common"
import { toTheme } from "@theme-ui/typography"
import merge from "deepmerge"
import usWeb from "typography-theme-us-web-design-standards"

const typography = toTheme(usWeb)

export default merge(typography, {
  colors: {
    text: Nord.nord6,
    background: Nord.nord0,
    primary: Nord.nord8,
  },
})
