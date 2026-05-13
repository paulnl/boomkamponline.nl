---
layout: post
title: "AI inzetten binnen n8n: zo bouw je slimme workflows met kunstmatige intelligentie"
description: "n8n heeft ingebouwde ondersteuning voor AI-modellen zoals OpenAI, Claude en lokale LLMs. In dit artikel laat ik zien hoe je AI kunt toevoegen aan je automatiseringen — zonder een regel code."
date: 2025-05-20
category: "Automatisering"
lang: nl
post_id: "ai-in-n8n"
---

n8n is al krachtig als je er formulieren, e-mails en spreadsheets mee koppelt. 
Maar de laatste update maakt het nóg interessanter: je kunt nu AI-modellen 
direct in je workflows aanroepen. Denk aan een chatbot die klantvragen 
beantwoordt, een AI die inkomende e-mails samenvat, of een tool die 
automatisch SEO-teksten schrijft.

In dit artikel leg ik uit hoe dat werkt en wat je ermee kunt doen.

## Hoe werkt AI binnen n8n?

n8n heeft sinds versie 1.0 een set knooppunten (nodes) waarmee je 
verschillende AI-diensten kunt aanroepen:

- **OpenAI** — ChatGPT, GPT-4, DALL-E voor afbeeldingen
- **Anthropic Claude** — alternatief voor OpenAI, sterk in lange teksten
- **Hugging Face** — open-source modellen, vaak gratis  
- **Lokale LLM** — via Ollama of LM Studio op je eigen server

Je voegt zo'n node toe aan een workflow, stopt er tekst in, en krijgt een 
antwoord terug. Net als elke andere node in n8n.

## Praktijkvoorbeeld 1: Slimme chatbot op je website

Stel, je hebt een contactformulier op je site. Vaak krijg je dezelfde 
vragen: "Wat kost het?", "Hoelang duurt het?", "Kan je ook ...?"

Met n8n + AI kun je een workflow bouwen die:

1. Het formulier ontvangt
2. De vraag doorstuurt naar ChatGPT
3. Het antwoord per e-mail terugstuurt naar de klant

De AI-node instrueer je met een zogeheten *system prompt* — een instructie 
die bepaalt hoe de AI zich gedraagt:

```
Je bent een behulpzame assistent voor BoomkampOnline.NL.
Beantwoord vragen over webdevelopment en AI automatisering.
Als je het antwoord niet weet, verwijs dan naar een gratis kennismaking.
```

Het resultaat: elke aanvraag krijgt binnen seconden een persoonlijk antwoord, 
ook als je zelf niet achter je scherm zit.

## Praktijkvoorbeeld 2: E-mails automatisch samenvatten

Krijg je dagelijks tientallen e-mails? Hang een n8n-workflow aan je 
Gmail-binnenkomst en laat AI een samenvatting maken.

De workflow:

1. **Gmail Trigger** — bij nieuwe e-mail
2. **OpenAI Node** — vat de e-mail samen in 3 zinnen
3. **Telegram Node** — stuur de samenvatting naar je telefoon

Het mooie is dat je hiermee in één oogopslag ziet welke e-mails belangrijk 
zijn en welke kunnen wachten.

## Hoe ziet zo'n workflow eruit?

In n8n is het visueel slepen:

```
[Webhook] → [OpenAI] → [Telegram]
```

Geen code. Je configureert elke stap met een formulier. De OpenAI-node heeft 
twee velden die ertoe doen:

- **Model** — kies `gpt-4o-mini` voor snelle, goedkope antwoorden
- **Messages** — hier stop je de input en de systeeminstructie

Voor een simpele taak (vraag beantwoorden, samenvatten) is `gpt-4o-mini` 
meer dan genoeg. Het kost ongeveer €0,001 per aanvraag. Voor complexere 
taken zoals het schrijven van lange teksten gebruik je `gpt-4o`.

## Lokale AI — privacy op eigen server

Wil je dat alle gegevens op je eigen server blijven? Dan kun je een lokaal 
model draaien met **Ollama**. Je installeert het op je VPS naast n8n, laadt 
een model zoals `llama3` of `mistral`, en je n8n-workflow praat er lokaal 
mee.

Voordelen:
- Geen datalek naar externe partijen  
- Geen kosten per aanvraag
- Werkt ook zonder internetverbinding

Nadeel: de gratis modellen zijn minder slim dan GPT-4. Voor simpele taken 
(vertalen, samenvatten, categoriseren) zijn ze prima. Voor complexe 
redeneringen gebruik je beter een cloudmodel.

## Wanneer is het interessant?

AI binnen n8n wordt interessant zodra je dit herkent:

- Je krijgt veel dezelfde vragen binnen via e-mail of contactformulier
- Je wilt berichten automatisch laten beantwoorden, maar wel inhoudelijk
- Je hebt een proces waarin teksten gelezen, beoordeeld of geschreven worden
- Je wilt een chatbot op je site zonder dure externe diensten

## Wanneer niet?

Voor heel eenvoudige taken (stuur een bevestigingsmail, sla data op in een 
sheet) heb je geen AI nodig. Een gewone n8n-workflow is sneller, 
goedkoper en betrouwbaarder.

## Aan de slag

De makkelijkste manier om te beginnen: bouw één workflow. Bijvoorbeeld de 
chatbot voor je contactformulier. Daarmee zie je direct wat er mogelijk is, 
zonder dat je eerst weken hoeft te studeren.

Heb je zelf een idee voor een AI-workflow maar weet je niet of het haalbaar 
is? [Neem contact op](/#contact) — ik kijk het gratis met je door.
