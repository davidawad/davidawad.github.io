---
author: David Awad
pubDatetime: 2018-05-02T07:17:15Z
title: The internet's ticking time bomb.
postSlug: 05-2-dns
featured: false
draft: true
tags:
  - docs
ogImage: ""
description: ""
---

How much do you know about DNS

http://openresolverproject.org/

https://blog.cloudflare.com/65gbps-ddos-no-problem/

https://blog.cloudflare.com/deep-inside-a-dns-amplification-ddos-attack/

```shell
$ dig ANY isc.org @x.x.x.x
```

fascinatingly the PKTELECOM-AS-PK Pakistan Telecom Company Limited, has o ver 3000 open DNS resolvers. That shit's cray, fam.

Now you may be a jerk and think "well, if people lock down their dns servers for their own traffic, then I can take advantage of a /public dns server!"

Well the internet is ready for jerks like you.

here's what happens if you try to use Google's /public DNS server (`8.8.8.8` is Google's /public recursive DNS) for a DNS amplification attack.

```shell
$ dig ANY isc.org @8.8.8.8 +edns=0".

```

http://dns.measurement-factory.com/surveys/openresolvers/ASN-reports/latest.html

chrome-extension://padcapdkhelngdelppbbjmkmkfceoikg/content/pdf/viewer/viewer.html?file=https%3A%2F%2Fcseweb.ucsd.edu%2F~savage%2Fpapers%2FSigcomm00.pdf

Papers :

Practical Network Support for IP TracebackStefan Savage, David Wetherall, Anna Karlin and Tom AndersonDepartment of Computer Science and EngineeringUniversity of Washingt

A DoS-limiting Network Architecture
