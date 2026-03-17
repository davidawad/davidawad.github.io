---
author: David Awad
pubDatetime: 2016-01-26T07:17:15Z
title: The Discrete Expectation of Good
postSlug: 01-26-The-Discrete-Expectation-of-good
featured: false
draft: false
tags:
  - docs
ogImage: ""
description: ""
---

A probabilistic argument for nonreligious charitable works.

<span style="font-family: 2rem">T</span>here is an assertion made by discrete mathematics, about the expected value of a given event. In its simplest form, **mathematical expectation** is the product of the amount a player stands to win and the probability that the player would win. In this short paper we will examine the meaning of the “expected value”, and use this property to make an assertion about the utility of different types of charitable deeds over a random sampling of people.

I’ll use the term “discrete” here as the following.

> discrete: “individually separate and distinct.”

For example, a Dice roll is a very concrete example of an event with a discrete set of possibilities. As opposed to a doorknob which is continuous; it has states of locked and unlocked, however it rotates, between them, has values in between the two states.

**“oh, cool”** You say to me, **“But isn’t this is an argument about charity?”** Well that will become clear in a bit.

![](/assets/img/discrete_1.jpeg)

We’ll start with a ‘dice-roll’ to give you an idea of what I mean.

A **_typical_** die, has 6 sides, with dots clearly denoting which value has been selected randomly by the die roll.

There are 6 possible outcomes of rolling a die, each clearly defined and equally likely.

A die has to land on one of the sides, with a particular side facing up. That side being the corresponding value to that dice roll. This may seem a bit like we’re being pedantic, and we are; but we’ll see how this becomes relevant when we get to charitable deeds.

So what is the Expectation of a dice roll? Well, Expectation is defined as the sum of each possible value, times by the corresponding probability for each of those values. Each value on the dice is equally likely, so we end of with the following:

$$ Expectation(die) = \sum\_{i}{ x_i \times P(x_i) } $$

$$ Expectation(die) = 1 \times P(1) + 2 \times P(2) + 3 \times P(3) + 3 \times P(4) + 5 \times P(5) + 6 \times P(6) $$

Each outcome is equally likely when rolling dice, so there’s a $\frac{1}{6}$ chance of any of the values.

let's call the outcome of our dice $d$ instead just for convenience

$$ E(d) = 1 \times \frac{1}{6} + 2 \times \frac{1}{6} + 3 \times \frac{1}{6} + 3 \times \frac{1}{6} + 5 \times \frac{1}{6} + 6 \times \frac{1}{6} $$

simplifying that out we get

$$ E(d) = \frac{21}{6} \approx 3.5 $$

**“Okay cool,”** you say again, **“but what does this math mumbo jumbo have to do with religious charity?”**

Let’s imagine applying this reasoning of expectation and probability applied to charitable works that you can do. Before we can do that however; It is important to more concretely define the concept of what **good** is.

> Good: that which is morally right; righteousness.

> Me: Sure, but there’s also a sort of goodwill or karma that some associate as the outcome or benefit of doing something “good” for someone else. That, whatever you determine it to be; will be what I am referring to as “good” in the context of this argument.

---

Well, when you perform a charitable deed such as say go on a religious visitation, or visit foreign countries to build churches. There is a chance that a person may not receive the same amount of “good” that you intend to give.

This could quite literally be because they just don’t believe the same thing that you do. The fact is that not all people believe the same things. If they don’t share the beliefs that inspire your deeds, they probably won’t appreciate religiously motivated works of charity.

#### “As of 2010, Christianity was by far the world’s largest religion, with an estimated 2.2 billion adherents, nearly a third (31 percent) of all 6.9 billion people on Earth,” the Pew report says. “Islam was second, with 1.6 billion adherents, or 23 percent of the global population.” — NPR

Let’s abstract this away, round up, and assert that say, $\frac{1}{3}$ of humanity is christian. (It doesn’t really matter what religion it is, because all that matters is that there are people who believe different ones)

So let’s imagine a “good class”, which is the set of all deeds which you can do (religious and non-religious) that are received as an equal amount of good. (in the case of religious deeds, this would be deeds done for same believers)

### Looking at the nonreligious deeds.

Let’s look at an _expectation of the possible good you can do_ for whoever could receive these deeds. If we’re looking at nonreligious acts of good; the expectation is something like the following. We’ll use one ‘$g$’ to denote a **unit of good** (whatever that is). And so everything in our good class is worth 1g. We’ll look at the probability that that individual will interpret that event as a good deed.

$$ E(nonreligious \space deeds) = 1g \times P(“good”) + 1g.P(“good”) + 1g.P(“good”) + … $$

The probability of something being good is 1 in this case, because there’s nothing religious about whatever good deeds we’re concerned with.

For example I think most people agree that giving food to the homeless would probably be a better charitable deed than giving them bibles.

### Now let's look at the religious case

$$ E(religious \space deeds) = 1g \times P(“good”) + 1g \times P(“good”) + 1g \times P(“good”) + … $$

The probability of a religious deed such as building a church, is not likely to be uniformly interpreted as good, it’s “goodness” is contingent upon the recipient of the deed.

So if we consider $P(“good”)$ to be contingent upon the recipient, then we arrive at only a $\frac{1}{3}$ probability that the recipient is a christian that would receive that _same amount_ of good.

Substituting in $P(“good”) = \frac{1}{3}$ we get:

$$ E(religious \space deeds) = 1g \times \frac{1}{3} + 1g \times \frac{1}{3} + 1g \times \frac{1}{3} + … $$

If in general it is more likely that our non religious charitable acts will be interpreted as good because they don’t have religious associations.

$$ \therefore E(nonreligious \space deeds) > E(religious \space deeds) $$

**_quod erat demonstrandum_**

Thanks for reading!

> **P.S.** You could argue I’m doing a bit of informal ‘hand-waving’ here when it comes to addressing the issue of a good deed being morally equivalent to another. For those of you who are so inclined, this argument still holds if you believe there exists any two or more religious and nonreligious deeds that are of equal “good” value. Because if that is the case, then nonreligious deeds will always yield a higher expectation of “good” over the course of a lifetime.

<div id="commentable-area">

  <blockquote data-section-id="1" class="commentable-section">
    As long as you apply a consistent definition of “good” throughout this short blog post, <em>i think</em> the argument holds.
  </blockquote>
</div>

#### Sources:

- [Pew Research Study](http://www.pewforum.org/2015/04/02/religious-projections-2010-2050/)

- [Pew Templeton: Global Religious Futures](http://www.globalreligiousfutures.org/)

- [NPR](http://www.npr.org/sections/thetwo-way/2015/04/02/397042004/muslim-population-will-surpass-christians-this-century-pew-says)

<script>
  // comments for this particular article
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "/assets/img/david_icon.jpg",
          "authorName": "David Awad",
          "comment": "If you’re being even more pedantic; there’s an even more foundational underlying assumption here that ‘good’ is even a coherent concept such that it can be equated and measured mathematically. But we’ll need a whole other blog post for that."
        }
      ]
    }
  ];
</script>
