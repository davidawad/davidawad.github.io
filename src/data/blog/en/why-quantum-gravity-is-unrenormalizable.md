---
author: David Awad
pubDatetime: 2026-03-18T12:00:00Z
title: Why can't we do with the graviton what we did with the photon
postSlug: 03-18-quantum-gravity-unrenormalizable
featured: true
draft: false
tags:
  - physics
  - quantum field theory
  - general relativity
  - mathematics
ogImage: ""
description: "The mathematics of why integrating graviton momenta from zero to infinity produces infinities that cannot be absorbed by a finite set of counterterms — and why this is a fundamental, structural problem."
---

This problem is very annoying, As a non-theoretical physicist I didn't even know HOW to ask the question that I wanted to answer here.

Most everyone understands maxwell's equations and the concept of the photon, and the courses out there explain how we came to quantize light pretty well. Not as many get exposed to QFT but the materials are out there.

Once you start asking the more advanced questions like "what was acutally tried to model the graviton as a new particle" then suddenly ALL the course providers are silent. It's either high level hand-waving from the news or you're left with the journals to fend for yourself, that made me angry, which is why this post now exists.

This is my best attempt to explain the issues that arrived when we tried to model the graviton into the standard model. 

## It all starts with two slits

The double slit experiment is annoying af. An electron fired at a wall with two holes produces an interference pattern on the detector behind it — the same pattern you'd get from a wave. But electrons are particles. So which slit did it go through?

There is no fact about which slit the electron traversed, because no measurement recorded it. And if no measurement recorded it, excluding either path would make a prediction that disagrees with experiment. You must sum over both.

The moment you measure which slit, the interference pattern vanishes. Very silly.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg viewBox="0 0 320 260" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="260" fill="#111128"/>
  <text x="160" y="16" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">no observation: two distributions</text>
  <!-- source -->
  <circle cx="24" cy="130" r="8" fill="#40d0f0" opacity="0.8"/>
  <text x="24" y="150" text-anchor="middle" fill="#9090b0" font-size="7" font-family="monospace">source</text>
  <!-- particle paths through slit 1 -->
  <line x1="32" y1="126" x2="138" y2="100" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="32" y1="128" x2="138" y2="100" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="32" y1="130" x2="138" y2="100" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
  <!-- particle paths through slit 2 -->
  <line x1="32" y1="132" x2="138" y2="160" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="32" y1="130" x2="138" y2="160" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="32" y1="134" x2="138" y2="160" stroke="#40d0f0" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
  <!-- wall with two slits -->
  <rect x="136" y="20" width="8" height="72" fill="#9090b0"/>
  <rect x="136" y="108" width="8" height="44" fill="#9090b0"/>
  <rect x="136" y="168" width="8" height="72" fill="#9090b0"/>
  <!-- straight-through paths after slits -->
  <line x1="144" y1="100" x2="280" y2="100" stroke="#40d0f0" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="144" y1="160" x2="280" y2="160" stroke="#40d0f0" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
  <!-- detection screen -->
  <rect x="280" y="20" width="6" height="220" fill="#505068"/>
  <!-- two bands on screen -->
  <rect x="286" y="84" width="10" height="32" fill="#40d0f0" opacity="0.85" rx="2"/>
  <rect x="286" y="144" width="10" height="32" fill="#40d0f0" opacity="0.85" rx="2"/>
  <!-- labels -->
  <text x="140" y="12" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">barrier</text>
  <text x="290" y="12" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">screen</text>
  <text x="160" y="248" text-anchor="middle" fill="#40f0a0" font-size="10" font-family="serif">classical: 2 bands</text>
</svg>
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">No observation → two distributions (one per slit)</p>
</div>
<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg viewBox="0 0 320 260" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="260" fill="#111128"/>
  <text x="160" y="16" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">no observation: interference pattern</text>
  <!-- source -->
  <circle cx="24" cy="130" r="8" fill="#f0c040" opacity="0.8"/>
  <text x="24" y="150" text-anchor="middle" fill="#9090b0" font-size="7" font-family="monospace">source</text>
  <!-- wave arcs approaching wall -->
  <path d="M 40,130 Q 55,108 70,130 Q 85,152 100,130 Q 115,108 130,130" stroke="#f0c040" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M 46,130 Q 61,104 76,130 Q 91,156 106,130 Q 121,104 136,130" stroke="#f0c040" stroke-width="1" fill="none" opacity="0.3"/>
  <!-- wall with two slits -->
  <rect x="136" y="20" width="8" height="72" fill="#9090b0"/>
  <rect x="136" y="108" width="8" height="44" fill="#9090b0"/>
  <rect x="136" y="168" width="8" height="72" fill="#9090b0"/>
  <!-- Huygens wavelets from slit 1 -->
  <path d="M144,100 Q165,80 186,100 Q207,120 228,100" stroke="#f0c040" stroke-width="1" fill="none" opacity="0.55"/>
  <path d="M144,100 Q170,70 196,100 Q222,130 248,100" stroke="#f0c040" stroke-width="1" fill="none" opacity="0.4"/>
  <!-- Huygens wavelets from slit 2 -->
  <path d="M144,160 Q165,140 186,160 Q207,180 228,160" stroke="#f0c040" stroke-width="1" fill="none" opacity="0.55"/>
  <path d="M144,160 Q170,130 196,160 Q222,190 248,160" stroke="#f0c040" stroke-width="1" fill="none" opacity="0.4"/>
  <!-- detection screen -->
  <rect x="280" y="20" width="6" height="220" fill="#505068"/>
  <!-- interference pattern: alternating bright/dark fringes -->
  <rect x="286" y="22"  width="10" height="10" fill="#f0c040" opacity="0.18" rx="1"/>
  <rect x="286" y="44"  width="10" height="16" fill="#f0c040" opacity="0.45" rx="1"/>
  <rect x="286" y="72"  width="10" height="10" fill="#f0c040" opacity="0.18" rx="1"/>
  <rect x="286" y="94"  width="10" height="20" fill="#f0c040" opacity="0.72" rx="1"/>
  <rect x="286" y="126" width="10" height="28" fill="#f0c040" opacity="0.95" rx="1"/>
  <rect x="286" y="166" width="10" height="20" fill="#f0c040" opacity="0.72" rx="1"/>
  <rect x="286" y="198" width="10" height="10" fill="#f0c040" opacity="0.18" rx="1"/>
  <rect x="286" y="218" width="10" height="16" fill="#f0c040" opacity="0.45" rx="1"/>
  <!-- labels -->
  <text x="140" y="12" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">barrier</text>
  <text x="290" y="12" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">screen</text>
  <text x="160" y="248" text-anchor="middle" fill="#f07070" font-size="10" font-family="serif">quantum: interference fringes</text>
</svg>
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">No observation → interference pattern (normal weird distribution)</p>
</div>
</div>

The act of making the intermediate state observable destroys the effect that required you to sum over it.

So if you have a situation like this how do you measure the probability of a photon being detected at any particular position?

The mathematical expression of this is the path integral. The probability amplitude $\mathcal{M}$ for a particle to travel from state $A$ to state $B$ is:

$$\mathcal{M} = \int \mathcal{D}[x]\, e^{iS[x]/\hbar}$$

You integrate over every possible path $x(t)$ connecting $A$ to $B$, weighting each by $e^{iS/\hbar}$ where $S$ is the action along that path. No path is excluded.

