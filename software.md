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
    <li><a href="https://github.com/DavidAwad/pebbledex"><img src="{{ site.baseurl }}public/img/projects/pebbledex.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/traffic-sign-classifier"><img src="{{ site.baseurl }}public/img/projects/traffic-sign.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/lane-detection"><img src="{{ site.baseurl }}public/img/projects/lane-detection.jpg"></a></li>
    <li>
      <a href="https://github.com/DavidAwad/">
        <video autoplay loop>
          <source src="{{ site.baseurl }}public/img/projects/self-driving.mp4" type="video/mp4">
        </video>
      </a>
    </li>
    <li><a href="https://github.com/DavidAwad/insightweets"><img src="{{ site.baseurl }}public/img/projects/insightweets.png"></a></li>
    <li><a href="https://github.com/DavidAwad/Read-Between-The-Lines"><img src="{{ site.baseurl }}public/img/projects/read between the lines.png"></a></li>
    <li><a href="http://armnewbrunswick.org"><img src="{{ site.baseurl }}public/img/projects/ARM.png"></a></li>
    <li><a href="https://github.com/DavidAwad/advanced-lane-detection"><img src="{{ site.baseurl }}public/img/projects/advanced-lane-detection.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/hi.rd"><img src="{{ site.baseurl }}public/img/projects/Hi.rd.png"></a></li>
    <li><a href="https://github.com/DavidAwad/blocky"><img src="{{ site.baseurl }}public/img/projects/blocky.png"></a></li>
    <li><a href="https://github.com/DavidAwad/vehicle-detection"><img src="{{ site.baseurl }}public/img/projects/vehicle-detection.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/kinectsentrygun"><img src="{{ site.baseurl }}public/img/projects/sentrygun.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/spaceshare"><img src="{{ site.baseurl }}public/img/projects/spaceshare.png"></a></li>
    <li><a href="https://github.com/DavidAwad/ironmyo"><img src="{{ site.baseurl }}public/img/projects/ironmyo.jpg"></a></li>
    <li><a href="https://github.com/DavidAwad/Waves"><img src="{{ site.baseurl }}public/img/projects/waves.png"></a></li>
    <li><a href="https://github.com/DavidAwad/vcluster"><img src="{{ site.baseurl }}public/img/projects/vcluster.png"></a></li>
    <li><a href="https://github.com/DavidAwad/particle-filter"><img src="{{ site.baseurl }}public/img/projects/particle-filter.gif"></a></li>
    <li><a href="https://github.com/DavidAwad/simpleandroid"><img src="{{ site.baseurl }}public/img/projects/simpleandroid.png"></a></li>
    <li><a href="https://github.com/DavidAwad/spn.rutgers.edu"><img src="{{ site.baseurl }}public/img/projects/spn.png"></a></li>
    <li><a href="https://github.com/DavidAwad/ProducerConsumer"><img src="{{ site.baseurl }}public/img/projects/bookorder.png"></a></li>
    <!-- <li><a href="https://github.com/DavidAwad/pauline"><img src="{{ site.baseurl }}public/img/projects/pauline.png"></a></li> -->
    <li><a href="https://github.com/DavidAwad/Goldbach-Conjecture"><img src="{{ site.baseurl }}public/img/projects/goldbach.png"></a></li>
</ul>


<!-- scripts for image carousel -->
<script type="text/javascript" src="{{ site.baseurl }}public/js/masonry.pkgd.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}public/js/imagesloaded.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}public/js/classie.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}public/js/AnimOnScroll.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}public/js/modernizr.custom.js"></script>

<script>
  new AnimOnScroll( document.getElementById('grid'), {
      minDuration : 0.4,
      maxDuration : 0.7,
      viewportFactor : 0.2
  } );
</script>
