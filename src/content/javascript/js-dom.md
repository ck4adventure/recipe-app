---
title: JS DOM Access
date: 2020-11-24
path: /javascript/js-dom
category: javascript
---

### Most common query methods to access a part of the DOM

```js
document.getElementById(id)
document.getElementsByClassName(className)
document.getElementsByTagName(tagName)
document.querySelector(cssSelector)
document.querySelectorAll(cssSelector)
```

### Example DOM Tree Creation

```js
var doc = document.implementation.createDocument("", "", null)
var peopleElem = doc.createElement("people")

var personElem1 = doc.createElement("person")
personElem1.setAttribute("first-name", "eric")
personElem1.setAttribute("middle-initial", "h")
personElem1.setAttribute("last-name", "jung")

var addressElem1 = doc.createElement("address")
addressElem1.setAttribute("street", "321 south st")
addressElem1.setAttribute("city", "denver")
addressElem1.setAttribute("state", "co")
addressElem1.setAttribute("country", "usa")
personElem1.appendChild(addressElem1)

//repeat for personElem2 and addresses
peopleElem.appendChild(personElem1)
peopleElem.appendChild(personElem2)

doc.appendChild(peopleElem)
```
