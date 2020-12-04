import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <img
        style={{ margin: `0 auto` }}
        src="https://source.unsplash.com/random/600x400"
        alt="random"
      />
    </div>
    <br />
  </Layout>
)

export default IndexPage
