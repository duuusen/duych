import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
    <section 
      style={{
        maxWidth: rhythm(24),
        margin: '0 auto',
      }}
    >
    <div
      class="mediumWidth"
      style={{marginBottom: rhythm(3 / 1.7)}}
    >
      <Img fluid={data.profilePic.childImageSharp.fluid} />
    </div>
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
    profilePic: file(relativePath: { eq: "profile-duybui.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
