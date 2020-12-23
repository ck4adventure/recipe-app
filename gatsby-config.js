module.exports = {
  siteMetadata: {
    title: `Christina's Corner`,
    description: `Place to hold recipes and projects`,
    author: `ck4adventure`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/src/recipes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipe-categories`,
        path: `${__dirname}/src/recipe-categories`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
        ignore: [`^.*.(jpg|JPG|gif|GIF|svg|SVG|png|PNG)`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
