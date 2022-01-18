import { toTheme } from '@theme-ui/typography'
import usWeb from 'typography-theme-us-web-design-standards'
import merge from 'lodash.merge'
import { Nord } from '@icco/react-common'

const typography = toTheme(usWeb)

export default merge(typography, {
    colors: {
    text: Nord.nord6,
    background: Nord.nord0,
    primary: Nord.nord8,
  },
})
