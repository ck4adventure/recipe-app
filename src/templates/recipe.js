import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { recipesYaml } = data // data.allRecipesYaml holds data from plugin
  const {
    title,
    ingredients,
    directions,
    category,
    notes,
    source,
  } = recipesYaml
  return (
    <Layout>
      <div style={{ display: `flex`, alignItems: `baseline` }}>
        <h3 style={{ margin: `none` }}>{title}</h3>
        <h6 style={{ margin: `0 12px` }}>[{category}]</h6>
      </div>
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
      <p>{notes}</p>
      <p>{source}</p>
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
      notes
      source
    }
  }
`
