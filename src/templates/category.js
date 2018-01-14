import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";
import Img from "gatsby-image";

import { rhythm } from "../utils/typography";

const propTypes = {
  data: PropTypes.object.isRequired
};

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulCategory;
    const { title: { title }, post, icon } = category;
    const iconImg = icon.resolutions;
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: rhythm(1 / 2)
          }}
        >
          <Img
            style={{
              height: iconImg.height,
              width: iconImg.width,
              marginRight: rhythm(1 / 2)
            }}
            resolutions={iconImg}
          />
          <h4 style={{ marginBottom: 0 }}>{title}</h4>
        </div>
        <h1>{title}</h1>
        <div>
          <span>Post</span>
          <ul>
            {post &&
              post.map((p, i) => (
                <li key={i}>
                  <Link to={`/posts/${p.id}`}>
                    {p.childContentfulPostTitleTextNode.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

CategoryTemplate.propTypes = propTypes;

export default CategoryTemplate;

export const pageQuery = graphql`
  query categoryQuery($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      title
      icon {
        resolutions(width: 75) {
          base64
          src
          srcSet
          height
          width
        }
      }
      post {
        id
        childContentfulPostTitleTextNode {
          title
        }
      }
    }
  }
`;
