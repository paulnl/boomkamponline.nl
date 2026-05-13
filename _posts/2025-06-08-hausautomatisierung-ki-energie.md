---
layout: post
title: "Hausautomation und KI: Wie ich meine Stromrechnung mit smarten Lampen und einem Akku gesenkt habe"
description: "Mit einer Kombination aus smarter Beleuchtung, einem Hausakku und einem KI-gesteuerten Energiesystem spare ich hunderte Euro pro Jahr. In diesem Artikel erkläre ich, wie es funktioniert und was es kostet."
date: 2025-06-08
category: "KI"
lang: de
post_id: "huisautomatisering-energie"
---

Vor ein paar Jahren fing ich an, mit Hausautomation zu experimentieren. 
Nicht weil ich der Klügste sein wollte, sondern weil ich es leid war, 
jeden Monat zu viel für Strom zu bezahlen — tagsüber nicht zu Hause 
und abends lief dann alles gleichzeitig.

Inzwischen läuft mein Haus weitgehend automatisch. Die Beleuchtung, 
die Ladestationen, die Wärmepumpe — alles kommuniziert miteinander. 
Und die Rechnung ist deutlich niedriger. So habe ich es gemacht.

## Warum Zeitschaltuhren nicht reichen

Eine Zeitschaltuhr ist besser als nichts, aber sie passt sich nicht 
der Realität an. Was, wenn Sie früher nach Hause kommen? Was, wenn 
die Sonne scheint und Sie gar kein Licht brauchen? Was, wenn der 
Strompreis mitten am Tag negativ ist?

Deshalb nutze ich ein KI-gesteuertes System, das kontinuierlich 
Entscheidungen auf Basis von drei Faktoren trifft:

- **Aktueller Strompreis** (über den EPEX-Day-Ahead-Markt)
- **Wetter** (bewölkt → mehr Innenbeleuchtung nötig)
- **Meine Anwesenheit** (GPS meines Handys)

Das System lernt mit. Nach ein paar Wochen weiß es, wann ich normalerweise 
nach Hause komme, ob ich am Wochenende ausschlafe und ob ich im Urlaub bin.

## Smarte Lampen: das niedrig hängende Obst

Fangen wir mit der Beleuchtung an — dem günstigsten und einfachsten 
Teil der Hausautomation.

Ich verwende Philips Hue im Wohnzimmer und Ikea Tradfri im Rest des 
Hauses. Beide sind offen genug, um sie mit Home Assistant oder n8n 
zu steuern. Der Preisunterschied ist groß — Ikea kostet etwa ein 
Drittel von Hue — aber die Qualität ist völlig in Ordnung.

Was bringt es?

- Lampen gehen nur an, wenn jemand im Raum ist
- Morgens dimmen sie langsam hoch statt grell anzugehen
- Außenbeleuchtung schaltet sich bei Sonnenuntergang ein, nicht zu einer festen Zeit
- Im Sommer bleiben sie öfter aus, weil es länger hell bleibt

**Ersparnis:** etwa €50-80 pro Jahr an direktem Stromverbrauch. Das 
klingt nicht bahnbrechend, aber es ist der einfachste Teil. Die 
wirklichen Einsparungen kommen durch die Kombination mit einem 
Hausakku und dynamischen Stromtarifen.

## Der Hausakku: Strom kaufen, wenn er günstig ist

Hier wird es interessant. Ich habe einen 10-kWh-Hausakku — einen 
Lithium-Ionen-Akku etwa so groß wie eine kleine Waschmaschine. Er 
lädt, wenn Strom günstig (oder negativ) ist, und gibt ihn ab, wenn 
der Preis hoch ist.

Selbst ohne Solaranlage können Sie damit Gewinn machen. Das Prinzip 
ist einfach:

- Um 2:00 Uhr nachts ist Strom am günstigsten → Akku laden
- Um 18:00 Uhr abends ist Strom am teuersten → Akku entladen

