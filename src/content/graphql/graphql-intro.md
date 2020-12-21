---
title: Graphql (is awesome)
date: 2020-12-02
path: /graphql/graphql-intro
category: graphql
---

## Graphql

As an alternative to the regular RESTful API with tons of complicated routing to create the necessary endpoints, graphql has three main actions, 'query', 'mutate' and 'subscribe (to events)'. Graphql was originally created by Facebook as a tool to simplify all the data fetching they were doing for components. The principle idea is to aggregate all of the available data into a typed schema which can be queried by the client. The client can format a query with exactly the data it needs according to the available schema, and the data is returned in the same structure, making it incredibly easy to parse. The main advertised benefit of GraphQL is fetching only the data wanted - no more underfetching or overfetching too much data from the server.

Graphql doesn't stand up on it's own though, it needs data sources to interface with, whether that is a through Rails backend to Postgresql, Django MySQL, MongoDB, or any other API that can be called and resolved. The beauty is that all of these calls can be made from the graphql server and resolved, keeping it abstracted away from the client.

##### Refresher on APIs

An API or Application Programming Interface defines how applications can interact with and obtain data from one another. It details the kinds of calls or requests that can be made, how to make them, which data formats should be used, etc. In web terms, it defines how a client can load data from a server.

HTTP or Hypertext Transfer Protocol is a way of sending request messages, and requesting a response with certain format, older was XML and now JSON. An example of this is adding a shipping rate request to the app so that it doesn't have to store an entire data table of shipping rates, nor maintain it when they change.

Respresentation State Transfer or ReST, is a stateless protocol and standard set of crud operations such as GET, PUT, PATCH, DELETE, OPTIONS, TRACE. Although there are others, such as SOAP, REST is the most common for web servers.

GraphQL is a new API standard as an alternative to REST. Instead of 'hitting' multiple endpoints to retrieve all the different data needed, graphql exposes a single endpoint and responds with data in exactly the same shape as requested. This is called `declarative data fetching`.

### Graphql as an extra layer on the stack

You still need a database or other set of API endpoints for Graphql to Query. It doesn't replace database technology, just allows for a unified access point once a project has multiple APIs to query in order to build the client side web app. Even if the underlying APIs change, as long as the schema and types are maintained, nothing changes for the client. No more learning multiple sets of APIs by heart.

### That sweet spot of data

One benefit touted in the docs is no more over- or under-fetching. Restful API endpoints are fixed data structures and may return too little (underfetching and the N+1 problem) or way too much (overfetching). With the graphql query you literally only get what you ask for.

### Rapid frontend iteration

Instead of a cycle of fine-tuning API endpoints, or adding tons and tons of custom ones for each different query variation, the frontend dev can simply reconfigure the query if graphiql and get the additional data needed (caveat: data must already be built into the schema to start with). But, assuming everything added in as it is built, eliminates the need for endpoint overload.

### Graphiql makes queries easy

Once data has been connected in, the provided dashboard called graphiql is the necessary visual tool to:

a) make sure your schema and queries are available as expected
b) play with queries and available data in real time before using them in code

The strongly typed system helps define the capabilities of the API. All the types exposed are written down in a schema using the GraphQL Schema Definition Language (SDL). Only the data exposed in the schema is available. As the schema sits in the middle between front and back end, frontend devs can simply mock the data structures they'll be getting, and the backend can develop to that, turning it on when ready.

### Built in analytics

Graphql has additional functionality of insights about the data being used. It can even monitor the performance of the resolver functions and provide insights into the potential bottlenecks.
