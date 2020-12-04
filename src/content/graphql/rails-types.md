---
title: Creating Types with Rails
path: /graphql/rails-types
date: 2020-12-04
---

## Creating Types

#### Create Types

Sample call that will autofill the types file with data from the db schema, where Post is the name of a valid model.

```bash
rails generate graphql:object Post
```

Sample call that adds additional typefields manually

```bash
rails generate graphql:object Post comment:[Comment]!
```

#### Check the generated file

You will end up with a file like `grapql/types/post_type.rb`, which will automatically be prefilled with all fields from the db schema for that model, along with any additonal types passed in the command.

Here you can remove any unwanted fields and make sure everything is declared properly:

```ru
module Types
  class RecipeType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :ingredients, [IngredientType], null: true
    field :steps, [StepType], null: true
  end
end
```
