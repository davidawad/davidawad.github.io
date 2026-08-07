---
author: David Awad
pubDatetime: 2026-08-07T12:00:00Z
title: "Civ Pro: The Gathering, or, why I built a Papers, Please clone out of the Federal Rules of Civil Procedure"
postSlug: 8-7-civ-pro-the-gathering
featured: false
draft: true
tags:
  - law
  - games
  - legal-tech
  - civil-procedure
  - ai
description: "In 2019 I wrote a blog post matching Magic cards to FRCP rules as a joke. In 2026 I built the actual game. This is why a working litigator needs procedural muscle memory badly enough to spend a summer shipping a Papers, Please clone with the Federal Rules of Civil Procedure as the ruleset."
---

In 2019 I saw [a blog post](https://ctrlaltdissent.com/2019/08/19/civ-pro-the-gathering/) matching Magic: The Gathering cards to Federal Rules of Civil Procedure concepts. I was in law school at the time and saw this while [procrastinating productively](https://www.structuredprocrastination.com/). "Hexproof" is lack of personal jurisdiction. The card (literally named Remand) is remanding to a lower court. Fog is a motion for a new trial. Just think of it, "the two WORST communities for rules-lawyering: Magic The Gathering players and ACTUAL LAWYERS."

This year I built the actual game.

It's called **Civ Pro: The Gathering**, working title TBD, and you can [play it here](https://civ-pro-the-gathering-97ee4c.gitlab.io/). It is not a card game. It's closer to the game [Papers, Please](https://papersplea.se/), another work of art. The idea is the FRCP is the ruleset: procedural situations arrive one at a time, you respond from a fixed menu of litigation actions, and if you get it wrong the game hands you a sanction slip naming the exact rule and subsection you blew and what optimal actions might have looked like.

![Docket drill mode: Winslow Pipeline Partners v. Redstone Fabricators, a removal situation with the fixed action-menu categories on the right](/assets/img/posts/civ-pro-the-gathering/01-landing.png)

---

## Why this needed to exist

Here's the actual problem. Passing the bar tests whether you know the material in a very particular way. Practicing law tests whether you know the right right rules cold, and more importantly know which ones are better for certain situations. At no point does anyone put you through 200 repetitions of "a nonparty just got served a subpoena, what do you do to get your client out of this" and grade your answer against what an expert litigator would actually do.

Let's run with that example, you represent a subpoenaed nonparty. Rule 45 gives you four legal options: comply and eat the cost, move to quash, ask for cost-shifting up front, or serve written objections and wait. All four are legal. They are not all *correct* depending on the circumstances: for example you could object and wait, because if the serving party then moves to compel, Rule 45(d)(2)(B)(ii) makes cost-shifting protection **mandatory**, not discretionary. You've just made the other side pay for its own subpoena. The game exists to show you situations by learning from other cases and giving you new situations.

---

## Papers, Please

Papers, Please is the right comp because Lucas Pope solved a problem I actually have: how do you make a rules-heavy bureaucratic system feel like a game instead of homework? Pope's public devlog is startlingly candid about what worked and what didn't, and I cited it directly in the spec (internally the citations look like `[PP #286]`, pointing at specific devlog posts), because a few of his hard-won lessons mapped one-to-one onto litigation training:

- **Vague penalties don't teach anything.** Pope shipped a version with soft feedback, watched playtesters flail blind, and reversed course, eventually calling precise, specific citations "absolutely necessary" and a full replacement for tutorial text. Same story here: every mistake in Civ Pro produces a sanction slip citing the exact rule and subsection, the instant the trap springs. No vague "that wasn't optimal." The rule number, right there.
- **More simultaneous errors make encounters *easier*, not harder.** Difficulty lives in the near-miss, the clean-looking filing with one thing wrong. So most situations in the corpus carry exactly one real trap, sometimes zero, because recognizing "there's nothing wrong here" is its own skill and an under-tested one.
- **A finite, always-visible action grammar beats a dialogue tree.** Papers, Please never shows you a menu of pre-written choices, you always have the whole stamp-and-paperwork toolkit available and have to know which tool applies. Civ Pro does the same thing with about 8 verbs (File, Serve, Respond, Confer, Communicate, Wait, Research, Calendar) that expand into 30-40 leaf actions. Illegal-in-this-posture actions gray out *with a reason*, and the reason is itself the lesson.

![Selecting "File Answer" in the action menu, with a live tooltip citing Rule 12(a)(1)(A), Rule 12(h)(1), and Rule 8(c)(1)](/assets/img/posts/civ-pro-the-gathering/03-choice.png)

---

## Waiver is a huge mistake, and the most ethical thing is not necessarily always optimal

Two more design pillars, you have to be legal, but you don't have to be an angel.

**Waiver is death.** Rule 12(g)/(h) waiver. If you miss a removal clock or miss a Rule 38 jury demand, Rule 59's unextendable deadlines or even spoliation of evidence you lose points. 

These are big procedural losses in real litigation that cannot be undone once they happen. 

An agent I had playing the drill filed an Answer a few days before formal service actually happened, before checking whether the statute-of-limitations affirmative defense needed to go in now or could wait. It couldn't wait. [Rule 8(c)(1)](https://www.law.cornell.edu/rules/frcp/rule_8) This agent lost some client confidence. 

![A red WAIVER RAISED banner: "Answer omitting statute-of-limitations affirmative defense without subsequent amendment — Rule 8(c)(1)," score drops to -75](/assets/img/posts/civ-pro-the-gathering/05-result.png)

Scoring itself follows the same logic, weighted toward the skill that actually matters: making the other side pay. Fees you recover from an opponent (fee-shifting under Rule 45, Rule 37(a)(5), Rule 68) score at a 1.5x multiplier over ordinary fees billed, because cost-shifting plays are the highest-leverage moves.

---

## How it works

Next.js 15 with tRPC, a pure TypeScript rules engine with zero React imports (so the FRCP logic doesn't know or care that a browser exists), Zod for validation, and a content layer that's just JSON: 210 authored "subtleties" across 8 corpus files, a classified, rule-tagged decision point for each scenario. The engine itself is ruleset-agnostic, which means swapping the FRCP for the California Code of Civil Procedure is easy. 

The dev server comes with an http and MCP api for you to write programs against it if you wanted to. I ran a dev server with a playtest HTTP API and turned loose fleets of Haiku subagents to just *play the game naturally*, no scripted inputs, no answer key. Subagents don't get self-conscious about typing the dumb, obvious move first which helps for testing.

The game ships as a full static export with zero backend: the drill and story reducers run entirely client-side, content is bundled at build time, and the one set of server routes that does exist (a playtest API for agent tooling) gets stashed out of the build on deploy.

---

If you want to see whether you'd have caught the Rule 45 trap on your own, [go play it](https://civ-pro-the-gathering-97ee4c.gitlab.io/drill/). If you're a litigator I would love your feedback on what kinds of tips or non-obvious advice you'd put in the game.
