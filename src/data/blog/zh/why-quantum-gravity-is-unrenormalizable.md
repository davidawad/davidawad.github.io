---
author: David Awad
pubDatetime: 2026-03-18T12:00:00Z
title: 为什么我们不能用对待光子的方式对待引力子
postSlug: 03-18-quantum-gravity-unrenormalizable
featured: true
draft: false
tags:
  - physics
  - quantum field theory
  - general relativity
  - mathematics
ogImage: ""
description: "引力子动量从零积分到无穷大会产生无法被有限组抵消项吸收的无穷大——这是一个根本性的结构问题，我来解释清楚。"
---

这个问题烦死了。作为一个非理论物理学家，我甚至不知道该怎么问我想回答的这个问题。

大多数人都懂麦克斯韦方程和光子的概念，市面上的课程也把光的量子化讲得挺清楚。接触QFT的人少一些，但资料还是有的。

一旦你开始问更深的问题——"当初到底是怎么尝试把引力子建模成一个新粒子的"——所有课程提供者突然集体哑火。要么是新闻里那种高度概括的挥手，要么就是直接把你扔给论文让你自生自灭。这让我很烦，所以这篇文章就这么诞生了。

这是我尽力解释当我们尝试把引力子纳入标准模型时所遇到的问题。

## 一切从两条缝开始

双缝实验烦透了。一个电子打向一堵有两个孔的墙，在背后的探测器上产生干涉图案——和波产生的图案一模一样。但电子是粒子。那它到底穿过了哪条缝？

没有关于电子穿过哪条缝的事实，因为没有测量记录它。如果没有测量记录，排除任何一条路径都会产生与实验不符的预测。你必须对两条路径求和。

你一旦测量它穿过哪条缝，干涉图案立刻消失。很蠢。

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
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">无观测 → 两条分布（每条缝各一条）</p>
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
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">无观测 → 干涉图案（正常的奇怪分布）</p>
</div>
</div>

让中间态变得可观测的这一举动，摧毁了那个要求你对其求和的效应。

那么如果你面对这种情况，怎么测量光子在某个特定位置被探测到的概率？

这在数学上的表达就是路径积分。粒子从状态 $A$ 到状态 $B$ 的概率振幅 $\mathcal{M}$ 是：

$$\mathcal{M} = \int \mathcal{D}[x]\, e^{iS[x]/\hbar}$$

你对连接 $A$ 到 $B$ 的每一条可能路径 $x(t)$ 积分，每条路径的权重是 $e^{iS/\hbar}$，其中 $S$ 是沿该路径的作用量。没有路径被排除。

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

与经典轨迹大相径庭的路径并不会消失——它们贡献振荡的相位，这些相位在很大程度上相互抵消。经典路径能存活下来，是因为附近路径的相位几乎完全一致，相干叠加。量子行为就在它们不相干的地方涌现。

费曼图就是为了把这个原理应用到粒子相互作用上而发展出来的。不是对空间中的路径求和，而是对所有可能的相互作用历史求和——那些与你在边界观测到的结果（粒子进，粒子出）相符的历史。每张图代表一个这样的历史。

图里出现的"虚粒子"并不是关于"真实发生了什么"的断言——它们是对未观测中间态的求和中的项，就像双缝求和里两条缝各是一项一样。唯一真实的东西——在可观测、可测量的意义上——是 $|\mathcal{M}|^2$，也就是从你看不见的一切中求和得出的概率。我们稍后会回到这个想法，但首先，我们得聊聊广义相对论的一些概念。


### 怎么"量子化"引力？

量子化引力的思路是这样的：我们假设这个粒子存在，然后尝试测量和观察它对我们已经理解的物理情境的贡献，从而将理论与实验对比，确定它的预测效力。

来，我们用引力试试看。广义相对论给了我们"度规" $g_{\mu\nu}$，它编码时空曲率——也就是说，它定义了时空中两点之间的距离_函数_。

在平直空间里，你知道怎么用勾股定理推导两点之间的距离：

