---
title: Graphql Schema Definition Language
date: 2020-12-02
path: /graphql/sdl
category: graphql
---

## Schema Definition Language

### Basic Structure

The syntax for writing a schema is called the SDL. Basic example for a type called Person:

```json
type Person {
  name: String!
  age: Int!
}
```

The arbitrary type `Person` has two fields, `Name` and `Age`. Each of these are of a type string or int. The `!` means that the field is required.

### Relationships between Types

Once a type has been created it can be referenced elsewhere.

```json
type Post {
  title: String!
  author: Person!
}
```

with the corresponding relationship added to the Person

```json
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}
```

### Defining a Schema
