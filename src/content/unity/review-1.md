---
title: Unity Review 1
path: /unity/review-1
date: 2021-01-08
category: unity
---

### Folder Setup

Once opening a new Unity2D project under hopefully a stable version, this will be the basic folder structure used, with the example of a simple apps files.

```
Assets
  Prefabs
   - rock
  Scenes
   - scene0
  Scripts
   - Rock
   - RockSpawner
   - Timer
  Sprites
   - greenrock
   - redrock
   - whiterock
```

##### Adding Scenes

Most unity projects open up with an initial `SampleScene` which can be renamed at will. `Scene0` is Dr. T's preferred initial scene naming convention.

##### Adding Sprites

Sprites are stored in the `Sprites` folder under `Assets` and can be drag-n-dropped via the local OS.

Drag and drop the sprite image from the project folder to the hierarchy to add it to the game scene. Most common formats are `png` and `jpeg`, but many are supported.

##### Adding Scripts

Scripts are stored in `Assets > Scripts`. Use the plus sign just below the `Project` label to add a new script. Whatever a script is given for a title, the class it creates will be given the same class name. If you need to change it later, right click on the file to `Rename` it. Unity will change the inner class name for you.

Scripts are attached via drag-n-drop to game objects in the hierarchy. Editing and compiling take place in `Visual Studio` rather than Unity. A common rookie mistake is to write scripts and forget to attach them to their objects.

##### Adding Materials

Materials are the way to give objects their physical characteristics. As an example, edge colliders won't function until given a material which defines how that edge collider reacts when a collision is registered. Two important physical properties determined by the material are `friction` and `bounciness`.

##### Adding Game Objects

The method we are learning to start with is by dragging a sprite over to the `Hierarchy` and placing it within the `scene0` folder, or the corresponding folder once multiple scenes are up and running.

##### Creating Prefabs

Simply add a `Prefabs` folder under `Assets`. Now, drag a game object over into to the folder and it will automagically be turned into a Prefab that can be instanced. Each object in the hierarchy must have a unique name.

### Asset Sizes and Camera Views

One way to handle working with smaller sized assets (such as little teddy bears and rocks in tutorials), or older sources, it can be useful to manipulate the viewport of the camera rather than using a transform to try and increase the size on render.

Changing the `size` of the `MainCamera` from 5 to 3 will zoom in closer to small assets and render them slightly larger without destroying their appearance.

Game graphics best practice is to keep all assets sizes at the power of 2. So 64x64 is very common, but 8x32 would be ok too, as long as each side on is a power of 2.

Use transparency around the object edges to create the padding necessary to get to the right proportions.

### Unity Components

All objects get certain components for free, such as `Transform` which specifies object placement, rotation, and scale within the game world. A Sprite will automatically have a `Sprite Renderer` component with it, to specify additional rendering params such as color, draw mode and layers.

Transform camera, GUI layer, flare layer and audio listener are all components.
Although many values can be set through the Inspector panel, mostly components will be referenced and updated through the scripts we attach to the game objects.

##### Adding a Component

Adding a component to a game object is as simple as selecting the object in the `Hieracrchy` and then mousing over to the `Inspector` window and clicking `Add Component`. Components are a way of adding small bits of complex behaviors and functionality to your game object as you shape it according to the virtual game world being created. One component is using `Rigidbody2D` to give an object properties to interact with gravity and have solidity. You can actually set the borders of what defines the object, most games try to get this fitted close as possible to the graphics, but a basic square works for tutorials.

##### Removing Components

To remove a component, it should have a `Remove Component` within the Inspector Panel when selected.

##### Scripts as components

Once a script is attached to a game object, it shows up as a component in the `Inspector` panel. Here, any serialized fields are displayed for view. Vital to remember is that scripts do not have to be written towards a single game object, rather, the efficiency is in writing many little scripts that work generically on a broad set of game objects for maximum effiency.

##### Adjusting the laws of physics

Gravity can be turned off, along with a host of other options, by going into `Edit > Project Settings...`. A large control panel should open up, and 2/3 down is the 2D physics controls. Make sure the game is not in play mode, make the changes and save the project.

### Call, change and pass

```c#
Vector3 newScale = transform.localScale;
newScale.x = // new value
newScale.y = // new value
transform.localScale = newScale;
```

### Debugging

Simply place a breakpoint in your code, under `Run` click `Attach to Process...` and choose the `Unity Debugger`, then let er rip.

### GameObject Methods

- `FindWithTag`

### Current Abilities

- Add a teddy bear image as a sprite and hop it around the screen given min/max coords and random choosing within that range
- put a rigid collison box around a teddy bear asset and 4 edge colliders on the screen, change from friction to bouncy and watch it go (remember to turn off gravity in proj settings), uses a 1 sec timer and some force
- using a 1 sec timer, grow and shrink the scale of a teddy bear asset
- create Prefabs and add overrides
- use switch cases to create a basic console app menu using writeline and readline
