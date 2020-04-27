import React from 'react';
import { withPrefix } from 'gatsby';
import { scale, rhythm } from "../utils/typography"

export default ({ src }) => {
    return (
      <footer
        style={{
          textAlign: 'center',
          ...scale(-1 / 3),
          color: '#9E9E9E',
          marginTop: rhythm(2),
          marginBottom: rhythm(2),
        }}
      >
      © {new Date().getFullYear()} Duy Bui
      </footer>
    )
}
