import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { rhythm } from "../utils/typography"
import "../components/main.css" 

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.descriptio}
      />
      <section 
        style={{
          maxWidth: rhythm(24),
          margin: '0 auto',
        }}
      >
      <article>
        <header class="postHeader">
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p style={{marginBottom: rhythm(1 / 2)}}>{post.frontmatter.medium}</p>
          <p style={{marginBottom: 0}}>{post.frontmatter.credits}</p>
          <p style={{color: '#9E9E9E', marginBottom: rhythm(3 / 2.5)}}>{post.frontmatter.date}</p>
          <p style={{marginBottom: rhythm(1 / 2)}}>{post.frontmatter.description}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p style={{marginBottom: 0}}>In collaboration with {post.frontmatter.artists}</p>
        <section>
          <p>{post.frontmatter.literature}</p>
        </section>
        <hr
          style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    <Footer />
    </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        medium
        artists
        credits
        date(formatString: "YYYY")
        description
      }
    }
  }
`
