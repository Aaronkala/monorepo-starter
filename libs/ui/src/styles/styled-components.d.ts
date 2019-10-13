/**
 * NOTE:
 * Read the following docs for information on what this files does:
 * https://www.styled-components.com/docs/api#typescript
 */

import "styled-components"

type Colors = {
  black: {
    100: string
  }
  blue: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  coolGray: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  cyan: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  gray: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  green: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  magenta: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  orange: {
    40: string
  }
  purple: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  red: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  teal: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  warmGray: {
    10: string
    20: string
    30: string
    40: string
    50: string
    60: string
    70: string
    80: string
    90: string
    100: string
  }
  white: {
    0: string
  }
  yellow: {
    30: string
  }
}

type Breakpoint = {
  pxSize: number
  gridColumns: number
}

type Breakpoints = {
  desktop: Breakpoint
  landscape: Breakpoint
  portrait: Breakpoint
  mobile: Breakpoint
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors
    breakpoints: Breakpoints
    containerWidth: number
  }
}
