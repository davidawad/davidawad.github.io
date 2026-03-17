---
author: David Awad
pubDatetime: 2023-11-6T16:38:49Z
title: Regulating Intelligence is Dumb
postSlug: 11-06-regulating-intelligence-is-dumb
featured: true
draft: false
tags:
  - law
  - computing
  - policy
ogImage: "/assets/img/gpu_lonestar.jpeg"
description: "Here we tackle the core of the arguments for regulating AI and establish that they're immoral, impractial, illegal and only serve to hurt the United States."
---

![](/assets/img/gpu_lonestar.jpeg)

This article is my definitive outline on why the domestic regulation of artificial intelligence is one of the worst policy ideas of the last decade, and why this specific Executive Order from the Biden administration is unconstitutional.

Let me summarize my conclusion upfront: regulating artificial intelligence is a bad idea for the United States (and almost any other country). Why? 
- It's immoral
- It only hurts the United States
- It's impossible to do
- The rule makers clearly don't understand the technical reality on the ground
- It's plainly unconstitutional under the law and infringes on fundamental rights

###  Morally 

Intelligence is the most valuable resource in this world. We want more intelligence in this world, not less. 

Intelligence is positively correlated with:
- life satisfaction
- nonviolence
- higher educational achievement
- economic prosperity

**To advocate for LESS availability of intelligence is to suggest that people should have less of these things.** 

More importantly, every individual has an incentive to acquire as much intelligence as possible for the same reasons. This means that there will always be someone somewhere who seeks this as quickly as they possibly can. Once you solve intelligence, then comes every other problem that you can describe with language.

Software, and specifically AI, is the lowest cost available tool for creating that intelligence for the largest number of people in the most personalized way. 

People want to be more intelligent, that's generally a *good thing*.  Intelligence is a tool for people to create new ideas and produce things of value for others. 

Books and Software teach people new things. Both can be given away for effectively free. 

We don't ban books that teach people things we don't like. We also don't penalize people who are naturally smarter than others in various ways. 
Why would you delay tools that make people smarter?

> *It seems like you'd only want that if you don't want people to be smarter, but maybe that's just me.*

#### Regulatory capture is evil

It is well understood that creating regulations entrenches well-funded market participants, prevents competition, and hurts consumers. The wealth of evidence on this point is well understood and outside the scope of this blogpost.

However, what I can point out is that the vast majority of innovation in AI has come from a very wide and healthy mix of startups and large incumbents. 

I've written about the generative AI investment landscape separately in my work at the Dubai Future District Fund; [More on that here](https://dfdf.vc/todays-generative-ai-investment-landscape/). Even that work may now be out of date but suffice it to say that there has been a tremendous amount of competition, jobs and investment into this space that's wonderful for everyone. 

Slamming the door on that with incredibly cumbersome regulations and reporting requirements only serves to gate keep the software industry, destroy many budding private companies and kneecap one of the great industries in the United States. 

**Picking winners and losers is what you do when you want your friends to get rich and nobody else.**  It's immoral.

###  Competitively, the more we regulate AI, the more we lose

From the perspective of each individual country around the world; the game theory doesn't make any sense to try to stop AI as this technology can increase productivity and output of their own economies.

