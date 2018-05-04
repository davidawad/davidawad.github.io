---
layout: post
title: Let's learn general relativity
tags: [ physics fun ]
---

Hello there!

It's 4/20 and I hadn't written a blog post in a little while. Instead of the devil's lettuce I thought, "what better activity could we do?" So let's clean off the spider webs and crack open our physics textbooks. We're going to derive the Einstein field equations! I assure you, they're a hoot and a half! Or at the very least you'll see a lot of corny Pythagoras jokes, and that's just as important.

> Readers should know that general relativity is something you'd only really understand after taking a graduate course in physics. This blog post is not a substitute for that course. But this post does show you a lot of the concepts that were relevant for deriving the theory.
> The majority of the derivations here were originally published and refined by Einstein between the years 1905 and 1915. Don't worry about the math, what's much more interesting here (for me anyway) is the concepts and how they came about.

- [Introduction](#introduction)
    * [History](#history)
    * [Math](#math)
    * [Equivalence](#equivalence)
    * [Curvature of light](#curvature-of-light)
- [The Field Equations](#the-field-equations)
- [Metric Tensor](#metric-sensor)
  * [Tensors](#tensors)
- [The Christoffel Symbols](#the-christoffel-symbols)
- [Curvature](#curvature)
  * [Ricci Tensor](#ricci-tensor)
  * [Curvature Scalar](#curvature-scalar)
- [Stress Energy Momentum Tensor](#stress-energy-momentum-tensor)
- [The Cosmological Constant](#the-cosmological-constant)
- [Putting the pieces together](#putting-the-pieces-together)


## Introduction



### History

Part of the appeal of learning these equations is the fleeting feeling that perhaps you're on the same intellectual footing as one of the greats such as einstein. Einstein has always had a perception of being one of the greatest physicists of all time. I think that this perception is a little bit unfair to the other scientists who were doing incredible work at the time.


I want to start this post with some background on einstein that I found in a very insightful comment on [reddit]( https://www.reddit.com/r/AskHistorians/comments/5lr3mx/how_did_einstein_become_synonymous_with/dby6wes/). Here's a portion of that comment on how einstein came to be seen as synonymous with intelligence.


> In the early 20th century, there were a handful of scientific heroes. Many of them have not persisted in public imagination. Almost nobody outside of the sciences today is going to know who Robert Millikan is, but for a time he was the most famous scientist in the United States, for example.

> Einstein's international fame was the result of several distinct events that led him to be branded as "revolutionary" on a level above and beyond his peers (and perhaps above and beyond his accomplishments).

> In 1905, when Einstein published his first papers on relativity theory, he was virtually an unknown. For the next decade, he became a little better known in the community of physicists, but even then practically nobody worked on relativity without having a direct personal connection to Einstein in some way. If you look back on those papers with a sober eye today, they are interesting, and the fact that all four of them came out in the same year is rather impressive, but they are not heads-and-tails more revolutionary than other work being done at the time. The paper on the photoelectric effect (for which Einstein got the Nobel Prize in 1921) is important in that it shows that Planck's idea of the quanta has physical meaning (and is not just a mathematical heuristic, as Planck thought it was), the paper on Brownian motion is an interesting (if not strictly necessary by that time) way to argue for the physical reality of atoms. The $E=mc^2$ paper is an interesting derivation but it was not at all clear it had any physical reality (and nobody, including Einstein, thought it had any practical applications). The length contraction/time dilation (special relativity) paper is an interesting approach to a curious physical puzzle (what happens if you take Galilean relativity seriously, but believe the speed of light is invariant?), but again, doesn't really get you anything obvious out of the physics, and it wasn't clear if it was physically real or not. In short, these papers did not shake the world up, but a few people took note.

> Awareness of Einstein perked up a bit in the 1910s, as he was one of the only German professors to protest against World War I (both the English and German professoriate were largely belligerent and issued long "manifestos" in the name of their countries). In 1915 he published his theory of General Relativity which was much more mathematically complex than his previous work, and much more ambitious in terms of its implications. Here was a new theory of gravity, in the end, one that would explain anomalies with Newton's theory of gravity, but also would explain what gravity was in a way that Newton could not. This would be of much more interest to astronomers, if it were true.

> Ironically, perhaps, the place where the most latent interest for General Relativity would exist was the United Kingdom, in no small part because the mathematical training required as part of the British tripos system made the British scientists on the whole much more competent at such matters than those scientists on the continent (the German tradition of physics was more strongly rooted in experimental procedure, and the math of General Relativity is of a high-enough order that your average German experimental physicist of that time was not really capable or interested in dealing with it). One British astronomer/physicist, Arthur Eddington, decided in the postwar period that it would be a really splendid thing to see if Einstein's theory was correct. Eddington had more than scientific motivations: he was a British Quaker, and he thought it would be an impressive demonstration of the unifying powers of science if, in the wake of the Great War, he were to undertake an expedition to prove correct the theory of a German Jew. What could be more international and pacifistic than that?

> So Eddington put together an expedition to the island of Principe to take photographs of stars near the edge of the Sun during the total solar eclipse of 1919, which, if combined with photographs of the same stars when seen from that position at a time when the Sun was not in the sky, would allow one to see if the starlight had been bent by the gravitational field near the Sun (a prediction of General Relativity). Eddington found that this was so and undertook to publicize this discovery widely — Newton had been overturned.

> This received national newspaper coverage worldwide. Now Einstein started being known as the guy who overturned Newton. He quickly became an international celebrity, and he capitalized on this by traveling much, giving lots of lectures (which also conveniently got him outside of Germany, where anti-Einstein and anti-Semitic forces were mobilizing), and writing at length on lots of topics. Because Einstein was not just interested in science. He wrote at length about philosophy, politics, socialism, pacifism... he made a name for himself not just as a scientist but as a public intellectual.

> Which, it should be said, still might not have cemented his long legacy. Other scientists did such things. It is not at all clear that Einstein was truly the most intelligent man of his time. He had a lot of competition — there were a lot of smart people around then, including people whose contributions to physics were no less enduring. There were also other public intellectual scientists of the time, many of whom have been forgotten to all but science historians. Einstein's physics is clever, but it is less "out of the blue" than it looks if you look at it in its context than in isolation. (Typically when Einstein's work is taught, it is taught in juxtaposition to people like Newton, not in juxtaposition to the science of his time, which is largely forgotten. If you put Einstein's work up next to, say, Lorentz and Poincaré, it looks more "of a piece" with what was being done at the time, and his early work looks relatively crude. This does not diminish it, but it is a lesson about the difficulty of properly assessing a scientist without looking at their actual context.)


With that background in mind, Einstein's work is some of the most important physics that's happened in quite a long time.

This post is going to discuss a lot of the mechanics underneath Einstein's theory of general relativity, and hopefully give you an understanding of how it came to be.

### Math
So let's start with some basic assumptions that i'm making about you, the reader.

> You should know some calculus and a little bit of linear algebra. It's gonna come up unfortunately.


### Equivalence
If you're in a room with no windows, you can't tell the difference between being in a box that's accelerating through space accelerating at $g$, and a box that's on the earth while experiencing the same force of gravity $g$.
That's essentially the equivalence principle.

> Now on earth specifically the value of g varies due to tidal forces but that's not really the point here.


### Curvature of light
You'll also need to know that light bends when traveling through a gravitational field. Let's be more specific.

Imagine you're traveling in a windowless room that's accelerating upward at the speed $g$. If you shoot a laser horizontally across the room you would expect it to land at the same height on the other side of the room. Now of course light travels forward and if the windowless room is accelerating we observe something different. As time moves forward and the room moves upwards, the landing height will become lower and lower by the time the light reaches the other end.

![]({{ site.baseurl }}public/img/relativity/ex_1.png)
> The first of what is sure to be many diagrams in this blog post.


So the light was pointed horizontally forward, but when it reached the other end of the elevator the light was lower on the other side of the room. The light _curved_. Because the equivalence principle tells us that we can't tell the difference between this situation and the situation of the stationary situation on earth when influenced by gravity that results in an interesting conclusion that must be the case.

That the light must be curved by gravity in order to be true.

It turned out to be proven during a solar eclipse (that story about Eddington from the [history](#history) section) when they were able to see a star that appeared to the right of the sun, despite astronomers knowing for a fact that the star was **behind the sun**. This meant that the light from that star was being bent around the sun.

Newton's laws of gravitation gave us a simple way to look at gravitation at that time.

$$   \vec{F} = G \frac{M  m}{ r^2 } $$

> note: here $G$ is the gravitational constant, $M$ and $m$ are the masses of the two objects, and $r$ is the distance between them.

But light has no mass... why is it being affected?

This was the central problem, and the whole point of why this was a huge deal.


Einstein says to imagine that spacetime is like a trampoline. When you stand on a trampoline you'll notice that the space in the trampoline indents around you in response to your weight as you sink in.

> Apparently standing on a trampoline is the best allegory for spacetime that physicists could come up with.

If you put a marble near you and stand on the trampoline, you'll notice that the marble rolls towards you.

Newton believed that this was because of the gravitation between the two objects.

Einstein believed that this was the marble moving along the shortest path in curved spacetime.

He went on to argue that the same thing was happening on the planetary scale as well. That the earth is rolling along what is really a straight line in curved spacetime around the "disturbance" caused by the mass of the sun.

![](http://images.slideplayer.com/14/4449317/slides/slide_39.jpg)

> note: when we say spacetime here, what we're referring to is 3 dimensional space coupled with time.
>
> also space and time are "the same thing". (It's more honest to say they're intertwined, but physicists aren't honest.)
>
> Here's why:
>
> It started when Einstein showed that some basic laws of the universe affect both space and time equally. For example when a train is moving really fast a strange thing happens:

> People who are watching the train see that the time for the train and people inside it slows down.
> People inside the train see that the distance in front of them is getting shorter.
>
> These observations are not in contradiction, both groups (the observers and the people inside the train) are equally right even though one of them is seeing the time is affected and the other one is seeing that the space is affected. So we say that spacetime is affected.

> Yes, time is slowed down for those on the train. That is what Einstein discovered. The faster the object is moving the slower its time seems for those who are observing it. It is called special relativity. This only becomes significant if the object is moving extremely fast, close to the speed of light. There is also general relativity which says that also gravity affects time, stronger gravity will slow down time more.

> Note that the people inside the train will perceive their own time normally, it will only seem slower to the people outside the train. It is also interesting that the poeple inside the train will see that the time is slower (not faster!) for those outside the train. This leads to so called twin paradox and is actually hard to grasp at the beginning, you may need to read something on special relativity.



## The Field Equations

This is the formula communly known as the "Einstein field equations".

$$ R_{\mu \nu} - {1 \over 2}g_{\mu \nu}\,R + g_{\mu \nu} \Lambda =
{8 \pi G \over c^4} T_{\mu \nu}  $$

Here, $\mu$ and $\nu$ can be any of the 4 dimensions (values 0 through 3). (accounting for the 3 dimensions and time) Every single parameter can be substituted in any way and the equation will still be true. In this sense it's more like 16 equations. There are a few duplicates so they reduce to about 10 equations.


The other constants are ones you've seen before:

- $\pi$ is [pi](https://en.wikipedia.org/wiki/Pi).
- $G$ is the [gravitational constant](https://en.wikipedia.org/wiki/Gravitational_constant)
- $c$ is the [speed of light](https://en.wikipedia.org/wiki/Speed_of_light).
- $\Lambda$ is the [cosmological constant](https://en.wikipedia.org/wiki/Cosmological_constant).
- $g_{\mu \nu}$ is the [metric tensor](https://en.wikipedia.org/wiki/Metric_tensor).
- $R_{\mu \nu}$ is the [Ricci curvature tensor](http://mathworld.wolfram.com/RicciCurvatureTensor.html).
- $R$ is the curvature scalar.
- $T_{\mu \nu}$ is the [stress energy momentum tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor).

> you know it's an important equation when it contains the cool stuff like $\pi$ and $c$.

So the whole point of this equation is that it balances two things:


  - The left side refers to curvature of spacetime
  - The right side is about mass and energy.

These equations show us that **mass tells spacetime how to curve** and that **curved spacetime tells mass how to move**.


> if this information is satisfactory for you then you can stop reading now, the rest of the post is all math, and who wants that?




## Metric Tensor

Imagine you are a person standing on a grassy field with lots of hills and you wanted to model your height above sea level as a function of where you moved.

So you start at your original position in this field from fixed point ($x$, $y$). And let's represent our height as $\phi$.

Now when you walk straight through a field with hills you'll walk up some hills and down others which of course is *a change in height*. So to represent our height as a function of which direction we walk in, we will use the following equations for the $x$ and $y$ directions.

$$ d \phi = \frac{ d \phi_x}{ d x } dx $$

$$ d \phi = \frac{ d \phi_y}{ d y } dy$$

These two equations essentially say that the change in height ($d \phi$) can be derived by multiplying the rate of change in that direction, $\frac{ d \phi_x}{ d x } dx$ (also known as the _gradient_), and the actual distance you moved.

So if you walk 5 meters down a 1/10 incline, than you'll be 1/2 a meter lower. (shocking I know.)

> becuase $ d \phi_x = \frac{1}{10} \times 5  = \frac{1}{2}m $

So this is a quite general form. The value of our field is multiplied by the gradient, or change in field, times the distance you traveled.

Of course a 1/10 slope isn't going to happen at your grandma's favorite park, but it will happen at _much smaller distances_! (This is why we have $dx$. Which means unfortunately calculus is probably involved.)

<!-- walking 5 meters in that direction. -->

We need to deal with one other thing. People don't walk in boring straight lines like $x$ and $y$. Straight lines suck!


So let's get a little more abstract. Any path along a $2d$ field is going to involve components of $x$ and $y$. So let's represent all possible paths as a combination of the two in a more generic equation. We'll call our combined path $s$.

If you've done literally any physics ever you know that to combine these vectors we need to talk to the hotdog choreographer himself, mac daddy [pythagoras](https://en.wikipedia.org/wiki/Pythagoras).

$$ ds^2 = dx^2 + dy^2 $$

> this will give us the _magnitude_ (or length) of the combined vector $s$.

Of course we can add these vectors as well.

$$ \vec{ds} = \vec{dx} + \vec{dy} $$

So our representation of height as a function of movement along path $s$ looks very similar, we're just adding the changes in height contributed by the movement along each direction.


$$ d \phi_s = d \phi_x + d \phi_y $$

> if you needed more foreshadowing here, you can probably abstract this concept to as many dimensions as you want...

This means that we can do another substitution based on what we've already done earlier with the $x$ and $y$ direction and add in our definitions for $d \phi_x$ and $d \phi_y$


$$ d \phi_s  = \frac{ \partial \phi_x }{ \partial x } dx  + \frac{ \partial \phi_y }{ \partial y } dy$$


> Yes I know, we switched from $d$ to $\partial$, this is just a semantic distinction to make clearer for the _math people_ that the rate of change is specific to the variable we're looking at in that term, but not the only rate of change we care about.

So up until now we've been using $x$ and $y$. Again we could use any set of coordinates here, variables are just labels after all.

So let's abstract further, and our equations that we've been building so far will use different variables.


We'll switch $x$ with $x_1$ and $y$ with $x_2$.


$$ d \phi  = \frac{ \partial \phi_{x_1} }{ \partial {x_1} } dx_1  + \frac{ \partial \phi_{x_2} }{ \partial x_2 } dx_2 $$

That leaves us with the convenient feature of being able to consider further terms and abstract to as many dimensions as we want. So we can go up to $n$ dimensions.



<div class="cd-testimonials-wrapper">
<p>Equation 1:</p>

$$ d \phi = \sum_n  \frac{ \partial \phi_{x_n} }{ \partial {x_n} } dx_n $$

</div>


> That weird $\sum$ just means we add up all the terms based on $n$, if $n$ is $2$ we'd get the equation above we just made. On a totally unrelated note look how awesome that math term looks. You just know we cooked up some serious bullshit right there... uh, let's continue.


Now we've done a lot of math relating gradients and their effects from the _reference frame of a single observer_ about their height as they walk through a field.

Now we know from earlier that time and space are related in strange ways that result in time dilation and length contraction. That "reality is observed differently" by observers in different reference frames.

If we're ever going to make a statement that's universally true, it has to be true in every possible frame of reference as well. The first thing we'd need to be able to do is model the two reference frames and relate them.

So if two people are walking through the same grassy field, how would we model all the gradients of person $x$ from the perspective of person $y$?


Well it turns out we can do this. Let's say we want to model all the gradients of person $x_2$: we'd use the chain rule to parse out what that looks like.


> I'm going to use $y_1$ reference frame as an example. Meaning observing all the gradients of x from an observer in the "y_1" dimension. That hill analogy is certainly getting a little strange but bear with me.


$$ \frac{ \partial \phi }{ \partial y_n }  = \frac{ \partial \phi }{ \partial x_1 }         \frac{ \partial x_1 }{ \partial y_1 }         +  \frac{ \partial \phi }{ \partial x_2 }  \frac{ \partial x_2 }{ \partial y_1 }  $$

Now you'll notice this can also be abstracted to an arbitary number of dimensions.



<div class="cd-testimonials-wrapper">
<p>Equation 2:</p>
$$ \frac{ \partial \phi }{ \partial y_n }  = \sum_m   \frac{ \partial \phi }{ \partial x_m }   \frac{ \partial x_m }{ \partial y_n }   $$

</div>



> note: here we're using $m$ as our summation variable, and using $n$ as an identifier for the dimension of our observer. We don't have to be using $y_1$ here, it could be $x$, $y$, $z$, $t$, $etc.$



### Tensors

So it's about time we talked about tensors.  The whole point of all of this crap has been to talk about the metric tensor yet we still haven't gotten to it. Let's talk about what a tensor is for a bit and then we can get to the good stuff.





<div class="cd-testimonials-wrapper">
<p>Equation 3: the vector transform</p>

$$ V_y^n  = \sum_m \frac{ \partial y^n }{ \partial x^m } V_x^m $$

</div>

We can modify our equations from earlier a little bit to develop something you could call the **vector transform**. Essentially meaning that the $n$th coordinate of a vector in the $y$ frame of reference is equal to the sum of the gradient term times the $n$th coordinate in the $x$th frame of reference.

The idea here is essentially for a vector with $n$ coordinates we can construct a representation of a vector from the perspective of $y$ by "transforming" the vector from the x representation.


It will be helpful to start with scalars first. A scalar is a quantity with no direction associated with it, temperature is a good example of this. Contrast this with a vector which is just a scalar with a direction (like velocity).


You could think of a scalar as a tensor of rank 0. Then a vector is like a tensor of rank 1.


Now a tensor could be thought of as a combination of vectors **where there is a fixed relationship between the two**.

Imagine the example of a block being pushed by a force:


<div style="text-align:center"><img src ="{{ site.baseurl }}public/img/relativity/ex_2.png"/></div>

> try to ignore that weird angle bend in the image i'm trying my best here.


So there are two forces here, $\vec{F}$ and $\vec{G}$, note that only $\vec{F}$ actually moves the box, and it's moved a distance $x$.

If you imagine that $\vec{F}$ is the only force acting on the box, we know that the work done on the box will be equivalent to the force times the distance along the direction that the box moves in. Now of course there's an $x$ and $y$ component to the force that's acting _diagonally_ on the box so we have to do something different here to evaluate the work done on the box in the $x$ direction and we can resolve that problem pretty quickly.

$$ W = \vec{F} \cos{ \theta } \dot x $$


So that's all fine. Now lets think about $\vec{G}$.

$$ W = \vec{G} \cos{ \theta } \dot x = 0 $$

The work done by $\vec{G}$ is $0$ because $\cos{90}$ is $0$. But more obviously if you push down on a block it won't move.

This basic mechanics example has an important property. **No matter what reference frame** you view $\vec{G}$ from, the outcome is exactly the same. The block does not move.


**A tensor is the relationship between two vectors.** If a tensor has a value of $0$ in one frame of reference, it has a value of $0$ in **all frames of reference**. The block never moves.

You might guess that this concept is going to be very useful in our discussion of Einsteins theories of relativity.
> Ugh I sound like such a textbook.


Let's bring it on home. Imagine two vectors (who cares what they are):
We'll look at the $m$th dimension of $A$ and the $nth$ dimension of $B$. We'll say that the combination of the two creates a tensor of _rank_ 2.

$$ T^{mn} = A^m B^n $$

Now there's something important to point out here, which is that $m$ and $n$ are **dimensions**. In our examples so far we've been in the $x$ $y$ plane so $m$ and $n$ both are either $1$ or $2$. This means there are **four possible tensors to create between the two vectors**.

If you have $3$ dimensions in space, then there are 9 different versions of $T^{mn}$ and so on.


Now what would $A$ and $B$ look like from the reference frame of $y$? Let's use our equation 3 from earlier.


$$ A^m_y B^n_y = \sum_r  \frac{  \partial y^m }{ \partial x^r }  A^r_x  +  \sum_s  \frac{  \partial y^m }{ \partial x^s }  B^s_x  $$

So now let's simplify that a little bit with some condensing, and we get toooooo


<div class="cd-testimonials-wrapper">
<p>Equation 4: the contravariant transformation</p>

$$ T_y^{mn} = \sum_{r,s} \frac{ \partial y^m }{ \partial x^r }   \frac{ \partial y^n }{ \partial x^s }           A^r_x  B^s_x $$

</div>


You'll notice that this is an equation that enables you to transform $A^r_x B^s_x$, (better known as T_x^{rs}) into T_y^{mn}. Hence it is known as the contravariant transformation. If you'd like to make this harder to understand [feel free to check out wikipedia](https://en.wikipedia.org/wiki/Covariant_transformation).


> this is getting harder to follow along in an obvious way. I know. I'm sorry. For what it's worth, writing this all out and formatting the math has been a nightmare.

Here's an alternate version of equation 4 that you should know about


<div class="cd-testimonials-wrapper">
<p>Equation 5: the covariant transformation</p>

$$ T_{mn}(y) = \sum_rs \frac{\partial x^r }{ \partial y^m} \frac{\partial x^s}{ \partial y^n } T_{rs} (x) $$

</div>


Now we've come a long way talking about a lot of stuff that's not the metric tensor. Like most physics textbooks we're going to continue that trend by taking yet another look at the justin beiber of philosphers, that's right. The mac daddy pythagorean theorem. Like good physicists we'll draw a fun diagram and apply what we know to arrive at something we don't. Afterwards, again like most physics students we'll think we understand it after reading it and then fail to reproduce it in the future.


<div style="text-align:center"><img src ="{{ site.baseurl }}public/img/relativity/ex_3.png"/></div>


Let's examine this example triangle. Obviously the variable names for the lengths of the sides are completely coincidental.

We'll start with an initial pythagorean understanding of the situation.

$$ ds^2 = {dx^1}^2 + {dx^2}^2 $$


Now what you might have heard is that the phantom menace pythagoras wrote a theorem is actually just a specific instance of a more generalized rule. We can actually expand it out.


$$ ds^2 = {dx^1}^2 + {dx^2}^2 + ... $$

Then we can restate it.

$$ ds^2 = \sum_{mn} dx^m  dx^n \times \delta_{mn} $$


Now for this to still be consistent, we have to make sure we're not taking any products we don't want in the sum.

And so that's that that $\delta$ is for. That $\delta$ there is the [Kronecker Delta](https://en.wikipedia.org/wiki/Kronecker_delta).

> The kronecker delta is a funky machine. Essentially on every iteration of the sum operation for new values of $m$ and $n$, $\delta$ is evaluated to be either 0 or 1.

> So if $m = n$ then $\delta = 1$, and otherwise $\delta = 0$.

> The delta is essentially a scaling factor so we can take it out like anything else.

$$ ds^2 = \delta_{mn} \sum_{mn} dx^m  dx^n$$


Now we can use our definition from before:

$$ dx^m = \frac{ \partial x^m }{ \partial y^r } dy^r $$

When we apply that to our working definition of $ds^2$,

$$ ds^2 = \delta_{mn} \sum_{m n}    \frac{ \partial x^m }{ \partial y^r } dy^r    \frac{ \partial x^n }{ \partial y^s } dy^s    $$

Now we've got something quite powerful. Let's just rearrange this for a second.

$$ ds^2 = \delta_{mn} \sum_{m n}  \frac{ \partial x^m }{ \partial y^r }  \frac{ \partial x^n }{ \partial y^s }  dy^r  dy^s $$

And there it is. The beautiful metric tensor.


<div class="cd-testimonials-wrapper">
<p>The metric tensor</p>

$$ g_{mn} = \delta_{mn} \sum_{m n}  \frac{ \partial x^m }{ \partial y^r }  \frac{ \partial x^n }{ \partial y^s } $$

</div>

So... what does that really mean?
Like most physics courses, we've barely said anything about physics for about 10 minutes and spent the majority of our time doing derivations. All we have is some cool looking math to show for it!

To understand what the metric tensor _is_ let's look at the original sinetist (heh), pimp daddy pythagoras just one more time.


<div style="text-align:center"><img src ="{{ site.baseurl }}public/img/relativity/ex_3.png"/></div>

$$ ds^2 = {dx^1}^2 + {dx^2}^2 $$

Looking back at our more generalized approach from before, take a look at what happened.

$$ ds^2 = g_{mn} dy^r  dy^s $$

So our normal pythagorean theorem is functional for flat space. In _flat space_ it's perfectly true that we can use the normal pythagorean theoem.

Now imagine we have that same right triangle drawn on a sphere. We wouldn't be in flat space anymore, if we had the same right triangle on the surface of a sphere, we still couldn't use meme lord pythagoras. So what the **metric tensor** gives us, is a device that **corrects for operating in curved space**.

So i'm sure you can see how this is going to be valuable when operating in curved space.


So our $g_{\mu \nu}$ term works in that way, and that's what that term is when looking at the field equations.
> note that the $\mu \nu$ terms there are just a convention that is often used when talking about spacetime. Again, they're just indicators for whatever dimensions you're condidering.


## The Christoffel Symbols

The important thing about tensors is that they represent a relationship between two vectors that's true in all reference frames.

let's imagine a tensor $W_{nm}(x) = V_{nm}(x)$


Here's the problem. One thing that will come up pretty quickly when examinig tensors is that the derivatives of tensors don't have the same powerful fixed properties that derivatives of vectors do.

Are the derivatives of tensors the same?

If we look at the derivative of $V$ with respect to $x$ in the $x$ frame of reference, **does that equal** the derivative of $V$ with respect to $y$ in the $y$ frame of reference.

$$ T_{mn} (x) = \frac{ \partial V_m }{ \partial x^n }(x) $$

$$ T_{mn} (y) = \frac{ \partial V_m }{ \partial y^n }(y) $$

Does $ T_{mn}(x) = T_{mn}(y)$ ?


Let's look again at equation 5:

$$ T_{mn}(y) = \sum_rs \frac{\partial x^r }{ \partial y^m} \frac{\partial x^s}{ \partial y^n } T_{rs} (x) $$


We can use that and apply it to our question substituting $T_{rs}(x)$ for $T_{mn}(y)$.
> We're substituting it in which is why we're using $rs$ instead of $mn$.


$$ T_{mn}(y) = \sum_rs \frac{\partial x^r }{ \partial y^m} \frac{\partial x^s}{ \partial y^n }  \frac{ \partial V_r (x) }{ \partial x^s }$$


which simplifies :


$$ T_{mn}(y) = \sum_rs \frac{\partial x^r }{ \partial y^m} \frac{  \partial V_r (x) }{ \partial y^n } $$



Again, what we're trying to determine, is if $T_{mn} (y)$ is equal to $ \frac{ \partial V_m (y) }{ \partial y^n }$.

I'll save some time here and just show what $ \frac{ \partial V_m (y) }{ \partial y^n }$  is.

$$  \frac{ \partial V_m (y) }{ \partial y^n }  =  \frac{\partial x^r }{ \partial y^m} \frac{ \partial V_r (x) }{ \partial y^n } + \frac{\partial  }{\partial y^n}   \frac{ \partial x^r  V_r (x) }{ \partial y^m }  $$
> note that the $\sum$ still applies here. I just didn't write it.
> Einstein actually believed that writing it out was trivial and that it was implied.

So upon examination it turns out they're unfortunately not equal. They're quite close!

If you look a little closer the only difference between the two tensors is those extra terms at the end of $ \frac{ \partial V_m (y) }{ \partial y^n } $.

here's those terms again just to be clear.

$$ \frac{\partial }{\partial y^n} \frac{ \partial x^r  V_r (x) }{ \partial y^m } $$

Those extra symbols at the end there are called the christoffel symbols, and are often abbreviated as $\Gamma_{nm}^r$.


So the question we asked was is if $T_{mn} (y) = \frac{ \partial V_m (y) }{ \partial y^n }$.

We found the answer is no, however we can still work with this using something called the covariant derivative.


<div class="cd-testimonials-wrapper">
<p>Equation 7:</p>

$$T_{mn} (y) =  \nabla_{n}  \partial V_m (y)  =   \frac{ \partial V_m (y) }{ \partial y^n } + \Gamma_{nm}^r V_r(x) $$

</div>


The christoffel symbols exist as a correction for the transformation of the derivative of a tensor from one reference frame to another.


So we did that for vectors, and now we'll need to do it for tensors. So let's look at the covariant derivative of $T_{mn}$.



<div class="cd-testimonials-wrapper">
<p>Equation 8:</p>

$$  \nabla_p T_{mn} = \frac{ \partial T_{mn}  }{ \partial  y^p } + \Gamma_{pm}^r  T_{nr} + \Gamma_{pn}^r  T_{mr} $$

</div>

And there we have it! That's the transformation of a tensor from one frame of reference to another! Swag.


So just a quick concept check, what would the covariant derivative be of $g_{mn}$ in flat space?

$$ \nabla_r g_{mn} (x) = 0 $$

The covariant tensor of the metric tensor in flat space is zero.

In flat space the metric tensor is either 1 or 0. Either way it's a constant, and the derivative of any constant is zero.

> Here's how that would apply within equation 8.

> $$  \nabla_p g_{mn} = \frac{ \partial g_{mn}  }{ \partial  y^p } + \Gamma_{pm}^r  g_{rn} +  \Gamma_{pn}^r  g_{mr} = 0  $$


> P.S. If professor Schnetzer at Rutgers is somehow reading this, here's a free exam question for you next time you teach General Relativity.


So we can rearrange this with the help of some crazy mathematicians.

<div class="cd-testimonials-wrapper">
<p>Equation 9:</p>
$$  \Gamma^a_{bc} (x) = \frac{1}{2} g^{ad}  \Bigg\{    \frac{ \partial g_{dc}  }{  \partial x^b } + \frac{  \partial g_{ab} }{  \partial x^c } - \frac{ \partial g_{ab} }{ \partial x^d } \Bigg\}  $$
</div>

Now we have our equation for the christoffel symbol in terms of first derivatives of the metric tensor.


Now if you're wondering why we care about the christoffel symbol, it's because it's a part of the ricci curvature tensor which _is_ a part of Einstein's equation.


## Curvature


We're going to have to define some other operations before wee can go on to the ricci tensor.

Commutators.

This is a commutator operation on some sample matrices $A$ and $B$.

$$ [ A, B ] = AB - BA $$



#### Ricci Tensor

So the Ricci tensor is the part of the curvature of spacetime that determines the degree to which matter will tend to converge or diverge in time.


This may be slightly misleading, so i apologize if it sounds confusing. Vectors change due to curvature.

This change can be modeled in the following way.


$$ dV = \frac{ \partial }{ \partial x^{\mu} } \frac{\partial }{ \partial x^{\nu} } V [ \nabla_{\nu}, \nabla_{\mu} ] $$

> You can break this down using that down that commutation definition and equation 7. I'm gonna skip it for now and leave this as an exercise for some non-lazy reader.

The ricci tensor is made of christoffel symbols and derivatives of christoffel symbols, which themselves are made of metric tensors and the derivatives of metric tensors. And metric tensors, again are simply a tool to correct for the happy slapper mac daddy pythagoras when applying his nonsense in 3d.


So the Ricci tensor $R_{\mu \nu}$ is the $ [ \nabla_{\nu}, \nabla_{\mu} ] $ terms in our model.
> i'm skipping a few steps to save time, mostly because typing out latex to this extent is a nightmare ~

It could be called the Riemann tensor, but for the purposes of relativity we'll say that this is the Ricci Tensor.




#### Curvature Scalar

I'll save some time and say that from the ricci tensor, you can derive the curvature scalar. It's simply a scalar, not a tensor, not a vector.

The point here is if the curvature scalar is not $0$, then the surface is not flat.


## Stress Energy Momentum Tensor

Let's start with a quick definition.

> Geodecic - the shortest line between two points that must travel along a curve. Examples are things like the equator, and any line drawn on a sphere.


So let's imagine what it looks like if we take a tangent vector of a geodecic.
We can define a tangent vector as a rate of change of the distance we travel with respect to time.

Wheat we're interested in is to find the minimum path along a geodecic by taking the derivative and setting it equal to zero.

Now remember we have to take the covariant derivative here because 3d so we'll use equation 7:

$$ \nabla \frac{d x^{\mu}}{ d \tau }  = \frac{ \partial }{ \partial \tau }  \frac{ \partial x^{mu} }{\partial \tau} + \Gamma = 0 $$
> here $\tau$ is the [proper time](https://en.wikipedia.org/wiki/Proper_time).
> the gamma term is larger but we're going to move it around in a moment so i haven't expanded it here.

We can simplify the time derivative:

$$ \nabla \frac{d x^{\mu}}{ d \tau }  = \frac{ \partial^2 x^{\mu}  }{ \partial \tau^2 } + \Gamma = 0 $$



It's worth noting, that $  \frac{ \partial^2 x^{\mu}  }{ \partial \tau^2 } $ is a second derivative of distance with respect to time. That sounds a lot like acceleration. #foreshadowing.


So let's re-arrange this equation for minimum path through a curved space. Now remember that when operating in normal 3d space we should ideally arrive at Newton's equations which were seen as accurate for so long.

Essentially newton's laws and Einstein's relativity must conform to the same thing.

$$ \frac{ \partial^2 x^{\mu}  }{ \partial \tau^2 } + \Gamma = 0 $$


$$ \frac{ \partial^2 x^{\mu}  }{ \partial \tau^2 } = - \Gamma $$


And there it is.

$$ \sum \vec{F} = m \vec{a} $$

What this means is that effectively this christoffel term has a broad equivalence to **force**.

$$ \Gamma \equiv \frac{\vec{F}}{ m }$$

going back to equation 9, we have a formula for Gamma that we've already derived.

$$  \Gamma^a_{bc} (x) = \frac{1}{2} g^{ad}  \Bigg\{    \frac{ \partial g_{dc}  }{  \partial x^b } + \frac{  \partial g_{ab} }{  \partial x^c } - \frac{ \partial g_{ab} }{ \partial x^d } \Bigg\}  $$

Now lets consider a low gravity, low speed situation. We expect that from this formula we will find an equivalent for the newtownian version of gravity.


So let's look back here, in normal space almost all of those terms become incredibly small except for the component of time.

So our equation becomes $ \Gamma \equiv \frac{1}{2} \frac{ \partial g_{0, 0} }{ \partial x } \equiv \vec{F} $

Of course in newtownian mechanics, force is proportional to the negative change in potential.

$$ F = - \frac{ d \phi }{ dx} $$

So if the potential near the earth is $\phi = mgx$ where x is the height off of the earth then the force will be:

$$ F = - \frac{d \phi }{dx} = -mg $$


So we just found the christoffel symbol is equivalent to the force term which is equivalent to the

$$ \Gamma \equiv \frac{1}{2} \frac{ \partial g_{0, 0} }{ \partial x } \equiv \vec{F} =  - \frac{d \phi }{dx}  $$


Thus, $g_{0 0} = 2 \phi + C$


Let's continue this argument by making a series of auxillary points that will become clearer after we're done (Classic ~~jerk~~ physicist move). Let's imagine we've placed a test mass $m$ at a certain distance $r_p$ out from the center of a planet with mass $M$.

![](https://www.tutorialspoint.com/cosmology/images/conjunction.jpg)

Now according to newtownian gravitation this is what we have:

$$ F = - \frac{ G M}{ r_p^2}  $$
> our unit mass will be of size $m=1$ so it dissapears here.

if we wanted to find the force capability across the whole of that surface of that sphere,
it would be the integral of the force across the area of that sphere.

$$ \int F \cdot  dA $$

Substituting in the equations for area of a circle and force.

$$ \int - \frac{ G M}{ r^2} \cdot  4 \pi r^2  $$

> I'm switching from $r_p$ to just $r$ for convenience.


$$ \int F \cdot d A = - G M  4 \pi  $$

Before we go on, there's more stuff we have to cover. There is a theorem called the [divergence theorem](https://en.wikipedia.org/wiki/Divergence_theorem). You can look it up there.

> Divergence: the inner product of the operator $\nabla$ and a given vector, which gives a measure of the quantity of flux emanating from any point of the vector field or the rate of loss of mass, heat, etc., from it. - mathematics definition from google.

$$ \int_{area} F \cdot dA  = \int_{vol} \nabla F dV $$

It says that the integral of $F \cdot d A$ over an area is equal to the integral over the volume of $\nabla F \cdot dV$.

What that means in normal terms is that the outward flux through the area of a sphere is equal to the volume integral of the divergence of the force.

> [Flux](https://en.wikipedia.org/wiki/Flux) describes the quantity which passes through a surface or substance.

Also I'm just going to quickly remind you that density is mass divided by volume. circa like, [Archimedes](https://en.wikipedia.org/wiki/Archimedes) probably.

$$ \rho = \frac{M}{V}$$

In addition of course that means that the mass of an object will be an integral of the density with respect to the volume.

$$ M = \int \rho d V $$


So then, we've calculated $\int F \cdot dA$ and we've got an equation for M as well. So let's patch it up.



$$ - G 4 \pi \int \rho \cdot dV = \int_{vol} \nabla F \cdot dV $$

> we replace M with  $\int \rho d V$ for our definition of $F \cdot d A$

Now the $dV$ terms "cancel" out.

What we're left with is

$$ \nabla F = - 4 \pi G \rho  $$


So then let's break this down.

So far we have shown :


$$ F = - \nabla \phi $$

$$ \nabla F = - 4 \pi G \rho $$

$$ \nabla - \nabla \phi  =  - 4 \pi G \rho $$

$$ \nabla^2  \phi  = 4 \pi G \rho $$

and remember earlier we showed that the time component of the metric tensor $g_{0, 0}$ is equal to $2 \phi + C$ plus some constant leftover from that christoffel term.

$$ g_{0,0} = 2 \phi + C $$

and lastly that $\phi$ is $\frac{1}{2} g_{0,0} $

$$  \phi = \frac{1}{2} g_{0,0} + C  $$


which means that once we put these together we get to:

$$ \nabla^2 \frac{1}{2} g_{0,0} = 4 \pi G \rho  $$

> the constant term dissapears here because we've taken a derivative.

then we find that :

$$ \nabla^2 g_{0,0} = 8 \pi G \rho  $$

The only problem is that this isn't a tensor equation! we're supposed to have $\mu$s and $\nu$s in there somewhere!

> almost fun fact:  $ \nabla^2 g_{0,0} $ is sometimes called the Einstein tensor, $G_{\mu \nu}$.

So intead of $\rho$ ideally we'd want some tensor to represent energy as well as pressure / density.

$$ G_{\mu \nu}  = 8 \pi G T_{\mu \nu}  $$

So we'd need to come up with a $T_{\mu \nu}$ as well as something with a $G_{\mu \nu}$ tensor as well.


So there's a definition for something called a momentum 4 vector, in which we have 3 components of space and 1 vector of time.


$$ \rho = m (   \frac{x_0}{ \tau }, \frac{x_1}{ \tau }  \frac{x_2}{ \tau }  \frac{x_3}{ \tau }  )   $$
> note that here $\tau$ is again the [proper time](https://en.wikipedia.org/wiki/Proper_time), and $m$ is mass.
> $\frac{x_0}{ \tau } $ corresponds to the time dimension.

Saving myself some time here because this is the longest and most painful blog post to write, ever, you can reduce these and see what physical components they correspond to.


$$ \rho = m ( mc^2, mv_x, mv_y, mv_z)  $$

So this vector resolves to basic rest mass energy, plus the momentum vectors in the 3 coordinates of physical space.

But what we want here isn't a vector $\rho$, but a tensor $T_{\mu \nu}$. This actually finds itself in the form of a matrix.


| $T_{0,0}$| $T_{0,1}$| $T_{0,2}$| $T_{0,3}$|
| $T_{1,0}$| $T_{1,1}$| $T_{1,2}$| $T_{1,3}$|
| $T_{2,0}$| $T_{2,1}$| $T_{2,2}$| $T_{2,3}$|
| $T_{3,0}$| $T_{3,1}$| $T_{3,2}$| $T_{3,3}$|

What we're seeing is a relationship between the vectors based on the different values of $\mu$ and $\nu$ that will isolate different aspects of space when constructing the equation.

For example $T_{0}{0}$ is just the time component of the [stress energy momentum tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor).

Here's a good diagram that shows how the tensor contains information about various different aspects of spacetime.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/StressEnergyTensor_contravariant.svg/472px-StressEnergyTensor_contravariant.svg.png)



It is sort of like units of Energy per unit volume.

$$ \frac{Energy}{volume} = \frac{work}{volume} = \frac{force \cdot d }{ d^3 } = \frac{force }{ d^2 } = \frac{force}{area} = pressure $$


So there we are! that's how we arrive at keeping our units consistent throughout this whole thing.

$$ G_{\mu \nu}  = 8 \pi G T_{\mu \nu}  $$

so now we have our mass term on the right hand side. We've solved our problem for T_{\mu \nu}. But what should our *space time curvature term* be on the left hand side?


$$ G_{\mu \nu}  = 8 \pi G T_{\mu \nu} $$


## The Cosmological Constant

Einstein thought that the ricci curvature tensor $R_{\mu \nu}$ would be a good candidate to be this $G_{\mu \nu}$ term.

The only problem is conservation of energy prevents this.

> I swear we're almost at the end of the blog post. Just like a physics lecture, we're so far into the derivation that we're barely aware of why we're even doing this anymore.

If you were to take the derivative of the right hand side, you'd get zero. Unfortunately if you took a derivative of the ricci tensor on the left hand side it would not be zero. Meaning that this equation is physically impossible in it's current state because energy is not conserved.


Einstein found that the derivative of the ricci tensor was the following:
$$ \nabla  R_{\mu \nu} = \frac{1}{2} \nabla g_{\mu \nu } R $$

> note: it's a good practice to always use covariant derivatives when doing this stuff.

So now let's set our newly found $R_{\mu \nu}$ to $0$.


$$ \nabla ( R_{\mu \nu} - \frac{1}{2}  g_{\mu \nu} R ) = 0 $$

Now we can put our modified $G_{\mu \nu}$ and $T_{\mu \nu}$ back into our equation setup on the correct sides.

$$ R_{\mu \nu} - \frac{1}{2}  g_{\mu \nu} R =  \frac{8 \pi G T_{\mu \nu} }{c^4}  $$
> we need that $c^4$ for spacial reasons, it also corrects the units. Plus why not it's relativity bro.

Einstein realized at this point that he had forgotten something. The equation only worked correctly when adding an additional tensor and scaling it by a constant. You see, at the time everyone believed that space was fixed, and was mostly unmoving. Yes the earth rotated around the sun but space on the whole didn't really move around. That's what people thought.

<div class="cd-testimonials-wrapper">
      <p>
        Bruh, so if the outer space isn't moving, shouldn't gravity be forcing the universe to collapse together? Obviously that shit ain't happening fam, so I'm gonna go out on a limb here and say something is preventing it.
      </p>
      <div class="cd-author">
        <img src="https://lh3.googleusercontent.com/-EmIkaYewYZM/AAAAAAAAAAI/AAAAAAAAGYM/UzH1yuoNiZ0/photo.jpg" alt="Author image">
        <ul class="cd-author-info">
          <li>Albert Einstein (probably)</li>
        </ul>
      </div>
</div>

That thing that was preventing it? ~~Abraham Lincoln~~ **The cosmological constant.**
It's actually quite small and is usually left out. It's typically only relevant when talking about large cosmological scales.

$$ R_{\mu \nu} - \frac{1}{2}  g_{\mu \nu} R + \Lambda g_{\mu \nu} =  \frac{8 \pi G T_{\mu \nu} }{c^4}  $$

> swag.

<!-- The 8π gets the Newtonian limit exactly right. The factor of 4π comes from integration over a sphere, when integrating the gravitational potential into a force. -->



## Putting the pieces together

oh wait we're done.



## Resources

If you've made it this far thank you. I respect your desire to learn, and I'm sorry that I couldn't write a better post to explain this. Lest I shout into the void a moment more.

The majority of the content here was originally written by the user DrPhysicsA on youtube, [you can find his two hour lecture on the topic here](https://www.youtube.com/watch?v=foRPKAKZWx8&t=5s). A huge thank you to him for being the inspiration of the video and doing a majority of the derivations. It was really great for me to learn while writing it out, i hope it was great for you as well.

[What are tensors by Dan fleisch](https://www.youtube.com/watch?v=f5liqUk0ZTw)

[Good quora post](https://www.quora.com/What-is-an-intuitive-explanation-of-the-Einstein-field-equations)

[Good wiki page on GR](https://en.wikipedia.org/wiki/General_relativity)

[Good wiki page on proper time](https://en.wikipedia.org/wiki/Proper_time)

<script>
  // comments for this particular article
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "{{ site.baseurl }}public/img/david_icon.jpg",
          "authorName": "David Awad",
          "comment": "Relativity is the future man... or wait."
        }
      ]
    }
  ];
</script>


