import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { title, description } = data.categoriesYaml
  const recipePaths = data.allRecipesYaml.edges
  return (
    <Layout>
      <h3>{title.toString().replaceAll("-", " & ").toUpperCase()}</h3>
      <h6>{description}</h6>
      <ul>
        {recipePaths.map((result, index) => (
          <li key={index}>
            <Link to={result.node.fields.slug}>{result.node.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/recipes">Back to Recipes</Link> <br />
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query categoryData($title: String!) {
    categoriesYaml(title: { eq: $title }) {
      title
      description
    }
    allRecipesYaml(filter: { category: { eq: $title } }) {
      edges {
        node {
          title
          category
          fields {
            slug
          }
        }
      }
    }
  }
`
