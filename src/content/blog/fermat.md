---
author: David Awad
pubDatetime: 2017-07-17T07:17:15Z
title: Fermat's Last Theorem
postSlug: 07-17-fermat
featured: false
draft: false
tags:
  - docs
ogImage: ""
description: ""
---

> note: this blog post is about a pretty much random piece of number theory that had gone unsolved for over 300 years, but I will admit that it's not that exciting for regular people. Especially this one, where I'm pretty much just stealing a wikipedia article because I found it interesting. It's my blog I do what I want.

**Fermat's Last Theorem** states that no three positive integers $a$, $b$, and $c$ satisfy the equation $a^{n} + b^{n} = c^{n}$ for any integer value of $n$ greater than $2$.

> The cases $n = 1$ and $n = 2$ have been known to have infinitely many solutions and fermat specifically pointed that out when he gave us what little information he did.

## The Story

Pierre de Fermat was a prominent french lawyer and mathematician. He used to keep a book of different ideas in math at the time and would scribble in the proofs on the edges of the page.

Fermat's last theorem has a very interesting story. He was sitting at home alone one day by the fire sipping wine and eating cheese; reading everyone's favorite math classic novella, The 1670 edition of Diophantus' Arithmetica. This book contained a lot of the mathematical conjectures and theories that were believed at the time. He was reading this book and proving the conjectures within the margins of the pages!

One of the last theorems in the book was the one above, he had written that it **could** be proven, but that there wasn't enough space in the margins of the pages at the time. (a terrible shame) So he never actually wrote down the proof; and unfortunately passwed away before writing it. Pierre de Fermat died aged 57 or 58, on January 12, 1665 in Castres, France. The cause of his death is not known. Three days before his death, he had been carrying out legal business in the local courthouse. He was buried in the Church of St. Dominique in Castres.

## The problem

Now this left us with a pretty difficult problem, all of the other proofs in the book were correct, so we had reason to believe that this theorem was also true, but we had no way to prove it!

This set the math community ablaze.

