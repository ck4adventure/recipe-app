---
title: Conditional Logic
path: /unity/lecture-9
date: 2020-01-07
category: unity
---

This lecture covers some of the basics of programming logic.

### Common Operators

Booleans in C# are called with type `bool`. It returns true or false.

A boolean expression is any expression that evals to only true/false.

Logical operators `&&` AND, and `||` OR.

The `!` stands for `not` or opposite. `!True` is `False`.

Also important is the relational comparison `==`. There is also `<`, `>`, etc as we learned in basic math.

### If and else

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

### Switch Statements

So, often we will want to do things based on user input, and a `switch` statement is the easiest way to hold more possible `cases` than using a long list of `if else`.

A very basic way of getting user input is through the console, taking the user's input and saving it to a variable.

```c#
Console.Write("Pick up the shiny thing? (1 for Yes, 2 for No)");
int answer = int.Parse(Console.ReadLine());
```

The actual switch statement starts like this:

```c#

switch (value)
{
  case 1:
    Console.WriteLine("You pick up the shiny thing");
    break;
  case 2:
    Console.WriteLine("You keep on walking");
    break;
  default:
    Console.WriteLine("That wasn't a valid choice");
}
```

The `value` is the variable you are checking the value of. Each `case` then holds as it's key the goal value to be compared against. It is automatically a `==` comparison unless a more complex expression is given. Can't switch on floats, for example.

Make sure to use a `break` after you are done with whatever code needed to be done for each case. Alternatively, a complex switch can utilize the `fallthrough` of code to run the next following case's code as well. But this can get messy.

Also, best practices dictate always having a `default` case that acts like a bit of a rescue if none of the other cases are matched. `Fallthrough` can sometimes also be used to allow multiple cases to all drop to the default code.

##### Creating a menu

A simple console game can be created through case statements and meta loops that keep it running until the user quits.
