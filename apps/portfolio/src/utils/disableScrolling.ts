/**
 * NOTE:
 * Copied from https://github.com/joealden/listed/blob/master/src/utils.
 * See this repo for more ways in which these utility functions can be used.
 */

let isOn = false
let scrollPosition = 0

const on = () => {
  if (typeof document === "undefined" || isOn) return

  scrollPosition = window.pageYOffset

  document.documentElement.style.width = "100%"
  document.documentElement.style.top = -scrollPosition + "px"
  document.documentElement.style.overflow = "hidden"
  document.documentElement.style.position = "relative"
  document.documentElement.style.height = "100%"

  isOn = true
}

const off = () => {
  if (typeof document === "undefined" || !isOn) return

  document.documentElement.style.width = ""
  document.documentElement.style.top = ""
  document.documentElement.style.overflow = ""
  document.documentElement.style.position = ""
  document.documentElement.style.height = ""

  window.scroll(0, scrollPosition)
  isOn = false
}

const toggle = () => (isOn ? off() : on())

export const disableWindowScrolling = { off, on, toggle }

/* =============================================================== */

export type ReturnType = {
  on: () => void
  off: () => void
  toggle: () => void
}

export const createScrollManager = (element: HTMLElement): ReturnType => {
  let isOn = false
  let scrollPosition = 0

  const on = () => {
    if (typeof document === "undefined" || isOn) return

    scrollPosition = element.scrollTop

    element.style.width = "100%"
    element.style.top = -scrollPosition + "px"
    element.style.overflow = "hidden"

    isOn = true
  }

  const off = () => {
    if (typeof document === "undefined" || !isOn) return

    element.style.width = ""
    element.style.top = ""
    element.style.overflow = ""

    element.scroll(0, scrollPosition)
    isOn = false
  }

  const toggle = () => (isOn ? off() : on())

  return { on, off, toggle }
}