Mit einem dynamischen Vertrag (ich bin bei Zonneplan und ANWB) zahle 
ich den Stundenpreis, keinen Festtarif. Der Unterschied zwischen 
Niedrig- und Spitzenlast kann 20 bis 30 Cent pro kWh betragen.

**Rechnung:** 10 kWh × €0,25 Differenz × 300 Tage = **€750 pro Jahr**.

Dazu kommt, dass ich den Akku auch für meinen eigenen Solarstrom 
nutze. An sonnigen Tagen lädt der Akku tagsüber, und abends 
verwende ich diesen Strom statt teurem Netzstrom.

## Die KI, die alles steuert

Ohne Automatisierung müsste ich manuell zwischen Laden und Entladen 
umschalten. Das tue ich nicht — ich vergesse es einfach. Deshalb 
läuft alles über ein KI-gesteuertes System, das ich in n8n gebaut 
habe.

Der Workflow sieht so aus:

1. **Jede Stunde** ruft ein Webhook den aktuellen Strompreis ab
2. Das System prüft die Wettervorhersage (Sonne → mehr Ertrag)
3. Es prüft meinen Kalender (bin ich zu Hause oder nicht?)
4. Basierend auf diesen Daten steuert es den Akku: laden, entladen oder warten

Die Logik ist nicht kompliziert, aber die Kombination der Faktoren 
macht sie leistungsstark. Ein einfaches Beispiel:

> Es ist 14:00 Uhr, der Strompreis liegt bei €0,05/kWh, die Sonne 
> scheint, und ich bin nicht zu Hause. Die KI entscheidet: den Akku 
> in Ruhe lassen und den Solarstrom direkt ins Netz einspeisen. 
> Warum? Weil der Akku bereits voll ist und ich jetzt zu einem 
> angemessenen Preis verkaufen kann.

> Zwei Stunden später, 16:00 Uhr. Der Preis ist auf €0,02 gefallen. 
> Die KI entscheidet: den Akku ein wenig aus dem Netz nachladen, 
> damit er heute Abend während der Spitzenlast maximal entladen kann.

Diese Entscheidungen trifft das System alle paar Minuten neu. Das 
kann ein Mensch nicht manuell verfolgen, aber ein Computer schon.

## Was kostet es?

Die Investition ist nicht nichts, aber sie rechnet sich:

| Komponente | Kosten | Amortisationszeit |
|---|---|---|
| Smarte Lampen (ganzes Haus) | €400 | 4-5 Jahre |
| 10-kWh-Hausakku (installiert) | €4.500 | 5-6 Jahre |
| KI-System (n8n, Server, Sensoren) | €300 | 1-2 Jahre |
| **Gesamt** | **€5.200** | **4-6 Jahre** |

Danach ist es reiner Gewinn. Und der Akku hält mindestens 10 Jahre 
(Garantie), sodass Sie noch 4-6 Jahre zusätzlichen Nutzen haben.

## Möchten Sie das Gleiche tun?

Sie brauchen keinen technischen Hintergrund, um anzufangen. Der 
einfachste Einstieg: Kaufen Sie ein paar smarte Lampen (Ikea Tradfri, 
kein Hub nötig mit Zigbee2MQTT) und schließen Sie einen günstigen 
dynamischen Stromvertrag ab. Tragen Sie die Daten in eine Tabelle ein 
— Sie werden den Unterschied innerhalb eines Monats sehen.

Möchten Sie einen Schritt weiter gehen? Installieren Sie Home 
Assistant auf einem Raspberry Pi oder einem alten Laptop. Das ist das 
Herzstück des Smart Homes. Danach bauen Sie in n8n die KI-Logik, die 
alles steuert.

Haben Sie Fragen oder möchten Sie Beratung, welches System zu Ihnen 
passt? [Kontaktieren Sie mich](/#contact) — ich denke gerne mit.
