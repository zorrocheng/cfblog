import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";
import { rhythm } from "../utils/typography";
import Img from "gatsby-image";

const propTypes = {
  data: PropTypes.object.isRequired
};

const Post = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/posts/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2)
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.featuredImage.resolutions.src && (
            <Img
              style={{ margin: 0 }}
              resolutions={node.featuredImage.resolutions}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.childContentfulPostTitleTextNode.title}</div>
      </div>
    </Link>
  </div>
);

class IndexPage extends React.Component {
  render() {
    const usPostEdges = this.props.data.allContentfulPost.edges;
    // const dePostEdges = this.props.data.german.edges;
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        <h1>Frontpage Title</h1>
        <h2>Header 2</h2>
        <p>
          The paragraph is here
        </p>
        <br />
        <h3>Post List</h3>
        {usPostEdges.map(({ node }, i) => (
          <Post node={node} key={node.id} />
        ))}

        {/* The German locale list */}
        {/* <br />
        <br />
        <h2>de</h2> */}
        {/* {dePostEdges.map(({ node }, i) => (
          <Post node={node} key={node.id} />
        ))} */}
      </div>
    );
  }
}

IndexPage.propTypes = propTypes;

export default IndexPage;

export const IndexQuery = graphql`
  query indexQuery {
      allContentfulPost (filter: {
        node_locale: {eq: "en-US"}
      }) {
        edges {
          node {
            id
            childContentfulPostTitleTextNode {
              title
            }
            featuredImage {
                resolutions(width: 75) {
                  ...GatsbyContentfulResolutions
              }
            }
          }
        }
      }
    }
`;
