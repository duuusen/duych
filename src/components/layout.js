import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "../components/main.css" 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  if (location.pathname === rootPath) {
    header = (
      <header>
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
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      </header>
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
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <div class="chevron">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
        </Link>
      </div>
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