$$ ds^2 = dx^2 + dy^2 + dz^2 $$ 

但我们不是生活在"平直"空间里。广义相对论如此惊天动地的原因之一，就在于现实本身随着大质量天体的存在而弯曲。

度规包含了告诉你如何在弯曲空间里计算距离的系数：

$$ ds^2 = g_{\mu\nu} dx^\mu dx^\nu $$

它已经把宇宙中所有质量/能量的结果都编进去了。好，回到引力子粒子。

为了量子化引力，我们假设引力子以平直时空上的小涟漪的形式存在。

所以我们从一个"基础时空"——即平直时空——开始，它这样建模：

$$ \eta_{\mu\nu} $$
$ \eta_{\mu\nu}  = $ 平直时空（我们对平直闵可夫斯基时空的基线近似）

$$ \eta_{\mu\nu} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} $$ 

然后我们把粒子嵌进去，这个粒子"不知为何"在整个宇宙中编码和传递引力。

$$ h_{\mu\nu} $$

$ h_{\mu\nu} = $ 那个差值——我们尝试量子化为引力子的东西

现在我们可以从广义相对论取出我们真实宇宙的度规，把它与平直时空关联起来。自然，我们关心的是引力子的贡献。

> 顺带一提，目前对我们现实真实度规的最佳估计叫做FLRW度规（以其创造者命名）。注意它是时间的函数，这说得通，因为宇宙正在以加速的速度膨胀。
> $$ ds^2 = -c^2dt^2 + a(t)^2\left(\frac{dr^2}{1-kr^2} + r^2d\theta^2 + r^2\sin^2\theta\,d\phi^2\right) $$ 

总之，我们有了广义相对论给出的可用度规，把它与平直时空关联，就有了可以用来建模引力子的东西。
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
<p style="font-size:0.82rem;color:#9090b0;font-style:italic;">大质量天体（金球）坐落于时空织物中。平直网格（η<sub>μν</sub>）弯曲成漏斗形凹陷——曲率场 h<sub>μν</sub>。井越深，引力越强。</p>
</div>

从这里开始，我们所知道的只是：我们有一个定义时空如何变化的度规，可以用来精确建模空间中任意两点之间的距离。

我们_认为_——但不确定——引力子是在宇宙中传递引力的粒子。

力的载体粒子必须在任何两个有质量的粒子之间传递"信息"，引力才能"发生"。那个粒子必须被交换。这就是理论。

比如，我们可以画两个电子，就像它们之间存在其他力一样——比如普通的库仑力 $\frac{ k q_1 q_2 }{ r^2 }$——它们之间也有引力作用。

所以我们现在需要建模这个假想相互作用可能发生的所有方式。

类似于普通概率论，为了有一个完整的图像，我们需要实际考察所有可能的情景，才能准确建模这个情况。

费曼的洞见是：粒子同时走所有可能路径，所以你必须对它们所有人的概率振幅求和。每张费曼图对应相互作用的一种可能"历史"。你把它们全部加起来，得到总振幅。

这就引出了一个著名的积分，我们将用它来对这个特定电子相互作用中所有可能动量状态的概率振幅求和。

理论上，我们可以计算这些概率，然后跑去大型强子对撞机，做实验看看结果。如果理论准确预测了实验，我们就增加了对理论的信心，如此循环。

那我们来看看这对光子是怎么成功奏效的，然后再回到引力子。

#### 和引力子不同，光子几乎不互相作用，所以预测行为很容易

在电磁学方面我们非常幸运。我们可以单独考察光子并明确建模。

光子-光子散射存在，但被极度压制，因为它只能间接发生——通过一个虚电子环：

$$\gamma + \gamma \rightarrow e^+e^- \text{ (virtual)} \rightarrow \gamma + \gamma$$

每个顶点的耦合常数是 $\alpha \approx 1/137$，这张图需要4个顶点，所以振幅的量级是 $\alpha^2 \approx 1/18000$。在低能量下可以忽略不计——这就是为什么日常生活中光束穿过彼此而不受影响。

