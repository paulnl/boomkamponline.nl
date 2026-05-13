---
layout: post
title: "KI in n8n einsetzen: intelligente Workflows mit künstlicher Intelligenz bauen"
description: "n8n unterstützt nativ KI-Modelle wie OpenAI, Claude und lokale LLMs. Dieser Artikel zeigt, wie Sie KI zu Ihren Automatisierungen hinzufügen — ganz ohne Code."
date: 2025-05-20
category: "Automatisierung"
lang: de
post_id: "ai-in-n8n"
---

n8n ist bereits leistungsstark, wenn Sie Formulare, E-Mails und 
Tabellen miteinander verbinden. Aber die neuesten Updates machen es 
noch interessanter: Sie können jetzt KI-Modelle direkt in Ihren 
Workflows aufrufen. Stellen Sie sich einen Chatbot vor, der 
Kundenfragen beantwortet, eine KI, die eingehende E-Mails 
zusammenfasst, oder ein Tool, das automatisch SEO-Texte schreibt.

Dieser Artikel erklärt, wie das funktioniert und was Sie damit machen 
können.

## Wie funktioniert KI in n8n?

Seit Version 1.0 enthält n8n Knoten für verschiedene KI-Dienste:

- **OpenAI** — ChatGPT, GPT-4, DALL-E für Bilder
- **Anthropic Claude** — Alternative zu OpenAI, stark bei langen Texten
- **Hugging Face** — Open-Source-Modelle, oft kostenlos
- **Lokales LLM** — über Ollama oder LM Studio auf Ihrem eigenen Server

Sie fügen einen Knoten zu einem Workflow hinzu, geben Text ein und 
erhalten eine Antwort. Genau wie jeder andere Knoten in n8n.

## Beispiel 1: Smarte Chatbot für Ihre Website

Stellen Sie sich vor, Sie haben ein Kontaktformular auf Ihrer Website. 
Oft kommen die gleichen Fragen: "Was kostet das?", "Wie lange dauert 
es?", "Können Sie auch ...?"

Mit n8n + KI können Sie einen Workflow bauen, der:

1. Das Formular empfängt
2. Die Frage an ChatGPT sendet
3. Die Antwort per E-Mail an den Kunden zurücksendet

Der KI-Knoten wird mit einem *System-Prompt* konfiguriert:

```
Sie sind ein hilfreicher Assistent für BoomkampOnline.NL.
Beantworten Sie Fragen zu Webentwicklung und KI-Automatisierung.
Wenn Sie die Antwort nicht wissen, schlagen Sie ein kostenloses
Beratungsgespräch vor.
```

Das Ergebnis: Jede Anfrage erhält innerhalb von Sekunden eine 
persönliche Antwort — auch wenn Sie gerade nicht am Schreibtisch sind.

## Beispiel 2: E-Mails automatisch zusammenfassen

Erhalten Sie täglich Dutzende E-Mails? Hängen Sie einen n8n-Workflow 
an Ihren Gmail-Posteingang und lassen Sie KI Zusammenfassungen 
erstellen.

Der Workflow:

1. **Gmail-Trigger** — bei neuer E-Mail
2. **OpenAI-Knoten** — E-Mail in 3 Sätzen zusammenfassen
3. **Telegram-Knoten** — Zusammenfassung an Ihr Telefon senden

Das Tolle daran: Sie sehen auf einen Blick, welche E-Mails wichtig 
sind und welche warten können.

## Wie sieht so ein Workflow aus?

In n8n per Drag & Drop:

```
[Webhook] → [OpenAI] → [Telegram]
```

Kein Code. Jeder Schritt wird über ein Formular konfiguriert. Der 
OpenAI-Knoten hat zwei wichtige Felder:

- **Modell** — `gpt-4o-mini` für schnelle, günstige Antworten
- **Messages** — hier kommen die Eingabe und der System-Prompt hinein

Für einfache Aufgaben reicht `gpt-4o-mini` völlig aus. Es kostet etwa 
€0,001 pro Anfrage. Für komplexere Aufgaben wie das Schreiben langer 
Texte verwenden Sie `gpt-4o`.

## Lokale KI — Datenschutz auf eigenen Servern

Sollen alle Daten auf Ihrem eigenen Server bleiben? Dann betreiben Sie 
ein lokales Modell mit **Ollama**. Installieren Sie es auf Ihrem VPS 
neben n8n, laden Sie ein Modell wie `llama3` oder `mistral`, und Ihr 
n8n-Workflow kommuniziert lokal damit.

Vorteile:
- Keine Datenweitergabe an Dritte
- Keine Kosten pro Anfrage
- Funktioniert auch ohne Internetverbindung

Nachteil: Kostenlose Modelle sind weniger leistungsfähig als GPT-4. 
Für einfache Aufgaben (Übersetzen, Zusammenfassen, Kategorisieren) 
sind sie gut genug. Für komplexe Analysen verwenden Sie besser ein 
Cloud-Modell.

## Wann lohnt es sich?

KI in n8n wird interessant, wenn Sie Folgendes wiedererkennen:

- Sie erhalten viele ähnliche Fragen per E-Mail oder Kontaktformular
- Sie möchten automatisch antworten, aber inhaltlich sinnvoll
- Sie haben einen Prozess, bei dem Texte gelesen oder geschrieben werden
- Sie möchten einen Chatbot auf Ihrer Website ohne teure externe Dienste

## Wann nicht?

Für ganz einfache Aufgaben (Bestätigungsmail senden, Daten speichern) 
brauchen Sie keine KI. Ein normaler n8n-Workflow ist schneller, 
günstiger und zuverlässiger.

## Erste Schritte

Der einfachste Einstieg: Bauen Sie einen Workflow. Zum Beispiel den 
Chatbot für Ihr Kontaktformular. So sehen Sie direkt, was möglich ist, 
ohne wochenlang studieren zu müssen.

Haben Sie eine Idee für einen KI-Workflow, sind sich aber unsicher, 
ob es machbar ist? [Kontaktieren Sie mich](/#contact) — ich prüfe es 
kostenlos mit Ihnen.
