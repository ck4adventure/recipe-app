---
title: Rails Routes
date: 2020-10-10
path: /rails/rails-routes
category: rails
---

## Rails Routing

A refresher on setting up complex routes and controllers.

## Set basic routes

`/config/routes.rb`

`resources :users`

Which creates the following:

```ruby
get '/users', to: 'users#index', as: 'users'
post '/users', to: 'users#create'
get '/users/new', to: 'users#new', as: 'new_user'
get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
get '/users/:id', to: 'users#show', as: 'user'
patch '/users/:id', to: 'users#update'
put '/users/:id', to: 'users#update'
delete '/user/:id', to: 'users#destroy'
```

#### Routes Examples

```ru
root_to 'mycontroller#index'

resources :users

resources :session, only: [:new, :create, :destroy]

resources :items, except: [:destroy] members do
  resources :weapons, shallow: true
end

resources :weapons, only: [:update, :edit, :create]
```

#### Removing CSRF Protection for Postman Testing

Add `config.action_controller.default_protect_from_forgery = false` right after `config.load_defaults 5.2` in the `config/application.rb` file
