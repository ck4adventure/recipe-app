---
title: Creating Types with Rails
path: /graphql/rails-types
date: 2020-12-04
---

## Creating an object from the command line

Sample call that will autofill the types file with data from the db schema

```bash
rails generate graphql:object Post
```

Sample call that adds additional typefields manually

```bash
rails generate graphql:object Post id:ID! title:String! body:String!
```
