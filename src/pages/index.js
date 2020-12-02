import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <img
        style={{ margin: `0 auto` }}
        src="https://source.unsplash.com/random/600x400"
        alt="random photo to enjoy"
      />
    </div>
    <br />
  </Layout>
)

export default IndexPage