这就是经典电磁学是线性的原因——叠加、干涉、衍射都运作得很干净。自相互作用很弱，不会干扰实验。

### 自旋与力

在我们继续之前，你需要理解"自旋"。自旋是粒子的固有属性——类似于角动量（粒子并没有真的在旋转，我们可以找个机会再去怪罪乌伦贝克和古德斯米特，不过那是1925年的事了）。它以 $\hbar$（自然界常数）的整数或半整数倍出现，控制着场的数学结构和相互作用的形式。

力载体粒子的自旋决定了它所传递的力的角度依赖性：

| 自旋 | 例子 | 场的类型 |
|------|---------|------------|
| 0 | 希格斯玻色子 | 标量 |
| 1/2 | 电子、夸克 | 旋量（费米子） |
| 1 | 光子、W、Z、胶子 | 矢量 |
| 2 | 引力子 | 对称二阶张量 |

这意味着自旋直接影响力在多个方向上相互作用的方式。例如，自旋0没有角度依赖性。力从每个方向看起来都一样。对称的。

但更具体地说，我们谈的是可以被建模为场的粒子——基于这些粒子有什么样的相互作用，产生什么样的力。

自旋-1场（例如产生光子的场）携带一次动量，用一个4分量矢量描述：$ A_\mu =(ϕ, Ax​,Ay​,Az​) = (0,1,0,0) $。$\mu$ 遍历4个时空指标：$ μ = 0 $（时间），$1, 2, 3$（空间）。就这样。一个指标，四个分量。光子的动量是另一个4-矢量 $p_\mu = (E, p_x, p_y, p_z)$。

> $A_\mu$ 只需要一个指标，因为电磁场只需要知道它在每个时空点指向哪个方向。一个指标 = 一个方向。想想你处理过的任何电磁学模型，你把力建模为三维空间中普通物体之间的直接关系。

自旋-2粒子（其场产生的所谓引力子）携带两次动量，由我们之前讨论过的 $ h_{\mu\nu} $ 描述。

> 程序员注：张量的阶就是矩阵。二阶张量形状可以是 `[3,3]`。三阶是 `[3,3,3]`。

> 我知道你在想什么："David，如果希格斯玻色子像其他那些一样传递力，那不是说也有希格斯力吗？"简短的回答是没有，而且我没时间去读背后的数学原因。我得提醒你，你正在读一篇由风险投资人写的关于量子引力的博客文章，我已经尽力了。

### 微扰理论

如上所述，大多数有意思的量子场论无法用公式直接求解——相互作用太复杂了。（当然这是因为粒子彼此相互作用，所以预测和隔离活动很难。）微扰理论是一种变通方法：从一个自由理论（没有相互作用，可以精确求解）开始，然后把其余的相互作用作为叠加在上面的小修正来处理。每个修正被更高次的耦合常数 $g$ 压制，所以完整答案开始看起来像一个幂级数（想想微积分里的泰勒展开）：

$$\mathcal{M} = \mathcal{M}^{(0)} + g\,\mathcal{M}^{(1)} + g^2\,\mathcal{M}^{(2)} + \cdots$$

这个级数里的每一项对应费曼图展开中的一个"圈阶"。当 $g \ll 1$ 时（QED有 $\alpha \approx 1/137$，所以级数收敛很快），效果极好。当耦合很大时，或者——我们将看到——当耦合随能量增长时，就崩了。对于引力，在能量 $E$ 处的有效耦合是 $\sim \kappa E \sim E/M_{\rm Pl}$，在普朗克尺度附近会爆炸。

### 费曼图与圈

这些图在粒子物理中会一直出现。我觉得它们在某种意义上很烦人，因为它们真的把发生了什么抽象掉了，但我理解为什么要用它们。它们是直觉上思考物理情境的简单工具。

