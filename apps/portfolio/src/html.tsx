/**
 * Please see the following section of the docs for information on
 * what this file is for: https://www.gatsbyjs.org/docs/custom-html/
 */

import React from "react"

type HTMLProps = {
  htmlAttributes: any
  headComponents: any
  bodyAttributes: any
  preBodyComponents: any
  body: any
  postBodyComponents: any
}

const HTML: React.FC<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes} lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <noscript>
        Sorry, you need to enable JavaScript to view this site.
      </noscript>
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
