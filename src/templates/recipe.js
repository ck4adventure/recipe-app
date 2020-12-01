import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { recipesYaml } = data // data.allRecipesYaml holds data from plugin
  const { fields, title, ingredients, directions, category } = recipesYaml
  return (
    <Layout>
      <div className="blog-post">
        <h1>{title}</h1>
        <h4>{category}</h4>
        <h2>Ingredients</h2>
        <h2>Directions</h2>
        <ol>
          <li>1.</li>
        </ol>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    recipesYaml(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      title
      category
      ingredients
      directions
    }
  }
`
