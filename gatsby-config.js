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
        spaceId: `jsmt0ecmw3h7`,
        accessToken: `3dc1ec67e46d80c01679e0a7c87b1bbeed60cb5323d72ee4c0b5e28d3d8618ee`,
      },
    },
    `gatsby-transformer-remark`,
    // `gatsby-plugin-react-helmet`,
  ],
}
