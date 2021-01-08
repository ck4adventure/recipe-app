---
title: Game Timers
path: /unity/lecture-10
date: 2020-01-08
category: unity
---

Game timers can be super helpful. Common uses are keeping track of the time limit of a level, deciding when to spawn new objects into the game world, or setting a time limit on how long they exist (death timer). Increasing the difficulty level based on an elapsed time is also a common tactic.

### Simple Timer Setup

Below are some fields and their uses in creating a timer.

```c#
public class Timer : MonoBehaviour
{
  #region Fields
  // timer duration, how long we will let it run
  float totalSeconds = 0;
  // timer execution
  // how long running since started
  float elapsedSeconds = 0;
  // is timer currently running
  bool running = false;
  // support for Finished property
  bool started = false;

  #endregion
  ...

}
```

Next, we add a method inside our class to actually run the timer.

```c#
...
  #region Methods

  void Update()
  {
    // update timer and check for finished
    if (running)
    {
      elapsedSeconds += Time.deltaTime;
      if (elapsedSeconds >= totalSeconds)
      {
        running = false;
      }
    }
  }

  public void Run()
  {
    // only run with valid duration
    if (totalSeconds > 0)
    {
      // now we change our `flags` to start
      // and ensure elapsed is reset
      started = true;
      running = true;
      elapsedSeconds = 0;
    }
  }
  #endregion
  ...
```

Plus, we have some Properties we can make available to outside entities:

```c#
  // sets duration of the timer only if not running
  public float Duration
  {
    set
    {
      if (!running)
      {
        totalSeconds = value;
      }
    }
  }

  public bool Finished
  {
    // must have been started, but no longer running
    get { return started && !running; }
  }

  public bool Running
  {
    get { return running; }
  }

  // gets whether or not timer has finished
```

Finally, we actually utilize the start and update methods together.

```c#
...
  void Start()
  {
    // create and run timer, adding a component programmatically
    timer = gameObject.AddComponent<Timer>();
    timer.Duration = 3;
    timer.Run ();

    // save start time
    startTime = Time.time;
  }

  void Update()
  {
    // check for timer just finihsed
    if (timer.Finished)
    {
      float elapsedTime = Time.time = startTime;
      print("Timer ran for " + elapsedTime + " seconds");

      // save start time and restart the timer
      startTime = Time.time;
      timer.Run();
    }
  }
```

As long as the script is attached to a gameobject, it will be able to run when you start the game.
