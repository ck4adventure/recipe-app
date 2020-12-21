---
path: /basics/iteration
date: 2020-11-23
title: Basics - Iteration
category: basics
---

## While

```
i = 1
while i <= 5
  //do stuff
  i +=1
end
```

```
while (some condition true)
  // do stuff
  // until something gets set to false
end
```

## For

Traditional Integer Style

```
for (let i = 0; i <= N; i++) {
  // do stuff
}
```

Newer object iteration pattern (good in js)

```
for (let char in string) {

}
```

In Ruby, just use each

```
object.each do |item|
end
```

## Breaking Out

Keywords in loops
`break` - ends completely
`continue` - skips any remaining code in block and start from top
