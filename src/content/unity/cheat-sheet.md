---
title: Summary Sheet
path: /unity/code-snippets
date: 2021-01-08
category: unity
---

### Call, change and pass

```c#
Vector3 newScale = transform.localScale;
newScale.x = // new value
newScale.y = // new value
transform.localScale = newScale;
```

##### Adding Sprites

Sprites are stored in the `Sprites` folder under `Assets` and can be drag-n-dropped via the local OS.

Drag and drop the sprite image from the project folder to the hierarchy to add it to the game scene.

##### Adding Scripts

Scripts are stored in `Assets > Scripts`. They are attached via drag-n-drop to game objects in the hierarchy.

##### Adding Scenes

Most unity projects open up with a single `SampleScene` which can be renamed at will. `Scene0` is Dr. T's preferred initial scene naming convention.

### Unity Components

Adding a component to a game object is as simple as clicking `Add Component` in the inspector. Each of these adds new complex functionality to the game object, such as defining a set of properties like `Rigidbody2D` to determine its behavior.

##### Adjusting the laws of physics

Gravity can be turned off, along with a host of other options, by going into `Edit > Project Settings...`. A large control panel should open up, and 2/3 down is the 2D physics controls. Make sure the game is not in play mode, make the changes and save the project.

### Creating Prefabs

Simply add a `Prefabs` folder under `Assets`. Now, drag a game object over into to the folder and it will automagically be turned into a Prefab that can be instanced. Each object in the hierarchy gets a unique name.

### Debugging

Simply place a breakpoint in your code, under `Run` click `Attach to Process...` and choose the `Unity Debugger`, then let er rip.

### Current Abilities

- Add a teddy bear image as a sprite and hop it around the screen given min/max coords and random choosing within that range
- put a rigid collison box around a teddy bear asset and 4 edge colliders on the screen, change from friction to bouncy and watch it go (remember to turn off gravity in proj settings), uses a 1 sec timer and some force
- using a 1 sec timer, grow and shrink the scale of a teddy bear asset
- create Prefabs and add overrides
- use switch cases to create a basic console app menu using writeline and readline
