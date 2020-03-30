import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "../components/main.css" 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <header>
      <h1
        style={{
          ...scale(.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <h1
        class="pfeil"
        style={{
          position: 'fixed',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
        &larr;
        </Link>
      </h1>
      </header>
    )
  }
  return (
    <div
      style={{
        padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      <main>{children}</main>
      <footer></footer>
    </div>

  )
}

export default Layout
