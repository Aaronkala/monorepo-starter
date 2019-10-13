// @ts-check

import React from "react"
import { Theme } from "@aaronhakala/ui"

import "./styles/global.css"

/**
 * @type { import("gatsby").GatsbyBrowser["wrapPageElement"] }
 */
export const wrapPageElement = ({ element }) => <>{element}</>

/**
 * @type { import("gatsby").GatsbyBrowser["wrapRootElement"] }
 */
export const wrapRootElement = ({ element }) => ((
  <Theme>
    <>{element}</>
  </Theme>
))
