import React from "react"
import { Link } from "gatsby"

const CategoryCard = ({ category }) => {
  console.log(category.fieldValue.replaceAll("-", " & ").toUpperCase())
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
          {category.fieldValue.replaceAll("-", " & ").toUpperCase()}
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard
