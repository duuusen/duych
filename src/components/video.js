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
          <div dangerouslySetInnerHTML={{ __html: `
        <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
        style="
            position: absolute;
            top: 50%;
            left: 50%;
            bottom: 0;
            right: 0;
            height: auto;
            width: auto;
            min-height: 100%;
            min=width: 100%;
            z-index: -1;
            transform: translate(-50%, -50%);
            object-fit: fill;
            object-position: center;
      "
    >
        <source src="/trailer.mp4" type="video/mp4" />
        <source src="/trailer.webm" type="video/webm" />
        Your device does not support playing 'video/mp4' videos
    </video>
      ` }}></div>
        
      <Img className="bgImg" fluid={data.bgImg.childImageSharp.fluid} />
      </section>
    )}
  />
)
