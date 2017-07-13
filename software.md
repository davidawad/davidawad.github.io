---
layout: page
title: Software
---

This page contains information about various pieces of software I've written. Feel free to peruse.

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
