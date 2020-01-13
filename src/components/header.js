import { Link } from "gatsby"
import { Heading, Columns } from 'react-bulma-components';
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Columns>
        <Columns.Column size="half">
        <Heading>{siteTitle}</Heading>
        </Columns.Column>
        <Columns.Column offset={3}> 
          <Heading subtitle size={6}>
            security engineering internship applications
          </Heading>
        </Columns.Column>
      </Columns>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
