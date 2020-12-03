---
title: Working with Gatsby
date: 2020-11-30
path: /gatsby/basics
category: gatsby
---

## Gatsby for Static Sites

Gatbsy is a static site generator that uses React and GraphQl technologies on top of the standard html/js/css. It has a cli available for easier app building and testing.

### Create new skeleton

From the directory and ensuring NVM has you in the right environment (ie `nvm use stable`):

`gatsby new <project-name>`
`cd <project-name>`
`gatsby develop`

Check the page on localhost:8000 just to make sure everything can build and serve properly.

### Routes and Pages

Anything created under the 'pages' folder will be created as a page and served by the route of the file's title. Pages can be nested into folders and the routes will be built according to that structure. Remember to keep an index page at each folder level.

### GraphQL Queries

There are two ways of querying data for your components.

Any page existing in the pages files will automatically get to use gatsby's page query by exporting a query on the page, and then accessing it through `data`.

Any component or fragment must use the `useStaticQuery` and `graphql` imports to build the query inside the component.

### Plugins create GraphQL sets

##### Example Standard Page Query

```js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  # example of a page query with an optional name
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```
