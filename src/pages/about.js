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
        <p>Duy Bui (born 1994, based in Switzerland) works in installation, photography, film and fictional media. As an interaction designer by training he is using design as a tool of research and inquiry. Influenced by the friction of different cultures, values and societies he focuses on observing and questioning interpersonal, societal and political structures and paradoxes. Born and raised in Zurich, he is particularly interested in exploring the Asian Identity, its meaning and position.
In his works he relies on close collaboration with fellow artists and designers in order to develop a strong and thorough language. By research and reflection he builds a vocabulary of the topic that he expresses in various ways. He has made morphing images, mobile gardens, communicative surfaces, organised workshops and made clementines explode. Through his works he aims at fostering a basis for discussion and change.</p>
      </div>
    </div>
    <div class="about-items-wrap">
      <div class="about-items">
      <h2>Exhibitions</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2019</h3></li>
        <li><i>Bonds & Ties 契約與紐帶</i>, Toni-Areal, Zurich, Switzerland</li>
        <li><i>Improv Workshop</i>, HART House, Hong Kong</li>
        <li><i>Tear Up / See You Again</i>, McaM Shanghai, China</li>
        <li><i>clementine.lab</i>, Design Festival Bern, Switzerland</li>
        <li><i>Pop-up Kitchen</i>, FOGO, Zurich, Switzerland</li>
        <li><i>clementine.lab</i>, Punkt, Toni-Areal, Zurich, Switzerland</li>
        <li><h3>2018</h3></li>
        <li><i>Zauberwald Lenzerheide</i>, Lenzerheide, Switzerland</li>
      </ul>
      <h2>Screenings</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2020</h3></li>
        <li><i>Isle of Tears</i>, Lausanne Underground Film & Music Festival, Lausanne, Switzerland</li>
        <li><i>Isle of Tears</i>, Centre for Community Cultural Development, Hong Kong</li>
        <li><h3>2019</h3></li>
        <li><i>Isle of Tears</i>, Kino Toni, Zurich, Switzerland</li>
      </ul>
      <h2>Award</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2020</h3></li>
        <li>Best Short Film - Documentation <i>(Isle of Tears)</i>, International Competition,  Lausanne Underground Film & Music Festival, Lausanne, Switzerland</li>
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
