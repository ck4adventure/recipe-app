import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const CategoryCard = ({ category }) => {
  const { title, fields } = category

  return (
    <div
      style={{
        width: 200,
        height: 60,
        textAlign: `center`,
        verticalAlign: `center`,
        margin: 20,
      }}
    >
      <div>
        <Link to={fields.slug}>{title.toUpperCase()}</Link>
      </div>
    </div>
  )
}

export default CategoryCard
