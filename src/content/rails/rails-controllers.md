---
title: Rails Controllers
date: 2021-01-05
path: /rails/rails-controllers
category: rails
---

Rails controllers get pretty spiffy.

```bash
rails generate controller api/v1/Recipes index create show destroy -j=false -y=false --skip-template-engine --no-helper
```

This is the standard generate controller, but it specifies the subfolders along with Name, defines only the actions index, create, show, and destroy. The `-j=false` keeps it from automatically creating associated js files. `-y=false` tells rails not to generate an individual style sheet for it. `--skip-template-engine` keeps rails from creating extra views, we are using the React entry point. And finally, `--no-helper` doesn't create any extra helper files.
