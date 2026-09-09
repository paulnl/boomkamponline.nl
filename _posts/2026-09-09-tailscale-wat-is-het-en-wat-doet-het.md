---
layout: post
title: "Tailscale, wat is het en wat doet het"
description: "Wat is Tailscale, wat doet het en waarom heeft je bedrijf er profijt van? Duidelijke uitleg zonder configuratie-jargon."
date: 2026-09-09
category: "Automatisering"
lang: nl
post_id: "tailscale"
image: /images/tailscale-og.jpg
---

De vraag die ik het vaakst over Tailscale krijg, in cafés en in mailtjes: 'Dat werkt toch gewoon met een VPN?' Meestal antwoord ik dan: lees even verder. Want Tailscale is precies wat veel ondernemers zoeken als ze 'VPN voor mijn bedrijf' bedoelen, maar dan zonder de config-marathons.

In dit artikel leg ik uit wat Tailscale is, wat het doet en waarom je er als klein bedrijf of ZZP'er echt iets aan hebt.

## Wat is Tailscale precies?

Tailscale is een manier om al je apparaten in één privénetwerk te zetten - ook als ze over meerdere locaties of zelfs over de wereld verspreid staan. Het is gebouwd op WireGuard, een moderne en snelle VPN-technologie.

Het verschil met een klassieke VPN-server: je opent geen poorten en je configureert geen tunnels bij elke collega. Je installeert Tailscale op een apparaat, logt in met je account, en dat apparaat staat meteen in je netwerk. Dat netwerk noemen ze de tailnet.

## Wat doet het?

- Een beveiligde verbinding tussen al je apparaten: laptop, server, thuis-pc, telefoon.
- Toegang tot een server of thuissysteem vanaf elke plek ter wereld.
- Verbinding tussen locaties (kantoor en datacenter bijvoorbeeld), zolang er internet is.
- SSH en databases die er veilig overheen lopen, zonder dat je poorten open hoeft te zetten.
- Subnet-routing: apparaten in je kantoor bereiken je server alsof je lokaal zit.

## Waarom wil je dit als klein bedrijf?

Een paar praktijkvoorbeelden:
- Je beheert een server, maar zit niet bij de server.
- Je wilt collega's vanuit hun eigen laptop veilig het netwerk in laten.
- Je test thuis een nieuwe installatie en wilt 'm vanaf kantoor bereiken.
- Je wilt databases, admin-panelen en SSH uit de openbare internetruimte halen.

Kort gezegd: alles wat je vroeger deed met poort-forwarding, per-site VPN's en dynamische DNS wordt met Tailscale een paar klikken werk.

## Is het veilig?

Tailscale gebruikt sterke cryptografie per verbinding en werkt met privésleutels die per apparaat worden aangemaakt. Wie het netwerk mag zien, bepaal je zelf met toegangsregels. Elk apparaat moet expliciet worden goedgekeurd; er staat dus niets zomaar in jouw tailnet.

Belangrijk om te weten: de coördinatie (welk apparaat hoort waar) loopt via de servers van Tailscale, maar je dataverkeer zelf gaat rechtstreeks tussen jouw apparaten. En er is een gratis tier voor een kleine opstelling.

## Is het iets voor jouw bedrijf?

Heb je alleen een laptop en een eenvoudige website bij een hostingpartij? Dan heb je Tailscale niet nodig.

**Eerlijk oordeel:** Tailscale is overkill als je alleen op één apparaat werkt en geen servers beheert. Pas zodra je een server hebt die je vanaf meerdere locaties wilt bereiken, of collega's veilig toegang moeten krijgen tot interne systemen, wordt het de moeite waard. Voor ZZP'ers die alleen een website en wat cloud-tools gebruiken, is het meestal niet nodig. Voor kleine teams met een eigen server is het een uitkomst.

## Hoe begin je?

1. Maak een account aan op tailscale.com.
2. Installeer de client op je eerste apparaat.
3. Log in - je apparaat staat in je tailnet.
4. Voeg je tweede apparaat toe.
5. Stel via de regels in wie waarmee mag verbinden.

Helemaal niet spannend, en dat is precies de bedoeling.

## Samenvatting

- Tailscale is een WireGuard-privénetwerk over internet.
- Geen poorten openen, geen config-doolhoven.
- Ideaal voor serverbeheer, remote access en meerdere locaties.
- Gratis tier voor een kleine setup, betaald voor meer controle.

Als je ooit 'VPN' op je to-do-lijst hebt staan, probeer dan eerst Tailscale. De kans is groot dat het binnen een uur geïnstalleerd staat en precies doet wat je zocht.

Wil je Tailscale (of een andere manier om je systemen veilig te beheren) voor je eigen bedrijf opzetten? Ik help je er graag doorheen - neem contact op via paul@boomkamponline.nl.