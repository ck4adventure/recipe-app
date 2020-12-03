---
title: Graphql Abilities
date: 2020-12-02
path: /graphql/abilites
category: graphql
---

### Graphql Abilities

There is more to Graphql than data fetching, cool as that is.

### Queries

Fetching data is done by structuring a query according to what is available in the schema.

A basic example using a filter. Other arguments are avail to sort or skip.

```
{
  allPersons(last: 2) {
    name
  }
}
```

Returns this data

```
{
  "allPersons": [
    { "name": "Johnny" },
    { "name": "Sarah" }
  ]
}
```

### Mutations

Mutations follow the same structure, but are prefixed with the `mutation` keyword:

```json
mutation {
  createPerson(name: "Bob", age: 36) {
    id
  }
}
```

`createPerson` is the root field, which takes the arguments `name` and `age`. The nested fields form the query of information to return on successful object creation, in this case the id assigned. Just remember to maintain the schema for all data fields you might want to save.

### Subscriptions (realtime data streams)

A `subscription` initiates and holds a connection to the server. Whenever the specified event happens, the corresponding data will be pushed to the client. This becomes a `stream` of data.

```
subscription {
  newPerson {
    name
    age
  }
}
```

Might respond with the following on the next created Person:

```
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```

### Next Up

See "SDL" for more information on defining schemas for each of the three types.
