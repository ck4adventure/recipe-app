import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const node = data.allMarkdownRemark.nodes[0]
  const category = node.frontmatter.category
  const edgeArr = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h3>{category.split("-").join(" & ").toUpperCase()}</h3>
      <ul>
        {edgeArr.map(({ node }) => (
          <li>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dev-notes">Back to Dev Notes</Link> <br />
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query skillCategories($title: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $title } } }) {
      edges {
        node {
          frontmatter {
            category
            path
            title
          }
        }
      }
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`
