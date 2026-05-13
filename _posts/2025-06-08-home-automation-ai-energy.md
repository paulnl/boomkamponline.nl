---
layout: post
title: "Home automation and AI: how I lowered my energy bill with smart lights and a battery"
description: "Combining smart lighting, a home battery, and an AI-driven energy system saves me hundreds of euros per year. This article shares how it works and what it costs."
date: 2025-06-08
category: "AI"
lang: en
post_id: "huisautomatisering-energie"
---

A few years ago, I started experimenting with home automation. Not 
because I wanted to be the smartest person on the block, but because 
I was tired of paying too much for electricity every month — being 
away during the day and running everything at peak hours in the evening.

Now my home runs mostly on autopilot. The lights, the EV charger, the 
heat pump — everything communicates. And the bill is significantly 
lower. Here's how I did it.

## Why standard timers aren't enough

A timer is better than nothing, but it doesn't adapt to reality. What 
if you come home early? What if the sun is shining and you don't need 
lights at all? What if electricity prices turn negative in the middle 
of the day?

That's why I use an AI-driven system that makes continuous decisions 
based on three factors:

- **Real-time electricity price** (via the EPEX day-ahead market)
- **Weather** (cloudy → more indoor lighting needed)
- **My presence** (GPS from my phone)

The system also learns. After a few weeks, it knows when I usually 
come home, whether I sleep in on weekends, and when I'm on vacation.

## Smart lights: the low-hanging fruit

Let's start with lighting — the cheapest and easiest part of home 
automation.

I use Philips Hue in the living room and Ikea Tradfri everywhere else. 
Both are open enough to control via Home Assistant or n8n. The price 
difference is significant — Ikea costs about a third of Hue — but the 
quality is perfectly fine.

What does it save?

- Lights only turn on when someone is in the room
- In the morning, they dim in gradually instead of flashing on
- Outdoor lights are based on sunset, not a fixed time
- In summer, they stay off more often because it stays light longer

**Savings:** about €50-80 per year in direct electricity. That doesn't 
sound groundbreaking, but it's the easiest part. The real gains come 
from combining it with a home battery and dynamic energy tariffs.

## The home battery: buy power when it's cheap

This is where it gets interesting. I have a 10 kWh home battery — a 
lithium-ion unit about the size of a small washing machine. It charges 
when electricity is cheap (or negative) and discharges when prices are 
high.

Even without solar panels, you can profit from this. The principle is 
simple:

- At 2:00 AM, electricity is cheapest → charge the battery
- At 6:00 PM, electricity is most expensive → discharge the battery

With a dynamic contract (I use Zonneplan and ANWB), I pay the hourly 
rate, not a fixed tariff. The difference between off-peak and peak can 
be 20 to 30 cents per kWh.

**Math:** 10 kWh × €0.25 difference × 300 days = **€750 per year**.

On top of that, I also use the battery to store my own solar power. 
On sunny days, the battery charges during the day, and I use that 
power in the evening instead of expensive grid electricity.

## The AI that runs it all

Without automation, I'd have to manually switch between charging and 
discharging. I don't — I simply forget. So everything runs through an 
AI-driven system I built in n8n.

The workflow works like this:

1. **Every hour**, a webhook fetches the current electricity price
2. The system checks the weather forecast (sun → extra yield)
3. It checks my calendar (am I home or not?)
4. Based on this data, it controls the battery: charge, discharge, or wait

The logic isn't complicated, but the combination of factors makes it 
powerful. A simple example:

> It's 2:00 PM, the electricity price is €0.05/kWh, the sun is 
> shining, and I'm not home. The AI decides: leave the battery idle 
> and feed solar power directly to the grid. Why? Because the battery 
> is already full and it's better to sell now at a reasonable price.

> Two hours later, 4:00 PM. The price has dropped to €0.02. The AI 
> decides: charge the battery a little from the grid, so it can 
> discharge at maximum during tonight's peak.

The system re-evaluates these decisions every few minutes. A human 
can't keep up with that manually, but a computer can.

## What does it cost?

The investment isn't negligible, but it pays for itself:

| Component | Cost | Payback period |
|---|---|---|
| Smart lights (entire house) | €400 | 4-5 years |
| 10 kWh home battery (installed) | €4,500 | 5-6 years |
| AI system (n8n, server, sensors) | €300 | 1-2 years |
| **Total** | **€5,200** | **4-6 years** |

After that, it's pure profit. And the battery lasts at least 10 years 
(under warranty), so you get another 4-6 years of extra benefit.

## Want to do the same?

You don't need a technical background to get started. The easiest 
entry point: buy a few smart lights (Ikea Tradfri, no hub needed with 
Zigbee2MQTT) and sign up for a cheap dynamic energy contract. Track 
the data in a spreadsheet — you'll see the difference within a month.

Want to go further? Install Home Assistant on a Raspberry Pi or an old 
laptop. That's the beating heart of a smart home. Then build the AI 
logic in n8n to control everything.

Have questions or want advice on which system suits your situation? 
[Get in touch](/#contact) — I'm happy to help.
