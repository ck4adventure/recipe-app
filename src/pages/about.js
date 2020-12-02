import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h2>About this site</h2>
    <p>
      This is a project using Gatsby and Graphql to deploy a basic recipe app.
      Eventually, this app will hold a small database of my most commonly cooked
      meals.
    </p>
    <h3>Timeline</h3>
    <ul>
      <li>
        {" "}
        0.1 is just a static site with recipes entered in manually in yaml
        format and browsable by set categories
      </li>
      <li> 0.2 will add search functionality </li>
      <li> 0.3 will add a CMS for easier data entry </li>
      <li>
        {" "}
        ... other ideas include adding on a full css framework, switching to a
        live backend, containerizing, integrating the CMS into app{" "}
      </li>
    </ul>
    <h3>Implemention Choices</h3>
    <h5>Data stored as YAML</h5>
    <p>
      Since there is no database, all information has to exist as code when the
      project builds. YAML and Markdown are both easy file formats for both
      humans and computers to read. Although it would be possible to utilize the
      frontmatter of a markdown file to hold a lot of data, the first iteration
      will be playing it safer with pure yaml files. Although this may lose some
      text formatting functionality in the beginning, it will allow me to build
      a custom plugin later to parse parts of the yaml as markdown.
    </p>
    <h5>Gatsby for the site framework.</h5>
    <p>
      Although static sites are less common in the wild, it was a good and easy
      way to develop a first version of a recipe app and have a better idea what
      I wanted. In two days I have onboarded to the basic concepts and created
      this site.
    </p>
    <h5>React with inline CSS</h5>
    <p>
      One drawback of using a provided starter kit is having to then undo the
      frontend styling scheme. But for now the emphasis is on learning Graphql
      and getting functionality put in.
    </p>

    <br />
    <Link to="/">Return to Home</Link>
  </Layout>
)

export default AboutPage
