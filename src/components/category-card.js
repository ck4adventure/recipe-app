import React from "react"
import { Link } from "gatsby"

const CategoryCard = ({ category }) => {
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
        <Link to={`/recipes/${category.fieldValue}`}>
          {category.fieldValue.split("-").join(" & ").toUpperCase()}
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard
