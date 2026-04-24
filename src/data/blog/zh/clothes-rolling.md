---
author: David Awad
pubDatetime: 2023-10-26T16:38:49Z
title: 证明卷叠衣物比折叠更省空间。
postSlug: 10-26-clothes-packing
featured: true
draft: false
tags:
  - travel
ogImage: ""
description: "我们用数学方法分析行李打包问题，比较最优的服装选择和整理方式。"
---

说到出行打包，有两种方法争论不休：卷叠和平铺（折叠）。问题很简单：哪种方法能在一个符合TSA规定的随身行李箱里塞进更多套衣服？我最近出行频繁，烦到不得不认真研究这个问题。答案是卷叠，下面我来证明。

本文假设行李箱尺寸符合TSA标准：$ 56 \text{ cm} \times 36 \text{ cm} \times 23 \text{ cm} $，总容积为 $ V_{\text{case}} = 46,464 \text{ cm}^3 $。

## 体积比较

### 平铺折叠法

平铺折叠时，假设各件衣物尺寸如下：

- 衬衫：$ 25 \text{ cm} \times 25 \text{ cm} \times 1 \text{ cm} $
- 裤子：$ 30 \text{ cm} \times 40 \text{ cm} \times 1.5 \text{ cm} $
- 袜子：$ 10 \text{ cm} \times 10 \text{ cm} \times 1 \text{ cm} $（一双）
- 内裤：$ 20 \text{ cm} \times 20 \text{ cm} \times 0.5 \text{ cm} $

折叠法下，一套衣服的总体积为：

$ V_{\text{outfit, layering}} = 625 \text{ cm}^3 \text{（衬衫）} + 1800 \text{ cm}^3 \text{（裤子）} + 200 \text{ cm}^3 \text{（袜子）} + 200 \text{ cm}^3 \text{（内裤）} = 2825 \text{ cm}^3 $

### 卷叠法

卷叠后各件衣物的假设尺寸如下：

- 衬衫卷叠后：半径 $ 3.5 \text{ cm} $、高度 $ 9 \text{ cm} $ 的圆柱体
- 裤子卷叠后：半径 $ 5 \text{ cm} $、高度 $ 10 \text{ cm} $ 的圆柱体
- 袜子：半径 $ 2 \text{ cm} $、高度 $ 4 \text{ cm} $ 的圆柱体
- 内裤：半径 $ 3 \text{ cm} $、高度 $ 2 \text{ cm} $ 的圆柱体

卷叠法下，一套衣服的总体积为：

$ V_{\text{outfit, rolling}} = 402.12 \text{ cm}^3 + 785.4 \text{ cm}^3 + 2 \times 100.53 \text{ cm}^3 + 56.52 \text{ cm}^3 = 1445.1 \text{ cm}^3 $

## 直接比较

卷叠法胜出：每套衣服仅占 $ 1445.1 \text{ cm}^3 $，而折叠法需要 $2825 \text{ cm}^3 $。

_pari passu_ 地看，假设任何衣物都可以卷叠，无论你代入什么具体数值（$ V_{\text{shirt}}$、$V_{\text{pants}}$ 等），卷叠法始终占用更少空间。

*QED*。

## 把这个例子推向极致……

既然卷叠更高效，那就继续深挖。出行时我追求实用，裤子会重复穿。

> 我一般只穿纯色衬衫和裤子，最大化每件衣物之间的搭配兼容性，让每件单品都物尽其用。

假设裤子可以重复穿，且有无限供应的可互搭衬衫和裤子，我可以定义函数 $ B(d) $，用于计算出行 $ d $ 天所需的最优行李箱数量。该函数综合考虑一个箱子能装下的最优套数 $ O $，以及一条裤子可以重复穿的次数 $ r $。

目标仍然是在行李箱容积 $ V_{\text{case}} = 46,464 \, \text{cm}^3 $ 的约束下，最大化可组合的套数 $ O $。公式如下：

$ O = \left\lfloor \frac{V_{\text{case}}}{r \times V_{\text{pants}} + V_{\text{shirt}} + 2 \times V_{\text{socks}} + V_{\text{boxers}}} \right\rfloor $

出行 $ d $ 天所需的裤子数量 $ P $ 为 $ \lceil \frac{d}{r} \rceil $。

函数 $ B(d) $ 定义为：

$ B(d) = \left\lceil \frac{d + \lceil \frac{d}{r} \rceil}{O} \right\rceil $

其中 $ \lceil x \rceil $ 表示向上取整。

这个函数根据出行天数 $ d $ 和裤子重复穿次数 $ r $，告诉你需要几个行李箱。这给出了符合TSA随身行李规定的最优_服装打包方案_。

## 结论

通过体积计算和一点微积分，卷叠法在往TSA认可的随身行李箱里塞更多套衣服这件事上完胜折叠法。理论上，卷叠法最多可以装下32套完整衣服——当然你得使劲压。

加入裤子重复穿这样的基本创新，函数 $ B(d) $ 为打包问题增添了全新的优化维度（此处"维度"为字面意思）。我们不仅能找到一个箱子的最优套数，还能确定任意出行天数所需的行李箱数量。这让你的打包不只是高效，而是数学意义上的最优。

不客气。
