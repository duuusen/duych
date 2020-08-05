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
      <div class="about-content">
        <p>Duy Bui (b. 1994 and based in Switzerland) works as a designer and artist. As an interaction designer by training he is using design as a tool of research and inquiry. Influenced by the friction of different cultures, values and societies he is particularly interested in observing and questioning societal, economical and political structures and paradoxes. In his works, he relies on close collaboration with fellow artists, designers and the community. By research and reflection he builds a vocabulary of the topic that he expresses in various ways such as installations, video, photography and mixed-media. Through his works he aims at fostering a basis for discussion and change./p>
      </div>
    </div>
    <div class="about-items-wrap">
      <div class="about-items">
      <h2>Exhibitions</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2019</h3></li>
        <li>Bonds & Ties 契約與紐帶, Toni-Areal, Zurich, Switzerland</li>
        <li>HART House, Hong Kong</li>
        <li>McaM Shanghai, China</li>
        <li>Design Festival Bern, Switzerland</li>
        <li>FOGO, Zurich, Switzerland</li>
        <li>Punkt, Toni-Areal, Zurich, Switzerland</li>
        <li><h3>2018</h3></li>
        <li>Zauberwald, Lenzerheide, Switzerland</li>
      </ul>
      <h2>Screenings</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2019</h3></li>
        <li>Isle of Tears, Kino Toni, Zurich, Switzerland</li>
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
