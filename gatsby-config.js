require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Contentful Blog to Gatsby',
    author: 'Zorro Cheng',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    `gatsby-transformer-remark`,
    // `gatsby-plugin-react-helmet`,
  ],
}
