import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h2>About this site</h2>
    <h4>Current Version: 0.3</h4>
    <p>
      This is a small project using the static site generator Gatsby. It also
      features Graphql as an alternative way to access data at build time. It
      utilizes markdown files to hold content which eliminates the need for a
      back end. Currently, it is deployed for free on Netlify, and even uses a
      small CMS instance to handle recipe content. Visit the code on{" "}
      <a href="https://github.com/ck4adventure/recipe-app">Github</a>.
    </p>
    <h3>Timeline</h3>
    <ul>
      <li>
        {" "}
        0.1 is a basic site layout with two sections, recipes and dev knowledge.
      </li>
      <li>
        {" "}
        0.2 (Current Version) added a cms under `/admin` to add recipes more
        easily. Dev knowledge is still added locally to the repository.
      </li>
      <li>
        {" "}
        0.3 added the first iteration of a portfolio page and I did a first
        round of CSS tweaks to get away from the default provided.
      </li>
      <li>
        {" "}
        ... next up is a full round of css styling, more page interactions like
        buttons and dropdowns, adding better dev notes, and maybe a hobbies
        section to document all the fun things I do on the weekends{" "}
      </li>
    </ul>
    <h3>Implemention Choices</h3>
    <h4>Data stored as YAML</h4>
    <p>
      Since there is no database, all information has to exist as code when the
      project builds. YAML and Markdown are both easy file formats for both
      humans and computers to read. Although it would be possible to utilize the
      frontmatter of a markdown file to hold a lot of data, the first iteration
      will be playing it safer with pure yaml files. Although this may lose some
      text formatting functionality in the beginning, it will allow me to build
      a custom plugin later to parse parts of the yaml as markdown.
    </p>
    <h4>Gatsby for the site framework.</h4>
    <p>
      Although static sites are less common in the wild, it was a good and easy
      way to develop a first version of a recipe app and have a better idea what
      I wanted. In two days I have onboarded to the basic concepts and created
      this site.
    </p>
    <h4>React with inline CSS</h4>
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
