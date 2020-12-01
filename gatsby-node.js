/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)

// middleware that adds fields: slug to the node data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only the right type of files
  if (node.internal.type === "RecipesYaml") {
    // Use `createFilePath` to set the file path to be used in the links
    const relativeFilePath = createFilePath({
      node,
      getNode,
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/recipes${relativeFilePath}`,
    })
  }
}

const path = require(`path`)
// middleware to create a page for each yaml recipe file
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allRecipesYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allRecipesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/recipe.js`),
    })
    console.log(node.fields.slug)
  })
}
