---
title: Working with Scripts
path: /unity/scripts
date: 2021-01-21
category: unity
---

### Working with Unity Scripts

Each c# script comes pretemplated as a class and is given two class methods most commonly called, `Start()` and `Update()`. Start, as you might guess, is only called once, the first time the gameobject appears in the game. Update runs on each frame update, which varies dynamically based on how many objects are drawn into each frame, amonst other things, I would assume.

As a general rule, any changes that you need to make so that the object is instantiated and displays properly on first view go into Start, and

#### Working with Transform

This is an example of the `copy, change, copy` pattern that is inherent to working with C#.
To quadruple the width and height of something by scaling it's transform:

```c#
// quadruple width and height
Vector3 = newScale = transform.localScale;
newScale.x *=4;
newScale.y *=4;
transform.localScale = newScale;
```

### Current Abilities

- Add a teddy bear image as a sprite and hop it around the screen given min/max coords and random choosing within that range
- put a rigid collison box around a teddy bear asset and 4 edge colliders on the screen, change from friction to bouncy and watch it go (remember to turn off gravity in proj settings), uses a 1 sec timer and some force
- using a 1 sec timer, grow and shrink the scale of a teddy bear asset
- create Prefabs and add overrides
- use switch cases to create a basic console app menu using writeline and readline
