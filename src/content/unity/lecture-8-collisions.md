---
title: Collisions!
path: /unity/lecture-8
date: 2020-01-07
category: unity
---

Collisions and collision detection are an integral part of any 2D game. How else is the player going to interact with the environment? Collisions include how things bounce when they hit the floor or other objects, can include the friction of sliding an object across another, or even reduce health if something knocks into the players character, for example. So the collision is the event, but really we can only follow it through `detection` and handle it through `resolution`. Similar to whether or not a tree that falls in the forest makes any sound, does a collision have any value if it isn't detected? Or would our objects simply overlap in some weird way and just keep going.

By adding `materials` to our colliders, we ensure the physics engine can provide the proper collision resolutions.

### Adding simple colliders

1. First, add a `box collider component` to your asset using the inspector on the right. You can click `edit collider` to change the size of the box to be more accurate to whatever object you have.

2. Next, add 4 additional `edge colliders` and place on each on the edges of the scene.

If we click play at this point, it isn't quite enough and we see the asset collide with the edge and then just travel along it.

This is because we haven't set the `materials` yet in the physics engine. By default, edge colliders are given friction and no bounce. For our game, however, we want zero friction and lots of bounce.

3. Add a new folder called `Materials` and add a source file of type `Physics2DMaterial`, and rename it to be `EdgeMaterial`. Add a second one and call it `TeddyBear`, or whatever your asset is.

4. Set the properties of each to be what you need.

5. Drag and drop the material across the IDE to the inspector to set the appropriate materials to the corresponding objects in the scene.

NB if you rename a file in Unity, need to make sure the classname inside the file gets chagned as well.

### Collision Resolvers

Looking up the documentation, Dr T shows us a method we can call inside our script that will be called each time the collision area is entered. What we are doing is adding additional behavior, feels like what in react is called a lifecycle hook really.

```c#
void onCollisionEnter2D(Collision2D coll)
{
  // do additional things here
}
```
