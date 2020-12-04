import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { recipesYaml } = data // data.allRecipesYaml holds data from plugin
  const { title, ingredients, directions, category } = recipesYaml
  return (
    <Layout>
      <h3>{title}</h3>
      <h5>{category}</h5>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(({ item }, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Directions</h3>
      <ol>
        {directions.map(({ step }, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <br />
      <br />
      <Link to="/recipes">Back to Recipes</Link> <br />
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    recipesYaml(fields: { slug: { eq: $path } }) {
      title
      category
      ingredients {
        item
      }
      directions {
        step
      }
    }
  }
`
