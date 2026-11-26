---
layout: post
title: "Cybersecurity Act for your website and server: 10 things you can fix today as an SME"
description: "The Dutch Cybersecurity Act has applied since 15 August 2026. What does NIS2 mean for your website and server? 10 practical steps for SMEs."
date: 2026-11-26
category: "Web Development"
lang: en
post_id: "cyberbeveiligingswet-nis2-mkb"
image: /images/cyberbeveiligingswet-nis2-mkb-og-en.jpg
---

Cybersecurity Act: 10 things you can fix today

I hear it often in conversations with clients. Someone mentions the Dutch Cybersecurity Act, and the next question is: does that apply to me? The answer is usually: maybe it does. And if it does not apply to you, it may apply to your customer.

Sometimes I hear: that is something for large companies. Or the opposite: we will need a serious budget for this. Neither is right. I am a web developer, not a lawyer. This is not legal advice. What I can do is tell you what the official sources say and give you a list of measures you can take on your website and server. No big story. Just get on with it.

What the law is and when it took effect

The Cybersecurity Act, abbreviated to Cbw, is the Dutch implementation of the EU NIS2 directive. It replaces the Network and Information Systems Security Act, known as Wbni. The Senate approved it on 7 July 2026. The act took effect on 15 August 2026, at the same time as the Critical Entities Resilience Act.

The act applies to more than 8,000 organisations in the Netherlands. The Dutch government names 18 sectors, including energy, transport, healthcare, digital infrastructure, government and research. Whether a company falls under the act depends on three things: its sector, the services it provides and its size.

For the organisations it covers, there are a few fixed obligations. You register in the national entity register. You map the risks to your network and information systems. You take measures to reduce those risks. Management is responsible for cyber risk management, and board members need enough knowledge to fulfil that role. For a significant cyber incident, the first report must in most cases reach the NCSC within 24 hours. There is also supervision and enforcement.

Does it apply to you?

You can get a first indication yourself. The Dutch Digital Infrastructure Inspectorate offers a self-assessment tool at regelhulpenvoorbedrijven.nl/NIS-2-NL/. The NCSC offers the CyberVeilig Check for small businesses and freelancers at tools.ncsc.nl/cyberscan/. That check takes about five minutes and gives you your own action plan.

These are tools for a first impression, not rulings by a regulator. If you are still in doubt, ask through the official channels.

Registration lagged behind, though. On 14 August 2026, a day after the act took effect, Computable reported that about half of the organisations had missed the deadline. I mention that not to scare anyone, but because it shows how much is still left to arrange.

Why it matters even if you are not covered

This is the part I miss in many articles. The act also affects companies that do not fall under it directly. The Dutch enterprise agency RVO says so explicitly: even unregulated suppliers can end up dealing with these requirements indirectly.

The reasoning is simple. An organisation that is covered by the act has to map the risks of the companies it does business with. That follows from the NOS report of 17 October 2026. Such a client can then set requirements for you. Not because you have to comply with the law, but because they do.

Suppose you build a website for a healthcare institution or manage the server of a transport company. You may be asked how you handle two-factor authentication, how your backups work and what you do in an incident. That is the supplier side of NIS2. You do not have to fall under the law to have that in order. It also simply helps if your own website and server are sound.

Ten things you can fix today

This is the list I would work through for a client. No big projects. Most points take an hour or two, although there is maintenance afterwards.

1. Apply your updates
Check your server operating system, your CMS and all plugins and packages. Old versions are the easiest way in. I still see it: a website running for years on a theme or plugin for which an update has been available for ages.

2. Make backups and test a restore
A backup you have never restored is not a backup. Keep your backups separate from the production server and try restoring an old version in a test environment. Do not wait until something goes wrong.

3. Turn on two-factor authentication
For hosting, email, your CMS and anything that gives access to your server. A password alone is not enough. Two-factor authentication is probably the measure with the most gain for the least effort.

4. Keep a grip on access
Use a password manager and do not share accounts. Check which accounts still exist for people who have left. Remove them. Give everyone only the rights they need.

5. Look at your logs
Your server logs all sorts of things. The question is whether you notice when something odd happens. Make sure you can see failed login attempts and unusual traffic. You do not need elaborate monitoring to spot that something is off.

6. Encrypt your traffic and your email
HTTPS is standard by now, but I still come across sites without a valid certificate. For email, SPF, DKIM and DMARC are the three records you should have. They help others see whether a message really came from you.

7. Close ports and services you do not use
Servers often have more open than necessary. Check which ports are reachable from the internet and close what you do not use. Server security starts with the basics, not with a complicated package.

8. Know what you have in suppliers and plugins
Which external parties have access to your site or server? Which plugins do you no longer use? Remove what is redundant. This is also the point where, as a supplier, you can answer NIS2 questions from your clients.

9. Make an incident plan
One page is enough. Who do you call when something happens? Where are your credentials? Who can decide to take the site offline for a moment? You do not want to go looking for that when the site is down.

10. Write down what you did
You do not need a thick report. A short note with the date and what you changed helps you a lot later. And if a client or regulator asks what you did, you do not have to recall it from memory.

When something happens

On 17 October 2026, NOS described what happened at Albert Heijn after a cyber incident. The website and app were unreachable, online groceries could not be delivered and several distribution centres were at a standstill. The company had to report the incident. I mention this only as an example of the consequences and of the fact that reporting is part of the story. Not as speculation about the cause or fines.

For a significant incident, the first report must in most cases reach the NCSC within 24 hours. An update follows after 72 hours. So you cannot wait until you know everything exactly. You report what you know at that moment and add details later.

A practical point I often see go wrong: during an incident, nobody feels like looking up the hosting provider's number or who has access to the server. Put that in your incident plan. See point 9.

Not legal advice

I will say it again, because it matters. What NIS2 means for SMEs differs per organisation. This article is practical information based on public sources, not legal advice. Have the question of whether your company falls under the law answered through the official channels or by your own adviser.

Where to start

If you have not done these yet, do three things:

- Use the RDI self-assessment to check whether the act applies to your organisation.
- Do the NCSC CyberVeilig Check and work through the action plan.
- Pick three items from the list above that you can fix this week.

The rest follows. You do not have to get it right all at once, but you do need to know where you stand.

Want me to take a look at your website or server? On [my services page](/services/) you can see what I do. Send me your question through the [contact form](/#contact). I will take a look for free.

Sources:

- [Dutch government, 7 July 2026](https://rijksoverheid.nl/actueel/nieuws/2026/07/07/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-15-augustus-2026-van-kracht)
- [Dutch government, 15 August 2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/08/15/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-vandaag-van-kracht)
- [RVO, checked on 21 August 2026](https://www.rvo.nl/nieuws/wat-betekent-cyberbeveiligingswet-voor-uw-bedrijf)
- [Computable, 14 August 2026](https://www.computable.nl/2026/08/14/helft-bedrijven-mist-deadline-registratie-cyberbeveiligingswet-nis2/)
- [NOS, 17 October 2026](https://nos.nl/artikel/2635327-ah-moest-hack-melden-vanwege-nieuwe-cyberwet-verantwoordelijkheid-reikt-verder)
- [NCSC, Cybersecurity Act (NIS2)](https://www.ncsc.nl/cyberbeveiligingswet-nis2)
