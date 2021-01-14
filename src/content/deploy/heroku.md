---
title: Heroku COmmands
date: 2021-01-14
path: /deploy/heroku
category: deploy
---

Assuming heroku cli already set up and stored auth creds.

To send to heroku `git push heroku master`

To reset the postgres database while developing poc `heroku pg:reset`
To migrate run `heroku run rails db:migrate`
To run rake commands through heroku `heroku run rake <commands>`