> 想一个简单的例子：你有两个电子。它们互相排斥。问题是：这个相互作用的概率振幅是多少？
> 在QFT中，答案通过问以下问题来计算：*时空中每个点存在什么场，它们如何相互作用？* 这是个很大的问题。
> 电子有场 $ψ(x)$。光子也由场 $A_\mu(x)$ 定义。它们是耦合的——意思是光子传递电磁力，这就是排斥力在两个电子之间传递的方式。
> 
> 要得到振幅，你计算：
> 
> $$ \langle f | e^{-i\int d^4x\, \mathcal{H}(x)} | i \rangle $$
> 
> 里面那个指数，展开后是个无穷级数……
> $$ 1 + (-i\int \mathcal{H}) + \frac{1}{2}(-i\int \mathcal{H})^2 + \cdots $$ 

> 每一项都是场算符乘积在时空上的多重积分。当你用场的已知行为实际计算这些积分时，你会得到动量空间中的积分——因为通过傅里叶变换，场在动量空间中更容易分析。

费曼图是微扰级数各项的可视化图。每张图代表某个物理过程（比如两个光子相互散射）的概率振幅中一个具体的数学贡献——一个积分。

这些图由两种成分构成：**传播子**（内部线，代表在两点之间传播的虚粒子）和**顶点**（粒子相遇并相互作用的点）。

#### 传播子

传播子是费曼图中每条内部线附带的数学对象。它代表虚粒子携带动量 $k$ 从一个相互作用顶点传播到另一个的振幅。

对于无质量自旋-1粒子（光子），动量空间的传播子是：

$$D_{\mu\nu}^{\gamma}(k) = \frac{-i\,\eta_{\mu\nu}}{k^2 + i\epsilon}$$

对于无质量自旋-2粒子（引力子），就……更麻烦了：

$$ D_{\mu\nu\rho\sigma}^{h}(k) = \frac{-i}{k^2 + i\epsilon}\left(\frac{1}{2}[\eta_{\mu\rho}\eta_{\nu\sigma} + \eta_{\mu\sigma}\eta_{\nu\rho}] - \frac{1}{2}\eta_{\mu\nu}\eta_{\rho\sigma}\right) $$

更简单地说，传播子就是费曼图计算中"粒子从A到B有多大概率"的因子。

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
<p style="font-size:0.85rem;color:#9090b0;font-style:italic;">光子传播子：D<sub>μν</sub><sup>γ</sup> ∼ 1/k²</p>
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
<p style="font-size:0.85rem;color:#9090b0;font-style:italic;">引力子传播子：D<sub>μνρσ</sub><sup>h</sup> ∼ 1/k²</p>
</div>
</div>


$1/k^2$ 这部分意味着：动量越高（距离越短），贡献越小。光子和引力子都有同样的衰减，所以两者在高能量下*仅从传播子来看*都不会爆炸。

引力子额外的指标（$\mu\nu\rho\sigma$ 对比光子的 $μν$）反映出它是自旋-2——描述二阶张量（度规微扰 $h_{\mu\nu}$）如何传播需要两对指标。指标更多，公式更丑，基本的 $ 1 / k^2$ 行为不变。

两者在大动量时都以 $1/k^2$ 衰减。光子和引力子传播子在高 $k$ 下表现同样良好。


#### 顶点
图中的顶点是场相互作用的点。

例如，一个电子进来，发射一个光子，电子出去。三条线相交于一点。这就是顶点。

"树图"是一个非正式术语，指的是动量在该图的相互作用中守恒的概念。

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

#### 圈

圈发生在"虚粒子"被同一张图发射并重新吸收时——形成一条闭合路径。

在树图阶（无圈）：电子发射光子，另一个电子吸收它。光子的动量完全由两个电子的动量通过守恒律固定。

有圈的情况：电子发射一个光子，那个光子分裂成两个粒子，它们重新合并回光子，然后被吸收。那两个内部粒子的动量 $k$ 不被守恒律固定——它们只需要加起来等于光子的动量。所以 $k$ 是自由的，你对所有可能的 $k$ 积分。

