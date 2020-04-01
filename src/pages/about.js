import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
    <section 
      style={{
        maxWidth: rhythm(24),
        margin: '0 auto',
      }}
    >
    <p>Duy Bui works as a designer and artist.Born in Switzerland.Artistic practice / interest as designer,  mixed-media, Main Focus, Questioning which notions. Where have my works been shown</p>
    <h2>Exhibitions</h2>
    <ul style={{ listStyle: 'none', margin: 0, }}>
      <li>Blabla</li>
      <li>Blabla</li>
      <li>Blabla</li>
      <li>Blabla</li>
      <li>Blabla</li>
      <li>Blabla</li>
    </ul>
    </section>
    </Layout>
  )
}

export default AboutPage

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
