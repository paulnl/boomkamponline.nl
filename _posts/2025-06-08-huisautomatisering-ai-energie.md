---
layout: post
title: "Huisautomatisering en AI: hoe ik mijn energierekening heb verlaagd met slimme lampen en een accu"
description: "Met een combinatie van slimme verlichting, een thuisaccu en een AI-gestuurd energiesysteem bespaar ik honderden euro's per jaar. In dit artikel deel ik hoe het werkt en wat het kost."
date: 2025-06-08
category: "AI"
lang: nl
---

Een paar jaar geleden begon ik te experimenteren met huisautomatisering. 
Niet omdat ik de slimste wilde zijn, maar omdat ik het zat was om elke 
maand te veel te betalen voor stroom terwijl ik overdag niet thuis was 
en 's avonds alles tegelijk aanstond.

Inmiddels draait mijn huis grotendeels automatisch. De verlichting, de 
laadpalen, de warmtepomp — alles communiceert met elkaar. En de rekening 
is fors lager. Dit is hoe ik het heb aangepakt.

## Waarom standaard tijdschakelaars niet genoeg zijn

Een tijdschakelaar is beter dan niets, maar hij houdt geen rekening met 
de realiteit. Wat als je een keer eerder thuis bent? Of als de zon 
onverwacht schijnt en je de lampen helemaal niet nodig hebt? Wat als de 
stroomprijs negatief is midden op de dag?

Daarom gebruik ik een AI-gestuurd systeem dat continu beslissingen neemt 
op basis van drie dingen:

- **De actuele stroomprijs** (via de EPEX-dagvooruitmarkt)
- **Het weer** (bewolking → meer binnenverlichting nodig)
- **Mijn aanwezigheid** (via gps van mijn telefoon)

Het systeem leert ook. Na een paar weken weet het hoe laat ik meestal 
thuiskom, of ik in het weekend uitslaap, en of ik op vakantie ben.

## Slimme lampen: het laaghangende fruit

Laten we bij het begin beginnen: verlichting. Het goedkoopste en 
makkelijkste onderdeel van huisautomatisering.

Ik gebruik Philips Hue in de woonkamer en Ikea Tradfri in de rest van 
het huis. Beide zijn open genoeg om met Home Assistant of n8n aan te 
sturen. Het verschil in prijs is groot — Ikea is een derde van Hue — 
maar de kwaliteit is prima.

Wat levert het op?

- Lampen gaan alleen aan als ik in de kamer ben
- 's Ochtends dimmen ze langzaam in plaats van fel aan te knallen
- Buitenverlichting gaat aan op basis van zonsondergang, niet op een vaste tijd
- In de zomer blijven ze vaker uit omdat het lang licht is

**Besparing:** reken op zo'n €50-80 per jaar aan directe stroombesparing. 
Dat klinkt niet baanbrekend, maar het is wel het makkelijkste onderdeel. 
Het echte werk zit in de combinatie met een thuisaccu en dynamische 
energietarieven.

## De thuisaccu: stroom kopen als het goedkoop is

Dit is waar het interessant wordt. Ik heb een thuisaccu van 10 kWh 
hangen — een lithium-ion accu van ongeveer zo groot als een kleine 
wasmachine. Die laadt op als de stroom goedkoop (of negatief) is en 
levert terug als de prijs hoog is.

Zelfs zonder zonnepanelen kun je hier winst mee maken. Het principe 
is simpel:

- Om 02:00 's nachts is de stroom het goedkoopst → accu laden
- Om 18:00 's avonds is de stroom het duurst → accu ontladen

Met een dynamisch contract (ik zit bij Zonneplan en Anwb) betaal ik de 
uurprijs, geen vast tarief. Het verschil tussen dal en piek kan 
zomaar 20 tot 30 cent per kWh zijn.

**Rekensom:** 10 kWh × €0,25 verschil × 300 dagen = **€750 per jaar**.

Daar komt nog bij dat ik de accu ook gebruik om mijn eigen zonnestroom 
op te slaan. Op zonnige dagen laadt de accu overdag op, en 's avonds 
gebruik ik die stroom in plaats van dure netstroom.

## De AI die alles regelt

Zonder automatisering zou ik handmatig moeten schakelen tussen laden en 
ontladen. Dat doe ik niet — ik vergeet het gewoon. Daarom draait alles 
via een AI-gestuurd systeem dat ik in n8n heb gebouwd.

De workflow ziet er zo uit:

1. **Elk uur** haalt een webhook de actuele stroomprijs op
2. Het systeem checkt de weersverwachting (zon → extra opbrengst)
3. Het checkt mijn agenda (ben ik thuis of niet?)
4. Op basis van deze data stuurt het de accu aan: laden, ontladen, of wachten

De logica is niet ingewikkeld, maar de combinatie van factoren maakt 
het krachtig. Een simpel voorbeeld:

> Het is 14:00, de stroomprijs is €0,05 per kWh, de zon schijnt, en 
> ik ben niet thuis. De AI besluit: de accu laten staan en de 
> zonnepanelen direct aan het net laten leveren. Waarom? Omdat de 
> accu al vol is en ik beter nu kan terugleveren tegen een redelijke 
> prijs.

> Twee uur later, 16:00. De prijs is gedaald naar €0,02. De AI 
> besluit: een klein beetje bijladen uit het net, zodat de accu 
> vanavond maximaal kan ontladen tijdens de piek.

Dit soort beslissingen neemt het systeem elke paar minuten opnieuw. 
Dat kan een mens niet handmatig bijhouden, maar een computer wel.

## Wat kost het?

De investering is niet niks, maar hij verdient zich terug. Ruwweg:

| Onderdeel | Kosten | Terugverdientijd |
|---|---|---|
| Slimme lampen (hele huis) | €400 | 4-5 jaar |
| Thuisaccu 10 kWh (geïnstalleerd) | €4.500 | 5-6 jaar |
| AI-systeem (n8n, server, sensoren) | €300 | 1-2 jaar |
| **Totaal** | **€5.200** | **4-6 jaar** |

Na die tijd is het pure winst. En de accu gaat minimaal 10 jaar mee 
(garantie), dus je hebt nog 4-6 jaar extra profijt.

## Wil je hetzelfde doen?

Je hebt geen technische achtergrond nodig om te beginnen. Het 
makkelijkste instappunt: koop een paar slimme lampen (Ikea Tradfri, 
geen hub nodig als je Zigbee2MQTT gebruikt) en een goedkoop 
dynamisch energiecontract. Zet de data in een spreadsheet en je ziet 
binnen een maand het verschil.

Wil je een stap verder? Installeer Home Assistant op een Raspberry Pi 
of een oude laptop. Dat is het kloppend hart van de slimme woning. 
Daarna bouw je in n8n de AI-logica die alles aanstuurt.

Heb je vragen of wil je advies over welk systeem bij jou past? 
[Neem contact op](/#contact) — ik denk graag mee.
