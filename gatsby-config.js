module.exports = {
  siteMetadata: {
    title: "Nil's site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-transformer-mdx",
      options: {
        pagesPath: `${__dirname}/src/blog`,
      },
    },
  ],
};
