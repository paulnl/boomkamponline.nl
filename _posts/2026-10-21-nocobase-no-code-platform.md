---
layout: post
title: "NocoBase: bouw je eigen bedrijfssysteem, zonder code"
description: "Wat is NocoBase en waar is het goed voor? Zo bouw je met dit open-source no-code platform je eigen CRM, projectbeheer en interne tools — self-hosted en zonder abonnement."
date: 2026-10-21
category: "Automatisering"
lang: nl
post_id: "nocobase-no-code-platform"
image: /images/nocobase-no-code-platform-og.jpg
---

Bijna elk bedrijf heeft een proces dat nergens precies past. Een CRM dat net niet doet wat je wilt. Projecten in een spreadsheet die drie mensen anders beheren. Een inventarisatie in een Excel-bestand van twee jaar oud.

Meestal zijn er dan twee wegen: een abonnement op een SaaS-platform waar je half bij past, of een traject van maanden om iets op maat te laten bouwen. NocoBase is een derde weg — een open-source platform waarmee je die systemen zelf bouwt.

In dit artikel leg ik uit wat NocoBase is, waarvoor ik het zelf gebruik en wat je er praktisch mee kunt doen.

## Wat is NocoBase?

NocoBase is een open-source no-code en low-code platform om bedrijfssystemen mee te bouwen. Het verschil met de meeste no-code tools zit in de volgorde: je begint niet met een formulier of een tabel, maar met het datamodel.

Dat is logisch, want die vragen zijn meestal al bekend. Welke objecten heeft je bedrijf? Klanten, offertes, projecten, tickets, apparaten, medewerkers. En hoe relateert die aan elkaar? Die structuur bepaalt alles wat daarna komt: de pagina's, de rechten, de automatisering. Verandert je proces later, dan pas je het model aan — en blijft de interface kloppen.

Het platform draait op Node.js en TypeScript, met React voor de interface en Koa aan de serverkant. Je host het zelf, bijvoorbeeld in Docker, en de data blijft in je eigen database: PostgreSQL, MySQL of MariaDB.

## Waarvoor is het bedoeld?

Kort gezegd: voor de systemen die je nu met spreadsheets, losse tools of een SaaS-abonnement bijhoudt, maar die net niet goed genoeg werken.

NocoBase is geen kant-en-klaar pakket voor één proces. Het is een platform waar je zelf een systeem op bouwt. Dat past goed bij:

- **CRM en klantbeheer** — klanten, contacten, kansen, offertes en orders in één model
- **Projectbeheer** — taken, uren, mijlpalen en bijlagen per project
- **Helpdesk en tickets** — meldingen, categorieën, SLA's en een klantportaal
- **IT- en hardware-inventarisatie** — apparaten, locaties, licenties en onderhoud
- **Order- en offertebeheer** — van aanvraag tot factuur, inclusief workflow
- **Interne processen** — verlofaanvragen, inkoop, urenregistratie en administratie

## Wat kun je er concreet mee doen?

### 1. Datamodellen bouwen

Maak collecties aan met velden en relaties: één-op-één, één-op-veel en veel-op-veel. Denk aan een klant met meerdere offertes, of een project dat uit meerdere taken bestaat. De data blijft in gewone relationele tabellen staan — geen gesloten ecosysteem, gewoon je eigen database.

### 2. Pagina's en interfaces bouwen

In een WYSIWYG-interface stel je zelf de pagina's samen: tabellen, formulieren, dashboards en detailpagina's. Met één klik wissel je tussen gebruiken en configureren. Dezelfde data kun je op verschillende manieren tonen: een overzicht voor jezelf, een formulier voor de klant, een dashboard voor het management.

### 3. Workflows en automatisering

Een workflow is een keten van triggers, condities en acties. Bijvoorbeeld: zodra een offerte op 'geaccepteerd' staat, maak dan een project aan, stuur een melding naar het team en plan een overleg. Acties kunnen ook een API aanroepen of een e-mail versturen.

