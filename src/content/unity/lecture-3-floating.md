---
title: Bits n Bytes
path: /unity/lecture-2
date: 2020-12-23
category: unity
---

Here is a quick review of basic data science concepts

Bit - Single computing switch that can be a 1 or a 0
Byte - Set of 8 bits that can be on or off

### Calculating with bits

If you have two bits, you can have a total of 4 possible combinations, written in binary

`00 01 10 11`

For each number N of things to represent, one needs 2^b bits.

`N = 2^b`

For 2 things, N = 2, you only need one bit, because 2^1 is what equals 2

As a statement then, you need Log 2

Inversely, with 4 bits, you can calculate 16 permutations, as 2 to the 4th is 16.

### Data Types

Bits can represent many things, the sequence `01000001` represents the number 65 in binary, but also represents the letter A in ASCII, or could be the read value of a pixel. So what those 1's and 0's represent is important to know not only what they are, but what valid operations we can apply to those 1's and 0s. Adding integers to evaluate to true doesn't make a lot of sense. Data types, such as integers, boolean values, and arrays all are represented at their core by a set of bytes.

Memory is comprised of a compartmented set of locations that are given addresses, and each memory location has contents, the bits are held as physical switches that are either on or off (no dimmer switches lol).

So, in a program, to be able to access a set of locations in memory that comprise the data object we want, it is given a human readable name that points to it. In C# we have to declare both the data type and the variable name. The data type determines, among other things, how many bits in memory need to be allocated, and this allocation is performed upon declaration. The variable name is the name the programmer will use to reference that location in memory each time it it needed. A variable can be defined as it is declared, or it can be left for later to write contents to that address in memory.

#### Constant Variables

One special rule is when declaring a variable that is paradoxically to remain _constant_ in its value. So if you want to have a variable pi that equals 3.14 and is always that and never can change, you declare it as a constant and define the value at the same time, after which it is locked.

#### Integers

Integers are Whole numbers that have no fractional part. In C#, there are four different integer data types that one can choose to work with.

Byte - 8 bits
Short - 16 bits
Int - 32 bits
Long - 64 bits

In programming, when integers are divided with the standard division operator `/`, the quotient is returned. And so to get the remainder of that, since you can't get a decimal, there is the modulo operator `%`, which returns the remainder, or 0 if the number was divided evenly.

### Example Code

Here is a sample program that writes the minutes and seconds played based on an arbitrary set integer.

```c#
using System;

/// <summary>
/// Integer Data Types Lecture Code
/// </summary>

namespace lecture_two
{
    class Program
    {
        /// <summary>
        /// Demonstrate int types
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            int totalSecondsPlayed = 100;
            const int SecondsPerMinute = 60;
            // Calculate minutes and seconds played


            int minutesPlayed = totalSecondsPlayed / SecondsPerMinute;
            int secondsPlayed = totalSecondsPlayed % SecondsPerMinute;
            // print results
            Console.WriteLine("Minutes Played: " + minutesPlayed);
            Console.WriteLine("Seconds Played: " + secondsPlayed);

        }
    }
}
```

NB: Although you can use var to declare a space in memory to be of unknown data type, it isn't good practice to do so.

### Memory Limits of Integers

The largest integer you can represent with a standard int data type in C# is 2,147,483,647, and the smallest value is `2,147,483,648. This is important in unexpected ways, such as when your video game goes viral and some crazy player racks up more than that in points or money.

### Value Types vs Reference Types

Although it is early in the lecture series, it is important to note that there are actually two variants of data types. Value types, such as integers, are coded to their value. Other objects are more complex and the reference is to a memory address.
