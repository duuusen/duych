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
        margin: '0 auto 10vh',
      }}
    >
    <div class="about-wrap">
    <div class="about-img">
        <Img fluid={data.profilePic.childImageSharp.fluid} />
      </div>
      <div class="about-content">
        <p>Duy Bui (born 1994, based in Switzerland) works in installation, photography, film and fictional media. He loves to wander and wonder; always restless in the now, he seeks the in-between and far beyond. His optimism comes from his friends and the stories they tell together.</p>
      </div>
    </div>
    <div class="about-items-wrap">
    <ul style={{ listStyle: 'none', }}>
        <li><a href="mailto:d@duy.ch">Mail</a></li>
        <li><a href="https://instagram.com/duuusen">Instagram</a></li>
        <li><a href="https://github.com/duuusen">Github</a></li>
      </ul>
      <div class="about-items">
      <h2>Group Exhibitions</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2021</h3></li>
        <li><i>on souls and soil</i>, Ars Electronica, Linz, Austria, [upcoming]</li>
        <li><i>on souls and soil</i>, Refresh Conference, Toni-Areal, Zurich, Switzerland, [upcoming]</li>
        <li><i>on souls and soil</i>, Toni-Areal, Zurich, Switzerland, [diploma exhibition]</li>
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
        <li><i>Isle of Tears</i>, Centre for Community Cultural Development, Hong Kong, Hong Kong</li>
        <li><i>Isle of Tears</i>, Kunci Study Forum and Collective, Yogyakarta, Indonesia</li>
        <li><i>Isle of Tears</i>, Lausanne Underground Film & Music Festival, Lausanne, Switzerland</li>
        <li><h3>2019</h3></li>
        <li><i>Isle of Tears</i>, Kino Toni, Zurich, Switzerland</li>
      </ul>
      <h2>Presentations</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2021</h3></li>
        <li><i>Where Do the Birds Land</i>, 12th International Convention of Asia Scholars, Kyoto, Japan, [upcoming]</li>
      </ul>
      <h2>Awards and Nominations</h2>
      <ul style={{ listStyle: 'none', }}>
        <li><h3>2021</h3></li>
        <li>Finalist, <i>Biodesign Challenge</i>, USA</li>
        <li>Nomination, <i>Förderpreis</i>, ZHdK, Switzerland</li>
        <li><h3>2020</h3></li>
        <li>Best Short Film - Documentation <i>(Isle of Tears)</i>, International Competition,  Lausanne Underground Film & Music Festival, Lausanne, Switzerland</li>
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
    profilePic: file(relativePath: { eq: "profile.jpg" }) {
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
