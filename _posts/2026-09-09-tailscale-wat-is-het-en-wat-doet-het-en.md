---
layout: post
title: "Tailscale, wat is het en wat doet het"
description: "What is Tailscale, what does it do and why your business benefits? A clear explanation without configuration jargon."
date: 2026-09-09
category: "Automation"
lang: en
post_id: "tailscale"
image: /images/tailscale-og.jpg
---

The question I get about Tailscale most often, in bars and in emails: 'That just works like a VPN, right?' Usually I answer: read on. Because Tailscale is exactly what many business owners mean when they say 'a VPN for my company' - but without the configuration marathons.

In this article I explain what Tailscale is, what it does, and why it genuinely helps a small business or freelancer.

## What exactly is Tailscale?

Tailscale is a way to put all your devices into one private network - even when they are spread across multiple locations or around the world. It is built on WireGuard, a modern and fast VPN technology.

The difference from a classic VPN server: you do not open ports and you do not configure tunnels for every colleague. You install Tailscale on a device, log in with your account, and that device is immediately part of your network. That network is called a tailnet.

## What does it do?

- A secure connection between all your devices: laptop, server, home PC, phone.
- Access to a server or home system from anywhere in the world.
- Connections between locations (office and data centre, for example), as long as there is internet.
- SSH and databases that run over it safely, without opening ports.
- Subnet routing: devices in your office reach your server as if you were local.

## Why would a small business want this?

A few practical examples:
- You manage a server but are not at the server.
- You want colleagues to join your network securely from their own laptops.
- You test a new setup at home and want to reach it from the office.
- You want databases, admin panels and SSH out of the public internet.

In short: everything you used to do with port forwarding, per-site VPNs and dynamic DNS becomes a few clicks with Tailscale.

## Is it secure?

Tailscale uses strong per-connection cryptography and works with private keys created per device. You decide who may see the network through access rules. Every device must be approved explicitly; nothing just joins your tailnet.

Worth knowing: coordination (which device belongs where) runs through Tailscale's servers, but your actual traffic goes directly between your devices. And there is a free tier for small setups.

## Is this for your business?

Do you only have a laptop and a simple website with a hosting provider? Then you do not need Tailscale.

**Honest take:** Tailscale is overkill if you only work on one device and do not manage servers. It only becomes worth it once you have a server you want to reach from multiple locations, or colleagues need secure access to internal systems. For freelancers who just have a website and some cloud tools, it is usually not needed. For small teams with their own server, it is a lifesaver.

## How do you start?

1. Create an account at tailscale.com.
2. Install the client on your first device.
3. Log in - your device is in your tailnet.
4. Add your second device.
5. Set rules for who can connect to what.

Not scary at all, and that is exactly the point.

## Summary

- Tailscale is a WireGuard private network over the internet.
- No opening ports, no configuration mazes.
- Ideal for server management, remote access and multiple locations.
- Free tier for small setups, paid for more control.

If 'VPN' has ever been on your to-do list, try Tailscale first. Chances are it is installed within an hour and does exactly what you were looking for.

Want to set up Tailscale (or another way to manage your systems securely) for your own business? I am happy to walk you through it - get in touch at paul@boomkamponline.nl.