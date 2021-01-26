---
title: Unity Review pt 2
path: /unity/review-2
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

##### Random Force Generator Script

```c#
  // get the game object moving
  const float MinImpulseForce = 3f;
  const float MaxImpulseForce = 5f;
  float angle = Random.Range(0, 2 * Mathf.PI);
  Vector2 direction = new Vector2(
      Mathf.Cos(angle), Mathf.Sin(angle));
  float magnitude = Random.Range(MinImpulseForce, MaxImpulseForce);
  // Unity will do the vector multiplication for you
  GetComponent<Rigidbody2D>().AddForce(
      direction * magnitude,
      ForceMode2D.Impulse);
```

### Adding a collider

As mentioned before, different aspects of existing as a physical entity are broken up into different components to allow complex control. So in order to exert a force on an object and make it move, it needs to have some sort of `body` component, such as `RigidBody2D`. But in order for it to know that it has encountered another object, it needs to also have a `Collider` component, such as `BoxCollider` or `CircleCollider`, or you can specify a complex `CompositeCollider` amongst others.

So to add the collider aspect, click on the game object in the `Hierarchy` and then use the `Inspector` to `Add a Component`, and this time select the `BoxCollider2D` from the 2D section.

But that's only half the story. A collider only provides the mechanism to detect and react. "Detect and react what?" is hopefully the next question, and that means providing a component that provides information about the physical `material` that is interacting on that collision.

### Adding a Material

First, add a folder called `Materials` under `Assets`. Next, use either the `+` menu under project or go to `Assets > Create` and choose `Physics Material 2D`. This will create a file that you must name, for this example one material we need is an `EdgeMaterial`. When you view it in the `Inspector` you will notice it only has two properties, the `Friction` and `Bounciness` which are the coefficients used to calculate just how much of each property the object is imbued with. By default, a material starts out with some friction and no bounce.

For walls that we want to simply bounce things off of, reduce the friction to 0 and increase the bounciness to 1.

Finally, we need to connect the Materials to their respective Colliders. Although the Teddy has to components that can take a material, for now, we just want it to be acting upon the BoxCollider2D. And when you view it in the inspector, there is a field called `Material` to set just that. You can use the `Select` target on the right hand side to open a chooser panel. Or, Unity will set the link by simply dragging the Material across the screen and dropping it into the field. Playing around with it, the component box doesn't even have to be open, it will recognize the data type and hook it automagically.

Once a few materials have been set to the colliders, pressing play to watch an item move and bounce is pretty fun.

### Adding custom behavior

To know more about how Unity handles collisions, it is best to [read up on the documentation](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Collision2D.html). Here we learn that collision information is passed into three separate events, `enter`, `stay`, and `exit`. 2D collisions are classed by MonoBehavior, and are a simplified version of 3D collisions. For now, all we will need is `OnCollisionEnter2D`.

This is passed the `collision` class (rather than a collider), which contains useful information about contact points and impact velocity. Collisions only work if at least one object has a non-kinematic rigidbody attached.

### Bouncing off Walls Summary

In Review: A game object gets the basic ability to be acted upon by force by adding a "body" type component such as `RigidBody2D`. Additionally, it will need a "collider" to know when it interacts with the boundaries of other objects, like `BoxCollider 2D` or `EdgeCollider`. Finally, two basic properties of friction and bounciness are added through a `Material` file, which is attached to the Collider. Assuming there is a script of some sort attached to the game object to move it by adding force vectors on start, the object will have enough basic properties to be propelled across the screen and bounce off of other objects.
