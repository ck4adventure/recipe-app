---
title: Fun with Bash
date: 2020-12-02
path: /basics/bash
category: basics
---

# Useful Bash Snippets

### Setting a custom time announcer

1. Put this into a file somewhere you can easily get to it, mine is saved as `chime.sh`

```bash
echo "Es ist gerade: $(date "+%l:%M")" | say -v "Anna"
```

The echo command is enough to pipe the string as output with the interpolated date.
The pipe sends the output to the `say` command, here it is using the German language voice named `Anna`.

2. Make the file executable

```bash
chmod 755 chime.sh
```

##### Get the list of voices

To know which voices are available, use a question flag.

```bash
say -v ?
```

### Setting a crontab job

1. From the terminal call crontab editor (vim)

```bash
crontab -e
```

2. Then add a line with the times and the code to execute

```sh
*/15 9-18 * * * ~/documents/chime.sh
```

The order of time intervals is Min Hour Day Month Year, asterisk is for any, or can do math, or can hardcode a single value in any of the columns.
