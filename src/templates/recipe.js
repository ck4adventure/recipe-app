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
      <div
        style={{
          display: `flex`,
          alignItems: `baseline`,
        }}
      >
        <h2 style={{ marginBottom: `1 rem` }}>{title}</h2>
        <h6 style={{ margin: `0 12px`, fontWeight: `lighter` }}>
          [{category.split("-").join(" & ").toUpperCase()}]
        </h6>
      </div>
      <h3 style={{ margin: 0, marginBottom: `0.5rem` }}>Ingredients</h3>
      <form>
        <div style={{ fontSize: 14, marginBottom: `0.5rem`, display: `flex` }}>
          <div style={{ marginRight: 8 }}>
            (Can check them off as they are gathered or used)
          </div>
        </div>
        <ul>
          {ingredients.map(({ item }, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`item-${index}`}
                name={item}
                value={item}
                style={{ marginRight: 8, marginLeft: -20 }}
              />
              {item}
            </li>
          ))}
        </ul>
        <input
          type="reset"
          value="Uncheck All"
          style={{ fontSize: 14, border: `none`, color: `rebeccapurple` }}
        />
      </form>
      <h3 style={{ margin: 0, marginBottom: `1rem` }}>Directions</h3>
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
      notes
      source
    }
  }
`
