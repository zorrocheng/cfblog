import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.func.isRequired,
}

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

class DefaultLayout extends React.Component {
  render() {
    return (
      // The shared header
      <div
        style={{
          margin: `0 auto`,
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
          maxWidth: 650,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          // display: `inline`
        }}
      >
        <Link style={{ textDecoration: `none` }} to="/">
          <h3 style={{ color: `green`, marginBottom: rhythm(1.5), display: `inline` }}>
            Home
          </h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
        <br />
        <br />

        {/* Main Content  */}
        {this.props.children()}


        {/* The shared footer */}
        {/* <hr style={{ marginTop: rhythm(3) }} /> */}

        <h4 style={{paddingLeft: rhythm(5)}}>
          The Layout Footer </h4>
          <p>
          The Contentful site that is providing the data for this site is at
          {` `}
          <a href="https://app.contentful.com/spaces/jsmt0ecmw3h7/entries?id=nBkNgfijzXQCxcKH&contentTypeId=2wKn6yEnZewu2SCCkus4as&contentTypeHidden=false&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=updatedAt&displayedFieldIds=author">
            here
          </a>
        <br />
          <Link to="/image-api/">Images in different size example</Link>

        </p>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
