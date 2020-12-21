---
title: Setting up Graphql on Rails
path: /graphql/setup-rails
date: 2020-12-04
category: graphql
---

## Graphql on Rails

Setting up the gems for graphql is super easy.

1. Add gems to bundle and install

   ```ru
   # adding Graphql
   gem 'graphql'

   group :development do
     # graphiql html dashboard to dev against
     gem 'graphiql-rails'
   end
   ```

2. Run the install

   ```ru
   rails g graphql:install
   ```

3. Configure Routes and Mount Engine in Dev

   From `/config/routes.rb`, make sure all these lines are there.

   ```ru
   Rails.application.routes.draw do
     if Rails.env.development?
       mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
     end
     post "/graphql", to: "graphql#execute"
     # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   end
   ```

4. Reinstate Railties

   From `/config/application.rb`, uncomment the sprockets/railties, as it is normally unneeded for an API app.

   ```ru
   require "action_cable/engine"
   require "sprockets/railtie"
   # require "rails/test_unit/railtie"
   ```

5. Manifest file

   Create a file called `app/assets/config/manifest.js` and add:

   ```js
   //= link graphiql/rails/application.css
   //= link graphiql/rails/application.js
   ```

6. Test graphiql endpoint

   Run `rails s` and navigate to `localhost:3000/graphiql`, you should see the query page and be able to do sample query.

   ```ru
   query {
       testField
   }
   ```
