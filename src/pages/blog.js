import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
const blogTitleStyle = {
  marginBottom: "rhythm(1 / 4)",
};
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blogs">
      <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3 style={blogTitleStyle}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#bbb" }}>{node.frontmatter.date}</span>
            </h3>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          id
        }
      }
      totalCount
    }
  }
`;

export default BlogPage;
