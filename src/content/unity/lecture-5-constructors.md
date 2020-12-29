---
title: Using Classes
path: /unity/lecture-5
date: 2020-12-30
category: unity
---
Being able to write your own classes that form the objects of your game is a central core to efficient coding. Below are the basics of working with them.

### Class Constructors
The `constructor` is how we instantiate a class and create the initial object. To interact with it, it would help to have the documentation for it in order to know what command to call and what arguments or information to pass in when we create it.

When using a custom class, it is important to remember to add the class source files into a folder within your project where (nowadays) it will be recognized by the IDE and become available as part of the 'intellisense' code suggestions. At the very least, those files need to be alongside the project when it is compiled into the intermediary language.

To declare a class variable it puts the type in front, but capital case to denote it's a class. Then we call the constructor to create the object and have that variable reference it.

```c#
// create an object from a class by calling the constructor
Deck deck = new Deck();
// can print if that method avail to show it exists
deck.Print();
```

### Class Properties

Once an object has been instantiated, we can interact with it to access information about its state. The state of an object is held within its properties. For example, Dr. Ts customm class only has a single property, *empty* which is listed as being a boolean data type. It only lists 'get' in the list of things we can do, we can read it. If it lists set, it can be written, and if it lists both, we can read and write.

```c#
// acces and print empty value of deck object
bool deckEmpty == deck.Empty;
```

Properties and methods can look very similar in C#. One important difference is that properties cannot get passed values, and so they are called without any parentheses. 

```c#
// property call of value of deck.Empty
bool deckEmpty == deck.Empty;

// method call that would "empty" the deck
deck.empty();
```

### Class Methods