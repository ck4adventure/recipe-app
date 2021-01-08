---
title: Conditional Logic
path: /unity/lecture-9
date: 2020-01-07
category: unity
---

Booleans in C# are called with type `bool`. It returns true or false.

A boolean expression is any expression that evals to only true/false.

Logical operators `&&` AND, and `||` OR.

The `!` stands for `not` or opposite. `!True` is `False`.

Also important is the relational comparison `==`. There is also `<`, `>`, etc as we learned in basic math.

A basic `if` block in C# looks like this:

```c#
if (expression like a < b )
{
 // if true, any code here gets evaluated
}
```

An `if-elseif-else` adds the else directly below:

```c#
if (expression)
{
 // do stuff
}
else if (other expression)
{
 // other stuff
}
else {

}
```
