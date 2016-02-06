---
layout: post
title: "The Psychology of Debugging"
date: 2016-01-31
---

The word `bug` has been used to describe an "object of terror" ever since the fourteenth century. Rear Admiral Dr. Grace Hopper, the inventor of COBOL, is credited with observing the first _computer bug_ - literally, a moth caught in a relay in a early computer system. When asked to explain why the machine wasn't behaving as intended, a technician reported that there as `a bug in the system` and dutifully taped it - wings and all - into the log book.

Regrettably, we still have `bugs` in the system, albeit not the flying kind. But the fourteenth century meaning - a bogeyman - is perhaps even more applicable now than it was then. Software defects manifests themselvers in a variety of ways, from misunderstood requirements to coding errors. Unfortunately, modern computer systems are still limited to doing what you tell them to do, not necessarily what you want _them_ to do.

No one writes perfect software, so it's a given that debuggin will take up a major portion of your day. Let's look at some of the issues involved in debuggin and some general strategies for finding elusive bugs.

## Psychology of Debugging

Debugging itself is a sensitive, emotional subject for many developers. Instead of attacking it as a puzzle to be solved, you may encounter denial, finger pointing, lame excuses or just plain apathy.

Embrace the fact that debuggin is just _problem solving_, and attack it as such.

Having found someone else's bug, you can spend time and energy laying blame on the filthy culprit who created it. In some workplaces this is part of the culture, and may be cathartic. However, in the technical arena, you want to concentrate on fixing the _problem_, not the blame.

> Fix the Problem, Not the Blame

It doesn't really matter whether the bug is your fault or someone else's. It's still your problem.

## A Debuggin Mindset

Before you start debugging, it's important to adopt the right mindset. You need to turn off many of the defenses you use each day to protect your ego, tune out any project pressures you may under, and get yourself comfortable. Above all, remember the first rule of debugging:

> Don't Panic

It's easy to get into a panic, especially if you are facing the deadline, or have a nervous boss or client breathing down your neck while you are trying to find the cause of the bug. But it is very important to step back a pace, and actually _think_ about what could be causing the symptoms that you believe indicate a bug.

If your first reaction on witnessing a bug or seeing a bug report is "that's impossible", you are plain wrong. Don't waste a single neuron on the train of thought that begins "but that can't happen" because quite clearly it _can_, and has.

Beware of myopia when debugging. Resist the urge to fix just the symptoms you see: it is more likely that the actual fault may be several steps removed from what you are observing, and may involve a number of other related things. Always try to discover to root cause of a problem, not just this particular appearance of it.

## Where to Start

Before you start to look at the bug, make sure that you're working  on code that compiled cleanly - without warnings. We routinely set compiler warning levels as high as possible. It doesn't make sense to waste time trying to find a problem that the compiler could find for you! We need to concentrate on the harder problems at hand.

When trying to solve any problem, you need to gather all the relevant data. Unfortunately, bug reporting isn't a exact science. It's easy to be misled by coincidences, and you can't afford to waste time debugging coincidences. You first need to be accurate in your observations.

Accuracy in bug reports is further diminished when they come though a third party - you may actually need to _watch_ the user who reported the bug in action to get a sufficient level of detail.

<abbr title="The writer of the Pragmatic Programmer book">Andy</abbr> once worked on a large graphics application. Nearing release, the testers reported that the application crashed every time they painted a stroke with a particular brush. The programmer responsible argued that there was wrong with it; he had tried painting with it, and it worked just fine. This dialog went back and forth for several days, with tempers rapidly rising.

Finally, we got them together in the same room. The tester selected the brush tool and painted a stoke from the upper right corner to the lower left corner. THe application exploded. "Oh", said the programmer, in a small voice, who tend sheepishly admitted that he had made test strokes only from the lower left to the upper right, which did not expose the bug.

There are two points to this story:

- You may need to interview the user who reported the bug in order to gather more data than you were initially given.
- Artificial tests(such as the programmer's single brush stroke from bottom to top) don't exercice enough of an application. You must brutally test both boundary conditions and realistic end-user usage patterns. You need to do this systematically.

## Debugging Strategies

Once _you_ think you know what is going on, it's time to find out what the _program_ thinks is going on.

#### Bug Reproduction

Olar