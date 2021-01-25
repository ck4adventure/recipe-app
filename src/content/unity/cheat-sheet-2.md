---
title: Working with Scripts
path: /unity/scripts
date: 2021-01-21
category: unity
---

### Creating 2D game objects

To be able to add real world physics to something, it first has to be given a "body" to simulate the physical properties it has that will interact with the simulated environment our game world is created in. A simple body to give an object is a component called `RigidBody2D`. This will utilize the 2D physics engine (as opposed to 3D), which is enough complexity for starting out. And the nerd in me wants to point out that these all imply time as an uncounted dimension

### Working with Unity Scripts

Each c# script comes pretemplated as a class and is given two class methods most commonly called, `Start()` and `Update()`. Start, as you might guess, is only called once, the first time the gameobject appears in the game. Update runs on each frame update, which varies dynamically based on how many objects are drawn into each frame, amonst other things, I would assume.

As a general rule, any changes that you need to make so that the object is instantiated and displays properly on first view go into Start, and

### Working with Transform

This is an example of the `copy, change, copy` pattern that is inherent to working with C#.
To quadruple the width and height of something by scaling it's transform:

```c#
// quadruple width and height
Vector3 = newScale = transform.localScale;
newScale.x *=4;
newScale.y *=4;
transform.localScale = newScale;
```

### Moving a 2D object with AddForce

So now that we have a `RigidBody2D` component to act upon, there are plenty of methods we can call to determine's its behavior. When looking at the documentation, one of the easiest is `AddForce`.

`AddForce` takes in two parameters, the 2 dimensional force vector, and the type of force to apply. When looking at the force `mode`, we see that it is an enum and has 4 possible values. If none is given, the mode `Force` will be used, which is a steady constant change along the vector given. For now, `Impulse` is the type of force to use.

Since our script is (or will be) attached to a specific Game Object, we use that knowledge to also know that we can ask for the `<RigidBody2D> Component` to be able to modify it directly.

For example, we could put in the start method a reference to the component so we can act on it:

```c#
Rigidbody2D rb = GetComponent<Rigidbody2D>();
```

and then modify it by adding a force vector that moves it. Notice how we can still call an expression to create the new Vector right in the parameters we are passing in.

```c#
rb.AddForce(new Vector2(1,0), ForceMode2D.Impulse);
```

Don't forget to save the script, and make sure it is attached to a game object with a `RigidBody2D` component.

Both lines can be combined into the following shorthand:

```c#
GetComponent<Rigidbody2D>().AddForce(new Vector2(1,0), ForceMode2D.Impulse);
```

### Adding a collider