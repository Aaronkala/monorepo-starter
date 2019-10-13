import { DefaultTheme } from "styled-components"
import { colors } from "./colors"

export const theme: DefaultTheme = {
  colors,
  breakpoints: {
    desktop: {
      pxSize: 1344,
      gridColumns: 12,
    },
    landscape: {
      pxSize: 1024,
      gridColumns: 12,
    },
    portrait: {
      pxSize: 768,
      gridColumns: 12,
    },
    mobile: {
      pxSize: 552,
      gridColumns: 12,
    },
  },
  containerWidth: 1344,
}

// https://github.com/styled-system/styled-system/blob/95629966d3344081f1eb96c4166d8f3e14afbf06/packages/core/src/index.js#L33
const get = (
  obj: any,
  key: string,
  def: string | number | undefined,
  p = 0,
  undef: any = undefined
): string | number => {
  const keys = key && key.split ? key.split(".") : [key]
  for (p = 0; p < keys.length; p++) {
    obj = obj ? obj[keys[p]] : undef
  }
  return obj === undef ? def : obj
}

type UtilProps = {
  theme: DefaultTheme
}

export const themeGet = (path: string, fallback = undefined) => (
  props?: UtilProps
) => (props ? get(props.theme, path, fallback) : get(theme, path, fallback))

export const themeColor = (color: string) => (props?: UtilProps): string => {
  if (props) {
    return get(props.theme, `colors.${color}`, color) as string
  }
  return get(theme, `colors.${color}`, color) as string
}
