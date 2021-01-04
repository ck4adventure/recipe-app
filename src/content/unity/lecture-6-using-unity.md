---
title: Using Unity
path: /unity/lecture-6
date: 2020-12-30
category: unity
---

In Unity there are a couple of conventions to be aware of.

### Dr. T's Unity Layout

On the left should be a tab section for the project folders, such as our scripts.

Just inside of that is the Hierarchy section, and this lists all the objects that are in the current scene. By default, there is a main camera created for a 2D scene, so that should be visible.

To the right of the Hierarchy is a double set of views. On top is the Scene View, and it shows you visually what is in the scene, which for us is empty since we only have the camera object, which can't see itself. In this view we can zoom in and inspect all the different objects of the game.

Below the Scene View is the Game View which shows us what the game looks like as a player would see it.

To the right of that is the inspector, which will display properties of any selected object. And somewhere in there at the bottom should be a console display, which helps debug error messages and display logs while developing the game.

### Concepts of Games

Sprites or sprite strips are image frames. Game object are any objects that are part of the game scene, usually that the player will see and interact with, but can also include a camera.

Sprites are best organizing by creating a project subfolder to hold them, same as we do scenes.

Unity is an advanced IDE and you can simply drag and drop image asset files and they will be copied into your project.

### Handling small assets

Usually, you should know exactly what size you need your assets and make them accordingly so they remain smooth and unpixelated at whatever the largest required view is. If you have tiny assets, changing their `scale` size will almost certainly pixelate them. One workaround is to set the `Camera Size` smaller in order to pick up on smaller objects better.

### Unity's Component System

A scene has a main camera. In 2D scenes, leaving the camera in orthographic projection is common.

All game objects get a transform function by default so that we can set position, rotation and scale so that we can position our objects anywhere on the screen and adjust their appearance.

A sprite renderer is used draw the sprite in addition to the scale and rotation.

There is also a transform camera, GUI layer, flare layer, and audio listener. Each of these components in the system can be added or removed as needed to provide modifications to state and behavior.

Custom conponents can also be added by writing our own scripts.

### C# Scripts

As a general rule, the scripts a programmer would write for the Unity game objects are classes. These classes are slightly different in that a constructor is not commonly used. Scripts are attached to game objects and instantiated once the game object is part of a scene.

As mentioned elsewhere, it is good practice to keep a separate `Scripts` folder within the project.

Once a script has been created, it can be opened and edited in Visual Studio. When it is ready, it must be attached to an object so that the script actually gets instantiated an run. The same script can be attached to multiple objects, such as both a game object and the main camera.

### Debugging

Debugging, which gets its name from the early start of programming when something wouldn't run right, is still a major part of programming today. Since modern applications can be incredibly complex sets of code, there are a few strategies that can really help find and fix problems when they occur.

First off, it is almost never wise to simply start playing around in a debugger or mentally running through code lines to find the error. Use the error message for as many clues as possible to point you in the right direction before starting. I can't tell you how often I will look at a new error message and think I understand what it means and then find myself picking it apart 10mins later to get the details.

Once you have an idea of where to start, setting a breakpoint in a debugger program is a great way to get the code to `break` or stop for you, hopefully somewhere in the code before the bug actually is. Choose to debug the program and attach the `Unity Debugger`, then click run. Once it reaches the breakpoint it will stop and wait. Here, you can take a moment to check on values of variables, and watch them as we go along using `Locals`. To keep moving through the code, the `step` command will take you through that line of code to the next. Once you have what you need, you will need to stop the debugger process, and then stop the code itself from running after that.

Remember to delete your breakpoints when you are finished with them so that you don't encounter unexpected behavior.

##### Side Quest: Changing Versions

Unity releases new minor versions on a regular cadence, and since a few years ago started naming them by year for easier reference. Some older projects may need an older version of Unity, which the `Unity Hub` can help provide. During this course I found myself having to go to the archival page to get Unity 5.6.0 from 2017. Luckily, it was the first avail to install itself through Unity Hub so that I didn't have to do a manual process.
