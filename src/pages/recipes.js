import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const RecipesPage = ({ data }) => {
  const recipePaths = data.allRecipesYaml.edges
  console.log(recipePaths)
  return (
    <Layout>
      <h1>Recipes Page</h1>
      <h3>Currently Available:</h3>
      <ul>
        {recipePaths.map((result, index) => (
          <li key={index}>
            <Link to={result.node.fields.slug}>{result.node.title}</Link>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <Link to="/">Home</Link> <br />
      <Link to="/about/">About</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query recipePaths {
    allRecipesYaml {
      edges {
        node {
          title
          fields {
            slug
          }
          category
        }
      }
    }
  }
`
export default RecipesPage
