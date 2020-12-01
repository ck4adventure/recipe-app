import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const RecipesPage = () => (
  <Layout>
    <h1>Recipes Page</h1>
    <h3>Currently Available:</h3>
    <ul>
      <li>
        <Link to="/recipes/whipped-cream">Whipped Cream</Link>
      </li>
      <li>Scrambled Eggs</li>
    </ul>
    <br />
    <br />
    <Link to="/">Home</Link> <br />
    <Link to="/about/">About</Link>
  </Layout>
)

export default RecipesPage
