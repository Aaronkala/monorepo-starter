require(`dotenv`).config({
  path: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : `.env.development`,
})

require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `es2017`,
    noImplicitAny: false,
    isolatedModules: false,
  },
  files: true,
})

/**
 * @type { import('gatsby').GatsbyConfig }
 */
const gatsbyConfig = {
  siteMetadata: {
    title: `Aaron Hakala`,
    siteUrl: `https://www.aaronhakala.com/`,
    description: `Developer`,
    keywords: `Programmer, Developer`,
    robots: `INDEX,FOLLOW`,
    canonical: ``,
    author: `aaron.hakala@gmail.com`,
    phone: `+358 045 673 9439`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Hakala`,
        short_name: `Aaron Hakala`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

/**
 * NOTE:
 * The prefix is used to handle subdirectory based urls.
 * For example, `https://example.com/subdir/`.
 *
 * See https://www.gatsbyjs.org/docs/path-prefix/ for more info.
 *
 * Also, see https://github.com/strivectin/strivectin-migration/issues/70
 * for more info on why this is needed in this project, and what problems
 * were occuring when it wasn't present.
 */

if (process.env.PATH_PREFIX) {
  gatsbyConfig.pathPrefix = process.env.PATH_PREFIX
}

if (process.env.GTM_CONTAINER_ID && gatsbyConfig.plugins) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GTM_CONTAINER_ID,

      // Include GTM in development environment
      includeInDevelopment: true,
    },
  })
}

/**
 * NOTE:
 * If this `ANALYSE_BUNDLE` environment variable is set,
 * then a bundle report is generated in the `public` directory.
 */
if (process.env.ANALYSE_BUNDLE) {
  if (gatsbyConfig.plugins) {
    gatsbyConfig.plugins.push({
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        openAnalyzer: false,
        analyzerMode: `static`,
        reportFilename: `webpack-bundle-analyser/index.html`,
      },
    })
  }
}

module.exports = gatsbyConfig
