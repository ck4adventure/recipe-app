import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import CategoryCard from "../components/category-card"

const RecipesPage = ({ data }) => {
  const recipePaths = data.allRecipesYaml.edges
  const categoryPaths = data.allRecipesYaml.group
  return (
    <Layout>
      <h1>Recipes Page</h1>
      <h6>
        <a href="/admin"> -> Manage Recipes</a>
      </h6>
      <div style={{ display: `flex`, flexFlow: `row wrap` }}>
        {categoryPaths.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <br />
      <h3>All the recipes...</h3>
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
    allRecipesYaml(sort: { order: ASC, fields: title }) {
      group(field: category) {
        fieldValue
        totalCount
      }
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
