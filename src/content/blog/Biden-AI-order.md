---
author: David Awad
pubDatetime: 2023-11-5T16:38:49Z
title: Biden's Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence is unconstitutional. 
postSlug: 11-05-biden-eo-unconstitutional
featured: true
draft: false
tags:
  - law
  - computing
  - policy
ogImage: "/assets/img/aireg_1.png"
description: "We take a basic lens to the regulations of the Biden Executive Order and outline how it is not constitutional or enforceable under our current understanding of the First Amendment."
---

![](/assets/img/aireg_1.png)

If you take a look at this recent executive order from the Biden administration, you'll find that it's silly. It's just not a meaningfully well-thought out piece of legislation. [The source text of the executive order can be found here.](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/)

I'm going to make the argument that restriction of software (of any kind) is unconstitutional. (That's going to be the issue for our IRAC, if you know what that is). 

If you don't want a bunch of the legal underlying infrastructure feel free to skip the next two sections and get to [the substance of the executive order here](#many-provisions-of-this-executive-order-violate-the-first-amendment-and-fail-strict-scrutiny)


#### Background: Constitutionality of law in the US
> if you know what strict scrutiny is, feel free to skip this section.

The Constitution of the United States takes a philosophical perspective of *negative rights* or *liberties* which I will define has as the idea that the government can't prevent you from doing certain things. I have a "right" to freedom of speech that can't be infringed. Individuals have many of these fundamental rights granted to them by the constitution for various things; right to a speedy trial, right to face your accuser, right to assembly, etc.

When various state, local and federal governments create statutes that infringe on fundamental rights, you should sue them on the grounds that the law violates your constitutionally protected rights and is therefore unconstitutional. At which point (for simplicity here) the court applies a level of constitutional scrutiny to the law. 

