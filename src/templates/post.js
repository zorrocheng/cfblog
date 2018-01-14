import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const {
      childContentfulPostTitleTextNode: {title},
      childContentfulPostBodyTextNode: {body},
      featuredImage,
      category,
    } = post
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Img resolutions={featuredImage.resolutions} />
          <h2 style={{paddingLeft: rhythm(2)}}>{title}</h2>
        </div>
        <br />
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          />
          <div>
            <span>See other: </span>
            <ul>
              {category.map((cat, i) => (
                <li key={i}>
                  <Link key={i} to={`/categories/${cat.id}`}>
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const postQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      childContentfulPostTitleTextNode {
        title
      }
      childContentfulPostBodyTextNode {
        body
      }
      featuredImage {
        resolutions(width: 50, height: 50) {
          base64
          src
          srcSet
          height
          width
        }
      }
      category {
        id
        title
      }
    }
  }
`
