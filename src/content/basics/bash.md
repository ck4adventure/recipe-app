---
title: Command Line Basics
path: /basics/bash
date: 2021-01-25
category: basics
---

The command line is something we all get to know in our own way. Here are a few topics I wanted to keep as notes for myself. Even `bash` has versions.

The three I/O (input/output) connections are STDIN for input, STDOUT for output, and STDERR to output errors separately, usually to the terminal. The file descriptor to reference in commands are `0` for `STDIN`, `1` for `STDOUT` and `2` for `STDERR`.

Topics to cover:

- pipes and redirects
- vim usage
- grep
- common mac terminal customizations

### Crontab internet log v0.1

##### Ping Script

This single ping on a 3 sec timeout is used to ping google and see if it can get a packet back. Three seconds is more than long enough to know if down.
The `stdout` is redirected into a log file with a timestamp. Since the timestamps happen regardless, I can easily scroll through the pings and find sets of time that have no connection.

Script file contents `internet_test.sh`, with a `chmod 755` to make it executable.

```bash
echo ----- >> log.txt
date "+%Y/%m/%d %H:%M:%S" >> log.txt
ping -c 1 -t 3 -q google.com >> log.txt
```

v0.2 will update the script to only write timestamps when there is no response. These I hope to incorporate into a time series graph. The x-axis will be the time of day 0-24 and the y-axis will be how many minutes total with no internet. Each column is placed on the x-axis where the outage begins.

An alternative graph would be a y-axis of single point of "internet out" and track the length of outages across the x-axis, but I feel this will lengthen the graphic too far.

##### Crontab scheduling

This script file then run as a cronjob. Open `crontab` in VIM with

```
crontab -e
```

This opens a text where you can add a scheduling line as follows, with extra error catching in case my script malfunctions.

```bash
* * * * * /Users/me/Documents/script.sh >> errlog.txt 2>&1
```

### Internet Log v0.2

Already frustrated with the size of the log, I searched and tested some more until I could get my Bash v3 to do this, which tosses the stdout into the void and only logs the error lines. Timestamps still happen each time, which isn't super ideal but does give a nice effect on human visual scrollthrough. I even added more logic to create daily logs so that I don't overload any single file.

date "+%Y/%m/%d %H:%M:%S" >> $(date +%Y%m%d)-orbi.txt
(/sbin/ping -c 1 -t 3 -q google.com) >> /dev/null 2>> $(date +%Y%m%d)-orbi.txt
