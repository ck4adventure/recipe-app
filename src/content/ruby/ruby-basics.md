---
title: Ruby Review
date: 2020-05-04 14:27 -0700
path: /ruby/ruby-basics
category: ruby
---

Ruby Review

## Ruby uses implicit returns

Ruby automatically returns the return value of the last line of code for you if it exists.
JS needs an explicit return passed.

Side effects are thigns the code does not associated to the return value. Puts, for example, prints the value passed to the console, but doesn't return a value.

### Running a file as a script

Add a line which tells the “shell” (bash or zsh) to use the Ruby interpreter to run the code, passing in the language:

`#!/usr/bin/env perl`

`#!/usr/bin/env ruby`
`puts "Hello from Ruby!"`

### Modify file to be executable

Use the chmod command to change permissions to be executable.
`chmod +x script.rb`

### File Execution when Loaded as a Library

Sometimes you want to write a Ruby file that can be used as a library, but also invoked as a script. This is especially true if you’d like to require your script to test out in irb.

```
if __FILE__ == $PROGRAM_NAME
  # call your first function
end
```

`__FILE__` is a special variable which holds the name of the Ruby source file, `hello.rb`. `$PROGRAM_NAME` is a special variable that contains the name of the executing program. If you invoke `./hello.rb` as a script, this will be `./hello.rb`.

Only if you run `./hello.rb` will the two be equal, in which case the script code is run.

If you merely load the script from pry, `$PROGRAM_NAME` will be "pry"; the two will not be equal, and the script code won’t run; only the `say_hello` method will be defined.

This is desirable, because if you just want to load your code in pry so you can test, you don’t want your script code to start executing right away on you.

## Pry REPL

REPL is any Read Eval Print Loop

Pry is a great way to be load in your ruby code and test each function independently.

### Load a File

Pry works by requiring or loading files. Gems can be required simply by name:

```
~$ irb
[1] pry(main)> require 'set'
=> true
[2] pry(main)> Set.new([1, 2, 3]) # let's me use the `Set` class
=> #<Set: {1, 2, 3}>
```

Local files need the `./` in front.
`pry(main)> require './test'`

Require will load once but not refresh when called, returning false.

_Load_ will always load, regardless.

```
~$ irb
[1] pry(main)> require './test'
=> true
[2] pry(main)> require './test' # won't reload
=> false
[3] pry(main)> load './test.rb' # load will *always* reload
=> true
```

### Getting out

Remember to quit pry with `quit`.

Check a stack trace after an error with `wtf`. Ahahaha.

## Byebug

Especially when you combine it with byebug to step into your code line by line and do other great debugging things.

Make sure to require byebug at the top of the file you'll be looking at.

Add the debugger keyword where you'd like it to stop and drop you in.

Step in `s`
Next line `n`
Continue `c`

Display your var each time you stop in the code with `display var`

Know what line of code it's on with `list=`

Conditional debug with `debugger if (val or expression)`. Single line, no end needed.

Use `back` or `where` to see the call stack trace.

Quit byebug with `exit`.
