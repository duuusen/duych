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
<<<<<<< HEAD
        <p>Duy Bui (b. 1994 and based in Switzerland) works as a designer and artist. As an interaction designer by training he is using design as a tool of research and inquiry as well as artistic approaches. Relying on close collaboration with fellow artists and designers, he beliefs that in order to develop a strong and thorough language within a topic working in a collaborative and transcultural way is essential. Influenced by the friction of different cultures, values and societies he is particularly interested in observing and questioning societal, economical and political structures and paradoxes. By research and reflection he builds a vocabulary of the topic that he expresses in various ways such as installations, video, photography and mixed-media. Thereby he especially focuses on the materiality of things, paying attention to the intimacy of the interaction and the play of influences and agencies that materials provide. Through his works he aims at fostering a basis for discussion and change by imagining alternative futures and making them tangible.</p>
        <p>Photo Livia Benz</p>
=======
        <p>Duy Bui (b. 1994 and based in Switzerland) works as designer and artist. As an interaction designer by training he is using design as a tool of research and inquiry as well as artistic approaches. Relying on close collaboration with fellow artists and designers, he beliefs that in order to develop a strong and thorough language within a topic working in a collaborative and transcultural way is essential.

Influenced by the friction of different cultures, values and societies he is particularly interested in observing and questioning societal, economical and political structures and paradoxes.
Through research and reflection he builds a vocabulary of the topic that he expresses in various ways such as installations, video, photography and mixed-media. Thereby he especially focuses on the materiality of things, paying attention to the intimacy of the interaction and the play of influences and agencies that materials provide.
Through his works he aims at providing a basis for discussion and change by imagining alternative futures and making them tangible.</p>
>>>>>>> develop
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
