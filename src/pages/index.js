import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      I enjoy creating things from diy art projects to elaborate sweets to
      coding.
    </p>
    <br />
    <br />
    <Link to="/recipes/">Recipes</Link> <br />
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
