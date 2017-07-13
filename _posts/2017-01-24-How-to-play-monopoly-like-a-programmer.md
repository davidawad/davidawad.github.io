---
layout: post
title: How to play Monopoly Like a Programmer
categories: programming probability mongodb math python
---

### _An in depth tour of the game using simple stats, an intro to MongoDB atlas, and 100,000 trips to old Park Place._

Most of my friends know I’m a big fan of monopoly. I had been saying for a while that there must be an optimal way to play this game that can be modeled by simulating multiple monopoly games.

One question that’s worth answering is what spaces are landed on the most?

So we’re going to play monopoly like a programmer would. We’ll run a simulation of 100,000 games to model **what spaces a single player is most likely to land on**. Based on that we’ll know which spaces are the most valuable to purchase.

> For the record this is a hideous brute force approach to the problem and there are much more interesting monopoly simulations you can do using markov chains; unfortunately I am not Hannah Fry and cannot simply do these things in a blog post.

Since it’s a good set of sample data, I’ll show you how to store this data in MongoDB Atlas to make it easy for you when you need real database storage in the future. If you’ve never used MongoDB before, all you need to know is that it’s an Open Source Database that doesn’t use a formal mechanism in order to store data, you simply give mongo the objects and data you want to store and it handles the rest for you.

> MongoDB Atlas is a database as a service created by the experts who design and engineer MongoDB. It provides all of the features of MongoDB, while removing most of the operational overhead. With MongoDB Atlas you can deliver your applications quickly, and focus on what matters most to you and your customers. ~ **They’ll host a database for you, and do it really well**.

Without further ado; Let’s get to work!

## Running our Simulation

