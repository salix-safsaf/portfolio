import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #8eb814;
`

const PageTitle = styled.h1`
  margin-bottom: 20px;
`

const ArticlesCount = styled.h4`
  margin-bottom: 20px;
  color: #999;
`

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <PageTitle>
        <h1>Plants World</h1>
      </PageTitle>
      <ArticlesCount>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      </ArticlesCount>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            # description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
