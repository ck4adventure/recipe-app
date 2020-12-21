import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CategoryLinksList = ({ obj }) => {
  return (
    <div style={{ width: 250 }}>
      <h4>
        <Link to={`/${obj.fieldValue}`}>
          {obj.fieldValue.toUpperCase()} <small>({obj.totalCount})</small>
        </Link>
      </h4>
      <ul>
        {obj.nodes.map((node, index) => {
          return (
            <li key={`cat${index}`}>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const SkillsPage = ({ data }) => {
  const groups = data.allMarkdownRemark.group

  return (
    <Layout>
      <SEO title="Dev Skills" />
      <h2>Dev Knowledge Notes</h2>
      <p>
        As a way to develop and grow my skills, the following are drafts of
        guides on the basics of web app development.
      </p>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {groups.map((gr, index) => (
          <CategoryLinksList key={index} obj={gr} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query catsQuery {
    allMarkdownRemark {
      group(field: frontmatter___category, limit: 10) {
        totalCount
        fieldValue
        nodes {
          frontmatter {
            title
            category
            date
            path
          }
        }
      }
      totalCount
    }
  }
`

export default SkillsPage