Here is my code for running our bare-bones monopoly simulation. ([you can find the source here](https://github.com/davidawad/monopoly))

```python
# models a single monopoly player's Tour around the board multiple Times
from random import shuffle, randint
# simulate 10^5 games
games  = 10**5
# average number of turns per game
finish = 35
# create array of all squares on the board
squares = [0]*40
# track the number of games so far
games_finished = 0

while games_finished < games:
# set of community chest cards
    master_chest = [0,40,40,40,40,10,40,40,40,40,40,40,40,40,40,40]
    chest = [i for i in master_chest]
    shuffle(chest)
# set of chance cards
    master_chance = [0,24,11,'U','R',40,40,'B',10,40,40,5,39,40,40,40]
    chance = [i for i in master_chance]
    shuffle(chance)
doubles  = 0
    position = 0
    turns = 0
while turns < finish:
        d1, d2   = randint(1, 6), randint(1, 6)
        diceroll = d1 + d2
# increment number of doubles
        if d1 == d2: doubles += 1
        else: doubles = 0
# go to jail
        if doubles >= 3: position = 10
else:
            position = (position + diceroll) % 40
# Chance Card
            if position in [7,22,33]:
                chance_card = chance.pop(0)
                if len(chance) == 0: # chance deck is spent
                    chance = [i for i in master_chance]
                    shuffle(chance)
                if chance_card != 40:
if isinstance(chance_card, int):
                        position = chance_card
                    elif chance_card == 'U': # utilities
                        while position not in [12,28]:
                            position = (position + 1)%40
elif chance_card == 'R': # railroad
                        while position not in [5,15,25,35]:
                            position = (position + 1)%40
elif chance_card == 'B': # back 3 spaces
                        position = position - 3
# Community Chest
            elif position in [2,17]:
                chest_card = chest.pop(0)
                if len(chest) == 0:
                    chest = [i for i in master_chest]
                    shuffle(chest)
                if chest_card != 40: position = chest_card
# Go to jail
            if position == 30: position = 10
squares.insert(position, (squares.pop(position)+1))
        turns += 1
games_finished += 1
print(squares)
# a player lands on a space (finish_order * games) times

```

There are some things to note about this simulator:

- It doesn’t track money which can affect the number of turns, but is independent of the dice rolls themselves.

- It assumes that the average monopoly game takes about 35 turns before a game ends.

- It assumes that the “Go To Jail” space is not one that can be landed on, but results in landing on the “Jail” space.

- This code makes no distinction between “just visiting” jail and “being in” jail. For our purposes the two are functionally the same, as we don’t get anything out of someone being in jail.


`total number of turns` = (`turns per game` \times `number of games played`)

So after running our simulator for `100,000` games what are our stats?

Take a look at this spreadsheet; we’ve listed the name of each numbered space on the board along with our calculated information. The frequency percentage has been calculated as the number of times landed on a space divided by the total number of turns in the simulation.


![]({{ site.baseurl }}public/img/mongo_1.png)
First Half of the Monopoly Statistics

![]({{ site.baseurl }}public/img/mongo_2.png)
Second Half of the Monopoly Statistics

## Storing our data in MongoDB

Now for showing off your fancy new data to your friends just in case they don’t believe your conclusions, we’ll store the data in MongoDB Atlas. (Arguably they should learn your conclusions the hard way, but let’s use MongoDB anyway; it’s a great tool for serious data storage and replication and the knowledge will come in handy in the future!)

The process of connecting to the Atlas hosted database is fortunately really simple.

There’s two components to this, we **create our database** in Atlas, and then simply **connect to it** from another computer or application to store our information.

#### Making our database in Atlas

Start by making an account on http://mongodb.com/atlas.

Once you’ve done that, you should get a screen that looks like this with no clusters.

![]({{ site.baseurl }}public/img/mongo_3.png)

screenshot taken from the actual mongodb blog :)

Go ahead and make your cluster with whatever number instances you want, you can set this up with the lowest tier settings with additional options for more complex setups, but for now we’ll stick with the small stuff.

> Note: make a note of the admin username and password as you’ll need them to connect in the future.


![]({{ site.baseurl }}public/img/mongo_4.png)
Setting up the mongo cluster

Once you have your cluster, click the connect button on the top right, and configure your whitelist entry to allow connections from anywhere. Hit confirm and we should be all set!

> Note: Even though your database is hosted in the cloud, allowing access from anywhere is incredibly dangerous and you should use more strict rules in production.


![]({{ site.baseurl }}public/img/mongo_5.png)

Our VERY DANGEROUS security whitelist

#### Connecting for that sweet, sweet data transfer

> Note: If you don’t have mongo installed already, you should definitely do a quick `brew install mongo` to get it. If you don’t have OSX or brew just [check out this page](https://docs.mongodb.com/manual/administration/install-community/) on how to install mongo.

So you’ve hopefully just installed the Mongo Client. You should be able to run the `mongo` application from the command line. `mongo` is the client program that’s going to do the talking to our actual database, which is **hosted for us** on the Atlas platform.

Hit the connect button again and take a look through the page; you should see a segment titled; “Connect with the Mongo Shell.”

Copy the sample connection command that is templated out for you.


![]({{ site.baseurl }}public/img/mongo_6.png)
copy that command; it’s gold!

```sh
mongo “mongodb://cluster01-shard-00–00-vvmfr.mongodb.net:27017,cluster01-shard-00–01-vvmfr.mongodb.net:27017,cluster01-shard-00–02-vvmfr.mongodb.net:27017/admin?replicaSet=Cluster01-shard-0” — ssl — username admin — password <YOUR_PASSWORD_HERE>

MongoDB shell version v3.4.1

connecting to: mongodb://cluster01-shard-00-00-vvmfr.mongodb.net:27017,cluster01-shard-00-01-vvmfr.mongodb.net:27017,cluster01-shard-00-02-vvmfr.mongodb.net:27017/admin?replicaSet=Cluster01-shard-0

2017-01-23T16:16:31.737-0500 I NETWORK  [main] Starting new replica set monitor for Cluster01-shard-0/cluster01-shard-00-00-vvmfr.mongodb.net:27017,cluster01-shard-00-01-vvmfr.mongodb.net:27017,cluster01-shard-00-02-vvmfr.mongodb.net:27017

MongoDB server version: 3.4.1

Cluster01-shard-0:PRIMARY>
```

#### Using the database

If you can see something like the screen above, you now have access to your database cluster!

![]({{ site.baseurl }}public/img/mongo_7.png)


So let’s do some of the basics! (you can read about more of the mongo shell and what it can do here)

We’ll go on with the basics, at the first mongoDB prompt, you can create a database right from the start, we’ll call ours monopoly.

```js
Cluster01-shard-0:PRIMARY> use monopoly

switched to db monopoly

Cluster01-shard-0:PRIMARY>

Now we can create a table of properties and start doing operations!

We’ll insert a few objects into our hosted collection in Atlas and then list them back out to make sure things went smoothly.

Cluster01-shard-0:PRIMARY> db.spaces.insert({'GO':95251})

WriteResult({ "nInserted" : 1 })
Cluster01-shard-0:PRIMARY> db.spaces.insert({'Mediterranean Avenue':68130})

WriteResult({ "nInserted" : 1 })

Cluster01-shard-0:PRIMARY> db.spaces.find()

{ "_id" : ObjectId("5886d25f482270f08c4e44a1"), "GO" : 95251 }

{ "_id" : ObjectId("5886d2d8482270f08c4e44a2"), "Mediterranean Avenue" : 68130 }

Cluster01-shard-0:PRIMARY>
```

You’ll find that this paradigm of choosing a db, selecting a collection and inserting documents into that collection, remains consistent throughout all of the mongo drivers for all of the different programming languages.

And now you’re all set to do anything with your Mongo powered Monopoly Database. Now please enjoy this completely unaltered photo of a walrus wearing a party hat.



![]({{ site.baseurl }}public/img/mongo_8.png)
“The Walrus in Question”

#### So what did we learn here?

- Interestingly, the space that ends up being landed on the most is Jail. What that means for monopoly or capitalism is beyond the scope of this blog, but it is an interesting fact nonetheless.

- The space that collects rent that is landed on the most is New York Avenue! The other orange properties seem to be solid investments probabilistically as well.

- The dark blue properties like Park Place, (or Park Lane in the UK!) are **never** worth it.

Lastly, the MongoDB Atlas platform has some fantastic features and is incredibly flexible; definitely take a look at mongodb.com if you’re interested in open source database software.

This post was originally inspired by [Hannah Fry](http://www.hannahfry.co.uk/). Her latest book, The Indisputable Existence of Santa Claus uses mathematics in a lot of unique and interesting ways. If you found this post interesting; she takes an entirely different approach to the monopoly problem and many others!

###### Special Thanks to MongoDB for giving me the Atlas credits to write this blog post!