With the special case $n = 4$ proved by Fermat himself, it suffices to prove the theorem for exponents $n$ that are prime numbers (this reduction is considered trivial to prove, mostly by angry math professors). Over the next **two centuries** (1637–1839), the conjecture was proved for only the primes $3$, $5$, and $7$, although [Sophie Germain innovated and proved an approach that was relevant to an entire class of primes](https://en.wikipedia.org/wiki/Sophie_Germain%27s_theorem).

[Ernst Kummer](https://en.wikipedia.org/wiki/Ernst_Kummer) extended this and proved the theorem for _all regular primes_, leaving irregular primes to be analyzed individually. Building on Kummer's work and using sophisticated computer studies (probably a big for loop tbh), other mathematicians were able to extend the proof to cover all prime exponents up to _four million_, but a proof for all exponents was inaccessible (meaning that it was either impossible, exceedingly difficult, or unachievable with current knowledge).

## The mystery intensifies

Entirely separately, around 1955, Japanese mathematicians Goro Shimura and Yutaka Taniyama suspected a link might exist between elliptic curves and modular forms, two completely different areas of mathematics. Known at the time as the Taniyama–Shimura-Weil conjecture, and (eventually) as the modularity theorem, it stood on its own, with no apparent connection to Fermat's Last Theorem. It was widely seen as significant and important in its own right, but was (like Fermat's theorem) widely considered completely inaccessible to proof.

## The last guy that would be tortured by this french troll.

Enter Andrew Wiles, he grew up with a childhood fascination with Fermat's theorem (not a fun childhood in the opinion of this author). He had a background of working with elliptic curves and related fields, decided to try to prove the Taniyama–Shimura conjecture as a way to prove Fermat's Last Theorem. In 1993, after **six years working in secrecy** on the problem, Wiles succeeded in proving enough of the conjecture to prove Fermat's Last Theorem. Wiles's paper was massive in size and scope. A flaw was discovered in one part of his original paper during peer review and required a further year and collaboration with a past student, Richard Taylor, to resolve. For his proof, Wiles received the 2016 Abel Prize.

To imagine dedicating your life to solving a problem, spending six years in secrecy only to have an error pointed out when publsihing the solution. When he discovered the missing piece and complete the proof after an additional year must have been incredible.

<div class="cd-testimonials-wrapper">
			<p>
        "I was sitting at my desk examining the Kolyvagin–Flach method. It wasn’t that I believed I could make it work, but I thought that at least I could explain why it didn’t work. Suddenly I had this incredible revelation. I realised that, the Kolyvagin–Flach method wasn’t working, but it was all I needed to make my original Iwasawa theory work from three years earlier. So out of the ashes of Kolyvagin–Flach seemed to rise the true answer to the problem. It was so indescribably beautiful; it was so simple and so elegant. I couldn’t understand how I’d missed it and I just stared at it in disbelief for twenty minutes. Then during the day I walked around the department, and I’d keep coming back to my desk looking to see if it was still there. It was still there. I couldn’t contain myself, I was so excited. It was the most important moment of my working life. Nothing I **ever do again** will mean as much."
      </p>
			<div class="cd-author">
				<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMTEhMVFRUXFRUYFRcVFRUWFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGysdHR0rKysrLS0tLSstLS0rLS0tKystLS0rNystLS0tLS0tLTctLTcrLSstKy0tKzcrKystK//AABEIAKYA8AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA/EAABAwIEAwYEAwUGBwAAAAABAAIRAyEEEjFBBVFxBhMiYYGRMqGx8AfB0SNCUuHxFBVikqLCM0RTY3KCsv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAkEQEBAAICAgICAgMAAAAAAAAAAQIRAyEEEjFBIlETgRQjYf/aAAwDAQACEQMRAD8A8qAutlikwIgCkqtEpU25Z35oThKI1qn3aCCbSRhhjYIzGwnHEFgEwY976IBDu7JbulbHDSBGm5S76UGN9EAq3D2nbRaqsmArhlJpZF/iEnYWKWDWte0tMwdxbUSgKtlKCVJtKdla4wOIbMTLj4QAAJEXG6yjTbG6YV4wcNLisoUTCva2FD2hrbnfyCbwHDmEhjRNrlU8nJMWjh4cs3PP4a+A4NMc4MJPuyDovSaPZvLcOcLaXA9v1VTX7KPzWI9v5Kj+bbZ/i6+nGkHXKeqXdU8l2Vbs5VGoJ+QSp7OHcH2TnKjlwX9OWpkHyRQ1XlTs+2+ohVeIwrqZh2mx/VW48m2bk4LjCpYi0aWq2GJylTgK2Kb0VaFItRMqkGo0iiGQisapZUakxJMxSCJT0lQZKPSZaEqcNUwIlRp08xTOHZLURlKFXtPTgqaOgNCYa24V7O3SZJgJhrSTEXU8KMsOjQpkvBMoAIp3RW0ETL5KZfeEBGkW+HNPhNxz3CFWYC61wb+6ap0xBcRN4A/VSqtADXNETNuRHL3QC7Ww0g7kH2S/dhNOuohlrGR5JgKlF1gNtNdESkFZcJoMDg6oZLSIbHNQzy9ZtZxYe2Ui14JwAkDNInX75Lt+H8EY0w1sDw6eU3Kzs7w+TmOm3L06LqqFMDZcy25Xddi5Tjx1Fe7AwEM4cHYeyt65sq2rUAS0OPkyyIV6IuqrFUByVxVMqvrpb7ap8OexuCEHZcTxJgkhwBn6L0HiVQAEBcLxindXcdZ+eTSgq0shjUajotOrkqeMPgB3BKHTaCJWzjz305PLhqtAqQlGbStPnHusbTVqmMpuTLDdBFNNUmpXRwzSCPksIUKQTNJVXachmmICNkshsRGuMqKceegXTTGhK1HItErQzHaJsmGBKUk5SKAL3pIA5KTQhkQpMcmSwp0czIafFmu3mI1CKAxjQ14Bdc32nQWVe6rdTfzQaOJDYGXzn35dFpjZpmBo4Sd7goDimqdU5C2BeL72QNl6YsVb8LwoIa4m5dDeZi5t+aqe8ggc9Oq6jsphg+rpZtm+9z6wFl8i9Nvi4vTeE0srGjyH0VkwXVdSdF9kLE8aYwXWONmeFvwt6sEKix78pSdXtXQJy5hPkgY/FhwkXiSjJdwcdxvZ7DulriqzilSAp0MaW0wNDkBd1ddUmOq1HbJSL71shj8VyXP8QdI9DKu8Xg3kHZc1j3Q2Drf1VuEZOWqjFnwqPDryJA8yoYw2UcE6Hx0n2V+PVYuSbW4peF45Qfn/ADQWapui2c3m0/IBA7qOa07YqiGymKTULIRrKPBHL0MpXtKGqYTFMJWi/mmWG8FRThuk0ybKZCGDopkqCcedl6Nh32SyPTV7McpvTVJ10lSKaouQDbwd1kEm3JToFpmdVqi6/UQmTT2OlY7OrFzYS1RplPQ0Bl5phot6ITijBwhBwThfDBXeA+QG3JaLi+3VdXwPhNRuJIZUysbBkau5NcOXNB7BYcOdVzf9tvvnP+0LrqGBFKpLfhvI/wARj8lz/IzvtY63i4T+OX7qb8Y5jc1TxXN2iB0A2XLdqMRj+6NRgkX/AGdJrS5oixc52t9QF2tGAS10XktncHUdQhV2tgjTkqMbq7aNe01OnkvCMPWqPYa7TJ1BBA256LvcDT7klppuqaQ0RLZm0nXRbqcLc50/C3yN0/wfDObne90zZvKBN1LK+yeM9Zpw3aTtA5tVzQDSgeLM2XbQAJjneUlw1mIew1AYB3c4Enn4Qq7t7XJxTwLyBPUf1Vz2H4nSNCrTJNN7oBc0kGRoQdrq7DGTFm5csrya/Tf96vykd4yoPIT9Cub4hXzmR6wi4zhzMPam4uOgAge/NL4RhzEwQAHHpb9U9SfCFyvxVZjzp0QOFHM6fNZxasQbi55C2inwYgGCIvaVORm5Oq6Si/I642gj0KLkYYkkE78oGkID1pzjGq0aZNmalK5vs3T0mFqthgJyiRa86TzCX737lTZXJ9vkklKYFHNJGg+iKwyOmnRBa+1rKVF8Gfu6VOG6VQzyUg5LUnIubZRsTlefsKMxLMcjtcrVVM001TKRpvRDUQisWvjREYYVfReU1TeSU/oLmkC5HygC9ylMI+0o2IqAgAW5lSLZctBJsotCKIBtdaaAg46zsC8h9YC5yAgeYJv8yu5xDf2TD5rguweIDcSWn99hHqIK9AxQgRNibCPdczyp+breJd4Sf9ZTLXABwkJHiNCAcr8rfM6epRi/K2VTCg6vU8Rim0gkczsCqG7HDvZylTc4WcY+bv0TVecthAA9klxfBVnhoo1u6j4jlDjHlKp+P8ZqYWj43ZjEFwbAJHMbKU7St+3nna9813OHWyW4Bi2hyq8ZxKpUeXG8np7JbDVyypyvK1Sdac7PPefs9BxFZhEwdP4SqmviwGljBd3xnyFw0eW56BKYnGZmiDsh4C5k6AKMmks7C+KoS8+Ufqn+D0AWB5AJO/lOyRq1vGP8U2+itsJSytDeQhX8c7ZOe6mhHNupZDCxwgrYKuYwn0wtNajtE7IVR2yVNJgWwo5rIlMJJCBTDkPMpBKnK8/YUZj0uCpMKlKWjTSmYSLSptqEplYep1IKaY66r6aYY5CK1w9XYohqKvbUhGFZTKxYsco5rpfvSFvPulsSnsLjHUnteww5pkH9V2XZLjlXE1KvevDoDCABAbciy4HMun7BPDazxN3MH+k/zWfyMZcbWvxM7M5N9O8qGGknQSfZKcNrMpUmio4ZnDM4kxLjcgdLBHqvlpHMEIFThFOuwCq0OgCJ2PMLmR278Hf7dTOjh1XOcSHeudmIyZTa0eqPjOBvvlqvaPLKR6SFyPGsBimHMHseBsWlsjzgrRjjEcsdTpzPF+EtpEkbkwFQYtmkJzitasXXAHIAkhKMzPcGkAT8le5ufycokgQU9SszqfkEKs0FwaE2MOXgtaQI+4RJs7qfIOBohzw4iSNPIclcZULAYYtac0SdhsOqK4rRx46nbHz5TK9IgKTiENxUahVlUjtcAEqwybo9NYcoUaEhTjVTBQg+VMFRTaLrrTihPddbqFA24QFTBQ1gT0ZhplGDuSVa5GYiUqcpIrbJek6EQPupIG2lEc2NEuHWRWulEoOtMx8lMXFkrSrJgGNPVGircJ/hONNGqx4EwY6g2Krw6Uxh6cub1b9Qo5TcsqWFsylj1rCGTfndWJtoqvijHMd3jP8A3HONwnMJjm1GggrkWdvRSl8eXRbdclxqq8ZjfSAu2xT2gGVzPGYc0mYVmPVSveLyvH1KhPiQqENIJVvxOqy+k6fzVC+StMczPqmsMZJO6uMFax/qqnDw2BqbK7o1Y15K3jnajmy61+zAJUHojnixaZBGm48ioG60sgDm3QiFJ7lpRoFaLKB1UmGUN1igCtClK1nsoykaBFyhvfZQqVblCcSUtByIWKMqQQm21FplBKIxyQM5kQOSwKJmUkbDmewRKb0oHIzXII2wo+eEkHKQeU9kaZUV3wOm6vVpU2RJcNdPDck+gXPUQXGAuv8Aweod/ja5Hw0qLgNwXVDlbfnYpZXpZhO49PxTcw6rkMSH0iS230K60ODgDzH3ZLVsM1wghcmXVd2zc6cZj+0TmjxNP5Kh4t2iL2wwGV23FOzjalh9FxHabgZoQWq7C41n5LnHMODtStF0KRJ3S1SpdXMuzWDPiBPNW+Yrn8MTUe1jeYLjyAKafxLuqz6bpyzLTuAb+qt47pRzfkuGuKMyqYhK06oIlpBHMIjDdXbZvhj9VKq6Ah1TBQ6ruSQ2Ph5F0SxQmLYcg4I9bCG5yg+m46IBWpcko7WwJPP8kPu41WB1kBxxF/Vac5Y50lDKimIiUygtRGoMdbDkGSpNKYMMcjMclWpinTcTYFPaNhmnqt5jKylQdI+ynKNEAb9Utj1rQaWNcZvG2/kvU/wG4N3WDqVzd1epB/8AGlLW/Nzj6ryvG1Ipm2sx/T1Xun4T4cs4XhZH8c/5jdE7S1pe8V4aRNSmJ3e0f/TRz1kKlzAwWmQR6Lsjm2uqHH8H8WekMpN3M0aTuW8is3Nwb/KNvj+T6/jkrWPXF9uMQA0DchdNjcUWSYj75LgeMiriKwa1jnvdZrGCT+gHmVTx4dtXLnPVxuNMC6Y4X2brYhveEGlR/jeIzeTBq7rovTeAfhzTpRVxrRXrfuUWkmlTPNxHxnTyVrxzAOjNVIEDwtEAAdAtmPH91zcuTvp5XSwNOlIYOpNyeq5ftHatb+ELtOIkBxhcVj3d5WPk1JAvg8c+mZaeo2PoumwPG6VT4oY7kdD0K5V1P7hY2n/ROXRWbdzUZN7Jas4tMLlqT3t+EuAPmrL+86zrudmtuB97KcyQ9Fv/AGhbpVQSqunxA7tHUJuhi2zJBHonuFpZGEQGEo3GMJHijrZNAhBMeA7VLGlEj2TRqtAQ6dQXQHnzjot5ldO7F47/AKBPR7D/ALlA9j8cP+Wf6ZT+ahuLlQHJrD0HP+EE/RP4ThZpZxWpkVB+6RceZCte6iAJt+aZVT/3e7cx8ymaPD2jW/U2CsMk3+tukKOXLO5QJAcjQBlACLlAv9/eik1on9dbXPTb5rXKevP0QJ8pt+cfNab5C83HkVj5duPS3tClRpk33A+5QLtDiRHhzReL9TaefpyXuv4R4g1OGsa8EFj3sIOtnLwipQL61JliXVWD/UJHSy+h+xj6bA+k0QS51SOYcbx0P1UJnJl6rP47cLlPp0LZbbUKbgCpFKY/GsoU31ahhlNpc4+QEqxU438RRTaKR7xlKo54a1ryQKgJA8UaATrsuk4RwalhWw0eI/G86uP5DyXzl2q47UxjqmIqk5nk5R/A06NHKBHzXtfYHtN/b8DTeXTUaMlbmKjRqeog+qjjq5baObG4YybWfFu0DKchuq894/xN9WTmK6rG4AEmVV1+E09CddY+isqiOBGBfVnKNNSlcV2d7ikXu/4jnN88oMwOq9Sq4WjQZlY0Cfclcn2pP7Lzc4fQ6LHycv8AsmE/tq4+L8LnXmeMp3JQKVPzVniGAxvp05/olGgCecLRGVIUZEGRyWYaSIIu2xH5o9F0bffroh4vwODhp+/v0P1TCbacflCIRczYHTzWj1POVMi45ckEEXW6c+aynWc2YJHksc+Dp5qIdfyKDplmOMwRPyPmn8Li2vIY0X8ryqNp+LaN+vP2S9HEZajTJA3gn3RstSr5nFag3+ZRhx2oNz/mcsWKupFcbUJY9xJLjcnUlSfeY5xqsWKcRojhoPU+cILgbQbxPrssWI+0mEEuiduSlhoJIHX8gsWIpC1qGhFrfoVqi0SVixCNtO8Boh2Nw5OmZxA6AwvVuG400nh42+h1C2sXP8m2cuNjp+LJeHKV31GqHNDhoRPmvM/x7426hgWUGyDiHkFw2ZThzh6yB7rFi6P05v28M4jWmm3Zdf8Aghxh1LGOw9yyu3Tk+nJDvYkLFihxNPk3dj23G059lR1XhgLyJhYsUue2Y9K+GS5aqmxGJL5c722XI8eqmo0vd8Idla3lAJJ9Vixcvh7y26Pk9YWRylSnOm89P5aoDqY1Hn8ltYuq5N+G6Y++iYyhwE6Eb8tL+6xYgyeCqfE03yxGmnIpwg2E7fRYsQUBqvFiBrdADo91pYo1IWk2abosSfS39VV1jdYsSD//2Q==" alt="Author image">
				<ul class="cd-author-info">
					<li>
            — Andrew Wiles, as quoted by Simon Singh
          </li>
				</ul>
			</div>
</div>

This is the small but fun story of Fermat's last theorem, formally proven and published in 1995, 358 years after it was first conceived; due to the dedication of Andrew Wiles.

> note: Like I said, I didn't have much to go on when it came to the second blog post I promised, but here it is. I hope the story behind this fun thing was relatively interesting, I didn't have the time or the background to go into the proof here, but you can find the linked paper below. (it's over 100 pages so have fun.)

## Sources

- Check out [Andrew Wiles's paper](http://scienzamedia.uniroma2.it/~eal/Wiles-Fermat.pdf) here.
- Wikipedia lol
