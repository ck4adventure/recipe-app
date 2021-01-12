---
title: Basic Object Spawning
path: /unity/lecture-10
date: 2020-01-09
category: unity
---

This lecture will discuss how to spawn lots of game objects using a timer system.

### Making fields public

There are times when you will want to be able to see and change the values of script objects from within the Unity Inspector panel. One cheat is to simply write `public` in front of the variables in your script. But this goes against information best practice standards. Instead, use the `[SerializeField]` statement above each line that you want to make the variable public. This will create a field in the Inspector panel with the data type and variable name.

### Spawn Timing Control

In order to continue spawning new teddy bears (our game object sprite), we will need to have code that controls how often we spawn new ones. We learned previously that the update process is run each time a frame occurs, which can be multiple times per second. So a minimum set time is necessary to check against before spawning the next game object.

If we want to add extra fun, changing up the timing of how often a new teddy spawns is a good way to make it feel more natural. An easy pattern to do so is to set a min and max range of the time allowed to pass in between spawns. Then use a random generator to set a random new spawntime each time the previous one elapses and a new object is created. For the lecture, Dr. T sets a range of 1-2 seconds, and the Random method can take a range.

### Spawn Location Control

Similarly to how we need to control how often a game object can spawn, controlling where it spawns on the screen is important. A pattern given is to set a margin or boundary that will keep the game from going all the way to the edges of the screen, then use the Screen.height and Screen.width minus that border width to get the available coordinate ranges (min/max x and y) the object can be placed within, and setting those as variables.

### In Start()

In the start method, this is where we can query the screen size and set the min and max x and y coordinate values. Next, we can add the Timer as a component to our gameObject and save the reference to that as a variable. We can use this timer instance to set a duration using a `Random.Range(min,max)` and then tell it to run.

### In Update()

Once our timer is running, eventually enough frames will be run that the time specified in the timer duration will have elapsed. By checking the available method Timer.Finished, we can set a conditional that will spawn a bear and then set a new timer, also with a random duration.

Spawning a bear is done by creating a Vector3 data type called location. The x and y coords and again set by calling a Random.Range, using the min and max x and y values set when the script was started. Although it is a 2D game, there is a 3D component of the camera's distance from the object. So in order to get it on the 0-plane of the game world, one simply places it at the reverse value of the z position of the camera. `-Camera.main.transform.position.z`, and then calls a `ScreenToWorldPoint` method to convert the pixel/screen locations into a local world location.

Now that we have where we want the teddy bear to go, we can `Instantiate(prefabTeddyBear) as GameObject` and use that game object reference to set the location. It will also need a sprite to determine how it looks, so we again take advantage of `Random.range(0,3)` to pick a number between 0 and 2 inclusive, and use a selection control structure (if/else if or switch) to render the appropriate sprite version.
