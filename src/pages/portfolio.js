import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import DocsPage from "../images/d2iq-landing.png"
import ServPage from "../images/dcos-services.png"

const PortPage = () => (
  <Layout>
    <h3>Front End Work</h3>
    <div style={{ display: "flex" }}>
      <div
        style={{ display: "flex", flexDirection: "column", marginRight: 16 }}
      >
        <a
          href="https://docs.d2iq.com/mesosphere/dcos/services/"
          target="_blank"
        >
          <img
            style={{
              margin: `0 auto`,
              width: 400,
            }}
            src={ServPage}
            alt="services page"
          />
        </a>
        <br />
        <h4>Interactive Pages</h4>
        <div style={{ width: 450 }}>
          Creating dropdown menus, filters and navigational help is one way to
          enable the user experience. Visit the{" "}
          <a href="https://docs.d2iq.com/mesosphere/dcos/services/">
            services landing page
          </a>{" "}
          to see custom controls in action.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="https://docs.d2iq.com">
          <img
            style={{
              margin: `0 auto`,
              width: 400,
            }}
            src={DocsPage}
            alt="landing page"
          />
        </a>
        <br />
        <h4>Basic page layouts and design</h4>
        <div style={{ width: 450 }}>
          Rather than a boring set of square cards on a grid, why not change
          things up a bit? A previously ominous jumbotron was replaced with
          smaller cards at the top. Small square cards were turned into larger
          broad sections each with a custom graphic.
        </div>
      </div>
    </div>
    <br />
    <h3>Technical Writing</h3>
    At the moment, my best work didn't make it to publishing when our project
    was cancelled. See the <Link to="/dev-notes">Dev Notes</Link> for some basic
    procedural guides.
    <br />
    <Link to="/">Return to Home</Link>
  </Layout>
)

export default PortPage