**树图**没有闭合圈。所有内部粒子的动量完全由守恒律固定——这给出有限的、看起来像经典的结果。

**圈图**有闭合的内部线圈。因为在圈里流动的动量*没有*被守恒律固定，你必须对所有可能的值积分——从零到无穷大：

这是一个圈图的例子

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


> 圈积分问的问题是：每个可能"虚粒子"的动量是多少。我的意思是，我们无法观测到它，所以我们必须假设这个假想粒子——它以极低的概率有可能参与了这个相互作用。
> 一个粒子有4个动量分量：（$k_0, k_1, k_2, k_3$），能量（$k_0$）加上三个空间方向上的动量。

> $d^4$ 意味着你在4维动量空间中积分。

函数 $\mathcal{I}(k)$ 通常在 $k \to \infty$ 时衰减不够快，所以积分发散。图中独立圈的数量 $L$ 决定了你面对多少不受约束的动量积分——对于引力，每增加一个圈情况都会急剧恶化。

这是完整积分实际看起来的样子，从简写中给出一些清晰度：

$$ \int_{-\infty}^{\infty} dk^0 \int_{-\infty}^{\infty} dk^1 \int_{-\infty}^{\infty} dk^2 \int_{-\infty}^{\infty} dk^3 \frac{1}{(k^0)^2 - (k^1)^2 - (k^2)^2 - (k^3)^2 - m^2} $$

> 再次提醒，记住核心思路：你在所有维度上积分，以对所有可能的动量状态求和。

#### 那当你的圈积分发散时怎么办？

我们决定想个办法，直接停止积分！字面意思——在某个大动量 $ \Lambda $ 处直接停下来，看看不考虑所有可能动量是否能搞清楚，理论只对更低的动量状态适用，而大多数生活就发生在那里。

我们设一个人为偏低的常数 $k < Λ$。你的积分现在有限了，但依赖于 $ Λ $。

物理直觉是高动量意味着短距离。紫外截断隐含地说的是："我不信任我的理论在能量 $Λ$ 以上，但对大多数其他正常情况，我们能做出非常有用的东西。"


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
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">树图：有限，无需积分</p>
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
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">一圈：∼ Λ⁴，产生新的 R² 抵消项</p>
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
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">两圈：Goroff &amp; Sagnotti 的决定性结果</p>
</div>
</div>


##### 电荷和质量的推导

对于我们一直在讨论的光子相互作用，你可以这样建模所有可能的相互作用：
$$ \int d^4k \frac{-ig_{\mu\nu}}{k^2} \cdot \frac{1}{(p-k)^2 - m^2} $$ 

从大 $k$ 处（$k \gg p$）的被积函数开始：

$$(p-k)^2 = k^2 - 2p\cdot k + p^2 \approx k^2$$

所以被积函数变为：

$$\frac{-ig_{\mu\nu}}{k^2} \cdot \frac{1}{k^2} = \frac{-ig_{\mu\nu}}{k^4}$$

现在换到4D球坐标。在4D中，半径 $k$ 处的球壳表面积 $\sim k^3$，所以：

$$d^4k \to k^3 dk$$

积分变为：

$$\int_0^\Lambda \frac{k^3\, dk}{k^4} = \int_0^\Lambda \frac{dk}{k} = \log(\Lambda)$$

所以完整积分分解为：

$$\text{有限部分} + e^2 \log(\Lambda)$$

发散是一个单独的对数。它与拉格朗日量中已有的电荷项具有相同的形式——所以对 $e$ 重新定义一次，在每一圈阶都能吸收它。

> 我们不知道光子能量的真实值。我们只有这个在尝试求解该积分时"吸收"有限部分的极其精确的近似。我们实际上不知道电子的"真实"电荷，因为它永远无法被观测。


##### 用同样的方法对引力行不通

对引力来说：

$$ \int d^4k \frac{k^{\mu}k^{\nu}k^{\rho}k^{\sigma}}{k^4} \cdot \frac{1}{(p-k)^2 - m^2} $$ 



