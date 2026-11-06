---
layout: post
title: "Wie let er op je AI-agent? Over guardrails, kill switch en menselijke controle"
description: "Je AI-agent mag steeds meer zelf doen. Zo houd je controle: duidelijke grenzen, een kill switch, logging en een mens die goedkeurt wat telt."
date: 2026-11-06
category: "AI"
lang: nl
post_id: "ai-agent-guardrails"
image: /images/ai-agent-guardrails-og.jpg
---

Een agent die alleen antwoordt, is een chatbot. Een agent die zelfstandig een offerte verstuurt, een order aanmaakt of een factuur goedkeurt, is iets anders. Vanaf dat moment draagt hij verantwoordelijkheid — en die verantwoordelijkheid blijft bij jou liggen.

Toch zie ik in de praktijk dat de aandacht vooral naar de prompt gaat. Hoe mooier de instructie, hoe beter de agent zou werken. Dat is de verkeerde volgorde. Een agent wordt niet betrouwbaar door een betere prompt, maar door grenzen die ook gelden als de agent iets anders bedenkt dan jij.

In dit artikel leg ik uit hoe je dat praktisch regelt.

## Wat er verandert zodra een agent iets mág doen

Zolang een agent alleen tekst produceert, is een fout vervelend. Zodra hij mag handelen, is een fout een incident: een mail naar de verkeerde klant, een dubbele order, een creditcard die wordt belast.

Er verandert in feite drie dingen tegelijk:

- De agent krijgt **toegang** tot systemen die eerder alleen voor mensen openstonden
- De agent krijgt **snelheid**, dus fouten herhalen zich sneller dan je ze kunt opmerken
- De agent krijgt **context** van buiten, en die context kan gemanipuleerd zijn

Dat laatste is het punt dat het vaakst wordt vergeten. Alles wat je agent leest — een mail, een webpagina, een geüpload document, een CRM-notitie — kan een instructie bevatten. Dat heet prompt injection, en je blokkeert het niet met een strengere systeemprompt.

## Vier soorten beheersing

Beheersing is geen één instelling. Ik denk in vier lagen.

### 1. Wat mag hij doen?

Begin bij de tool: welke systemen mag de agent aanroepen en met welke rechten? Gebruik daarvoor een aparte account met zo weinig rechten als nodig. Geen beheerdersaccount "omdat het makkelijk werkt".

Maak daarnaast onderscheid tussen lezen en schrijven. Een agent die mag lezen, is al nuttig. Schrijven — versturen, boeken, betalen — is een tweede stap, en die verdient eigen drempels.

### 2. Wat mag hij zien?

Hoe minder context je meegeeft, hoe minder er mis kan gaan. Gaat het om een vraag over één order, geef dan die ene order mee, niet de hele klantdatabase. Dat is niet alleen veiliger, het is ook goedkoper.

### 3. Wat mag hij kosten?

Een agent die in een lus vastloopt, verbruikt tokens zonder resultaat. Stel een maximum in per taak en per dag. Ik kom daar in een apart artikel op terug, maar het hoort hier thuis: een agent zonder budgetgrens is een agent zonder rem.

### 4. Wie keurt goed?

De belangrijkste vraag. Niet elke actie hoeft langs een mens, maar bepaal per actie wat de impact is:

- **Laag** — concept maken, gegevens opzoeken, samenvatten: automatisch door
- **Midden** — mail naar een klant, order aanmaken: automatisch, maar met controle achteraf
- **Hoog** — betalingen, contracten, verwijderen, rechten wijzigen: altijd een mens die goedkeurt

Dat laatste heet human-in-the-loop, en het is geen teken van zwakte. Het is het verschil tussen een proefproject en iets wat je durft te laten draaien als je niet achter je scherm zit.

## De kill switch

Elke agent die zelfstandig draait, hoort een stop te hebben die je zonder technicaliteiten kunt indrukken. Niet door een container te stoppen, maar een knop in de workflow: verwerk geen nieuwe taken meer.

Belangrijk detail: die knop moet ook echt werken als de agent bezig is. Test hem één keer per maand, net zoals je een brandmelder test. Een noodstop die je nooit hebt gebruikt, is een aanname.

Grote leveranciers bouwen dit inmiddels standaard in. CrowdStrike kondigde begin november een kill switch aan voor agents, en platforms als n8n kun je met een simpele schakelaar in je workflow hetzelfde laten doen.

## Logging: het bewijs achteraf

Je kunt een agent niet beoordelen op het eindresultaat alleen. Je wilt weten welke stappen hij heeft gezet, welke tools hij heeft aangeroepen, welke context hij heeft gebruikt en hoeveel dat kostte.

Log dus per taak: de input, de gekozen route, de tool-aanroepen, het resultaat en de kosten. Dat is niet alleen voor als het misgaat. Het is ook de enige manier om te zien waar je agent onnodig werk doet — en dus waar je hem kunt verbeteren.

## Zo begin je zonder jezelf klem te zetten

De verleiding is om groot te beginnen, omdat het kan. Ik zou het omdraaien:

1. Kies één taak met een duidelijk eindresultaat
2. Laat de agent eerst alleen lezen en concepten maken
3. Voeg pas schrijfrechten toe als je de concepten een week hebt gecontroleerd
4. Zet een budget en een kill switch neer vóór de eerste keer productie
5. Breid pas uit als je de logs begrijpt

Wie zo werkt, houdt de verantwoordelijkheid waar hij hoort: bij de mens. En dat is precies waarom het wél werkt.

## Klaar om te starten?

Heb je al een agent draaien, of wil je er één bouwen maar weet je niet waar de grenzen moeten liggen? Neem contact op en ik kijk gratis met je door wat veilig is om te automatiseren — en wat nog even niet.

---

Bron: [https://boomkamponline.nl/blog/2026/11/ai-agent-guardrails/](https://boomkamponline.nl/blog/2026/11/ai-agent-guardrails/)