### 4. Rechten en rollen

Je bepaalt wie wat mag zien en bewerken, tot op veldniveau. De verkoop ziet de klantgegevens maar niet de kostprijs; de directeur ziet alles, de medewerker alleen zijn eigen taken. Elke wijziging komt in een audit log, dus je kunt achteraf altijd reconstrueren wat er is gebeurd.

### 5. Data uit andere systemen halen

Naast de eigen database kun je externe bronnen aanspreken: SQL Server, Oracle, MySQL, PostgreSQL en REST-API's. Je leest die data uit en bouwt je interface eromheen, zonder die systemen te migreren.

### 6. Koppen aan andere tools

Via de HTTP API, de MCP-server, webhooks en de CLI sluit je NocoBase aan op wat je al draait. Denk aan n8n voor je automatiseringen, of aan Telegram, WhatsApp, Slack en Gmail voor berichten. Ik gebruik zelf juist die route: n8n leest en schrijft in NocoBase, en een AI-agent werkt met dezelfde gegevens.

### 7. AI in het systeem

NocoBase levert een MCP-server, een CLI en skills mee, zodat AI-agents zoals Claude Code, Cursor, Codex en OpenCode het systeem voor je kunnen opzetten en uitbreiden. Daarnaast zijn er AI-employees: digitale collega's die binnen het systeem meedenken, data analyseren en documenten verwerken. Belangrijk detail: die AI werkt binnen dezelfde rechten als een menselijke gebruiker, en elke stap is terug te vinden in de audit log.

### 8. Uitbreiden met plugins

Elke functionaliteit in NocoBase is een plugin, en het platform is opgebouwd als een microkernel. Er is een officieel plugin-ecosysteem, en je kunt je eigen plugins schrijven of laten genereren door een AI-agent.

## Wat kost het?

NocoBase is open source (Apache-2.0) en de community-editie kent geen beperkingen: geen maximum aan gebruikers, records of applicaties. Commerciële licenties worden eenmalig gekocht — geen abonnement, geen prijs per gebruiker en geen prijs per hoeveelheid data.

Dat is een wezenlijk verschil met SaaS. Je hebt eenmalig een investering en daarna draait het op je eigen server.

## Wanneer is NocoBase niets voor jou?

Eerlijk is het: dit is geen tool voor iedereen.

- Heb je één simpel proces en geen plannen? Dan is een spreadsheet of een klein SaaS-abonnement sneller.
- Is er niemand die het datamodel kan beheren? Dan bouw je een systeem dat na een jaar niemand meer begrijpt.
- Zoek je een kant-en-klaar product met support van een groot bedrijf? Dan betaal je voor SaaS, en is NocoBase niet bedoeld als alternatief.

Het is wél een sterk alternatief als je processen uniek zijn, je data bij jezelf wilt houden, of je maandelijkse softwarekosten wilt vermijden.

## Hoe ik het zelf gebruik

Ik draai NocoBase zelf voor de administratie van deze site. De blogposts, de social-statistieken en de inventarisatie van servers en hardware staan in eigen collecties, met de data op mijn eigen server. Wat ik vooral win is niet de software zelf, maar de vrijheid: moet er een koppeling bij, dan maak ik die zelf — met n8n, met een API of met een AI-agent.

Het nadeel wil ik niet verzwergen: je moet er wel tijd in steken. Een datamodel ontwerpen is geen avondje klikken. Maar als dat eenmaal staat, werkt het.

## Zelf aan de slag?

Begin klein. Kies één proces dat je nu met een spreadsheet of losse tool bijhoudt, en modelleer dat. Wordt het te groot, dan stop je ermee — je hebt in een avond een concreet idee gekregen.

Wil je weten of NocoBase bij jouw situatie past, of hulp bij je eerste model? Neem contact op en ik kijk gratis met je door.

---

Bron: [https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/](https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/)
