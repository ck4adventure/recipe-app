---
title: Javascript Basic
date: 2021-01-19
path: /javascript/basics
category: javascript
---

### TODO

- history of ECMAScript
- how js works
- similarities and differences
- originally for the browser, but now also server side

### Type Coercion

One aspect of javascript is that it performs `type coercion`. In essence, if you try to evaluate an expression that doesn't contain the required data types, js will attempt to convert (hence coerce) that data into a suitable type in can operate on.

Examples:

```js
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true
```

This can both be a source of errors, or used to your advantage with built-in typecasting to save time.

### Node.js

Allows js to be run from the command line. Often a version manager such as `Node Version Manager (NMV)` is used to allow for multiple versions to run on the same OS.

##### Node's In Progress Features

Sometimes you will run into a feature that isn't fully supported on `stable` yet. Node provides a way to use staged features using the --harmony flag.

## ES5 vs ES6

ES5 was in use from 2009-2015, and many many current applications are still under this standard.

### Block Scoping vs. Function Scoping

ES5's `var` is function scoped
ES6 bring `let` and `const`, both block scoped instead, tighter control

##### Feature Table

ES6 was released in June 2015 and adds a wide variety of features.

Optimisation:

- proper tail calls

Syntax:

- default function parameters
- rest parameters
- spread syntax for iterable objects
- object literal extensions
- for..of loops
- octal and binary literals
- template literals
- regex "y" and "u" flags
- destructuring declarations
- destructuring assignment
- destructuring parameters
- unicode code pont escapes
- new target

### Closures

Closures are used in javascript for data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

A `Closure` is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JS, closures are created every time a function is created, at function creation time. This gives you access to an outer function's scope from an inner function.

promises
function based vs class inheritance
