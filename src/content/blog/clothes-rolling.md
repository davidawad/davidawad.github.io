---
author: David Awad
pubDatetime: 2023-10-26T16:38:49Z
title: The Clothes Packing Problem
postSlug: 10-26-clothes-packing
featured: true
draft: false
tags:
  - travel
ogImage: ""
description: "We approach the clothes packing problem and do some basic comparison for optimal clothing choice and organization."
---

When it comes to packing for a trip, two methods are commonly debated: rolling and layering (or folding). The question at hand: Which method allows you to fit more outfits into a TSA-approved carry-on suitcase? I've been traveling a lot lately and was annoyed enough to finally dig into it. The answer is rolling which I will prove here. 

For this analysis, we'll make a base assumption of suitcase dimensions (per TSA guidelines): $ 56 \text{ cm} \times 36 \text{ cm} \times 23 \text{ cm} $, resulting in a total volume of $ V_{\text{case}} = 46,464 \text{ cm}^3 $

## Volume Comparison


### Layering Method

For layering, let's assume the following dimensions:

- Shirt: $ 25 \text{ cm} \times 25 \text{ cm} \times 1 \text{ cm} $
- Pants: $ 30 \text{ cm} \times 40 \text{ cm} \times 1.5 \text{ cm} $
- Socks: $ 10 \text{ cm} \times 10 \text{ cm} \times 1 \text{ cm} $ (for one pair)
- Boxers: $ 20 \text{ cm} \times 20 \text{ cm} \times 0.5 \text{ cm} $

For layering, the total volume for an outfit would be:

$ V_{\text{outfit, layering}} = 625 \text{ cm}^3 (shirt) + 1800 \text{ cm}^3 (pants) + 200 \text{ cm}^3 (socks) + 200 \text{ cm}^3 (boxers) = 2825 \text{ cm}^3 $

### Rolling Method

Here's our assumptions for rolled clothes. 

- Shirt dimensions when rolled: Cylinder with radius $ 3.5 \text{ cm} $ and height $ 9 \text{ cm} $
- Pants dimensions when rolled: Cylinder with radius $ 5 \text{ cm} $ and height $ 10 \text{ cm} $
- Sock dimensions: Cylinder with radius $ 2 \text{ cm} $ and height $ 4 \text{ cm} $
- Boxer dimensions: Cylinder with radius $ 3 \text{ cm} $ and height $ 2 \text{ cm} $

For each outfit, the total volume when rolling would be:

$ V_{\text{outfit, rolling}} = 402.12 \text{ cm}^3 + 785.4 \text{ cm}^3 + 2 \times 100.53 \text{ cm}^3 + 56.52 \text{ cm}^3 = 1445.1 \text{ cm}^3 $

## Direct Comparison

The rolling method comes out on top with $ 1445.1 \text{ cm}^3 $ vs the layering method's $2825 \text{ cm}^3 $ per outfit.

On a _pari passu_ basis assuming any item of clothing can be rolled, you can substitute any values for ($ V_{\text{shirt}}$, $V_{\text{pants}}$, etc.) and rolling will still take more space. 

*QED*.

## Taking this example too far...

Since rolling is more efficient, let's go further. When I'm travling however I try to be functional so I re-use pants across multiple outfits.  

> In general I also only wear solid colored shirts and pants that have the most interoperability with each other to get the maximum value out of each item of clothing.

If we assume that I'm reusing pants and that I have an infinite supply of interoperable shirts and pants then I can introduce a function $ B(d) $ to calculate the number of optimally packed bags I'll need for $ d $ days of travel. This function takes into account the optimized number of outfits $ O $ that one bag can hold and the number of times a pair of pants can be reused $ r $.

The objective is still to maximize the number of outfits $ O $ that can be assembled given the constraint of suitcase volume $ V_{\text{case}} = 46,464 \, \text{cm}^3 $. The formula becomes:

$ O = \left\lfloor \frac{V_{\text{case}}}{r \times V_{\text{pants}} + V_{\text{shirt}} + 2 \times V_{\text{socks}} + V_{\text{boxers}}} \right\rfloor $

Now, for $ d $ days of travel, the number of pants $ P $ required would be $ \lceil \frac{d}{r} \rceil $.

The function $ B(d) $ would be:

$ B(d) = \left\lceil \frac{d + \lceil \frac{d}{r} \rceil}{O} \right\rceil $

Here $ \lceil x \rceil $ denotes rounding up to the nearest whole number.

This function tells us the number of bags needed based on the number of days traveling $ d $ and the number of times a pair of pants can be reused $ r $. This gives us an optimal _outfit packing_ for TSA-approved carry-on bags.

## Conclusion

By using volume calculations and a bit of calculus, we find that the rolling method is superior for fitting more outfits into a TSA-approved carry-on suitcases. In theory one could _theoretically_ fit 32 full outfits using the rolling method but you're gonna be squeezing.

With some basic innovations like reusability, $ B(d) $ we add a whole new layer (no pun intended) of optimization to the packing problem. Not only can we find the optimal number of outfits to fit in one bag, but we can also determine the number of bags needed for any given duration of travel. This makes your packing not just efficient but mathematically optimal.

You're welcome.
