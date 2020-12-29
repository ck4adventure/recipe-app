---
title: Object Oriented Programming
path: /unity/lecture-4
date: 2020-12-30
category: unity
---

An easy way to think about object oriented programming is to start with the concepts of objects. In creating a game, we create simulated 'world' in either 2D or 3D in which the player interacts with different object. Not only does the player have a floor, walls, and ceiling, there are bushes, tables, rocks and other objects, as well as possibly the player itself, any weapons or tools, etc.

Each object has 3 main programming characteristics. Firstly, it has state. The state is the characteristics of that object such as where it is located in the world, is it rotated, does it have a velocity, etc. The state is considered characteristics of the object that are expected to change as we run the game.

The second thing each object will have is a coded set of behaviors. What can we tell the object to do, or even do to itself? A player can apply thrust to move a spaceship, weapons have behaviors of being thrown or fired, a bomb in a game can count down and destroy itself.

The last and crucial part of programming objects is their identity. Each must be known about and uniquely callable, and that is usually done per it's location "address" in memory.

### Objects in C#

A playing card makes a somewhat good exmple object in terms of game programming. A playing card can have state. It has a rank, suit, can be face up or not. A hand of playing cards, a complex object, might have the state of count of cards which would change throughout the game.

State is stored as `fields` in C#. Those are really the variables inside the object. Any entities or consumers of that class can access those properties.

The behavioral aspects of the card would be written in as `methods`. The term function is the same as method, but in C# Dr. T tells us to call them methods. He doesn't elaborate if there are any crucial differences on that terminology.

Lastly, the identity of the card is established when it is `instantiated` as an object of the playing card `class`. The memory address given to it is how it is accessed and works as a unique identifier.

### Key terms

`Encapsulation` is the idea of storing the data and the methods together for an `object`.
`Information hiding` is where other entities interact to access the available properties and behaviors, but don't have anything to do with how that happens and can't see it

A `class` is a type of template or cookie cutter that determines the state and behavior of the objects that will be created from it. An `object` would be the actual stamped out cookie, in this case an actual instance in memory instantiated/created that has that it's own state and behaviors in it. A King of Hearts would have a different memory location than the Queen of Diamonds, as well as differing state to declare the values of each, even though both are instances of the playing card class.

In C#, classes are commonly displayed with three main aspects. The representation is called `UML` which stands for `Unified Modeling Language`. The `fields` tell us the name and data type of each variable stored for the object. `Properties` are how other entities are able to access those fields and whether or not can perform operations on them more than just _get_. And the `methods` section tell us what behaviors we can perform, such as `FlipOver()` a card.

### Value types vs. Reference Types

Variables that are created and declared to be of a class are considered `reference types`. They simply reference the location in memory that the object can be found at.

By contrast, `value types` are things like integers that point to that exact value already stored in memory. For example, the number 13 is an integer stored in memory and any variable that was set to equal the integer 13 would point to that same place.
