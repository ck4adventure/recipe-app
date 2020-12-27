---
title: Working with IDEs
path: /unity/lecture-1
date: 2020-12-23
category: unity
---

In order to be introduced to some very basic concepts, we will be writing our first console app. The IDE is what we use to create `source code` which is then compiled by the `IDE` into `common intermediate language`, which will later be turned into the actual machine instructions that will run on the chip of whatever computer our software is actually running on.

So a high level programming language is compiled into an intermediary common languange `CIL` and then put into machine language.

# VS Code Apps

Start a new console project in C#, using .NET 3.1 and calling it `first-console-app` or similar.

### "`using`" other namespaces

At the very top of Program.cs, whichis the main file created for us, we see a directive that says `using System`. This is a type of import that allows all the code from the `System namespace` to be used in our app.

### documentation comments in XML

Next, we can write `documentation comments` in XML that will be picked up by other tools in order to generation a set of documentation for other developers who might use this code.

Start by typing in a couple forward slashes, and VS should autofill the rest to look like this template:

```xml
/// <summary>
///
/// </summary>
```

Any text added between will become part of the summary text. Here, I am just going to put something like "First Console App Lecture Code".

### Methods and Classes

Dr. T has us look up the methods within the [Console class on the docs](https://docs.microsoft.com/en-us/dotnet/api/system.console?view=netcore-3.1#methods) by going to the microsoft docs online.

There, we see a list of methods available within the console class, including the one just used, Console.WriteLine, and it specifies how that method will respond given different input arguments such as a string, decimal or object.

# Unity Apps

### Create a sample app

This time, we'll write a C# script in Unity. Start by clicking to add a new project, then choosing 2D and giving it a name.

Unity already starts out a proper file structure for us, creating an `Assets` folder. Inside of it should be another folder, `Scenes`, containing a single file called `SampleScene`.

Adding to this, make a second folder in assets called `Scripts`, and add a C# script file called `PrintMessage.cs` or similar.

### Set the preferred editor

This first time around, check to make sure that C# files will open with your editor of choice. For this course, it will be Visual Studio. Since this is the mac version, from the Unity main menu open `Preferences`, and then choose the `External Tools` submenu on the left side. From here, there is an option at the top of the main window to select which editor to open in order to edit scripts. Select Visual Studio and close to save.

### View your script file

Now that you've select a default editor, double click the PrintMessage file to open it. Here, you will see a couple of `using` statements at the top, along with a public class.

First, add a documentation comment above the public class declaration that summarizes what this class will do. In our case, it's something along the lines of _prints a message_.

Within the main class we get two methods for free, `Start` and `Update`. The start method is run when the game object which it is attached to is added to the `scene`. A `scene` is how gameplay is enabled for a any given environment, and is literally just the collection of objects needed, and includes the background, floor, player, items to interact with such as obstacles to avoid or coins to collect.

So, once an object is added to a scene, the start method runs before the first frame update occurs, and then the `Update` method takes over and is run once per frame.

As a reminder, visual animations are `rendered` or drawn on the screen, and this take a small but concrete amount of time. The rate of frames drawn on the screen is important for two main reasons. First, it is necessary to achieve a certain amount of _frames per second_ or `fps` in order to fool the human brain into believing the motion is occuring naturally or smoothly and not being drawn as individual pictures on a screen. Secondly, on the other side of that coin is the amount of graphical processing power it takes to draw each frame and how many frames per second can even be achieved. A very old system with few resources may only be capable of processing enough data to draw only a few frames per second.

### Output in Unity files

Since we don't need to output a message with every frame, we can safely delete the `Update()` method, leaving only `Start`.

From here, we can add a command similar to `Console.WriteLine` that we saw in our sample console app. But for Unity, the command is simply `print`.

1. Add something to the print args like "Howdy Partner", and then save and close the file.

2. Crucial is to `connect` the script to an object, in this case we can use the default Camera1 that exists with our scene.

3. Click the play button up in the top middle and watch for your script output in the Unity Console.
