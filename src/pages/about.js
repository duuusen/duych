import React from "react"
import { graphql } from "gatsby"
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
        maxWidth: rhythm(38),
        margin: '0 auto',
      }}
    >
    <div class="about-wrap">
      <div class="about-img">
        <Img fluid={data.profilePic.childImageSharp.fluid} />
      </div>
      <div class="about-content">
        <p>Duy Bui works as a designer and artist based in Switzerland. In his works he is using design as research and inquiry as well as artistic approaches that include material processes, new media, interactive media, film and photography. Through different media and methods his main focus aims at creating a basis for dialogue, discussion and fostering change. Influenced by the friction of different cultures, values and societies he is particularly interested in observing societal structures and paradoxes.</p>
        <p>Photo Livia Benz</p>
      </div>
    </div>
    <div class="about-items-wrap">
      <div class="about-items">
      <h2>Exhibitions</h2>
      <ul style={{ listStyle: 'none', }}>
        <li>Transcultural Collaboration, ZHdK, Zurich Switzerland</li>
        <li>HART House, Hong Kong</li>
        <li>McaM Shanghai, China</li>
        <li>Design Festival Bern, Switzerland</li>
        <li>FOGO, Zurich Switzerland</li>
        <li>Punkt ZHdK, Zurich, Switzerland</li>
        <li>Zauberwald Lenzerheide, Switzerland</li>
      </ul>
      </div>
      <div class="about-items">
        <h2>Links</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><a href="mailto:halloduy@gmail.com">Mail</a></li>
        <li><a href="https://instagram.com/duuusen">Instagram</a></li>
        <li><a href="https://github.com/duuusen">Github</a></li>
      </ul>
    </div>
      </div>
    </section>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    profilePic: file(relativePath: { eq: "duybui.jpg" }) {
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
