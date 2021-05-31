---
layout: post
title: Shell tools are incredibly useful
published: true
---

So this is a small post on something pretty cool I was able to do that I thought was worth sharing.

This summer I'll be doing research on speedreading as well as taking a course for school called [Cyber Physical Systems](https://classroom.udacity.com/courses/ud279).

I got interested in the question of whether I'd be able to speedread the course materials. So I downloaded the transcripts and took a look.

The transcripts all come in the form of .srt files which are a little inconvenient to work with, and there was a LOT of them, 302 to be specific.

```shell
$ ls -la ./transcripts/*
...
-rw-------  1.2K 89 - Intro to Industrial Networks - lang_en_vs1.srt
-rw-------  2.8K 9 - Class Structure - lang_en_vs51.srt
-rw-------  3.0K 90 - Industrial Control System - lang_en_vs51.srt
-rw-------  2.1K 91 - Industrial Protocols - lang_en_vs51.srt
-rw-------  3.8K 92 - Routable Networks - lang_en_vs51.srt
-rw-------  2.8K 93 - Enterprise or Business Network - lang_en_vs51.srt
-rw-------  1.8K 94 - Zones and Enclaves - lang_en_vs51.srt
$ cat ./transcripts/* | wc -l
   38744

# here's a random file in the corpus for an example of what we're dealing with.
$ cat 93\ -\ Enterprise\ or\ Business\ Network\ -\ lang_en_vs51.srt
1
00:00:00,360 --> 00:00:03,340
An ICS is really an isolated network.

2
00:00:03,340 --> 00:00:08,270
For every factory floor, electric
generator, petroleum refinery or

3
00:00:08,270 --> 00:00:11,450
pipeline, theres a corporation or
organization that owns and

4
00:00:11,450 --> 00:00:12,850
operates the facility.

. . .
```

So as you can see there's a lot of space being wasted and a lot of cleaning we can do here.

```shell

# let's concat all the transcript files in numerical order into one file
for i in {1..302}; do cat $i\ * >> OUTPUT; done

# then I'll use vim to open the massive file and start carving it up
$ vim OUTPUT

# delete all empty lines
:g/^\s*$/d

# delete all lines containing only numbers
:g/^[0-9]$/d

# remove all lines with timestamps
:g/^00\:*/d

# removed all <i> tags and removed all </i> tags
:s/<i>//g
:s/<\/i>//g
```

These steps together trimmed over `12000` lines of needless text.

I then converted from windows to unix line endings :

```
tr -d '\15\32' < windows.txt > unix.txt
```

To remove the `&gt;`s I highlighted the entire corpus and just cleared them out.

```
:s/&gt; //g
````

Text all looks like this :

```
And we earnestly
hope that it will

prepare you to secure
the next generation

of cyber-physical systems.

We're eager to hear what
you end up doing next.

The fate of the world
is in your hands.
```

To clean this up a bit I replaced all `\n\n` with a single `\n`.

Now it looks something like this :

```
the low voltage looks like. We can add to the lower terminal power a
little power supply to the low or common terminal, connected the high terminal of
the power supply to the input switches. That's all it took to
simulate our system.
So now we know how
the system was set up. So how's the PLC actually programmed? For this project, we programmed the PLC using which is
a graphical programming language that is based on the old practice of
programming logic with hardware relays. The programming environment that we
. . .
```

It's not perfect but very usable for my purposes, as I wanted the filtered raw text to put into another platform.

There were a few other cleanups like removing `[INAUDIBLE]` from the corpus.

My original input size of `38744` lines was down to just `7000` lines.

That's just 18% of text content that actually needed to be there!! Fun stuff.

The lesson here? Learn the shell tools. They are so great and will come in handy all the time.

> Now it remains to be seen whether I can speedread the entire course in an hour. Wish me luck!