$$ \int d^4k \cdot \text{const} \sim \int k^3 dk \to \infty $$ 

这叫四次发散。每一圈阶都产生新类型的发散，需要一个新参数——无穷多个参数，没有预测能力。

在QED中，发散与拉格朗日量中已有某一项具有相同的形式，所以你只需重新定义那一个数。

长话短说，你无法把发散定义为映射到实验的常数。如果你想深入了解，我们在下面详细展开。

---

### 发散度

发散度 $D$ 是对费曼图（再次说明，就是我们一直在谈的那个积分的表示）发散程度的幂次计数估计。

对于4维时空中的圈积分，你有 $d^4k$——来自积分测度的四次动量。分母中的传播子压制它，顶点中的导数因子在分子中增加 $k$ 的幂次。被积函数中 $k$ 的净幂次（即指数）就是发散度：

$$\text{图} \sim \int d^4k \; \frac{k^{n_{\rm num}}}{k^{n_{\rm den}}} \implies D = 4 + n_{\rm num} - n_{\rm den}$$

- $D > 0$：图以 $\Lambda^D$ 发散（幂律发散）
- $D = 0$：对数发散，$\sim \ln \Lambda$
- $D < 0$：表面上收敛（单张图有限）

在可重正化理论（如QED）中，$D$ 只依赖于图中的*外部*粒子——而不依赖于圈阶 $L$。所以你只会遇到有限组的发散结构，都能被一组固定的抵消项吸收。

对于引力，$D = 2 + 2L$——它随圈阶线性增长，在微扰论每一阶都产生新的、不等价的无穷大。

在所有其他成功的量子场论中——量子电动力学、弱力、量子色动力学——我们确实从虚粒子圈遇到无穷大。但这些无穷大是*可控的*：它们可以通过一种叫做**重正化**的程序被吸收进一小组固定的物理参数（质量和耦合常数）中。一旦你通过测量固定了这些参数，所有预测都是有限的并与实验吻合。

可重正化性意味着独立无穷大的数量等于你可以调节的自由参数数量。一个具有无穷多个不等价无穷大的理论**没有预测能力**。

广义相对论，当围绕平直时空量子化（即没有引力、没有曲率）$g_{\mu\nu} = \eta_{\mu\nu} + \sqrt{32\pi G}\, h_{\mu\nu}$ 时，给出更多发散的圈图。你需要无穷多次测量来固定无穷多个参数——使理论无法使用。

### $D = 2 + 2L$ 从哪来

对于有 $L$ 个圈、$I$ 条内部引力子线和 $V_n$ 个 $n$ 类顶点（每个携带 $n_d = 2$ 个导数）的费曼图：

$$D = 4L - 2I + 2\sum_n V_n$$

利用 $L = I - V + 1$：

$$D = 4L - 2I + 2(V-1) = 4L - 2(I - V) - 2 = 4L - 2(L-1) - 2 = 2L + 2$$

在 $L$ 圈处，图以 $\Lambda^{2+2L}$ 发散——在每一阶产生新的不等价无穷大。

---

### 为什么质量量纲为负 = 不可重正化

想象一个 $L$ 圈的引力圈图。耦合 $\kappa$ 出现 $2(L+1)$ 次（每个顶点两次，每圈加外部一对）。要让振幅是无量纲的：

$$\mathcal{M}^{(L)}_{\rm loop} \;\sim\; \kappa^{2(L+1)} \cdot \Lambda^{2+2L} \;=\; \left(\frac{\Lambda}{M_{\rm Pl}}\right)^{2+2L} \cdot \Lambda^0$$

