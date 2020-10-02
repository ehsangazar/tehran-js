import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import LastPost from "../components/LastPost/LastPost"
import Banner from "../components/Banner/Banner"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    if (data.allMarkdownRemark.nodes.length > 0){
      setPosts(data.allMarkdownRemark.nodes)
    }
  }, [data.allMarkdownRemark.nodes])

  if (posts.length === 0) {
    return null
  }

  const lastPost = posts[0]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="گروه برنامه‌نویسی جاوا اسکریپت" />
      
      <Banner />

      <LastPost post={lastPost} />

      {posts.slice(1).length > 0 &&
        <div>
        <h2>
          رویداد‌های قبلی
        </h2>
          <ol style={{ listStyle: `none` }}>
            {posts.slice(1).map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          "fa-IR"
                        )}  - ساعت ۶ به وقت تهران
                      </small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      }
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        fields {
          slug
        }
        html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`