<div style="text-align:center;margin:1.5rem 0;">
<svg viewBox="0 0 520 230" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .pi-p1{stroke-dasharray:422;stroke-dashoffset:422;animation:pi-draw 0.7s ease forwards 0.2s}
      .pi-p2{stroke-dasharray:460;stroke-dashoffset:460;animation:pi-draw 0.8s ease forwards 0.8s}
      .pi-p3{stroke-dasharray:640;stroke-dashoffset:640;animation:pi-draw 0.9s ease forwards 1.5s}
      .pi-p4{stroke-dasharray:640;stroke-dashoffset:640;animation:pi-draw 0.9s ease forwards 2.2s}
      .pi-p5{stroke-dasharray:540;stroke-dashoffset:540;animation:pi-draw 0.9s ease forwards 2.9s}
      .pi-p6{stroke-dasharray:840;stroke-dashoffset:840;animation:pi-draw 1.0s ease forwards 3.6s}
      .pi-lbl{opacity:0;animation:pi-fi 0.7s ease forwards 4.5s}
      @keyframes pi-draw{to{stroke-dashoffset:0}}
      @keyframes pi-fi{to{opacity:1}}
    </style>
  </defs>
  <rect width="520" height="230" fill="#111128"/>
  <text x="260" y="16" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">path integral: every path from A to B is summed</text>
  <!-- wild loop (behind, faintest) -->
  <path class="pi-p6" d="M58,110 C88,22 178,-6 238,44 C288,84 212,174 268,184 C328,194 428,154 462,110" stroke="#f08040" stroke-width="1.2" fill="none" opacity="0.5"/>
  <!-- zigzag -->
  <path class="pi-p5" d="M58,110 C118,44 202,176 260,110 C318,44 402,176 462,110" stroke="#40f0a0" stroke-width="1.3" fill="none" opacity="0.75"/>
  <!-- arc below -->
  <path class="pi-p4" d="M58,110 C158,198 362,198 462,110" stroke="#d040a0" stroke-width="1.5" fill="none" opacity="0.8"/>
  <!-- large arc above -->
  <path class="pi-p3" d="M58,110 C158,18 362,18 462,110" stroke="#f0c040" stroke-width="1.5" fill="none" opacity="0.8"/>
  <!-- slight arc above -->
  <path class="pi-p2" d="M58,110 C158,66 362,66 462,110" stroke="#40d0f0" stroke-width="1.5" fill="none" opacity="0.85"/>
  <!-- classical straight path (brightest, on top) -->
  <path class="pi-p1" d="M58,110 L462,110" stroke="rgba(255,255,255,0.95)" stroke-width="2.2" fill="none"/>
  <!-- Endpoints -->
  <circle cx="50" cy="110" r="9" fill="#111128" stroke="#6868a8" stroke-width="1.5"/>
  <text x="50" y="115" text-anchor="middle" fill="white" font-size="14" font-family="serif" font-style="italic">A</text>
  <circle cx="470" cy="110" r="9" fill="#111128" stroke="#6868a8" stroke-width="1.5"/>
  <text x="470" y="115" text-anchor="middle" fill="white" font-size="14" font-family="serif" font-style="italic">B</text>
  <!-- fade-in labels -->
  <text class="pi-lbl" x="260" y="107" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="8" font-family="monospace">classical (dominant)</text>
  <text class="pi-lbl" x="260" y="74" text-anchor="middle" fill="rgba(64,208,240,0.7)" font-size="8" font-family="monospace">e^(iS&#x2082;/&#x210F;)</text>
  <text class="pi-lbl" x="260" y="32" text-anchor="middle" fill="rgba(240,192,64,0.7)" font-size="8" font-family="monospace">e^(iS&#x2083;/&#x210F;)</text>
  <text class="pi-lbl" x="260" y="196" text-anchor="middle" fill="rgba(208,64,160,0.7)" font-size="8" font-family="monospace">e^(iS&#x2084;/&#x210F;)</text>
  <!-- summary formula -->
  <text class="pi-lbl" x="260" y="222" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">&#x2133;(A&#x2192;B) = &#x222B;&#x1D49F;[x] e^(iS[x]/&#x210F;) &#x2014; all paths, no exceptions</text>
</svg>
</div>

Paths that are wildly different from the classical trajectory don't vanish — they contribute oscillating phases that largely cancel each other out. The classical path survives because nearby paths have nearly identical phases and add constructively. Quantum behavior emerges where they don't.

Feynman diagrams were developed to apply this principle to particle interactions. Instead of summing over paths in space, you sum over all possible interaction histories consistent with what you observed at the boundaries — particles in, particles out. Each diagram represents one such history. 

The "virtual particles" appearing inside diagrams are not claims about what "really happened" — they are terms in the sum over unobserved intermediate states, exactly as both slits are terms in the double slit sum. The only thing that is real, in the sense of being observable and measurable, is $|\mathcal{M}|^2$ — the probability that emerges from summing everything you cannot see. We'll come back to this idea later, but first, we have to talk about some ideas from general relativity. 


### How does one... 'quantize' the gravity? 

To quantize gravity, the idea is this, we assume that this particle exists, and just try to measure and observe it's contributions to the physics of situations we already understand so we can compare our theory with experiment to determine it's predictive effect.

So let's try to do that here with gravity. General relativity gives us "the metric", $g_{\mu\nu}$, it encodes spacetime curvature meaning it defines distance _function_ between two points in spacetime.

In flat space you know how to use Pythagorean theorem to derive distance between two points:

$$ ds^2 = dx^2 + dy^2 + dz^2 $$ 

But we don't live in "flat" space, part of why GR was so wild is that it appears that reality itself curves with the existence of massive objects.

The metric contains the coefficients that tell you how to compute distance when space is curved:

$$ ds^2 = g_{\mu\nu} dx^\mu dx^\nu $$

It encodes the result of all the mass/energy in the universe already. Now back to the graviton particle.

To quantize gravity we assume the graviton exists as a small ripple on a flat spacetime. 

So we take a "basic spacetime" A.K.A. a flat spacetime, to start, that is modeled this way.

$$ \eta_{\mu\nu} $$
$ \eta_{\mu\nu}  = $ flat spacetime (our baseline approximation of a flat minkowski spacetime)

$$ \eta_{\mu\nu} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} $$ 

Then we embed our particle in it, that "somehow" encodes and conveys the force of gravity throughout the universe.

$$ h_{\mu\nu} $$

$ h_{\mu\nu} = $ the difference — what we're trying to quantize as the graviton

Now we can take the true metric of our actual universe from general relativity and relate it to the flat spacetime, naturally the contribution from the graviton is what we care about.

> As an aside, The current best estimate of the true metric of our reality is called the FLRW metric (the creators). Note that it's a function of time which makes sense as the universe is expanding at an increasing rate.
> $$ ds^2 = -c^2dt^2 + a(t)^2\left(\frac{dr^2}{1-kr^2} + r^2d\theta^2 + r^2\sin^2\theta\,d\phi^2\right) $$ 

Anyway we have a usable metric from GR, so we relate it to a flat spacetime and we have something we can use to model our graviton.
$$ g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu} $$


<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;margin:2rem 0;">
<svg viewBox="0 0 700 460" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sphG" cx="38%" cy="30%" r="68%">
      <stop offset="0%" stop-color="#ffffd8"/>
      <stop offset="40%" stop-color="#f0c040"/>
      <stop offset="100%" stop-color="#b05800"/>
    </radialGradient>
    <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f0c040" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#f0c040" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#f0c040" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="700" height="460" fill="#111128"/>
  <text x="350" y="26" text-anchor="middle" fill="#9090b0" font-size="11" font-family="monospace">how a massive object warps the spacetime fabric</text>
  <!-- Horizontal grid lines: constant j, i varies 0 to 10 -->
  <!-- px = 350+(i-j)*30, py = 250+(i+j-10)*15 + 90*exp(-((i-5)^2+(j-5)^2)/3) -->
  <!-- j=0 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.8" stroke-opacity="0.45" points="350,100 380,115 410,130 440,145 470,160 500,175 530,190 560,205 590,220 620,235 650,250"/>
  <!-- j=1 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.9" stroke-opacity="0.52" points="320,115 350,130 380,145 410,160 440,175 470,190 500,205 530,220 560,235 590,250 620,265"/>
  <!-- j=2 -->
  <polyline fill="none" stroke="#3060a8" stroke-width="0.9" stroke-opacity="0.60" points="290,130 320,145 350,160 380,176 410,193 440,210 470,223 500,236 530,250 560,265 590,280"/>
  <!-- j=3 -->
  <polyline fill="none" stroke="#3870b8" stroke-width="1.0" stroke-opacity="0.70" points="260,145 290,160 320,175 350,196 380,222 410,244 440,252 470,256 500,266 530,280 560,295"/>
  <!-- j=4 -->
  <polyline fill="none" stroke="#4080c5" stroke-width="1.0" stroke-opacity="0.80" points="230,160 260,175 290,193 320,222 350,266 380,300 410,296 440,282 470,283 500,295 530,310"/>
  <!-- j=5 (central deepest warp) -->
  <polyline fill="none" stroke="#50a0d8" stroke-width="1.3" stroke-opacity="0.92" points="200,175 230,190 260,210 290,244 320,300 350,340 380,330 410,304 440,300 470,310 500,325"/>
  <!-- j=6 -->
  <polyline fill="none" stroke="#4080c5" stroke-width="1.0" stroke-opacity="0.80" points="170,190 200,205 230,223 260,252 290,296 320,330 350,326 380,312 410,313 440,325 470,340"/>
  <!-- j=7 -->
  <polyline fill="none" stroke="#3870b8" stroke-width="1.0" stroke-opacity="0.70" points="140,205 170,220 200,236 230,256 260,282 290,304 320,312 350,316 380,326 410,340 440,355"/>
  <!-- j=8 -->
  <polyline fill="none" stroke="#3060a8" stroke-width="0.9" stroke-opacity="0.60" points="110,220 140,235 170,250 200,266 230,283 260,300 290,313 320,326 350,340 380,355 410,370"/>
  <!-- j=9 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.9" stroke-opacity="0.52" points="80,235 110,250 140,265 170,280 200,295 230,310 260,325 290,340 320,355 350,370 380,385"/>
  <!-- j=10 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.8" stroke-opacity="0.45" points="50,250 80,265 110,280 140,295 170,310 200,325 230,340 260,355 290,370 320,385 350,400"/>
  <!-- Vertical grid lines: constant i, j varies 0 to 10 -->
  <!-- i=0 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.8" stroke-opacity="0.45" points="350,100 320,115 290,130 260,145 230,160 200,175 170,190 140,205 110,220 80,235 50,250"/>
  <!-- i=1 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.9" stroke-opacity="0.52" points="380,115 350,130 320,145 290,160 260,175 230,190 200,205 170,220 140,235 110,250 80,265"/>
  <!-- i=2 -->
  <polyline fill="none" stroke="#3060a8" stroke-width="0.9" stroke-opacity="0.60" points="410,130 380,145 350,160 320,176 290,193 260,210 230,223 200,236 170,250 140,265 110,280"/>
  <!-- i=3 -->
  <polyline fill="none" stroke="#3870b8" stroke-width="1.0" stroke-opacity="0.70" points="440,145 410,160 380,176 350,196 320,222 290,244 260,252 230,256 200,266 170,280 140,295"/>
  <!-- i=4 -->
  <polyline fill="none" stroke="#4080c5" stroke-width="1.0" stroke-opacity="0.80" points="470,160 440,175 410,193 380,222 350,266 320,300 290,296 260,282 230,283 200,295 170,310"/>
  <!-- i=5 (central deepest warp) -->
  <polyline fill="none" stroke="#50a0d8" stroke-width="1.3" stroke-opacity="0.92" points="500,175 470,190 440,210 410,244 380,300 350,340 320,330 290,304 260,300 230,310 200,325"/>
  <!-- i=6 -->
  <polyline fill="none" stroke="#4080c5" stroke-width="1.0" stroke-opacity="0.80" points="530,190 500,205 470,223 440,252 410,296 380,330 350,326 320,312 290,313 260,325 230,340"/>
  <!-- i=7 -->
  <polyline fill="none" stroke="#3870b8" stroke-width="1.0" stroke-opacity="0.70" points="560,205 530,220 500,236 470,256 440,282 410,304 380,312 350,316 320,326 290,340 260,355"/>
  <!-- i=8 -->
  <polyline fill="none" stroke="#3060a8" stroke-width="0.9" stroke-opacity="0.60" points="590,220 560,235 530,250 500,266 470,283 440,300 410,313 380,326 350,340 320,355 290,370"/>
  <!-- i=9 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.9" stroke-opacity="0.52" points="620,235 590,250 560,265 530,280 500,295 470,310 440,325 410,340 380,355 350,370 320,385"/>
  <!-- i=10 -->
  <polyline fill="none" stroke="#2b5090" stroke-width="0.8" stroke-opacity="0.45" points="650,250 620,265 590,280 560,295 530,310 500,325 470,340 440,355 410,370 380,385 350,400"/>
  <!-- Sphere shadow -->
  <ellipse cx="354" cy="343" rx="23" ry="7" fill="#030310" opacity="0.60"/>
  <!-- Sphere glow -->
  <circle cx="350" cy="328" r="52" fill="url(#glowG)"/>
  <!-- Mass sphere -->
  <circle cx="350" cy="328" r="22" fill="url(#sphG)"/>
  <!-- Edge labels -->
  <text x="350" y="93" text-anchor="middle" fill="#4a5a72" font-size="9" font-family="monospace">flat spacetime (eta)</text>
  <text x="40" y="247" text-anchor="end" fill="#4a5a72" font-size="9" font-family="monospace">flat</text>
  <text x="660" y="247" text-anchor="start" fill="#4a5a72" font-size="9" font-family="monospace">flat</text>
  <!-- Mass label -->
  <text x="350" y="360" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">mass M</text>
  <!-- Curvature annotation -->
  <line x1="424" y1="276" x2="400" y2="304" stroke="#607090" stroke-width="0.9" stroke-dasharray="3,2"/>
  <text x="427" y="273" fill="#708090" font-size="9" font-family="monospace">curvature</text>
  <!-- Bottom formula -->
  <text x="350" y="428" text-anchor="middle" fill="#7070a0" font-size="10" font-family="monospace">g_uv = eta_uv + kappa * h_uv</text>
  <text x="350" y="446" text-anchor="middle" fill="#505070" font-size="9" font-family="monospace">h_uv encodes the departure from flat spacetime</text>
</svg>
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">A massive object (gold sphere) sits in the spacetime fabric. The flat grid (η<sub>μν</sub>) bends into a funnel-shaped depression — the curvature field h<sub>μν</sub>. The deeper the well, the stronger the gravitational pull.</p>
</div>

From here, all we know is that we have the metric that defines how spacetime is changing which we can use to model distance accurately between any two points in space. 

we think, *we don't know for sure*, that a graviton is the particle that mediates how gravity occurs in the universe. 

 The force particle must deliver the "message" between any two particles with mass in order for gravity to "happen". That particle must be exchanged. That is the theory.

For example, we can draw two electrons, and just like how there's other forces between them like the normal coloumb force $\frac{ k q_1 q_2 }{ r^2 }$, there's a force of gravity acting on them as well.

So we now need to model all of the ways this hypothetical interaction could occur. 

And similar to normal probability in order to have a complete picture, we need to actually look at all possible scenarios in order to model the situation accurately.

Feynman's insight was that a particle takes all possible paths simultaneously, and so you must sum the probability amplitudes of all of them. Each Feynman diagram corresponds to one possible "history" of the interaction. You sum them all to get the total amplitude.

Which brings us to a famous integral, whch we will use to sum the probability amplitudes of all the possible momentum states that could have occurred in this particular electron interaction.

Theoretically we could calculate these probabilities, then run over the to LHC, run an experiment and see what happens. If the theory accurately predicts experiment, we would have increased our confidence in the theory, and so on. 

So let's look at how this worked SUCCESSFULLY for photons, and then we'll come back to gravitons.

#### unlike gravitons, photons barely interact with each other, so it's easy predict behavior

We are verrrry lucky with Electricity and Magnetism. We can look at singular photons and model them explicitly.

Photon-photon scattering exists but is incredibly suppressed because it can only happen indirectly — via a loop of virtual electrons:

$$\gamma + \gamma \rightarrow e^+e^- \text{ (virtual)} \rightarrow \gamma + \gamma$$

The coupling is $\alpha \approx 1/137$ at each vertex, and you need 4 vertices for this diagram, so the amplitude goes as $\alpha^2 \approx 1/18000$. Negligibly small at low energies — which is why light beams pass through each other unaffected in everyday life.

This is why classical E&M is linear — superposition, interference, diffraction all work cleanly. The self-interaction is weak so it doesn't interfere with experiment.

### Spin and Forces

Before we can go further you need to understand "spin". Spin is an intrinsic property of particles — similar to angular momentum (the particle isn't actually spinning, we can blame Uhlenbeck & Goudsmit some other time but it was 1925). It comes in integer or half-integer multiples of $\hbar$ (a constant of nature), and it controls the mathematical structure of the field and the form of the interactions.

The spin of a force-carrying thing determines the angular dependence of the force it mediates: 

| Spin | Example | Field type |
|------|---------|------------|
| 0 | Higgs boson | Scalar |
| 1/2 | Electron, quark | Spinor (fermion) |
| 1 | Photon, W, Z, gluon | Vector |
| 2 | Graviton | Symmetric rank-2 tensor |

What this means is that spin directly influences the way that forces interact in multiple directions. For example Spin-0 has no angular dependence. the Force looks identical from every direction. Symmetric.

But to be more specific what we're talking about is particles that can be modeled as fields based on what kinds of interactions those particles have and what forces result from those. 

A spin-1 field (for example the field creating the photon) carries one power of momentum, and is described by a 4 item vector $ A_\mu =(ϕ, Ax​,Ay​,Az​) = (0,1,0,0) $. $\mu$ runs over 4 spacetime indices: $ μ = 0 (time), 1, 2, 3 $ (space). That's it. One index, four components. The photon's momentum is a separate 4-vector $p_\mu = (E, p_x, p_y, p_z)$.

> $A_\mu$​ works with one index because the EM field just needs to know which direction it points at each spacetime point. One index = one direction. Think back to any model of electricity or magnetism you've dealt with, you model the forces as a direct relationship between regular objects in 3 dimensions. 

A spin-2 particle (the alleged graviton created by it's field) carries TWO powers of momentum and is described by a $ h_{\mu\nu} $ that we talked about earlier. 

> Programmer's note, the rank of tensors just means a matrix. A rank-2 tensor could be shape `[3,3]`. Rank-3 is `[3,3,3]`. 



> Now I know what you're thinking, "David if there's a higgs boson that mediates a force just like these other ones, doesn't that mean there's a higgs force too?" The short answer is no, and I don't have the time to read the math behind why. I would remind you that you're reading a blog post on quantum gravity by a venture capitalist I'm doing my best here.

### Perturbation Theory

Like we said above, most interesting quantum field theories can't be solved directly with formulas — the interactions are too complicated. (This is because particles interact with each other as well of course so predicting and isolating activity is hard). Perturbation theory is a workaround: you start with a free theory (no interactions, exactly solvable) and then treat the rest of the interactions as small corrections layered on top. Each correction is suppressed by higher powers of the coupling constant $g$, so the full answer starts to look like a power series (think of a taylor series from calculus):

$$\mathcal{M} = \mathcal{M}^{(0)} + g\,\mathcal{M}^{(1)} + g^2\,\mathcal{M}^{(2)} + \cdots$$

Each term in this series corresponds to one "loop order" in the Feynman diagram expansion. This works beautifully when $g \ll 1$ (QED has $\alpha \approx 1/137$, so the series converges fast). It falls apart when the coupling is large — or, as we'll see, when the coupling *grows* with energy. For gravity, the effective coupling at energy $E$ is $\sim \kappa E \sim E/M_{\rm Pl}$, which blows up near the Planck scale.

### Feynman Diagrams and Loops

These diagrams are gonna keep coming up in particle physics. I find them very annoying in a sense because they really abstract away what's going on but I understand why they're used. They are simple tools to intuitively think about the physics of a situation.

> Let's think about a simple example, You have two electrons. They repel each other. The question is: what is the probability amplitude for this interaction?
> In QFT the answer is computed by asking: *what fields exist at every point in spacetime, and how do they interact?* which is a very large question. 
> The electron has a field $ψ(x)$. The photons are also defined by a field $A_\mu(x)$. They're coupled — meaning the photon conveys the electronagnetic force, which is how the repelling force is conveyed between the two electrons.
> 
> To get the amplitude you evaluate:
> 
> $$ \langle f | e^{-i\int d^4x\, \mathcal{H}(x)} | i \rangle $$
> 
> That exponential in there, when expanded is an infinite series...
> $$ 1 + (-i\int \mathcal{H}) + \frac{1}{2}(-i\int \mathcal{H})^2 + \cdots $$ 

> Each term is a multiple integral over spacetime of products of field operators. When you actually evaluate these integrals using the known behavior of the fields, you get momentum-space integrals — because fields are easier to analyze in momentum space via Fourier transform.

Feynman diagrams are a visual diagram for the terms in a perturbation series. Each diagram represents one specific mathematical contribution — an integral — to the probability amplitude for some physical process (say, two photons scattering off each other).

The diagrams are built from two ingredients: **propagators** (internal lines, representing virtual particles traveling between points) and **vertices** (the points where particles meet and interact).

#### Propagators

A propagator is a mathematical object attached to every internal line in a Feynman diagram. It represents the amplitude for a virtual particle to travel from one interaction vertex to another, carrying momentum $k$.

For a massless spin-1 particle (photon), the propagator in momentum space is:

$$D_{\mu\nu}^{\gamma}(k) = \frac{-i\,\eta_{\mu\nu}}{k^2 + i\epsilon}$$

For a massless spin-2 particle (graviton), it's... messier:

$$ D_{\mu\nu\rho\sigma}^{h}(k) = \frac{-i}{k^2 + i\epsilon}\left(\frac{1}{2}[\eta_{\mu\rho}\eta_{\nu\sigma} + \eta_{\mu\sigma}\eta_{\nu\rho}] - \frac{1}{2}\eta_{\mu\nu}\eta_{\rho\sigma}\right) $$

To put it more simply, the propagator is the "how likely is a particle to get from A to B" factor in a Feynman diagram calculation.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg width="200" height="160" viewBox="0 0 200 160" style="max-width:100%;display:block;margin:0 auto;">
  <text x="100" y="18" text-anchor="middle" fill="#9090b0" font-size="11" font-family="monospace">Photon Propagator</text>
  <g stroke="#40d0f0" stroke-width="1.5" fill="none">
    <path d="M20,80 Q30,65 40,80 Q50,95 60,80 Q70,65 80,80 Q90,95 100,80 Q110,65 120,80 Q130,95 140,80 Q150,65 160,80 Q170,95 180,80"/>
  </g>
  <text x="100" y="110" text-anchor="middle" fill="#40d0f0" font-size="13" font-family="serif">∼ 1/k²</text>
  <text x="100" y="130" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">spin-1 boson</text>
</svg>
<p style="font-size:0.85rem;color:#9090b0;font-style:italic;">Photon propagator: D<sub>μν</sub><sup>γ</sup> ∼ 1/k²</p>
</div>
<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg width="200" height="160" viewBox="0 0 200 160" style="max-width:100%;display:block;margin:0 auto;">
  <text x="100" y="18" text-anchor="middle" fill="#9090b0" font-size="11" font-family="monospace">Graviton Propagator</text>
  <g stroke="#f0c040" stroke-width="1.5" fill="none">
    <path d="M20,75 Q30,60 40,75 Q50,90 60,75 Q70,60 80,75 Q90,90 100,75 Q110,60 120,75 Q130,90 140,75 Q150,60 160,75 Q170,90 180,75"/>
    <path d="M20,85 Q30,70 40,85 Q50,100 60,85 Q70,70 80,85 Q90,100 100,85 Q110,70 120,85 Q130,100 140,85 Q150,70 160,85 Q170,100 180,85"/>
  </g>
  <text x="100" y="118" text-anchor="middle" fill="#f0c040" font-size="13" font-family="serif">∼ 1/k²</text>
  <text x="100" y="138" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">spin-2 boson</text>
</svg>
<p style="font-size:0.85rem;color:#9090b0;font-style:italic;">Graviton propagator: D<sub>μνρσ</sub><sup>h</sup> ∼ 1/k²</p>
</div>
</div>


The $1/k^2$ part means: higher momentum (shorter distance) means a smaller contribution. Both photons and gravitons have this same falloff, so neither blows up at high energy *from the propagator alone*.

The graviton's extra indices ($\mu\nu\rho\sigma$ vs photon's $μν\mu\nu$) reflect that it's spin-2 — it needs two pairs of indices to describe how a rank-2 tensor (the metric perturbation $h_{\mu\nu}$ ​) propagates. More indices, uglier formula, same basic $ 1 / k^2$ behavior.


Both fall off as $1/k^2$ at large momentum. Both the photon and graviton propagators are equally well-behaved at high $k$.


#### vertices
A vertex in these diagrams is a point where fields interact.

For example, an electron comes in, emits a photon, electron goes out. Three lines meeting at a point. That's a vertex.

A "tree diagram" is a casual term that refers to the idea, that momentum is conserved across the interaction in that diagram.

<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;margin:2rem 0;">
<svg viewBox="0 0 800 480" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ee-arr" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="white"/>
    </marker>
  </defs>
  <!-- Background -->
  <rect width="800" height="480" fill="#181818" rx="8"/>
  <!-- Title -->
  <text x="400" y="38" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif" font-weight="bold">Electron-electron scattering (tree level)</text>
  <!-- Annotation dashed box -->
  <rect x="240" y="55" width="320" height="66" fill="none" stroke="#888888" stroke-width="1.5" stroke-dasharray="7,4" rx="7"/>
  <text x="400" y="80" text-anchor="middle" fill="#bbbbbb" font-size="14" font-family="sans-serif">tree diagram</text>
  <text x="400" y="103" text-anchor="middle" fill="#bbbbbb" font-size="14" font-family="sans-serif">no free momentum &#x2192; no &#x222B;d&#x2074;k</text>
  <!-- e⁻ labels top -->
  <text x="82" y="148" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">e&#x207B;</text>
  <text x="718" y="148" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">e&#x207B;</text>
  <!-- Incoming electron lines -->
  <line x1="88" y1="158" x2="272" y2="258" stroke="white" stroke-width="2.2" marker-end="url(#ee-arr)"/>
  <line x1="712" y1="158" x2="528" y2="258" stroke="white" stroke-width="2.2" marker-end="url(#ee-arr)"/>
  <!-- Outgoing electron lines -->
  <line x1="282" y1="268" x2="88" y2="368" stroke="white" stroke-width="2.2" marker-end="url(#ee-arr)"/>
  <line x1="518" y1="268" x2="712" y2="368" stroke="white" stroke-width="2.2" marker-end="url(#ee-arr)"/>
  <!-- e⁻ labels bottom -->
  <text x="82" y="385" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">e&#x207B;</text>
  <text x="718" y="385" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">e&#x207B;</text>
  <!-- γ (virtual) label -->
  <text x="400" y="242" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif" font-style="italic">&#x3B3; (virtual)</text>
  <!-- Wavy orange photon line -->
  <path d="M 280,263 Q 300,243 320,263 Q 340,283 360,263 Q 380,243 400,263 Q 420,283 440,263 Q 460,243 480,263 Q 500,283 520,263" stroke="#e8a030" stroke-width="2.8" fill="none"/>
  <!-- Vertex dots -->
  <circle cx="280" cy="263" r="7" fill="white"/>
  <circle cx="520" cy="263" r="7" fill="white"/>
  <!-- Vertex labels -->
  <text x="280" y="305" text-anchor="middle" fill="#aaaaaa" font-size="13" font-family="sans-serif">vertex (&#xD7;g)</text>
  <text x="520" y="305" text-anchor="middle" fill="#aaaaaa" font-size="13" font-family="sans-serif">vertex (&#xD7;g)</text>
  <!-- Bottom caption -->
  <text x="400" y="445" text-anchor="middle" fill="#bbbbbb" font-size="13" font-family="sans-serif">amplitude ~ g&#xB2; &#x2014; one free momentum? NO. Photon momentum fully fixed.</text>
</svg>
</div>

#### loops 

A loop is what happens when a "virtual particle" is emitted and reabsorbed by the same diagram — forming a closed path.

At a tree level (no loop): electron emits photon, other electron absorbs it. Momentum of the photon is completely fixed by the two electrons' momenta via conservation.

With a loop: electron emits a photon, that photon splits into two particles, they recombine back into a photon, which is then absorbed. The momentum $k$ of those two internal particles is not fixed by conservation — they just have to sum to the photon's momentum. So $k$ is free, and you integrate over all possible $k$.

**Tree-level diagrams** have no closed loops. The momenta of all internal particles are completely fixed by conservation laws — these give finite, classical-looking results.

**Loop diagrams** have closed loops of internal lines. Because the momenta flowing around a loop are *not* fixed by conservation, you must integrate over all possible values — from zero to infinity:

Here's an example of a loop diagram

<div style="text-align:center;padding:1.5rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;margin:2rem 0;">
<svg viewBox="0 0 800 520" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="loop-arr" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="white"/>
    </marker>
    <marker id="photon-arr2" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#e8a030"/>
    </marker>
  </defs>
  <!-- Background -->
  <rect width="800" height="520" fill="#181818" rx="8"/>
  <!-- Title -->
  <text x="400" y="38" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif" font-weight="bold">Photon-photon scattering (one loop)</text>
  <!-- Electron loop: top UL(270,165) UR(530,165) LR(530,380) LL(270,380) — clockwise -->
  <line x1="270" y1="165" x2="530" y2="165" stroke="white" stroke-width="1.8" marker-end="url(#loop-arr)"/>
  <line x1="530" y1="165" x2="530" y2="380" stroke="white" stroke-width="1.8" marker-end="url(#loop-arr)"/>
  <line x1="530" y1="380" x2="270" y2="380" stroke="white" stroke-width="1.8" marker-end="url(#loop-arr)"/>
  <line x1="270" y1="380" x2="270" y2="165" stroke="white" stroke-width="1.8" marker-end="url(#loop-arr)"/>
  <!-- e⁻ labels on each side -->
  <text x="400" y="153" text-anchor="middle" fill="white" font-size="15" font-family="serif" font-style="italic">e&#x207B;</text>
  <text x="548" y="278" text-anchor="start" fill="white" font-size="15" font-family="serif" font-style="italic">e&#x207B;</text>
  <text x="400" y="402" text-anchor="middle" fill="white" font-size="15" font-family="serif" font-style="italic">e&#x207B;</text>
  <text x="252" y="278" text-anchor="end" fill="white" font-size="15" font-family="serif" font-style="italic">e&#x207B;</text>
  <!-- Incoming photon lines (left, orange wavy with arrows) -->
  <path d="M 95,165 Q 116,145 137,165 Q 158,185 179,165 Q 200,145 221,165 Q 242,185 263,165" stroke="#e8a030" stroke-width="2.8" fill="none" marker-end="url(#photon-arr2)"/>
  <path d="M 95,380 Q 116,360 137,380 Q 158,400 179,380 Q 200,360 221,380 Q 242,400 263,380" stroke="#e8a030" stroke-width="2.8" fill="none" marker-end="url(#photon-arr2)"/>
  <!-- Outgoing photon lines (right, orange wavy with arrows) -->
  <path d="M 535,165 Q 556,145 577,165 Q 598,185 619,165 Q 640,145 661,165 Q 682,185 703,165" stroke="#e8a030" stroke-width="2.8" fill="none" marker-end="url(#photon-arr2)"/>
  <path d="M 535,380 Q 556,360 577,380 Q 598,400 619,380 Q 640,360 661,380 Q 682,400 703,380" stroke="#e8a030" stroke-width="2.8" fill="none" marker-end="url(#photon-arr2)"/>
  <!-- γ labels -->
  <text x="74" y="157" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">&#x3B3;</text>
  <text x="74" y="392" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">&#x3B3;</text>
  <text x="726" y="157" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">&#x3B3;</text>
  <text x="726" y="392" text-anchor="middle" fill="white" font-size="16" font-family="serif" font-style="italic">&#x3B3;</text>
  <!-- Vertex dots -->
  <circle cx="270" cy="165" r="7" fill="white"/>
  <circle cx="530" cy="165" r="7" fill="white"/>
  <circle cx="530" cy="380" r="7" fill="white"/>
  <circle cx="270" cy="380" r="7" fill="white"/>
  <!-- Center labels -->
  <text x="400" y="262" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif" font-weight="bold">k = free</text>
  <text x="400" y="290" text-anchor="middle" fill="#bbbbbb" font-size="14" font-family="sans-serif">&#x222B;d&#x2074;k over all momenta</text>
  <!-- Bottom dashed annotation box -->
  <rect x="195" y="430" width="410" height="66" fill="none" stroke="#888888" stroke-width="1.5" stroke-dasharray="7,4" rx="7"/>
  <text x="400" y="456" text-anchor="middle" fill="#bbbbbb" font-size="13" font-family="sans-serif">amplitude ~ &#x3B1;&#xB2; (4 vertices &#xD7; &#x3B1; each)</text>
  <text x="400" y="479" text-anchor="middle" fill="#bbbbbb" font-size="13" font-family="sans-serif">k flows around the loop &#x2014; nothing fixes it</text>
</svg>
</div>

$$\mathcal{M}_{\rm loop} \sim \int_0^\infty \frac{d^4k}{(2\pi)^4}\; \mathcal{I}(k)$$


> The question the loop integral is asking, is what is the momentum of every possible "virtual particle", what I mean by this is we couldn't observe it, so we have to assume this hypothetical particle that COULD have been a part of the interaction with this very low probability. 
> A particle has 4 momentum components: ($k_0, k_1, k_2, k_3$), energy ($k_0$) plus momentum in all 3 spatial directions.

> $d^4$ means you're integrating over 4-dimensional momentum space.

That function $\mathcal{I}(k)$ often doesn't fall off fast enough as $k \to \infty$, so the integral diverges. The number of independent loops $L$ in a diagram determines how many unconstrained momentum integrations you face — and for gravity, each additional loop makes things dramatically worse.

This is what the full integral actually looks like just for some clarity from the shorthand

$$ \int_{-\infty}^{\infty} dk^0 \int_{-\infty}^{\infty} dk^1 \int_{-\infty}^{\infty} dk^2 \int_{-\infty}^{\infty} dk^3 \frac{1}{(k^0)^2 - (k^1)^2 - (k^2)^2 - (k^3)^2 - m^2} $$

> Again just try to remember the idea is you're integrating along all of the dimensions to take the sum of all possible momentum states.

#### So what do you do when your loop integrals diverge?

So we decide to come up with a hack, just stop integrating! Literally just stop integrating at some large momentum $ \Lambda $ and see if you can make sense of it without accounting for all possible momenta, the theory will only apple for LOWER momentum states, where most of life happens. 

We set a constant $k < Λ$ that is artificially low. Your integral is now finite but depends on $ Λ $.

The physical intuition is that high momentum implies short distance. A UV cutoff is implicitly saying "I don't trust my theory above energy $Λ$, but we can make something very useful for most other normal circumstances."


<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin:2rem 0;">
<div style="text-align:center;padding:1rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg width="220" height="200" viewBox="0 0 220 200" style="max-width:100%">
  <text x="110" y="18" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">Tree Level: D = 0</text>
  <line x1="20" y1="80" x2="80" y2="100" stroke="#40d0f0" stroke-width="2"/>
  <line x1="20" y1="120" x2="80" y2="100" stroke="#40d0f0" stroke-width="2"/>
  <line x1="140" y1="100" x2="200" y2="80" stroke="#40d0f0" stroke-width="2"/>
  <line x1="140" y1="100" x2="200" y2="120" stroke="#40d0f0" stroke-width="2"/>
  <path d="M80,97 Q95,80 110,97 Q125,114 140,97" stroke="#f0c040" stroke-width="2" fill="none"/>
  <path d="M80,103 Q95,86 110,103 Q125,120 140,103" stroke="#f0c040" stroke-width="2" fill="none"/>
  <circle cx="80" cy="100" r="5" fill="#d040a0"/>
  <circle cx="140" cy="100" r="5" fill="#d040a0"/>
  <text x="110" y="160" text-anchor="middle" fill="#40f0a0" font-size="12" font-family="serif">D = 0 (finite)</text>
  <text x="110" y="180" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">amplitude ~ κ²</text>
</svg>
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">Tree level: finite, no integration needed</p>
</div>
<div style="text-align:center;padding:1rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg width="220" height="200" viewBox="0 0 220 200" style="max-width:100%">
  <text x="110" y="18" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">One Loop: D = 4</text>
  <line x1="20" y1="80" x2="65" y2="100" stroke="#40d0f0" stroke-width="2"/>
  <line x1="20" y1="120" x2="65" y2="100" stroke="#40d0f0" stroke-width="2"/>
  <line x1="155" y1="100" x2="200" y2="80" stroke="#40d0f0" stroke-width="2"/>
  <line x1="155" y1="100" x2="200" y2="120" stroke="#40d0f0" stroke-width="2"/>
  <ellipse cx="110" cy="100" rx="45" ry="30" stroke="#f0c040" stroke-width="2" fill="none"/>
  <circle cx="65" cy="100" r="5" fill="#d040a0"/>
  <circle cx="155" cy="100" r="5" fill="#d040a0"/>
  <text x="110" y="88" text-anchor="middle" fill="#f0c040" font-size="10">∫d⁴k</text>
  <text x="110" y="160" text-anchor="middle" fill="#f07070" font-size="12" font-family="serif">D = 4 ~ Λ⁴ ln Λ</text>
  <text x="110" y="180" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">quartically divergent</text>
</svg>
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">One loop: ∼ Λ⁴, generates new R² counterterms</p>
</div>
<div style="text-align:center;padding:1rem;border:1px solid rgba(100,100,200,0.3);border-radius:8px;">
<svg width="220" height="200" viewBox="0 0 220 200" style="max-width:100%">
  <text x="110" y="18" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">Two Loops: D = 6</text>
  <line x1="15" y1="75" x2="55" y2="95" stroke="#40d0f0" stroke-width="2"/>
  <line x1="15" y1="125" x2="55" y2="105" stroke="#40d0f0" stroke-width="2"/>
  <line x1="165" y1="95" x2="205" y2="75" stroke="#40d0f0" stroke-width="2"/>
  <line x1="165" y1="105" x2="205" y2="125" stroke="#40d0f0" stroke-width="2"/>
  <ellipse cx="85" cy="100" rx="30" ry="25" stroke="#f0c040" stroke-width="2" fill="none"/>
  <ellipse cx="135" cy="100" rx="30" ry="25" stroke="#f0c040" stroke-width="2" fill="none"/>
  <circle cx="55"  cy="100" r="4" fill="#d040a0"/>
  <circle cx="110" cy="100" r="4" fill="#d040a0"/>
  <circle cx="165" cy="100" r="4" fill="#d040a0"/>
  <text x="110" y="158" text-anchor="middle" fill="#f07070" font-size="11" font-family="serif">D = 6 ~ Λ⁶</text>
  <text x="110" y="178" text-anchor="middle" fill="#9090b0" font-size="9" font-family="monospace">Goroff-Sagnotti (1985)</text>
</svg>
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">Two loops: Goroff &amp; Sagnotti's definitive result</p>
</div>
</div>


##### the derivation of charge and mass 

For a photon interaction like we've been talking about, you can model all the possible interactions this way; 
$$ \int d^4k \frac{-ig_{\mu\nu}}{k^2} \cdot \frac{1}{(p-k)^2 - m^2} $$ 

Start with the integrand at large $k$, where $k \gg p$:

$$(p-k)^2 = k^2 - 2p\cdot k + p^2 \approx k^2$$

So the integrand becomes:

$$\frac{-ig_{\mu\nu}}{k^2} \cdot \frac{1}{k^2} = \frac{-ig_{\mu\nu}}{k^4}$$

Now switch to 4D spherical coordinates. In 4D, a shell at radius $k$ has surface area $\sim k^3$, so:

$$d^4k \to k^3 dk$$

The integral becomes:

$$\int_0^\Lambda \frac{k^3\, dk}{k^4} = \int_0^\Lambda \frac{dk}{k} = \log(\Lambda)$$

So the full integral splits as:

$$\text{finite part} + e^2 \log(\Lambda)$$

The divergence is a single log. It has the same form as the charge term already in the Lagrangian — so one redefinition of $e$ absorbs it at every loop order.

> we don't know the TRUE value for the energy of a photon. We just have this very very accurate approximation that is the 'absorption' of the finite part when trying to solve this integral. We don't actually know the "true" charge of an electron, as it can never be observed.


##### trying to do the same with gravity doesn't work

for the gravity analogue

$$ \int d^4k \frac{k^{\mu}k^{\nu}k^{\rho}k^{\sigma}}{k^4} \cdot \frac{1}{(p-k)^2 - m^2} $$ 



$$ \int d^4k \cdot \text{const} \sim \int k^3 dk \to \infty $$ 

This is called Quartic divergence. Each loop order produces a divergence of a new type, requiring a new parameter — infinitely many parameters, no predictive power.

In QED the divergence has the same shape as a term already in your Lagrangian, so you just redefine that one number. 

Long story short, you can't define the divergences into constants that map to experiment, we'll go in detail below if you want to dig further. 

---

### Degree of Divergence

The degree of divergence $D$ is a power-counting estimate of how badly a Feynman diagram (again just a representation of that integral we keep talking about) diverges.

For a loop integral in 4 spacetime dimensions, you have $d^4k$ — four powers of momentum from the integration measure. The propagators in the denominator suppress it, and any derivative factors in the vertices add powers of $k$ in the numerator. The net power (as in exponent) of $k$ in the integrand is the degree of divergence:

$$\text{Diagram} \sim \int d^4k \; \frac{k^{n_{\rm num}}}{k^{n_{\rm den}}} \implies D = 4 + n_{\rm num} - n_{\rm den}$$

- $D > 0$: the diagram diverges as $\Lambda^D$ (power-law divergence)
- $D = 0$: logarithmic divergence, $\sim \ln \Lambda$
- $D < 0$: superficially convergent (individual diagram is finite)

In a renormalizable theory like QED, $D$ depends only on the *external* particles in the diagram — not on the loop order $L$. So you only ever encounter a finite set of divergence structures, all absorbable into a fixed set of counterterms.

With gravity, $D = 2 + 2L$ — it grows linearly with loop order, generating a new, inequivalent infinity at every order of perturbation theory.

In every other successful quantum field theory — quantum electrodynamics, the weak force, QCD — we encounter infinities from virtual particle loops. But these infinities are *manageable*: they can be absorbed into a small, fixed set of physical parameters (masses and coupling constants) through a procedure called **renormalization**. Once you fix those parameters by measurement, all predictions are finite and agree with experiment.

Renormalizability means that the number of independent infinities equals the number of free parameters you can tune. A theory with infinitely many inequivalent infinities is **not predictive**.

General Relativity, when quantized around flat spacetime (as in no gravity, no curvature) $g_{\mu\nu} = \eta_{\mu\nu} + \sqrt{32\pi G}\, h_{\mu\nu}$, gives more divergent loop diagrams. You would need infinitely many measurements to fix infinitely many parameters — rendering the theory unusable.

### Where $D = 2 + 2L$ Comes From

For a Feynman diagram with $L$ loops, $I$ internal graviton lines, and $V_n$ vertices of type $n$ (each carrying $n_d = 2$ derivatives):

$$D = 4L - 2I + 2\sum_n V_n$$

Using $L = I - V + 1$:

$$D = 4L - 2I + 2(V-1) = 4L - 2(I - V) - 2 = 4L - 2(L-1) - 2 = 2L + 2$$

At $L$ loops, diagrams diverge as $\Lambda^{2+2L}$ — a new inequivalent infinity at every order.

---

### Why Negative Mass Dimension = Non-Renormalizable

If you imagine a gravitational loop diagram at $L$ loops. The coupling $\kappa$ appears $2(L+1)$ times (two per vertex, one pair per loop plus external). For the amplitude to be dimensionless:

$$\mathcal{M}^{(L)}_{\rm loop} \;\sim\; \kappa^{2(L+1)} \cdot \Lambda^{2+2L} \;=\; \left(\frac{\Lambda}{M_{\rm Pl}}\right)^{2+2L} \cdot \Lambda^0$$

> **The Hierarchy of Divergences:** At each loop order $L$, we get a new divergence $\sim (\Lambda/M_{\rm Pl})^{2+2L}$ multiplying a new operator. These operators have increasing numbers of derivatives and curvature tensors, each requiring a *new* free parameter to absorb. The theory has infinitely many free parameters.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
<div style="padding:1.2rem 1.5rem;border:1px solid rgba(64,240,160,0.35);border-radius:8px;">
<p style="font-family:monospace;font-size:0.7rem;color:#40f0a0;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">✓ QED (Renormalizable)</p>
<p style="font-size:0.88rem;">
Coupling: <em>e</em>, with [e] = M⁰ (dimensionless)<br/>
Divergences at each loop: ∼ ln Λ or Λ²<br/>
All absorbed by: δm<sub>e</sub>, δe, δZ<sub>ψ</sub>, δZ<sub>A</sub><br/>
<span style="color:#40f0a0">3 parameters → all orders finite after renormalization</span>
</p>
</div>
<div style="padding:1.2rem 1.5rem;border:1px solid rgba(240,96,96,0.35);border-radius:8px;">
<p style="font-family:monospace;font-size:0.7rem;color:#f07070;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">✗ Quantum Gravity (Non-Renormalizable)</p>
<p style="font-size:0.88rem;">
Coupling: κ, with [κ] = M⁻¹<br/>
Divergences at L loops: ∼ Λ<sup>2+2L</sup><br/>
New operators needed: R², R³, R<sub>μν</sub>R<sup>μν</sup>, R<sub>μνρσ</sub>³, …<br/>
<span style="color:#f07070">∞ parameters → theory is not predictive</span>
</p>
</div>
</div>

### The Effective Field Theory Perspective

There is a silver lining: below the Planck scale ($E \ll M_{\rm Pl} \approx 1.22 \times 10^{19}$ GeV), quantum gravity works. The higher-loop corrections are suppressed by powers of $(E/M_{\rm Pl})^2 \sim 10^{-38}$ at accessible energies — completely negligible. This is WHY classical general relativity works.

The conclusion we're supposed to draw from this is that quantum gravity is *not a complete, UV-finite theory*. It needs completion at the Planck scale (This is where one might substitute "string theory" or "loop quantum gravity" are).

---

## Visualizing the Momentum Integration

The central object is the one-loop integral over virtual graviton momentum $k$:

$$ I(L,\Lambda) = \int_0^\Lambda \frac{d^4k}{(2\pi)^4} \cdot \frac{k^{2L}}{(k^2)^2} = \frac{1}{(2\pi)^4} \cdot 2\pi^2 \int_0^\Lambda dk\; k^3 \cdot \frac{k^{2L}}{k^4} = \frac{\pi^2}{8\pi^4} \int_0^\Lambda dk\; k^{2L-1} $$

$$\boxed{I(L,\Lambda) \;\propto\; \int_0^\Lambda dk\; k^{2L-1} \;=\; \frac{\Lambda^{2L}}{2L}}$$

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
<div style="text-align:center;padding:1rem;border:1px solid rgba(64,240,160,0.3);border-radius:8px;">
<svg viewBox="0 0 340 240" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="240" fill="#111128"/>
  <text x="170" y="16" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">QED-like: Integrand ∼ 1/k</text>
  <!-- shaded fill under curve -->
  <path d="M 55,210 L 55,30 L 70,90 L 85,120 L 100,138 L 115,150 L 145,165 L 175,174 L 205,180 L 235,184 L 265,188 L 295,190 L 325,192 L 325,210 Z" fill="rgba(64,240,160,0.15)"/>
  <!-- 1/k curve -->
  <polyline points="55,30 70,90 85,120 100,138 115,150 145,165 175,174 205,180 235,184 265,188 295,190 325,192" fill="none" stroke="#40f0a0" stroke-width="2.2"/>
  <!-- axes -->
  <line x1="55" y1="22" x2="55" y2="210" stroke="rgba(64,208,240,0.45)" stroke-width="1.5"/>
  <line x1="55" y1="210" x2="332" y2="210" stroke="rgba(64,208,240,0.45)" stroke-width="1.5"/>
  <!-- x-axis ticks -->
  <line x1="55" y1="210" x2="55" y2="215" stroke="rgba(64,208,240,0.45)" stroke-width="1"/>
  <line x1="190" y1="210" x2="190" y2="215" stroke="rgba(64,208,240,0.45)" stroke-width="1"/>
  <line x1="325" y1="210" x2="325" y2="215" stroke="rgba(64,208,240,0.45)" stroke-width="1"/>
  <!-- x-axis labels -->
  <text x="55" y="225" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">0</text>
  <text x="190" y="225" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">0.5</text>
  <text x="325" y="225" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">1.0 = Λ</text>
  <!-- y-axis labels -->
  <text x="48" y="33" text-anchor="end" fill="#9090b0" font-size="8" font-family="monospace">10</text>
  <text x="48" y="213" text-anchor="end" fill="#9090b0" font-size="8" font-family="monospace">0</text>
  <!-- axis title -->
  <text x="190" y="238" text-anchor="middle" fill="#9090b0" font-size="9" font-family="monospace">Virtual momentum k</text>
  <!-- curve label -->
  <text x="200" y="75" text-anchor="middle" fill="#40f0a0" font-size="10" font-family="serif">∼ 1/k</text>
  <!-- annotation -->
  <text x="215" y="115" text-anchor="middle" fill="#40f0a0" font-size="8" font-family="monospace">∫ dk/k = ln Λ</text>
  <text x="215" y="127" text-anchor="middle" fill="#40f0a0" font-size="8" font-family="monospace">→ finite ✓</text>
</svg>
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">QED: integrand falls off — integral is log-divergent, absorbed by renormalization</p>
</div>
<div style="text-align:center;padding:1rem;border:1px solid rgba(240,96,96,0.3);border-radius:8px;">
<svg viewBox="0 0 340 240" style="max-width:100%;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <rect width="340" height="240" fill="#111128"/>
  <text x="170" y="16" text-anchor="middle" fill="#9090b0" font-size="10" font-family="monospace">Gravity: k^(2L-1), each loop worse</text>
  <!-- shaded fills -->
  <path d="M 55,210 L 325,30 L 325,210 Z" fill="rgba(64,208,240,0.07)"/>
  <path d="M 55,210 L 82,210 L 109,209 L 136,205 L 163,199 L 190,188 L 217,171 L 244,148 L 271,118 L 298,79 L 325,30 L 325,210 Z" fill="rgba(240,192,64,0.07)"/>
  <path d="M 55,210 L 82,210 L 109,210 L 136,210 L 163,208 L 190,204 L 217,196 L 244,180 L 271,151 L 298,104 L 325,30 L 325,210 Z" fill="rgba(208,64,160,0.07)"/>
  <!-- L=1 (k^1) cyan — straight line -->
  <line x1="55" y1="210" x2="325" y2="30" stroke="#40d0f0" stroke-width="2"/>
  <!-- L=2 (k^3) gold -->
  <polyline points="55,210 82,210 109,209 136,205 163,199 190,188 217,171 244,148 271,118 298,79 325,30" fill="none" stroke="#f0c040" stroke-width="2"/>
  <!-- L=3 (k^5) magenta -->
  <polyline points="55,210 82,210 109,210 136,210 163,208 190,204 217,196 244,180 271,151 298,104 325,30" fill="none" stroke="#d040a0" stroke-width="2"/>
  <!-- axes -->
  <line x1="55" y1="22" x2="55" y2="210" stroke="rgba(64,208,240,0.45)" stroke-width="1.5"/>
  <line x1="55" y1="210" x2="332" y2="210" stroke="rgba(64,208,240,0.45)" stroke-width="1.5"/>
  <!-- x-axis ticks -->
  <line x1="55" y1="210" x2="55" y2="215" stroke="rgba(64,208,240,0.45)" stroke-width="1"/>
  <line x1="325" y1="210" x2="325" y2="215" stroke="rgba(64,208,240,0.45)" stroke-width="1"/>
  <!-- x-axis labels -->
  <text x="55" y="225" text-anchor="middle" fill="#9090b0" font-size="8" font-family="monospace">0</text>
  <text x="325" y="225" text-anchor="middle" fill="#f07070" font-size="8" font-family="monospace">Λ → ∞</text>
  <!-- y-axis labels -->
  <text x="48" y="33" text-anchor="end" fill="#9090b0" font-size="8" font-family="monospace">1</text>
  <text x="48" y="213" text-anchor="end" fill="#9090b0" font-size="8" font-family="monospace">0</text>
  <!-- axis title -->
  <text x="190" y="238" text-anchor="middle" fill="#9090b0" font-size="9" font-family="monospace">Virtual momentum k</text>
  <!-- curve labels -->
  <text x="178" y="140" fill="#40d0f0" font-size="9" font-family="monospace">L=1: k¹</text>
  <text x="200" y="178" fill="#f0c040" font-size="9" font-family="monospace">L=2: k³</text>
  <text x="220" y="200" fill="#d040a0" font-size="9" font-family="monospace">L=3: k⁵</text>
  <!-- divergence warning -->
  <text x="290" y="55" text-anchor="middle" fill="#f07070" font-size="9" font-family="monospace">→ ∞</text>
</svg>
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">Gravity: every loop order L gives a faster-growing integrand — all diverge as Λ→∞</p>
</div>
</div>

> The left panel shows the QED integrand $\sim 1/k$: it falls rapidly and the area under the curve is finite (logarithmically divergent, easily renormalized). The right panel shows the gravity integrands $k^{2L-1}$ for $L=1,2,3$: each grows with $k$, and the integral $\propto \Lambda^{2L}$ blows up as $\Lambda\to\infty$ — with each loop order strictly worse than the last.

For $L=1$ (one graviton loop) the integrand grows as $k$, giving $\Lambda^2$. For $L=2$ it grows as $k^3$, giving $\Lambda^4$. For $L=3$ as $k^5$, giving $\Lambda^6$. Each loop order requires an entirely new counterterm — the theory generates an infinite tower of inequivalent infinities.

---

## Why QED Works but Gravity Doesn't

A detailed comparison of power-counting in quantum electrodynamics versus perturbative quantum gravity illustrates precisely why one theory is renormalizable and the other is not.

| Property | QED (Photon) | Perturbative Gravity (Graviton) |
|---|---|---|
| Spin | 1 | 2 |
| Coupling constant | $e$, dimensionless $[M^0]$ | $\kappa = \sqrt{32\pi G}$, $[M^{-1}]$ |
| Propagator $\sim$ | $1/k^2$ | $1/k^2$ |
| Vertex momentum growth | $\sim k^1$ (gauge coupling) | $\sim k^2$ (curvature = 2nd deriv) |
| Superficial divergence $D$ | $D = 4 - E$ (decreases with external legs $E$) | $D = 2 + 2L$ (grows with loop order) |
| Divergence at 1 loop | $\sim \ln\Lambda$ (log, renormalizable) | $\sim \Lambda^4$ (quartic!) |
| New operators generated | None beyond original Lagrangian | $R^2, R_{\mu\nu}^2, R^3, \ldots$ (infinitely many) |
| Free parameters needed | 3 ($m_e, e, \delta Z$'s) | ∞ (one per loop order) |
| Renormalizable? | ✓ Yes — predictive to all orders | ✗ No — unpredictive beyond tree level |
| Definitive proof | Dyson 1949 | Goroff & Sagnotti 1985; van de Ven 1992 |



---

## What This Means for Physics

### The Effective Field Theory Verdict

Donoghue (1994) showed that quantum gravity can be treated as an effective field theory below the Planck scale. The leading quantum corrections to the Newtonian potential are:

$$V(r) = -\frac{G m_1 m_2}{r} \left[ 1 + \frac{3G(m_1+m_2)}{r c^2} + \frac{41G\hbar}{10\pi r^2 c^3} + \cdots \right]$$

The second term is the classical post-Newtonian correction. The third term, proportional to $\hbar$, is the genuine quantum gravitational correction — computable and unambiguous below the Planck scale. At $r = 1$ m, it is of order $10^{-82}$ — immeasurably small.

### Proposed UV Completions

Several approaches attempt to provide a UV-complete theory of quantum gravity:

- **String Theory** — Replaces point particles with 1D strings; graviton is a string vibration mode. UV finiteness achieved by infinite tower of massive string excitations.
- **Loop Quantum Gravity** — Discretizes spacetime at the Planck scale; spacetime itself has a quantum structure that provides a natural UV regulator.
- **Asymptotic Safety** — Proposes that Newton's constant flows to a non-Gaussian UV fixed point, making the theory UV complete without new degrees of freedom.
- **Causal Dynamical Triangulations** — Lattice-like formulation of quantum gravity using Regge calculus with a causal structure.
- $\mathcal{N}=8$ Supergravity 

> **The Bottom Line:** Unfortunately Nature requires new physics at the Planck scale, $E_{\rm Pl} \approx 10^{19}$ GeV. That search is one of the deepest problems in science.

The next time you meet someone who is pissed off they can't get a serious understanding of what's really happening in this area, send them this post.

$$\underbrace{\frac{1}{16\pi G}\int R\,\sqrt{-g}\,d^4x}_{\text{General Relativity}} \xrightarrow{\text{quantize}} \underbrace{\sum_{L=0}^{\infty} \hbar^L \mathcal{M}^{(L)}}_{\text{diverges: }D=2+2L} \implies \underbrace{?}_{\text{quantum gravity}}$$


> seperately, feel free to send me corrections as well, I'd like to make sure I get this right. 


> *The definitive proof of non-renormalizability came from Goroff and Sagnotti's two-loop calculation. They found a divergent counterterm:
> 
> $$\mathcal{L}_{\rm div}^{(2\text{-loop})} = \frac{209}{2880}\cdot\frac{\kappa^4}{(4\pi)^4}\cdot\frac{1}{\epsilon} \cdot R_{\mu\nu}{}^{\rho\sigma} R_{\rho\sigma}{}^{\lambda\kappa} R_{\lambda\kappa}{}^{\mu\nu}$$
> 
> This operator $R_{\mu\nu\rho\sigma}^3$ (cubic in the Riemann tensor, sixth order in derivatives) does NOT appear in the original Einstein–Hilbert action. Its divergence coefficient is **209/2880 ≈ 0.0726** — nonzero, so it cannot be tuned away. A genuinely new counterterm is required, with no experimental handle.


---

*Physics: Einstein–Hilbert action · Goroff & Sagnotti (1985) · van de Ven (1992) · Donoghue (1994)*

*References: Zee, QFT in a Nutshell · Donoghue, Phys. Rev. Lett. 72 (1994) · Goroff & Sagnotti, Nucl. Phys. B 266 (1986)*

Special thanks to ai tools for infinite tutoring and the very helpful diagrams.


