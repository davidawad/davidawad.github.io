---
author: David Awad
pubDatetime: 2024-12-22T16:38:49Z
title: The Ark of the Covenant could not have been a Capacitor
postSlug: 12-22-ark-capacitor-ar
featured: true
draft: false
tags:
  - physics
  - engineering
  - history
  - christianity
ogImage: ""
description: "We debunk the silly idea of the ark of the covenant being a capacitor and do some analysis for whether the physics and history support this hypothesis."
---

# The Ark of the Covenant Could Not Have Been a Capacitor: The Physics Don’t Support It

The Ark of the Covenant is a fun artfact of history. One subject of many conspiracy theories is the one of Uzzah, a man struck dead upon touching the Ark. Some have speculated that the Ark of the Covenant was actually a highly charged capacitor, delivering a lethal electric shock. But does this idea hold up under the scrutiny of physics? The short answer is no.

These theories often go something like this, 
- The ark sits at the bottom of a pyramid for a long time
- it accumulates a charge
- Uzzah is the first poor sap that touches it and gets zapped to death in a blaze of holy glory. (_kyrie eleison_)


---

## The Story of Uzzah
The story of Uzzah appears in the Bible, in [2 Samuel 6:6-7](https://www.biblegateway.com/passage/?search=2%20Samuel%206%3A6-7&version=NKJV). As some people are moving the Ark it falls over; Uzzah tries to catch it and he gets zapped to death. 2 Samuel describes this as God's intervention, but how did it happen? 

To answer this, we need to look at capacitors and the mechanisms of charge accumulation.

> To be clear, I'm not saying the Ark of the Covenant was a capacitor, even if it was, that's not necessarily inconsistent with the text anyway, it's just a mechanism of action.

---

## What is a Capacitor?
A capacitor is a device that stores electrical energy in an electric field. It consists of two conductive plates separated by an insulating material (dielectric). When a voltage is applied, charge accumulates on the plates, storing energy. 

![Capacitor Diagram](/assets/img/posts/ark-covenant/capacitor_diagram.webp)

The amount of charge a capacitor can hold is given by this simple equation:

$ Q = C \cdot V $

where:
- $ Q $ is the charge,
- $ C $ is the capacitance (a measure of the capacitor’s ability to store charge),
- $ V $ is the voltage across the plates.

The covenant is described as gold-plated wood. In theory, the gold layers could act as conductive plates, and the wood as a dielectric.

---

## The Question at Hand
To determine whether the Ark could function as a capacitor capable of killing Uzzah, we need to answer a few questions:

1. **How much current would it take to kill an ordinary person?**
    - The lethal threshold for current through a human body is $ I \approx 10 \ \text{A} $.
    - The voltage required depends on the body’s resistance, estimated at $ R = 1,000 \ \Omega $ for wet skin.

2. **How is current held on a capacitor over time?**
    - Capacitors lose charge over time due to leakage, described by exponential decay:
      $ Q(t) = Q_0 e^{-t / (RC)} $

3. **How does induced current work?**
    - A changing magnetic field can induce current in a conductor. The induced electromotive force (EMF) is given by Faraday’s Law:
      $ \mathcal{E} = \frac{d\Phi_B}{dt} = A \cdot \frac{dB}{dt} $

4. **Could changes in Earth’s mass distribution generate enough induced current?**
    - Slow processes like tectonic shifts or glacier melting can change the magnetic field, but their rates are extremely small.

5. **How long would it take to accumulate enough charge to kill Uzzah?**
    - We calculate this based on realistic rates of magnetic field variation.

---

## Mathematical Analysis

### Lethal Current
The lethal current threshold for immediate death is about $ 10 \ \text{A} $. To calculate the required voltage, we use Ohm’s Law:

$ V = I \cdot R $

For a body resistance of $ 1,000 \ \Omega $:

$ V = 10 \ \text{A} \cdot 1,000 \ \Omega = 10,000 \ \text{V} $

> it's possible that the resistance of a body could be lower than this if his hands were sweaty or something given the heat of the desert and the work involved, but that would only lower the Uzzah-killing amps required.

For scale, it's important to remember that a typical household outlet is $ 120 \ \text{V} $ and a car battery is $ 12 \ \text{V} $. These are both far below the voltage and current required here, but could still be dangerous! It doesn't take much current to be dangerous.  


#### An Aside on volume

It's not obvious that the ark could even have stored enough charge to kill Uzzah just because of the materials and the placement of highly conductive gold materials. The Ark of the Covenant is described in the Bible as having dimensions of approximately 2.5 cubits long, 1.5 cubits wide, and 1.5 cubits high ([Exodus 25:10](https://www.biblegateway.com/passage/?search=Exodus%2025%3A10&version=NKJV)). Using the conversion factor of 1 cubit = 0.45 meters, the dimensions in meters are:

$ L = 1.125 \ \text{m}, \ W = 0.675 \ \text{m}, \ H = 0.675 \ \text{m} $

The volume of the Ark is then:

$ V = L \cdot W \cdot H = 1.125 \cdot 0.675 \cdot 0.675 \approx 0.513 \ \text{m}^3 $

To evaluate whether this volume could store enough charge, we start with the capacitor energy equation:

$ E = \frac{1}{2} C V^2 $

For a capacitance of $ C = 1 \ \mu\text{F} $ and voltage $ V = 10,000 \ \text{V} $:

$ E = \frac{1}{2} \cdot 10^{-6} \cdot (10,000)^2 = 50 \ \text{J} $

50 Joules is significant but not extraordinary. To sustain a lethal shock, the Ark would have needed to release it all at once (which could happen!). Additionally, this energy would have been stored in a volume of 0.513 $ \text{m}^3 $ though this is relatively small compared to modern caps for this kind of purpose. (Maybe we can give the bible a pass on that one).

> the energy released in a lethal shock of this kind would be $ E = I^2 R t $, saving some time here that would be enough.

### Charge Needed
The charge required to reach this voltage on a capacitor of one micro-farad ($\mu\text{F}$)is:

$ Q = C \cdot V $

For a capacitance of $ C = 1 \ \mu\text{F} = 10^{-6} \ \text{F} $:

$ Q = 10^{-6} \cdot 10,000 = 0.01 \text{Coulombs} $

### Induced Current

When a conductor moves through a magnetic field, an electromotive force (EMF) is induced. This is described by Faraday’s Law:

The rate of charge accumulation depends on the changing magnetic flux:

$ \frac{dQ}{dt} = I = \frac{\mathcal{E}}{R} = \frac{A \cdot \frac{dB}{dt}}{R} $

For the Ark ($ A = 1 \ \text{m}^2 $, $ R = 10 \ \Omega $) and a magnetic field variation of:

$ \frac{dB}{dt} = k_M \cdot \frac{dM}{dt} $

Now here we have to do some... _fiddling_. These theories often assume that the ark of the covenant sat undisturbed at the bottom of a pyramid for some long period of time. The thing about this you should ask is "so what charged it?".

The only plausible answer would be induced current by changes in the earth's magnetic field.

Here is the key insight, the Earth's magnetic field is generated by the motion of molten iron in the outer core. This motion is driven by heat from the core and the cooling of the Earth. The field is not static, but it changes slowly over time due to tectonic shifts, glacier melting, and other geological processes.

That change in magmetic field can induce a current in a conductor. Not a large one! But given enough time theoretically it could charge the Ark. For this example we'll use the rate of glacier melting as a proxy for the rate of change in the Earth's magnetic field just to illustrate the idea.

The rate of charge accumulation is then:

Where $ k_M \approx 10^{-8} \ \text{T/(kg/s)} $ and $ \frac{dM}{dt} \approx 3.17 \times 10^4 \ \text{kg/s} $ (glacier melting rate), we get:

$ \frac{dB}{dt} = 3.17 \times 10^{-4} \ \text{T/s} $

The induced EMF is:

$ \mathcal{E} = A \cdot \frac{dB}{dt} = 1 \cdot 3.17 \times 10^{-4} = 3.17 \times 10^{-4} \ \text{V} $

The induced current is:

$ I = \frac{\mathcal{E}}{R} = \frac{3.17 \times 10^{-4}}{10} = 3.17 \times 10^{-5} \ \text{A} $

To accumulate $ Q = 0.01 \ \text{C} $:

$ t = \frac{Q}{\frac{dQ}{dt}} = \frac{0.01}{3.17 \times 10^{-5}} \approx 315 \ \text{seconds} \ (\sim 5 \ \text{minutes}). $

> Before you ask, No, the properties of a pyramid would not have helped charge the ark. Or modify the magnetic field in any way that would have helped. Even further, original pyramids of Giza, including the Great Pyramid, were originally covered with a casing of polished white Tura limestone. Tura limestone is primarily composed of calcium carbonate ($ CaCO_3 $), which is more of an insulator rather than a conductor of electricity. It has no inherent magnetic properties and does not strongly interact with magnetic or electric fields. The [conductivity of the material is a paltry $ 2.7 \frac{W}{m·K} $](https://www.tappi.org/content/enewsletters/eplace/2006/06-3rousselv1.pdf).

So any stone pyramid "magnetic resonance" nonsense is out. 

### Long-Term Accumulation
For realistic geomagnetic variations ($ \frac{dB}{dt} \sim 10^{-6} \ \text{T/s} $):

$ t = \frac{Q}{\frac{dQ}{dt}} = \frac{0.01}{10^{-6}} \approx 10^4 \ \text{years}. $

Thus, under these realistic assumptions, it would take approximately **10,000 years** to accumulate just **0.01 Coulombs** of charge, assuming continuous geomagnetic variation and no losses. (e.g. the Ark sat at the bottom of a pyramid undisturbed this entire time as described in these "theories"). 




#### Could lightning have charged the Ark? at least that's more plausible

> While I don't buy it, I should also mention the other conspiracy theory of the ark accumulating charge faster by lightning strike or something, but we'd need to know that it was outside somewhere. 


The ark was kept in the tabernacle, which was a tent. It served as a portable sanctuary for the Israelites during their exodus from Egypt to the Promised Land. This tent was covered in animal skins and the ark was kept in a room called the holy of holies. The ark was also covered in a cloth and the tent was covered in a cloth. ([Exodus 40:20-21](https://www.biblegateway.com/passage/?search=Exodus%2040%3A20-21&version=NKJV))

Even if lightning struck this tent, it would have been grounded by the animal skins and the cloth. The ark would have probably been mostly insulated from the ground by the wood and the gold.

That said, lightning can create massive voltages and would have absolutely worked. The energy stored in the Ark’s capacitor is given by:

$ E = \frac{1}{2} C V^2 $

Assuming $ \( C = 1 \, \mu\text{F} \)$  and $\( V = 10^6 \, \text{V} \) $ (a high voltage from a lightning strike) then we get a very small $ 500 \text{J} $ to charge the capacitor.

$ E = \frac{1}{2} \cdot 10^{-6} \cdot (10^6)^2 = 500 \, \text{J}. $ 

This is a small fraction of the [5 billion joules of energy in your average lightning strike](https://science.howstuffworks.com/environmental/energy/harvest-energy-lightning.htm#:~:text=Lightning%20packs%20a%20huge%20amount,out%20these%20amazing%20lightning%20pictures!).



---

## Historical Analysis



### Timeline of the Ark

Now that we've done the math, let's look at the history. We found that the Ark could theoretically accumulate enough charge to kill Uzzah, But when would it have had the opportunity to do so?

The Bible provides a somewhat detailed timeline of the Ark’s movements:
- Constructed during Moses’ time (c. 1446 BCE).
- Carried during the conquest of Canaan (c. 1400 BCE).
- Captured and returned by the Philistines (c. 1100 BCE).
- Placed in Solomon’s Temple (c. 960 BCE).
- Disappeared after the Temple’s destruction (586 BCE).

The Ark was mobile and actively used in rituals or warfare. It never sat undisturbed for the $ 10^4 \ \text{years} $ required to accumulate lethal charge naturally.

---

## Conclusion
The idea that the Ark of the Covenant was a capacitor capable of delivering a lethal shock to Uzzah doesn’t hold up. The physics and history don’t support it:

- Natural geomagnetic variations are too weak and slow to accumulate enough charge in realistic timeframes.
- The Ark’s active history means the notion of it sitting undisturbed for thousands of years was impossible.

This is a fun idea, but the Ark’s lethality remains better explained by god's fury rather than by the principles of physics.

While it does feel good put this question to rest, unfortunately very few people seem to care, thus my blog post may not have the impact I was hoping for. Ah well.

![Google Trends](/assets/img/posts/ark-covenant/google-trends.png)
[src](https://trends.google.com/trends/explore?geo=US&q=ark%20of%20the%20covenant,ark%20of%20the%20covenant%20capacitor,story%20of%20uzzah&hl=en)


I should give a shoutout to [this fantastic post on the subject by Dave Kauffman](https://davekauffman.ca/the-ark-of-the-covenant-from-an-engineering-perspective/) where he in fact reaches the opposite conclusion, claiming the ark collected a charge via lightning and pyrocumulism.

