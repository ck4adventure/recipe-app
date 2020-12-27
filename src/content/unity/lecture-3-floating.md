---
title: Real Numbers in C#
path: /unity/lecture-3
date: 2020-12-27
category: unity
---

Real numbers are those numbers with a decimal point. Within mathematics, real numbers are a part of what is called the continuous domain. There are an infinite amount of numbers that can be expressed between 0 and 1, for example. But, as we learned earlier about using binary bits to store data, since it takes two to the b bits in order to represent any real number N, it is actually impossible to represent the range of infinite real numbers in a computer.

The numbers we are able to represent is called the 'discrete domain'. We can represent most but not all real numbers with 1 and 0s, and sometimes this leads to inaccuracies in the numbers we can represent. Numbers with a decimal are often called `floating numbers`, which refers to the way the decimal can be shifted to the left or to the right through exponential notation.

### Floats and doubles

In C#, we have `float` and `double` as our two options for handling real numbers as data types. `Float` will be the most commonly used in C#, just as its usually gonna be `int` as our integer type. A `double` gets twice as many bits as floats, so they can represent many more things, and they perform the same mathematical operations as `float`. What my lecturer fails to mention at this point is that by taking up twice as many bits, using doubles takes up a lot more memory space and is inefficient unless super accurate calculations or large number processing needed.

### Casting data types

If you were to try this code in C#, it would print out `0`.

```c#
public static void Main(string[] args)
{
  int score = 1360;
  int totalSecondsPlayed = 10000;

  //calc and print points per second
  float pointsPerSecond = score / totalSecondsPlayed;
  Console.WriteLine("Points per second: " + pointsPerSecond);
}
```

Because both variables are stored as integers, the order of operations of calculation will happen _before_ the variable is declared and the result stored as a float. So it will be passed over as the integer result, which is zero.

In order to force the calculation as a float, one way is to simply declare one of the variables to be a float to begin with. This isn't efficient really, as now we are storing a simple integer with the additional baggage of being a float data type. Instead, computing offers us a better solution called `typecasting`. With typecasting, an extra operation is peformed on the variable, converting it over to the new data type and taking that returned value before proceeding with rest of the operation. Similarly to a person being `cast` into a role on a movie and plays a different part than their normal selves, type casting allows us to take information and treat it as something else, without affecting the underlying value.

For purposes of floats, once one of the operands is cast into float, that will force the other to also be calculated as a float and a float value returned and stored. So, in order to calculate the stats, the code should look something like this:

```c#
public static void Main(string[] args)
{
  int score = 1360;
  int totalSecondsPlayed = 10000;

  //calc and print points per second
  // single cast of one of the operands to the more complex float and it will return float
  float pointsPerSecond = float(score) / totalSecondsPlayed;
  Console.WriteLine("Points per second: " + pointsPerSecond);
}
```