The United States currently has a debt-to-GDP ratio of around 110-120% depending on who you ask. 1 Trillion dollar industries don't come along every day, and [we've already lost the opportunity to be the crypto capital of the world to the United Arab Emirates](https://www.coindesk.com/consensus-magazine/2023/06/27/dubai-launching-a-crypto-regulatory-arm-to-become-a-global-financial-power/#:~:text=The%20center%20of%20the%20crypto,the%20Virtual%20Asset%20Regulatory%20Authority.).  We can't afford to turn down economic opportunities that are [projected to increase global GDP by as much as 7%, see: Goldman Sachs](https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html). 

We don't live in a unified world. If the united states pushes AI offshore as we did crypto, our enemies certainly won't make the same mistake.

- [China is embracing AI](https://asia.nikkei.com/Opinion/China-has-too-much-invested-in-AI-to-smother-its-development#:~:text=In%202017%2C%20China's%20State%20Council,a%20matter%20of%20national%20pride.), along with almost every other country around the world. 
- Europe, in classic fashion, [wants to control it](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence).  
- [Iranian leaders believe this technology can assist the fatwa](https://www.ft.com/content/9c1c3fd3-4aea-40ab-977b-24fe5527300c)

#### The classic prisoner's dilemma

Any such coalition, in order for it to work, needs every other country to agree. Once a single country defects to seek AI, they will outpace every other country as the technology improves (and improves itself). Exponentials are hard to reason about, but every country wants to improve it's situation in the world and this tool offers the fastest way to do that in human history. 

Realistically, any agreement would be similar to the dance of nuclear weapons with each country denouncing proliferation in public and building artificial intelligence in secret. (I'd say this has actually gone far better than we could have expected but that's a talk for another day.)

###  Practically it would be impossible to regulate this in any serious way

#### other countries are not gonna do this

It's going to be impossible to stop the proliferation of knowledge about AI. Even if we wanted to (which as covered above would be immoral and self-destructive) there's no realistic way to get all countries on board, and even if they were we still wouldn't be able to do it.

The world clearly does not agree that AI is a serious problem. Even further, the governments of the world have never cooperated in any serious way on any issue. Even the Paris Climate accords, the most obvious deal in the world to save the planet itself doesn’t have global agreement. 

Several notable countries [never signed or adopted the agreement](https://www.cfr.org/backgrounder/paris-global-climate-change-agreements ): 

- Iran
- Yemen
- Libya
- etc. 

It seems to me that we're far less likely to get agreement from other countries on any seriously enforceable agreement to prevent all 8 billion people from getting enough compute power together to slow down the technology. 

#### the cat is out of the bag on this one

Artificial Intelligence, like many other tools is already widely available. LLMs are given away for free online by individuals and companies around the world and devoting computing resources towards ever greater models. 

There are already open source tools for running things yourself locally and in the cloud: 
- [Ollama](https://ollama.ai/)lets you run models on your own machine and mix and match them
- [LM Studio](https://lmstudio.ai/) does the same thing (with a better interface in my opinion)
- [GPT4All](https://gpt4all.io/index.html) runs any model locally on your machine with the same interface as ChatGPT 

How is this possible? Let's break down what a model is and what it requires to run. 

A "model" is a trained set of weights. What are weights? A big matrix of numbers trained to realize a function. So when we "train" a model we're just modifying values in a matrix (model "weights"). When you download a model, you're downloading that matrix and just running it on your computer. 

What's more, you can run one of these models on the average computer sold in the United States today. Here's an example; 

- Processor: Intel Core i5 (11th, 12th, or 13th generation) or AMD Ryzen 5 (3000 or 5000 series) [5](https://www.cnet.com/tech/computing/best-desktop-computer/), [6](https://it.uni.edu/what-features-should-my-personal-computer-have)
- Memory (RAM): 8-16 GB of RAM [1](https://www.hp.com/us-en/shop/tech-takes/specifications-personal-computers-over-time),[3](https://sites.udel.edu/computing-purchases/personal-specs/)[6](https://it.uni.edu/what-features-should-my-personal-computer-have)
- Storage: 240 GB solid-state drive or larger [1](https://www.hp.com/us-en/shop/tech-takes/specifications-personal-computers-over-time), [3](https://sites.udel.edu/computing-purchases/personal-specs/),[6](https://it.uni.edu/what-features-should-my-personal-computer-have)
- Graphics: Almost any 30XX series NVIDIA GPU would do a fine job.

This hypothetical computer  I've listed here [can run a 7B parameter model](https://www.infoworld.com/article/3705035/5-easy-ways-to-run-an-llm-locally.html#:~:text=The%20Ollama%20GitHub%20repo's%20README,Llama%20performance%20was%20surprisingly%20snappy.) and only costs about [$600](https://pcpartpicker.com/list/49Htk9). 

#### even if they were willing to try it can't be done

The apparatus to achieve any sort of "control" on the running of machine learning algorithms would require a global government surveillance apparatus the likes of which we've never seen before. 

I don't think I need to make this case here, but monitoring the exact workloads running on CPUs across the world would be; 
- a logistical nightmare 
- a political nightmare
- a totalitarian nightmare
- an intelligence nightmare

and most importantly impossible to synchronize, with computers being hidden all over the world and running offline on tor networks, the dark web, and all the rest of it. 

#### but to be clear they definitely won't try

I work primarily within the United States, the United Arab Emirates, and Egypt. So let's imagine  you're a country like Egypt. [Natural resources like Oil are 20+% of your GDP](https://www.trade.gov/country-commercial-guides/egypt-oil-and-gas-equipment) but you think you can finally start to diversify away from it if you keep investing the oil money into other endeavors. You're finally starting to get some foothold in the world economy and develop a local [talent and startup ecosystem](https://www.businesstodayegypt.com/Article/1/3194/Egypt-s-startup-ecosystem-defies-global-trends-attracts-over-500M#:~:text=In%202022%2C%20Egypt's%20startup%20ecosystem,founders%20in%20the%20Mediterranean%20region.) with lots of investment in local talent despite currency problems caused by inflation of your pegged currency in the United States. 

You’ve now been told by the west that you have to stop your national development and cut your own GDP because of their particular ideas about what's best for the environment.

Not only that, but artificial intelligence? that incredible technology? No you shouldn't be allowed to develop that either because it's not good for us. We think you should stop it. 

Good luck with this pitch. Try it and let me know how that goes. 


### The rules don't make any technical sense 

From just a pure engineering standpoint these rules are unhelpful at best. 

From the text; 
>  (b)  The term “artificial intelligence” or “AI” has the meaning set forth in 15 U.S.C. 9401(3):  a machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations, or decisions influencing real or virtual environments.  Artificial intelligence systems use machine- and human-based inputs to perceive real and virtual environments; abstract such perceptions into models through analysis in an automated manner; and use model inference to formulate options for information or action.

Now a legal definition of something like dual-use foundation model was gonna be hard no matter what was picked but this is *far* too vague. This appears to cover **all of open source software in this area and almost any automated software too**. The developers of which are never going to do this and will just publish their content outside the United States.

Second, there are a bunch of regulatory requirements placed on "foundation models" defined below; 

> "(k)  The term “dual-use foundation model” means an AI model that is trained on broad data; generally uses self-supervision; contains at least tens of billions of parameters; is applicable across a wide range of contexts; and that exhibits, or could be easily modified to exhibit, high levels of performance at tasks that pose a serious risk to security, national economic security, national public health or safety, or any combination of those matters, such as by:"

So a foundation model is just one with 10+B parameters? Or it's just something that can be used to analyze information in an automated way?

These definitions could refer to almost any algorithm. Linear functions like $y=mx+b$ are AI models under this definition. 

Anyone interested in developing AI would simply read this rule and stay below 10B, which many models are. 

Further, if 10B parameters are the threshold then everyone will just stay below it. This is actually worse because you'll force all the open source innovation onto the average commercial desktops that are already out there. The innovation in this area is NOT a function of raw parameter count anyway. [Mistral-7B has already shown](https://mistral.ai/news/announcing-mistral-7b/) that innovation comes from training data preparation and model architecture. 

The regulations on IaaS providers are completely counterproductive. From the text; 

> (i)    Propose regulations that require United States IaaS Providers to submit a report to the Secretary of Commerce when a foreign person transacts with that United States IaaS Provider to train a large AI model with potential capabilities that could be used in malicious cyber-enabled activity (a “training run”).  Such reports shall include, at a minimum, the identity of the foreign person and the existence of any training run of an AI model meeting the criteria set forth in this section, or other criteria defined by the Secretary in regulations, as well as any additional information identified by the Secretary.
> (ii)   Include a requirement in the regulations proposed pursuant to subsection 4.2(c)(i) of this section that United States IaaS Providers prohibit any foreign reseller of their United States IaaS Product from providing those products unless such foreign reseller submits to the United States IaaS Provider a report, which the United States IaaS Provider must provide to the Secretary of Commerce, detailing each instance in which a foreign person transacts with the foreign reseller to use the United States IaaS Product to conduct a training run described in subsection 4.2(c)(i) of this section.  Such reports shall include, at a minimum, the information specified in subsection 4.2(c)(i) of this section as well as any additional information identified by the Secretary.

So every cloud provider in the United States must somehow be able to figure out whenever any user of their service is attempting to train a large language model? 

This is just technically impossible to do depending on the compute workload and places domestic cloud providers at a tremendous disadvantage to others around the world, such as [AliBaba Cloud](https://us.alibabacloud.com/en) that don't have to spy on their own customers CPU workloads to be sure that they're not "using machine inputs in virtual environments in an automated way".  

### It's Probably Unconstitutional

I want to break down the substantive legal question of whether this could even be done here in the united states. 

This section became so long that [I had to just make a seperate blog post. You can find that blog post here](/posts/11-05-biden-eo-unconstitutional)

## So how do we regulate this?

This is really easy. Tort law and Criminal law already solved these problems. 

Crimes are already illegal. (criminal law)
Hurting other people or taking their stuff is already illegal. (tort law)

AI should be regulated just like Google is now, that is to say, *not regulated*. 

If you want to murder someone, and you use google to lookup aspects of how to murder someone, and then proceed to murder them, that is a crime. You are prosecuted for murder. 

Similarly, if you use AI to learn more about specific aspects of how to murder someone, and then proceed to murder them, you get prosecuted for murder.  

If you commit fraud, whether with AI or not, that is a tort. You can be sued for that. We already know how to regulate this and we do so successfully in many other contexts. Law enforcement successfully employs many different methods of varying sophistication to accomplish these tasks. By the way, AI can be deployed defensively too. 

Think about the general model of cybersecurity, the defense always wins in the long run. The bad guy only has to mess up *once* to be captured. 

If you feel these tools are not effective enough, [join the club](https://ncsc.contentdm.oclc.org/digital/collection/tech/search), but your issue is judicial efficiency and effectiveness and *not* AI.


## Final thoughts

I think it's really important to keep in mind what this is about; that is, the same thing that it's always been about, *control*. I can't stress this enough. 

People who talk about aligning AI are talking about aligning *you*. The goal of this movement is to control what intelligence *you* are allowed to have. The honest advocates of these rules don't see the second and third order consequences that enable evil. 

What happens when tomorrow you're not allowed to ask an AI about an opposing political view? What happens when the person publishing an AI that shares politically unpopular information is subject to massive regulatory fines and punishments? 

> "The government would never do that" 

That's legitimately their answer, just ask these people. If the government could control what ChatGPT was allowed to tell you they absolutely would. 

The people that want these rules don't care about your safety, they are interested in staying on top of everybody else. Evildoers then egging them on from the shadows, foaming at the mouth for the chance to control intelligence itself and use it for themselves.

Fortunately, you can ignore and defeat them in the courts of public opinion. Download your models offline with tools like [LM Studio](https://lmstudio.ai/) for free. Encourage more open source development of [better and better](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) models. 

It is tremendously unfortunate that we live in a world where the technologies available can be so easily controlled. The most important development in the history of software was not the [BJT transistor](https://byjus.com/physics/bipolar-junction-transistor/#:~:text=A%20bipolar%20junction%20transistor%20is,the%20collector%2C%20and%20the%20emitter.) but the [GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html).  My view has always been that a free and open internet filled with readily available and ever expanding software and knowledge has always been one of the best things in the history of humanity.

People advocating against AI, are using the same tactics of many evildoers in the past. Fear. 

They're not afraid for their safety. They're afraid of more tools and knowledge available for the many and not the few. Large Language Models are stochastic parrots. They have no intentions. They have no will. They do not kill people. Artificial intelligence is not a thing of that kind. 

And finally, just to prove the point; 

![](/assets/img/aireg_2.png)

And there you have it, no one is getting killed by a graphics card.

Knowledge to the people.

-------------------------------

If you made it to the end of this blog post I am tremendously thankful and would sincerely appreciate it if you could share this in your circles for exposure.

[The text of the executive order can be found here.](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/)

If you enjoyed this you may enjoy this post on how [even the computer design files for producing 3D printable weapons is generally considered speech](https://davidaw.ad/posts/05-05-3d-printed-weapons--explained/).
