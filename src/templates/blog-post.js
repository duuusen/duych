import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import postStyles from "../components/post.module.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section 
        style={{
          maxWidth: rhythm(24),
          margin: '0 auto',
        }}
      >
      <article>
        <header className={postStyles.postHeader}>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <h2
            style={{
              ...scale(0.15),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.artists}
          </h2>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.description}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <section>
          <p>{post.frontmatter.mentors}</p>
          <p>{post.frontmatter.literature}</p>
        </section>
        <hr
          style={{
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY")
        description
        artists
        mentors
        literature
      }
    }
  }
`
