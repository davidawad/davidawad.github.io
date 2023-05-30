---
author: David Awad
pubDatetime: 2016-12-10T07:17:15Z
title: How Does Bitcoin Work?
postSlug: 12-10-How-does-bitcoin-work
featured: true
draft: false
tags:
  - docs
ogImage: ""
description: ""
---

_disclaimer_ This post aims to introduce the functionality of bitcoin along with a general one for a non-technical reader.

If you want just the technical stuff, skip to the “How” section.

## What.

<div id="commentable-area">
  <p data-section-id="1" class="commentable-section">
So if you’ve been on the internet at all you’ve probably heard of a lot of things about Bitcoin. If you google search what bitcoin is right now you’re going to get a pretty comprehensive, but not very approachable definition.
</p>

<div class="cd-testimonials-wrapper">
			<p>
        bitcoin
      </p>
      <p>
      /ˈbitˌkoin/
      </p>
      <p>
      a type of digital currency in which encryption techniques are used to regulate the generation of units of currency and verify the transfer of funds, operating independently of a central bank
      </p>
			<div class="cd-author">
				<ul class="cd-author-info">
					<li>Google.com Definition</li>
				</ul>
			</div>
</div>

So a digital currency is something we’ve seen before. We make payments online everyday through services like PayPal, Venmo, and all sorts of other ACH transactions. What would make bitcoin any different from the money we already use?

To answer this question, we have to identify what we think currency is in the first place.

currency: a system of money in general use in a particular country.

Aha, so currency is something specific to a country and government. A group of people live in the same country and agree that country’s currency has value in exchange for goods and services. That value is then backed by the government, and the currency is regulated by a central bank.

Bitcoin is built without the need for any central authority (decentralized) and built in such a way that the currency is reliable enough to be used instead of something like the USD or the Euro.

It can be transmitted securely, and has value anywhere in the world regardless of what different governments do that could affect their currency. (such as brexit, and Trump) that influence the value of their nation’s currencies.

<h2> How. </h2>

<h4>this is where you want to skip to for more info on the protocol.</h4>

There are a couple problems to worry about when making an online and decentralized currency, mostly that currency can’t be counterfeited and that the same money can’t be spent twice. The intricacies of those problems are outside the scope of this post, but we’ll talk a bit about what the bitcoin protocol does.

  <p data-section-id="2" class="commentable-section">
    Let’s imagine that <em>Alice and Bob</em> want to send money to each other using this hypothetical virtual currency. Alice needs to use the internet to do it, and there’s no bank or clearing house to validate it.
  </p>

</div>

How do we start our transaction? **By having alice declare it to the world.**

So Alice prepares a message stating, “Alice is sending bitcoin `82303348` to Bob.” She then _encrypts_ this message and sends it out to everyone on the bitcoin network.

Everyone receives this message, including Bob. When bob gets this message, he knows that Alice sent the money, and so does everyone else. As other people on the network hear that message, each adds it to a list of pending transactions that they’ve been told about, but which haven’t yet been approved by the whole network. The approval process starts with other observers on the network.

Let’s say that an observer on the network, David, checks his copy of the list, and can see that each transaction is valid. He would like to help out by broadcasting news of that validity to the entire network.

However, before being able to tell anyone as part of the validation protocol David is required to solve an intentionally hard computational puzzle called the proof-of-work. Without the solution to that puzzle, the rest of the network won’t accept his validation of the transaction.

Without a solution to that puzzle, the rest of the network won’t accept his validation of a transaction.

The puzzle that he has to solve, is something like the following:

Let $h$ be a fixed hash function known to everyone.

> note: a hash function is an operation that attempts to produce a unique signature for each possible input. The hash function used in the bitcoin protocol, for example, is [SHA-256.](https://en.wikipedia.org/wiki/SHA-2)

Suppose we add a fixed value $x=0$ to a block of transactions $L$ in a peer’s queue. where $h(L+x) = out$

_for simplicity_, we’ll use $L$=`hello world`, but this would work the same for any $L$ that could be represented numerically. Even say, _a number that encodes a bunch of people sending each other money_.

```python
h('Hello, world!0') =

1312af178c253f84028d480a6adc1e25e81caa44c749ec81976192e2ec934c64
```

Now if we set $x=1$ and try that value

```python
h('Hello, world!1') =

e9afc424b79e4f6ab42d99c81156d3a17228d6e1eef4139be78e948a9332a7d8
```

The puzzle _solution_ might be to find a value of $x$ that creates **4 consecutive zeroes** at the beginning of the output value.

###### Note that this is a problem that can take a long time to find the answer to, but can be checked very quickly.

If we keep incrementing $x$ and _recalculating_ the SHA value, we won’t actually find an acceptable nonce for this value of $L$ until we get all the way up to $x=4250$

```python
h('Hello, world!4250') =
0000c3af42fc31103f1fdc0151fa747ff87349a4714df7cc52ea464e12dcd4e9
```

###### you can check this on your own machine as well with the `sha256sum` command.

```bash
echo -n 'Hello, world!4250' | sha256sum
0000c3af42fc31103f1fdc0151fa747ff87349a4714df7cc52ea464e12dcd4e9
```

It's important to remember that this is a hypothetical example, and that instead of requiring leading zeroes, the Bitcoin proof-of-work puzzle requires the hash of a **transaction block’s header** to be _lower_ than or equal to a number known as the [target](https://en.bitcoin.it/wiki/Target). This [target](https://en.bitcoin.it/wiki/Target) is automatically adjusted to ensure that a Bitcoin block takes, on average, about ten minutes to validate.

So it would take a computer a while to find the right value for $x$, but once we know the answer, other computers can use this $x$ value to see if it’s right, and if it is we can say that David’s computer has proof of work for this block of transactions $L$. When he has the answer he sends it out to the other computers on the bitcoin network.

Everyone has similar records of all transactions (including the one david’s computer just worked on) that they keep and manage as they hear about them from everyone else, and remember which ones are validated. This /public list of transactions that **everyone shares** is called **the blockchain**.

The proof of work puzzle of calculating a **nonce** ($x$) for a specific block of transactions is called _mining_. And the protocol gives monetary rewards to those who mine blocks, making the currency more reliable as other people constantly validate your transactions and share that information with everyone else; and eventually getting to Bob! **This is why it tends to take a couple minutes for someone to confirm it when bitcoin is send to them.**

There’s plenty more to this process than what we’ve gone over here, but I hope this was an easy to understand introduction to bitcoin that ignores most of the fluff. If you’re interested, the blockchain ledger itself is managed through a [merkle tree data structure](https://en.wikipedia.org/wiki/Merkle_tree) which is the first place to start reading if you want to learn more.

### Relevant links:

- The bitcoin [source code](http://github.com/bitcoin/bitcoin)

- [A more detailed post by Michael Nielsen](http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/)
