import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CategoryCard from "../components/category-card"

const RecipesPage = ({ data }) => {
  const recipePaths = data.allRecipesYaml.edges
  const categoryPaths = data.allCategoriesYaml.edges
  console.log(categoryPaths)
  return (
    <Layout>
      <h1>Recipes Page</h1>
      <div style={{ display: `flex`, flexFlow: `row wrap` }}>
        {categoryPaths.map((category, index) => (
          <CategoryCard key={index} category={category.node} />
        ))}
      </div>
      <br />
      <h3>All Recipes:</h3>
      <ul>
        {recipePaths.map((result, index) => (
          <li key={index}>
            <Link to={result.node.fields.slug}>{result.node.title}</Link>
          </li>
        ))}
      </ul>
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
    allCategoriesYaml {
      edges {
        node {
          title
          fields {
            slug
          }
        }
      }
    }
  }
`
export default RecipesPage