> **发散的层级：** 在每一圈阶 $L$，我们得到一个新的发散 $\sim (\Lambda/M_{\rm Pl})^{2+2L}$，乘以一个新算符。这些算符有越来越多的导数和曲率张量，每个都需要一个*新的*自由参数来吸收。这个理论有无穷多个自由参数。

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:2rem 0;">
<div style="padding:1.2rem 1.5rem;border:1px solid rgba(64,240,160,0.35);border-radius:8px;">
<p style="font-family:monospace;font-size:0.7rem;color:#40f0a0;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">✓ QED（可重正化）</p>
<p style="font-size:0.88rem;">
耦合：<em>e</em>，[e] = M⁰（无量纲）<br/>
每圈发散：∼ ln Λ 或 Λ²<br/>
全部被以下吸收：δm<sub>e</sub>, δe, δZ<sub>ψ</sub>, δZ<sub>A</sub><br/>
<span style="color:#40f0a0">3个参数 → 重正化后所有阶有限</span>
</p>
</div>
<div style="padding:1.2rem 1.5rem;border:1px solid rgba(240,96,96,0.35);border-radius:8px;">
<p style="font-family:monospace;font-size:0.7rem;color:#f07070;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">✗ 量子引力（不可重正化）</p>
<p style="font-size:0.88rem;">
耦合：κ，[κ] = M⁻¹<br/>
L圈处发散：∼ Λ<sup>2+2L</sup><br/>
需要新算符：R², R³, R<sub>μν</sub>R<sup>μν</sup>, R<sub>μνρσ</sub>³, …<br/>
<span style="color:#f07070">∞ 个参数 → 理论无预测能力</span>
</p>
</div>
</div>

### 有效场论的视角

还有一线希望：在普朗克尺度以下（$E \ll M_{\rm Pl} \approx 1.22 \times 10^{19}$ GeV），量子引力是有效的。更高圈的修正被 $(E/M_{\rm Pl})^2 \sim 10^{-38}$ 的幂次压制——在可及能量下完全可以忽略不计。这就是经典广义相对论为什么有效的原因。

我们应该从中得出的结论是，量子引力*不是一个完整的、紫外有限的理论*。它需要在普朗克尺度处得到补全（这就是"弦理论"或"圈量子引力"可以被代入的地方）。

---

## 动量积分的可视化

核心对象是对虚引力子动量 $k$ 的一圈积分：

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
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">QED：被积函数快速衰减——积分是对数发散的，被重正化吸收</p>
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
<p style="font-size:0.8rem;color:#9090b0;font-style:italic;">引力：每一圈阶 L 给出增长更快的被积函数——所有的都在 Λ→∞ 时发散</p>
</div>
</div>

> 左侧面板显示QED被积函数 $\sim 1/k$：快速衰减，曲线下面积有限（对数发散，容易重正化）。右侧面板显示 $L=1,2,3$ 的引力被积函数 $k^{2L-1}$：每条都随 $k$ 增长，积分 $\propto \Lambda^{2L}$ 在 $\Lambda\to\infty$ 时爆炸——每一圈阶都比前一阶严格更糟。

对 $L=1$（一个引力子圈），被积函数以 $k$ 增长，给出 $\Lambda^2$。对 $L=2$ 它以 $k^3$ 增长，给出 $\Lambda^4$。对 $L=3$ 是 $k^5$，给出 $\Lambda^6$。每一圈阶都需要一个全新的抵消项——理论产生无穷多个不等价无穷大的塔。

---

## 为什么QED有效而引力无效

量子电动力学与微扰量子引力的幂次计数详细比较，精确说明了为什么一个理论可重正化而另一个不可以。

| 属性 | QED（光子） | 微扰引力（引力子） |
|---|---|---|
| 自旋 | 1 | 2 |
| 耦合常数 | $e$，无量纲 $[M^0]$ | $\kappa = \sqrt{32\pi G}$，$[M^{-1}]$ |
| 传播子 $\sim$ | $1/k^2$ | $1/k^2$ |
| 顶点动量增长 | $\sim k^1$（规范耦合） | $\sim k^2$（曲率 = 二阶导数） |
| 表面发散度 $D$ | $D = 4 - E$（随外腿数 $E$ 减小） | $D = 2 + 2L$（随圈阶增长） |
| 1圈处的发散 | $\sim \ln\Lambda$（对数，可重正化） | $\sim \Lambda^4$（四次方！） |
| 产生的新算符 | 原始拉格朗日量之外没有 | $R^2, R_{\mu\nu}^2, R^3, \ldots$（无穷多个） |
| 所需自由参数 | 3 个（$m_e, e, \delta Z$） | ∞（每圈阶一个） |
| 可重正化？ | ✓ 是——在所有阶可预测 | ✗ 否——在树图阶之上无法预测 |
| 决定性证明 | Dyson 1949 | Goroff & Sagnotti 1985；van de Ven 1992 |



