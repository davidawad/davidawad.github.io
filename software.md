---
layout: page
title: Software
---

{% comment %}
<!-- TODO add the following projects and images -->
markov chains
https://github.com/davidawad/Edgar

localization
https://github.com/davidawad/Unscented-Kalman-Filter
https://github.com/davidawad/Extended-Kalman-Filter

controllers
https://github.com/davidawad/MPC-controller
https://github.com/davidawad/PID-controller

misc
https://github.com/davidawad/fubot
https://github.com/davidawad/basildb
https://github.com/davidawad/spelltest
{% endcomment %}


I write lots of software and give it away for free on github. I try to emulate the three virtues of a great programmer that Larry Wall, the original author of Perl believed in.

- **Laziness**: The quality that makes you go to great effort to reduce overall energy expenditure. It makes you write labor-saving programs that other people will find useful and document what you wrote so you don't have to answer so many questions about it.
- **Impatience**: The anger you feel when the computer is being lazy. This makes you write programs that don't just react to your needs, but actually anticipate them. Or at least pretend to.
- **Hubris**: The quality that makes you write (and maintain) programs that other people won't want to say bad things about.


Without futher ado, the following images, videos and gifs are all links to free and open source projects available for you to download through github. If anything feels like it's difficult to use or poorly built please feel free to leave feedback on the individual project repositories or send me an email.


<!-- PORTFOLIO SECTION TODO automate this somehow at some point in the future -->
<ul class="grid effect-2" id="grid">
    <li><a href="https://github.com/DavidAwad/pebbledex"><img src="/public/img/projects/pebbledex.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/traffic-sign-classifier"><img src="/public/img/projects/traffic-sign.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/lane-detection"><img src="/public/img/projects/lane-detection.jpg"></a></li>
    <li>
      <a href="https://github.com/DavidAwad/">
        <video autoplay loop>
          <source src="/public/img/projects/self-driving.mp4" type="video/mp4">
        </video>
      </a>
    </li>
    <li><a href="https://github.com/DavidAwad/insightweets"><img src="/public/img/projects/insightweets.png"></a></li>
    <li><a href="https://github.com/DavidAwad/Read-Between-The-Lines"><img src="/public/img/projects/read between the lines.png"></a></li>
    <li><a href="http://armnewbrunswick.org"><img src="/public/img/projects/ARM.png"></a></li>
    <li>
      <a href="https://github.com/DavidAwad/capstone">
        <video autoplay loop>
          <source src="/public/img/projects/capstone.mp4" type="video/mp4">
        </video>
      </a>
    </li>
    <li><a href="https://github.com/DavidAwad/hi.rd"><img src="/public/img/projects/Hi.rd.png"></a></li>
    <li><a href="https://github.com/DavidAwad/blocky"><img src="/public/img/projects/blocky.png"></a></li>
    <li><a href="https://github.com/DavidAwad/vehicle-detection"><img src="/public/img/projects/vehicle-detection.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/kinectsentrygun"><img src="/public/img/projects/sentrygun.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/spaceshare"><img src="/public/img/projects/spaceshare.png"></a></li>
    <li><a href="https://github.com/DavidAwad/ironmyo"><img src="/public/img/projects/ironmyo.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/advanced-lane-detection"><img src="/public/img/projects/advanced-lane-detection.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/Waves"><img src="/public/img/projects/waves.png"></a></li>
    <li><a href="https://github.com/DavidAwad/vcluster"><img src="/public/img/projects/vcluster.png"></a></li>
    <li><a href="https://github.com/DavidAwad/particle-filter"><img src="/public/img/projects/particle-filter.gif"></a></li>
    <li><a href="https://github.com/DavidAwad/simpleandroid"><img src="/public/img/projects/simpleandroid.png"></a></li>
    <li><a href="https://github.com/DavidAwad/spn.rutgers.edu"><img src="/public/img/projects/spn.png"></a></li>
    <li><a href="https://github.com/DavidAwad/ProducerConsumer"><img src="/public/img/projects/bookorder.png"></a></li>
    <!-- <li><a href="https://github.com/DavidAwad/pauline"><img src="/public/img/projects/pauline.png"></a></li> -->
    <li><a href="https://github.com/DavidAwad/Goldbach-Conjecture"><img src="/public/img/projects/goldbach.png"></a></li>
</ul>



---

## Technical Information

Every single part of this site is handled using open source code and infrastructure.

* Built as a static site using [Jekyll](http://jekyllrb.com).
* Uses [Poole](http://getpoole.com) for [Jekyll](http://jekyllrb.com).
* Themed with [Hyde](https://github.com/poole/hyde).
* The footnotes and side comments are done with [side-comments.js](https://github.com/aroc/side-comments)
* The mathematics used throughout is rendered with [MathJax](https://www.mathjax.org/)
* The search feature was implemented pretty quickly thanks to [this snippet from alembic](https://github.com/daviddarnes/alembic/blob/master/_includes/site-search.html#L14-L56).
* The picture of me at the top of this page is written in pure [sass](http://sass-lang.com/) with additional mixins from [bourbon](http://bourbon.io/)
* The image grid comes from the [fantastic carousel library by Mary Lou from Codrops](https://tympanus.net/codrops/2013/07/02/loading-effects-for-grid-items-with-css-animations/)
* Page Meta information and SEO is done using [Jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
* The email infrastructure is handled by [SendGrid](http://sendgrid.com) which has some fantastic documentation that made this really easy to do.
* SSL is handled through [cloudflare](cloudflare.com). The connection is encrypted and authenticated using a strong protocol (TLS 1.2), a strong key exchange (ECDHE_ECDSA with X25519), and a strong cipher (AES_128_GCM).
* It's hosted for free through [GitHub Pages](https://pages.github.com).
* Uses [Google Analytics](https://analytics.google.com) for me to be aware of how well my site is doing.
* You can find the [source code here](github.com/davidawad/davidawad.github.io).

---

Have questions or suggestions? Feel free to [open an issue on GitHub](https://github.com/davidawad/davidawad.github.io/issues/new) or [ask me on Twitter](https://twitter.com/_davidawad).





<!-- scripts for image carousel -->
<script type="text/javascript" src="/public/js/masonry.pkgd.min.js"></script>
<script type="text/javascript" src="/public/js/imagesloaded.js"></script>
<script type="text/javascript" src="/public/js/classie.js"></script>
<script type="text/javascript" src="/public/js/AnimOnScroll.js"></script>
<script type="text/javascript" src="/public/js/modernizr.custom.js"></script>

<script>
  new AnimOnScroll( document.getElementById('grid'), {
      minDuration : 0.4,
      maxDuration : 0.7,
      viewportFactor : 0.2
  } );
</script>
