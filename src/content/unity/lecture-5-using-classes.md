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

Once an object has been instantiated, we can interact with it to access information about its state. The state of an object is held within its properties. For example, Dr. Ts customm class only has a single property, _empty_ which is listed as being a boolean data type. It only lists 'get' in the list of things we can do, we can read it. If it lists set, it can be written, and if it lists both, we can read and write.

```c#
// acces and print empty value of deck object
bool deckEmpty == deck.Empty;
```

Properties and methods can look very similar in C#. One important difference is that properties cannot get passed values, and so they are called without any parentheses.

```c#
// property call of value of deck.Empty
bool deckEmpty == deck.Empty;

// method call that would "empty" the deck
deck.Empty();
```

### Class Methods

Methods are what we can consider the _behaviors_ of an object. The documentation for any Class will show us which methods are available to be `called`, and we call them by their name. So, a possible method to write for the playing card class is _Shuffle_, which might look like this in the docs:

```c#
// Deck.Shuffle Method
// Syntax:
public void Shuffle()
```

The important part right now is the `void`, it tells us that this method does not return any information or values back. For a method like shuffle this makes sense, all it needs to do is re-order the cards internally. It still needs a parenthesis at the end, albeit empty, which makes sure we call it as a method and not trying to access it as a property.

```c#
deck.Shuffle();
```

When creating methods, if those methods need information given to them, those are called the `parameters`. If we use an example of wanting to cut a deck, we'd need to know how many cards in we would make the split, we could call that the location.

```c#
// Deck.Cut Method
// Syntax:
public void Cut (
  int location
)
```

On the other hand, when we are actually `calling` the method, we need to give it the information needed to fit those parameters. And each individual time we call it, it is said that we "pass in" `arguments` for that method. So to actually cut the deck, the code would look like this:

```c#
// cut the cards at 10 deep
deck.Cut(10)
```

Finally, a method can be created to actually return some type of value (or reference). A _TakeTopCard_ method might return a single card from the deck. The documentation for it might look like this, where a Deck object is made of many Card objects:

```c#
public Card TakeTopCard()
```

And calling it would look like this, remembering to capture the returned information in it's own variable. (An _unassigned_ returned value would just get lost and garbage collected to save memory space since nothing would be _pointing_ at it, lost like an orphan).

```c#
Card card1 = deck.TakeTopCard();
```

And now we can take this _Card_ object and access it's properties such as Rank and Suit.

```c#
Console.WriteLine(card1.Rank + " of " + card1.Suit);
```

NB: Notice the spaces around the word _of_ in order to create a human readable string instead of values smashed together.

The returned information doesn't have to be saved as a variable, we can choose to use that same mechanism to discard information when it is no longer needed.
