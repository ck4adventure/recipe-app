---
title: Rails Setup
date: 2020-10-10
path: /rails/rails-setup
category: rails
---

Setting up a new rails app is done through the rails CLI. See the [cli docs here](https://guides.rubyonrails.org/command_line.html).

## New Rails App

`rails new <name>` is the basic command that will install a boilerplate app with a ton of functionality one would need if making a production app.

### Common Flags

Make sure to query the `rails new --help` to review all available options. But here are a few of the most used.

`-d=postgresql`, # Preconfigure for selected database (options: mysql/postgresql/sqlite3/oracle/frontbase/ibm_db/sqlserver/jdbcmysql/jdbcsqlite3/jdbcpostgresql/jdbc)
`-M`, `--skip-action-mailer`, # Skip Action Mailer files
`--skip-action-text`, # Skip Action Text gem
`--skip-action-storage`, # Skip Active Storage files
`--skip-turbolinks`, # Skip turbolinks gem
`-S`, `--skip-sprockets`, # Skip Sprockets files
`-T`, `--skip-test`, # Skip test files
`--api`, # Preconfigure smaller stack for API only apps
`--webpacker, [--webpack=WEBPACK]`, # Preconfigure Webpack with a particular framework (options: react, vue, angular, elm, stimulus)

## Add BDD and testing gems

#### Update the Gemfile

```ru
# top level, automatically turned on if api
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'

# adding Graphql
gem 'graphql'
```

```ru
group :development, :test do
  # personal dev gems
  # rspec testing, incls core, etc `rails g install:rspec`
  gem 'rspec-rails'
  # pry instead of irb
  gem 'pry-rails'
  # seed and test data generation
  gem 'factory_bot_rails'

end
```

```ru
group :development do
  # personal dev gems
  gem 'better_errors'
  gem 'binding_of_caller'
  # `annotate --models` for schema luv
  gem 'annotate'

    # gem for devving graphql
  gem 'graphiql-rails'
end
```

```ru
group :test do
  # personal dev gems
  # capaybara should come standard now
  # gem 'capybara'
  # hot rspec testing
  gem 'guard-rspec'
  # `Launchy.open(url)`
  gem 'launchy'
  # enables one-liner syntax
  gem 'shoulda-matchers'
  # faker data to work with factory bot
  gem 'faker'
  # cucumber for end to end testing
  gem 'cucumber-rails', require: false
  # database cleaner to keep it squeakin
  gem 'database_cleaner-active_record'
  # if going old school RoR controller testing
  gem 'rails-controller-testing'
end
```

#### Install new gems

Run `bundle install`

#### Install rspec testing

Run `rails g rspec:install`

#### Install Shoulda Matchers

Place this at the bottom of `spec/rails_helper.rb`:

```ru
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
```

#### Install cucumber bdd

Run `rails g cucumber:install`

#### Install annotate gem

This will set annotate to run automatically and with nicer data
Run `rails g annotate:install`

#### Configure Factory Bot Rails

If you're using Rails, add the following configuration to `spec/support/factory_bot.rb` and be sure to require that file in `rails_helper.rb`:

```ru
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
```

NB: Or you can paste the whole thing in the bottom of the `rails_helper.rb` ala shoulda-matchers config.

#### Configure Database Cleaner

Require the database cleaner in your `rails_helper.rb`, probably near where you require rspec at the top.

`require 'database_cleaner/active_record'`

Then, inside the config section:

```ru
RSpec.configure do |config|
  # ... add this section somewhere in your config
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end
```

## Setup DB

#### Postgresql

Make sure the postgres server is up and running on your local.

#### Create the project db

Doing this first can help make sure no errors and connected:

`rails db:create`

### Test it

Run `rails s` to make sure you get the default Rails App page and check that the server is working properly.
