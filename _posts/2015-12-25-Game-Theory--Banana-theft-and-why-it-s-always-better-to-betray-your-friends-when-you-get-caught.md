---
layout: post
title: Game Theory, Banana Theft, and Why It's Always Better to Betray Friends if You Get Caught.
categories: game theory philosophy math probability
---

Have you ever looked into Game Theory? If not, you should. It’s pretty interesting.

<div class="cd-testimonials-wrapper">
			<p>
        Game Theory: The branch of mathematics concerned with the analysis of strategies for dealing with competitive situations where the outcome of a participant’s choice of action depends critically on the actions of other participants. Game theory has been applied to contexts in war, business, and biology.
      </p>
			<div class="cd-author">
				<ul class="cd-author-info">
					<li>google.com definition</li>
				</ul>
			</div>
</div>

So basically the math behind making the smartest possible decisions in any game, or decision process. You might be thinking, “well, after all those horrible SAT word problems I’m never going to be able to use any of this math mumbo-jumbo.” You’d be surprised what kinds of implications game theory can have on how we can make decisions. It’s all about keeping track of all of the possibilities.

Imagine the following scenario, you and your best friend have committed some heinous crime; just off the top of my head let’s go with the theft of a banana.

<div id="commentable-area">
  <p data-section-id="1" class="commentable-section">
    You've snuck into a walmart and fiendishly made off with one of the prized fallic fruits. The fuzz is unto you though. They track you down after finding a set of fake passports hidden in a safe behind a slew of one direction posters in your bedroom. They trace you to Aruba where you’ve escaped for your early retirement with the money from the banana heist.
</p>

You’ve now been extradited back to America for questioning. Putting each of you in separate rooms; with no means of communicating with your colleague to collude on how to conceal your clandestine caper.

The prosecutors are sure that one of you have committed the crime. But they don’t have the evidence to prove it since you’ve stealthily hidden the pilfered plantain. (yes, I’m going to keep my thesaurus open for the duration of the narrative.) So they can’t get you on banana theft, a criminal charge punishable by a minimum of 3 years in jail. They can only really get you on <em>banana misconduct</em>, a much lesser charge facing up to 2 years.

<p data-section-id="2" class="commentable-section">
Since they don’t have proper evidence to convict either of you of the theft; They hope to get you both sentenced to a year in prison on the lesser charge. The prosecutors offer both of you an out: betray the other by testifying that the other pocketed the produce, or to cooperate with the other by remaining silent. The possibilities are the following for you and your friend, (we’ll just use A & B for convenience, respectively.)
</p>

<ul>
  <li>If A and B each betray the other, each of them serves 2 years in prison.</li>

  <li>If A betrays B but B remains silent, A will be set free and B will serve 3 years in prison. (and vice versa)</li>

  <li>If A and B both remain silent, both of them will only serve 1 year in prison. (on the lesser charge)</li>
</ul>

Well this is an interesting problem, If you don’t know what your friend is going to choose, you could end up screwing them if they end up backing staying silent and you don’t. But if you stay silent the same thing could happen to you. So what do you do? Stay silent or rat them out?

#### Here’s where game theory comes in.
Game theory introduces the idea of measuring decisions by using **utility**.

<div class="cd-testimonials-wrapper">
			<p>
        Utility: An economic agent is, by definition, an entity with preferences. Game theorists, like economists and philosophers studying rational decision-making, describe these by means of an abstract concept called utility.
      </p>
			<div class="cd-author">
				<ul class="cd-author-info">
					<li>google.com definition</li>
				</ul>
			</div>
</div>

</div>

The utility of betraying them is in fact higher, despite collaboration being the better option for the two of you.

Here’s why, Let’s imagine this from the standpoint of A, yourself. Regardless of what your friend B decides right now, we know that they’re going to choose. Just like you, B can choose to stay silent, or betray you.

- If B cooperates, you should defect, because going free is better than serving 1 year in prison with banana haters.

- If B betrays you, you should also defect, because serving 2 years is better than serving 3.

So either way, **A should defect**. Parallel reasoning will show that B should also defect based on what you might do.

<div class="cd-testimonials-wrapper">
			<p>
        “The utility of betrayal is de facto higher, when it is considered from the standpoint of the individual”
      </p>
			<div class="cd-author">
				<img src="//public/img/david_icon.jpg" alt="Author image">
				<ul class="cd-author-info">
					<li>David Awad</li>
				</ul>
			</div>
</div>

> if we’re being pedantic, we’ve used a little bit of a narrow definition for rationality here because we’ve assumed that you and your friend have no loyalty to each other whatsoever, and also that you don’t consider any negative outcomes from betraying each other afterwards. But I think I’ve gotten my point across.

There are a lot of other interesting consequences that come from critically analyzing possible decisions in games, and this is a rather contrived and dare I say, fruity example. It’s really interesting to critically examine games and other decisions we make in life if we assume that the other players are playing optimally, and how we should decide based on that.

So no matter what you’re going to jail it seems… I guess stealing that banana had pretty... **low utility**.

### Sources:

- [The Stanford dictionary of Philosophy on the subject](http://plato.stanford.edu/entries/game-theory/)

- [This ridiculous post on the physics forums about banana like fruits](https://www.physicsforums.com/threads/banana-like-fruit.245720/)

- [The wikipedia article on the prisoner’s dilemma, of which this post is heavily comprised.](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma)

<script>
  // comments for this particular article
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "//public/img/david_icon.jpg",
          "authorName": "David Awad",
          "comment": "Zayn was a horrible poster to hide a safe behind."
        }
      ]
    },
    {
      "sectionId": "2",
      "comments": [
        {
          "authorAvatarUrl": "//public/img/david_icon.jpg",
          "authorName": "David Awad",
          "comment": "We could have used Alice and Bob, but fuck that!"
        }
      ]
    }
  ];
</script>
