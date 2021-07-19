import React from 'react';
import { scale, rhythm } from "../utils/typography"

export default ({ src }) => {
    return (
      <footer
        style={{
          textAlign: 'center',
          ...scale(-1 / 3),
          color: '#9E9E9E',
          marginTop: rhythm(2),
          marginBottom: rhythm(5),
        }}
      >
      {/* <p>© {new Date().getFullYear()} Duy Bui</p> */}
      </footer>
    )
}