---

## 这对物理学意味着什么

### 有效场论的裁定

Donoghue（1994）证明量子引力可以被当作普朗克尺度以下的有效场论来处理。牛顿势的领头量子修正是：

$$V(r) = -\frac{G m_1 m_2}{r} \left[ 1 + \frac{3G(m_1+m_2)}{r c^2} + \frac{41G\hbar}{10\pi r^2 c^3} + \cdots \right]$$

第二项是经典后牛顿修正。第三项，与 $\hbar$ 成正比，是真正的量子引力修正——在普朗克尺度以下可以计算且无歧义。在 $r = 1$ 米处，量级为 $10^{-82}$——小到无法测量。

### 提议的紫外补全

几种方法试图提供量子引力的紫外完整理论：

- **弦理论** — 用一维弦替代点粒子；引力子是弦的振动模式。通过大质量弦激发的无穷塔实现紫外有限性。
- **圈量子引力** — 在普朗克尺度处将时空离散化；时空本身具有量子结构，提供天然的紫外调节器。
- **渐近安全** — 提出牛顿常数流向非高斯紫外不动点，使理论在没有新自由度的情况下紫外完整。
- **因果动力学三角剖分** — 量子引力的格状表述，使用具有因果结构的Regge微积分。
- $\mathcal{N}=8$ 超引力

> **结论：** 不幸的是，自然界在普朗克尺度 $E_{\rm Pl} \approx 10^{19}$ GeV 处需要新物理。这个探索是科学中最深刻的问题之一。

下次你遇到一个因为没法认真搞懂这个领域真正在发生什么而抓狂的人，把这篇文章发给他们。

$$\underbrace{\frac{1}{16\pi G}\int R\,\sqrt{-g}\,d^4x}_{\text{广义相对论}} \xrightarrow{\text{量子化}} \underbrace{\sum_{L=0}^{\infty} \hbar^L \mathcal{M}^{(L)}}_{\text{发散：}D=2+2L} \implies \underbrace{?}_{\text{量子引力}}$$


> 另外，欢迎给我发更正，我希望把这个搞对。

> *不可重正化性的决定性证明来自Goroff和Sagnotti的两圈计算。他们发现了一个发散抵消项：
> 
> $$\mathcal{L}_{\rm div}^{(2\text{-loop})} = \frac{209}{2880}\cdot\frac{\kappa^4}{(4\pi)^4}\cdot\frac{1}{\epsilon} \cdot R_{\mu\nu}{}^{\rho\sigma} R_{\rho\sigma}{}^{\lambda\kappa} R_{\lambda\kappa}{}^{\mu\nu}$$
> 
> 这个算符 $R_{\mu\nu\rho\sigma}^3$（黎曼张量的三次方，六阶导数）**不**出现在原始爱因斯坦-希尔伯特作用量中。其发散系数为 **209/2880 ≈ 0.0726**——非零，所以无法调节掉。需要一个全新的抵消项，而且没有实验手段可以确定它。


---

*物理学：爱因斯坦-希尔伯特作用量 · Goroff & Sagnotti（1985）· van de Ven（1992）· Donoghue（1994）*

*参考文献：Zee，《一个坚果壳里的量子场论》· Donoghue，Phys. Rev. Lett. 72（1994）· Goroff & Sagnotti，Nucl. Phys. B 266（1986）*

特别感谢AI工具提供的无限辅导和非常有帮助的图表。就是这样了。
