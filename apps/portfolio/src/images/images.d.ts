declare type FixedObject = import("gatsby-image").FixedObject;
declare type FluidObject = import("gatsby-image").FluidObject;

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
/**
 * Valid Fixed Parameters
 * https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#parameters-1
 *
 * Example: import Image from 'gatsby-image-fixed!image.jpg?width=100&height=100&quality=90
 */
declare module "gatsby-image-fixed!*" {
  const content: FixedObject;
  export default content;
}

/**
 * Valid Fluid Parameters
 * https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#parameters-2
 *
 * Example: import Image from 'gatsby-image-fluid!image.jpg?maxWidth=100&maxHeight=100&quality=90&sizeByPixelDensity=true&srcSetBreakpoints[]=400&srcSetBreakpoints[]=600&srcSetBreakpoints[]=1800
 */
declare module "gatsby-image-fluid!*" {
  const content: FluidObject;
  export default content;
}
