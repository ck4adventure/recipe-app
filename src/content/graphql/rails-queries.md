---
title: Rails Graphql Queries
path: /graphql/rails-queries
date: 2020-12-04
---

## Creating Queries for the Types

Now that there are at least a couple Types available as information, actions such as queries or mutations can be defined against it.

#### Set up an inheritable Base Query

1. First, set up a base directory to house all the queries files as they grow:
   `graphql/queries`

2. Create a file `/graohql/queries/base_file.rb`
   Insert the following code, which will save having to remember `GraphQL::Schema::Resolver` each time:

   ```ru
   module Queries
     class BaseQuery < GraphQL::Schema::Resolver
     end
   end
   ```

#### Create the first query

`/graphql/queries/fetch_notes.rb`

```ru
module Queries
  class FetchNotes < Queries::BaseQuery

    type [Types::NoteType], null: false

    def resolve
      # Standard ActiveRecord query!
      Note.all.order(created_at: :desc)
    end
  end
end
```

#### Declare it as a query type

`/graphql/types/query_type.rb`

```ru
module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_notes, resolver: Queries::FetchNotes
  end
end
```

#### Test the query

Start the server `rails s`

Navigate to `localhost:3000/graphiql`

Assuming all models and types are defined, use the interface to run a query such as:

```
query {
  fetchNotes {
    title
    id
    author {
      id
      name
    }
  }
}
```

##### taken from

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-graphql-api
