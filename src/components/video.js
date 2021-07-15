import React from 'react';
import { withPrefix } from 'gatsby';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ src }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        bgImg: file(relativePath: { eq: "bg.jpg" }) {
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
    `}
    render={data => (
      <section
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          zIndex: '-100'
        }}
        >
        <video
            autoplay
            muted
            loop
            playsinline
            className="video"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                bottom: 0,
                right: 0,
                height: 'auto',
                width: 'auto',
                minHeight: '100%',
                minWidth: '100%',
                zIndex: '-1',
                transform: 'translate(-50%, -50%)',
                objectFit: 'fill',
                objectPosition: 'center'
            }}
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
      <Img className="bgImg" fluid={data.bgImg.childImageSharp.fluid} />
      </section>
    )}
  />
)