> Now, as a technical matter, when someone "challenges the constitutionality of a law", they are actually suing the government official responsible for enforcing the law (the secretary of state or head of the EPA for example). This is based on a legal principle known as "Ex parte Young," (See [*Ex Parte Young*, 209 U.S. 123 (1908)](https://casetext.com/case/gitlow-v-people-of-the-state-of-new-york)) which allows for a federal court to issue an injunction against a state official to stop an unconstitutional action.

In order to bring that suit, you can't just make a hypothetical claim ("I think X is unconstitutional"). You have to have standing, meaning you are a party with an interest in the outcome and that you are harmed, or will be imminently be harmed by the law's enforcement. Finally you have to show that the court can provide the relief you're seeking. (A declaration the law is unconstitutional or an injunction preventing them from enforcing that law).

#### Background: First Amendment restrictions
> if you know how the First Amendment works, feel free to skip this section. 

Let's start with the Amendment itself then explain how it's been interpreted. 

> "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."

This is the First Amendment that everyone essentially knows. Freedom of speech. 

As a logistical matter the First Amendment has been held as applicable to the states through the Due Process Clause of the Fourteenth Amendment, See [Gitlow v. New York, 268 U.S. 652 (1925)](https://casetext.com/case/gitlow-v-people-of-the-state-of-new-york)

For our purposes the information legally relevant here is that the government is able to restrict speech in limited ways. There's of course crimes like slander, conspiracy to commit a crime, etc. but there's really two types most lawyers are thinking about, (1) time, place, and manner restrictions and (2) content restrictions. 

1. Time place and manner restrictions are things like, "you can only protest during on Tuesdays" or "you have to get a permit to be able to hold a protest in this place". 
	- These restrictions must be content-neutral, narrowly-tailored to meet the a compelling government interest, and leave ample alternatives for the protected speech. 
2. It is generally presumed unconstitutional for a government to attempt to regulate the content of speech and it is subject to strict scrutiny. See [*Simon & Schuster, Inc. v. Members of the New York State Crime Victims Board*, 502 U.S. 105 (1991)](https://casetext.com/case/simon-schuster-v-crime-victims-bd?p=1&q=Simon%20%26%20Schuster,%20Inc.%20v.%20Members%20of%20the%20New%20York%20State%20Crime%20Victims%20Board,%20502%20U.S.%20105%20(1991)%0A&sort=relevance&type=case&ssr=false&scrollTo=true)

One last note on the nature of the scrutiny applied, typically the nature of the scrutiny applied is a function of the type of group that the law applies to, for the purposes of this article let's just assume that strict scrutiny would be used. 

> It's notable that AI itself is not part of any particular classification that could qualify laws regulating it under strict scrutiny. I think this is a good thing and people who believe that AI is in some way "alive" have no understanding of the technology and should go outdoors. However even if we did believe that AI was sentient or "living" in some way the argument would still hold that strict scrutiny should apply.

#### Software Is Legally Speech?

We now understand that speech regulations are generally unconstitutional. You may find yourself wondering how code is speech. The way to derive this predicate is for you to attempt to determine what the principle is that would divide them. Let's make the argument another way. 

Here's an example of some protected speech (let's just assume that this was published in a discrete math textbook somewhere): 
>The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. 
>
>Mathematically, it can be written as:
>$F(0) = 0, \quad F(1) = 1$
>
>And for $n > 1$:
  $F(n) = F(n-1) + F(n-2)$

I think most would agree that this text is protected speech just as they would some political bile. 

Now here's an example of the same concept written in the form of computer code that you could follow to compute the same number:
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

If the difference between these two seems obvious to you then I'd be happy to hear it. 

We should think of computer code as a "choose your own adventure" book that you can download and read on your computer. Just like that book is protected speech, so is code. Here's a quick summary of some critical cases in this area; 

The Ninth Circuit Court of Appeals ruled in 1999 that source code was speech protected by the First Amendment, and that the government's regulations preventing its publication were unconstitutional. See [*Bernstein v. United States Dept. of Justice*, 176 F.3d 1132 (9th Cir. 1999)](https://casetext.com/case/bernstein-v-united-states-dept-of-justice?p=1&q=Bernstein%20v.%20Department%20of%20Justice&sort=relevance&type=case&ssr=false&scrollTo=true). The status of encryption code specifically was affirmed again in the textbook context in [*Junger v. Daley*, 209 F.3d 481 (6th Cir. 2000)](https://casetext.com/case/junger-v-daley?p=1&q=Junger%20v.%20Daley:%0A%0A&sort=relevance&type=case&ssr=false&scrollTo=true) Here's Chief Judge Boyce F. Martin, Jr. writing for the majority in that case:

> "Because computer source code is an expressive means for the exchange of information and ideas about computer programming, we hold that it is protected by the First Amendment."_Junger v. Daley_, 209 F.3d 481, 485 (6th Cir. 2000)

While Judge Martin doesn't have the technology exactly right the core legal principle is sound. The publication of source code is an expressive means for the exchange of information. 

In 2001, the Second Circuit Court of Appeals acknowledged that computer code is speech, even in a case involving Eric Corley, who published code for decrypting DVD content. See [*Universal City Studios, Inc. v. Corley*, 273 F.3d 429 (2d Cir. 2001)](https://casetext.com/case/universal-city-studios-inc-v-corley?p=1&q=Universal%20City%20Studios,%20Inc.%20v.%20Corley:%0A%0A&sort=relevance&type=case&ssr=false&scrollTo=true)

A final notable mention to a case where Apple tried to subpoena email records to find the sources of leaked information on a product. The defendants claimed blogger protection under the First Amendment. In that case the court specifically recognized digital communication as a form of protected speech. See [this great article on the case from the EFF](https://www.eff.org/cases/apple-v-does) For other instances of failed attempts to regulate speech, you can take a look at the [institute for justice's blog of commercial speech cases they've won](https://ij.org/case/?pillar=commercial-speech)

**So we know that computer code and representations of information is speech, but isn't some speech illegal?** So as we saw earlier there are specific types of speech that are illegal like incitement of violence, fighting words, slander, defamation, and finally the conspiracy or solicitation to commit other crimes. But that's basically it.
#### You can even publish books and software on how to make weapons too.

I've written in the past about how [even the computer design files for producing 3D printable weapons is generally considered speech](https://davidaw.ad/posts/05-05-3d-printed-weapons--explained/). See; [*Defense Distributed v. U.S. Dep't of State*, 838 F.3d 451 (5th Cir. 2016)](https://casetext.com/case/distributed-v-us-dept-of-state-1)

There are cases in this area as well; 

United States government's attempt to prevent the magazine "The Progressive" from publishing an article that purported to reveal the "secret" of the hydrogen bomb. The government would have lost this case but for it having been rendered moot with someone else publishing it.  See [*United States v. Progressive, Inc.*, 467 F. Supp. 990 (W.D. Wis. 1979)](https://casetext.com/case/united-states-v-progressive-inc-2)

In *United States v. Stevens*, the Supreme Court struck down a federal law aimed at criminalizing the commercial production, sale, or possession of certain depictions of animal cruelty, on the grounds that it was an unconstitutional violation of the First Amendment. The ruling implied a high bar for the government to restrict publication, even of distasteful or dangerous content. See [*U.S. v. Stevens*, 559 U.S. 460 (2010)](https://casetext.com/case/us-v-stevens-28)

> As a side note on this topic, I recommend The Anarchist Cookbook, the first book to push the boundaries on this standard. (Make sure to get the 1971 version not the cowardly rewrite.)

Now let's get into the substantive provisions of the executive order that I think won't make it through a federal district courthouse. 

#### Many provisions of this executive order violate the first amendment and fail strict scrutiny

The first place for comment is the definition of what a model is, the core item being regulated. 
(*this is the rule for you IRAC folks out there*)

> (k)  The term “dual-use foundation model” means an AI model that is trained on broad data; generally uses self-supervision; contains at least tens of billions of parameters; is applicable across a wide range of contexts; and that exhibits, or could be easily modified to exhibit, high levels of performance at tasks that pose a serious risk to security, national economic security, national public health or safety, or any combination of those matters, such as by:
> (i)    substantially lowering the barrier of entry for non-experts to design, synthesize, acquire, or use chemical, biological, radiological, or nuclear (CBRN) weapons;
> (ii)   enabling powerful offensive cyber operations through automated vulnerability discovery and exploitation against a wide range of potential targets of cyber attacks; or
> (iii)  permitting the evasion of human control or oversight through means of deception or obfuscation.

The rule must be regulating a _something_. So it either regulates the code itself or the weights. However, to regulate either would be a speech content restriction.

Further, the very first sentence of the definition of the thing being regulated is invalid.

The data used to prepare a model is irrelevant legally to the functional output of the model. What's substantive is not the amount of time to prepare or the amount of data used to prepare it, but the output of the model itself, the code and the weights, which both are independently First Amendment protected speech.

The definition then attempts to discriminate speech as a function of length, which is obviously unconstitutional. 
(k)(i), (k)(ii) and (k)(iii) specifically attempt to create content restrictions based on the exact written outputs of the model. 


##### "broad" datasets
The statute specifically attempts to distinguish between models based on the content of the data prepared, with the term "broad" being probably void constitutionally for vagueness. 

Under the Due Process Clauses, a law will be held “void for vagueness” if it forbids conduct that is so unclearly defined that: (i) persons “of common intelligence must necessarily guess at its meaning and differ as to its application”

Here, the statute specifically outlines that if a model is trained on a broad dataset, it is subject to regulation. Almost any machine learning model, especially a language model would be trained on a "broad" dataset as construed by almost any regulator. 

This statute almost certainly would need to be revised in order to be enforceable. 


Because speech can't be regulated by content or for the "broadness" of the content, nor can it be regulated by length, or what specific type of content is being published the definition of what would qualify as a model is unenforceable and wouldn't be able to apply, rendering the entire order useless essentially. If we took the analogy of an author publishing a book, none of these restrictions would be valid in any way. 

The next rule worth mentioning is § 10.1 (b)(viii)(C) which calls specifically for watermarking of content that is created by artificial intelligence.
> (C)  reasonable steps to watermark or otherwise label output from generative AI;

Here, content neutral time place and manner restrictions are workable if they are narrowly tailored to a specific government interest. 

Here it's hard to imagine a compelling government interest in labeling images or content created by individuals running software on their computer as "created by a computer". Furthermore there's not a strong distinction as mentioned previously in what kind of content should be considered as generated by AI. 

For example, if AI was used in simply improving the color contrast in a photo, would that be considered requiring watermarked? The statute would suggest that it does. 

#### Forcing the disclosure of the code and weights of a model is a taking under the Fifth Amendment

§4.1(i)(B) goes on to suggest that the publisher of this software must report to the department of commerce.
>the ownership and possession of the model weights of any dual-use foundation models, and the physical and cybersecurity measures taken to protect those model weights;

I would argue that the model weights are a form of intellectual property and that the publication of the weights themselves is a taking under the Fifth Amendment. Because the code itself is the entire suite of intellectual property, that the disclosure of the code is a form taking that's hard to quantify.

> While I do maintain that software is speech, in this instance the requirement of mere notification of information is realistically not a taking and only a form of regulation because it doesn't interfere with ownership or primaru use of said property. Assuming that the code is not appropriated for economic use by the government then Even I must admit as far as the law is concerned, the Fifth Amendment arguments are somewhat weak. If the government cited a national security interest in this respect, it could be received as a compelling government interest as well even if this weren't seen as a regulation. That said there is no national security interest that's considered more compelling than an individual's fundamental free speech rights except for former federal defense employees. See [_Snepp v. United States_, 444 U.S. 507 (1980)](https://casetext.com/case/snepp-v-united-states)


§4.1(ii) goes further;

> (ii)  Companies, individuals, or other organizations or entities that acquire, develop, or possess a potential large-scale computing cluster to report any such acquisition, development, or possession, including the existence and location of these clusters and the amount of total computing power available in each cluster.

This requirement also compels speech in the form of reporting requirements, it's debateable whether a court would agree that the government has a compelling interest in the availability and concentration of computing hardware but I suspect many reasonable judges may disagree.

To be forced to report this information about your personal and private property (in the form of computer hardware) without reasonable suspicion of having committed a crime is a search under the Fourth Amendment and is therefore unconstitutional.

§ 4.2 (b)(i) outlines that the content of the outputs (the weights) should be regulated on the basis of the amount of computing power used to create it. 

> (i)   any model that was trained using a quantity of computing power greater than 1026 integer or floating-point operations, or using primarily biological sequence data and using a quantity of computing power greater than 1023 integer or floating-point operations; and
> (ii)  any computing cluster that has a set of machines physically co-located in a single datacenter, transitively connected by data center networking of over 100 Gbit/s, and having a theoretical maximum computing capacity of 1020 integer or floating-point operations per second for training AI.

Here we find another instance of required disclosures based on the amount of time used to prepare a model and also based on the content (biological sequencing data). 

As discussed earlier there must be a compelling interest for these kinds of disclosure and censorship requirements. 

Because the restriction clearly censors based on the content and the amount of time used to prepare the speech it would be subject to strict scrutiny and fail constitutional muster. 

Remember that the government is required to show that these laws are the least restrictive means of achieving whatever compelling interest it's claiming to have. Here, we don't know what that compelling interest is, but let's say the government cited an interest in preventing fraud for example. Here, there are clearly less restrictive means of achieving all these things like, for example, a posted notice on whatever communication medium that the artificial intelligence is made available through that it was used to produce that content. Instead of requiring government approval or disclosure you can do many less difficult things.

There are other parts of the executive order that are also problematic but the point has been made. When you draw the analogy of an author publishing a choose your own adventure book almost all of these kinds regulations become subject to intermediate or strict scrutiny and are unenforceable. Most federal judges would almost definitely find that these broad or specific limitations on speech and creative content as overly burdensome to individuals and publishers and find them unconstitutional.

#### Could these provisions realistically get struck down? Probably.

Federal judges are not the kind of individuals who like to bring on political heat, so theres' always the chance that they do the wrong thing in intense cases. That being said, they also don't like to deviate from well established law. The First Amendment is about as well established as it gets. 

Furthermore, in the larger political ethos, most people don't see this as a "hot partisan issue", and even if it was, you don't want to be the judge ruling "the government is allowed to regulate speech if the speech is produced in a way that they don't like".

So my money is on this getting thrown out with the average judge, but I'd be willing to bet that it finds its way into more than one Circuit Court of Appeals.
