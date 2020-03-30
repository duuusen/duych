import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Video from "../components/video"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
    <Video src="test.mp4" />
    <aside>
      <ul style={{ listStyle: 'none', margin: 0, }}>
        <li style={{ marginBottom: rhythm(2) }}><h3><Link to={'/about'}>About</Link></h3></li>
        {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <li key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
          </li>
        )
      })}
      </ul>
    </aside>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
