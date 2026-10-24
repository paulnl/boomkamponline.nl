---
layout: post
title: "NocoBase: baue dein eigenes Geschäftssystem, ohne Code"
description: "Was ist NocoBase und wofür ist es gut? So baust du mit dieser Open-Source-No-Code-Plattform dein eigenes CRM, Projektmanagement und interne Tools — selbst gehostet und ohne Abo."
date: 2026-10-21
category: "Automatisering"
lang: de
post_id: "nocobase-no-code-platform"
image: /images/nocobase-no-code-platform-og-de.jpg
---

Fast jedes Unternehmen hat einen Prozess, der nirgends wirklich passt. Ein CRM, das fast macht, was du willst. Projekte in einer Tabelle, die drei Menschen jeweils anders verwalten. Eine Inventur in einer Excel-Datei von vor zwei Jahren.

Meistens gibt es dann zwei Wege: ein Abo auf eine SaaS-Plattform, zu der du nur halb passt — oder ein Projekt von mehreren Monaten, in dem etwas Individuelles gebaut wird. NocoBase ist ein dritter Weg: eine Open-Source-Plattform, mit der du solche Systeme selbst baust.

In diesem Artikel erkläre ich, was NocoBase ist, wofür ich es selbst nutze und was du damit praktisch machen kannst.

## Was ist NocoBase?

NocoBase ist eine Open-Source-No-Code- und Low-Code-Plattform, mit der du Geschäftssysteme baust. Der Unterschied zu den meisten No-Code-Tools liegt in der Reihenfolge: Du beginnst nicht mit einem Formular oder einer Tabelle, sondern mit dem Datenmodell.

Das ergibt Sinn, denn diese Fragen sind meistens schon beantwortet. Welche Objekte hat dein Unternehmen? Kunden, Angebote, Projekte, Tickets, Geräte, Mitarbeitende. Und wie hängen sie zusammen? Diese Struktur bestimmt alles, was danach kommt: die Seiten, die Berechtigungen, die Automatisierung. Ändert sich dein Prozess später, passt du das Modell an — und die Oberfläche bleibt korrekt.

Die Plattform läuft auf Node.js und TypeScript, mit React für die Oberfläche und Koa serverseitig. Du betreibst sie selbst, zum Beispiel in Docker, und die Daten bleiben in deiner eigenen Datenbank: PostgreSQL, MySQL oder MariaDB.

## Wofür ist sie gedacht?

Kurz gesagt: für die Systeme, die du heute mit Tabellen, losen Werkzeugen oder einem SaaS-Abo pflegst — die aber nicht gut genug funktionieren.

NocoBase ist kein fertiges Paket für einen einzigen Prozess. Es ist eine Plattform, auf der du selbst ein System baust. Das passt zu:

- **CRM und Kundenverwaltung** — Kunden, Kontakte, Chancen, Angebote und Bestellungen in einem Modell
- **Projektmanagement** — Aufgaben, Stunden, Meilensteine und Anhänge pro Projekt
- **Helpdesk und Tickets** — Meldungen, Kategorien, SLAs und ein Kundenportal
- **IT- und Hardware-Inventur** — Geräte, Standorte, Lizenzen und Wartung
- **Angebots- und Auftragsverwaltung** — von der Anfrage bis zur Rechnung, inklusive Workflow
- **Interne Prozesse** — Urlaubsanträge, Einkauf, Zeiterfassung und Verwaltung

## Was kann man damit konkret machen?

### 1. Datenmodelle bauen

Lege Collections mit Feldern und Beziehungen an: eins zu eins, eins zu viele und viele zu viele. Denk an einen Kunden mit mehreren Angeboten oder ein Projekt, das aus mehreren Aufgaben besteht. Die Daten bleiben in normalen relationalen Tabellen — kein geschlossenes Ökosystem, einfach deine eigene Datenbank.

### 2. Seiten und Oberflächen bauen

In einer WYSIWYG-Oberfläche stellst du die Seiten selbst zusammen: Tabellen, Formulare, Dashboards und Detailseiten. Mit einem Klick wechselst du zwischen Benutzen und Konfigurieren. Dieselben Daten kannst du auf verschiedene Weise zeigen: eine Übersicht für dich, ein Formular für den Kunden, ein Dashboard für die Geschäftsführung.

### 3. Workflows und Automatisierung

Ein Workflow ist eine Kette aus Auslösern, Bedingungen und Aktionen. Zum Beispiel: Sobald ein Angebot auf „angenommen" steht, lege ein Projekt an, schicke eine Meldung an das Team und plane ein Gespräch. Aktionen können auch eine API aufrufen oder eine E-Mail versenden.

### 4. Rechte und Rollen

Du legst fest, wer was sehen und bearbeiten darf — bis hinunter zur Feldebene. Der Vertrieb sieht die Kundendaten, aber nicht den Einkaufspreis; die Geschäftsführung sieht alles, der Mitarbeitende nur seine eigenen Aufgaben. Jede Änderung landet im Audit-Log, sodass du später immer rekonstruieren kannst, was passiert ist.

### 5. Daten aus anderen Systemen holen

Neben der eigenen Datenbank greift NocoBase auf externe Quellen zu: SQL Server, Oracle, MySQL, PostgreSQL und REST-APIs. Du liest diese Daten aus und baust deine Oberfläche darum herum, ohne diese Systeme zu migrieren.

### 6. Mit anderen Werkzeugen verbinden

Über HTTP-API, MCP-Server, Webhooks und CLI verbindest du NocoBase mit dem, was ohnehin läuft. Denk an n8n für deine Automatisierungen oder an Telegram, WhatsApp, Slack und Gmail für Nachrichten. Ich nutze selbst genau diesen Weg: n8n liest und schreibt in NocoBase, und ein KI-Agent arbeitet mit denselben Daten.

### 7. KI im System

NocoBase bringt einen MCP-Server, eine CLI und Skills mit, sodass KI-Agenten wie Claude Code, Cursor, Codex und OpenCode das System für dich aufsetzen und erweitern können. Dazu kommen KI-Mitarbeitende: digitale Kollegen, die im System mitdenken, Daten auswerten und Dokumente verarbeiten. Ein wichtiges Detail: Diese KI arbeitet mit denselben Rechten wie ein menschlicher Nutzer, und jeder Schritt ist im Audit-Log nachvollziehbar.

### 8. Mit Plugins erweitern

Jede Funktion in NocoBase ist ein Plugin, und die Plattform ist als Microkernel aufgebaut. Es gibt ein offizielles Plugin-Ökosystem, und du kannst eigene Plugins schreiben — oder sie von einem KI-Agenten erzeugen lassen.

## Was kostet es?

NocoBase ist Open Source (Apache-2.0), und die Community-Edition kennt keine Limits: keine maximale Anzahl an Nutzern, Datensätzen oder Anwendungen. Kommerzielle Lizenzen werden einmalig gekauft — kein Abo, kein Preis pro Nutzer und kein Preis pro Datenmenge.

Das ist ein grundlegender Unterschied zu SaaS. Du machst eine einmalige Investition und danach läuft alles auf deinem eigenen Server.

## Wann ist NocoBase nichts für dich?

Ehrlich gesagt: Das ist nicht das Werkzeug für jeden.

- Hast du einen einfachen Prozess und keine Pläne? Dann ist eine Tabelle oder ein kleines SaaS-Abo schneller.
- Gibt es niemanden, der das Datenmodell betreuen kann? Dann baust du ein System, das nach einem Jahr niemand mehr versteht.
- Suchst du ein fertiges Produkt mit Support eines großen Unternehmens? Dann bezahlst du für SaaS, und NocoBase ist nicht als Alternative gedacht.

Es ist *aber* eine starke Alternative, wenn deine Prozesse einzigartig sind, du deine Daten selbst hosten willst oder monatliche Softwarekosten sparen willst.

## Wie ich es selbst nutze

Ich betreibe NocoBase selbst für die Verwaltung dieser Website. Die Blogbeiträge, die Social-Statistiken und die Inventur von Servern und Hardware liegen in eigenen Collections, mit den Daten auf meinem eigenen Server. Der eigentliche Gewinn ist für mich nicht die Software selbst, sondern die Freiheit: Wenn etwas verknüpft werden muss, baue ich diese Verknüpfung selbst — mit n8n, mit einer API oder mit einem KI-Agenten.

Den Nachteil will ich nicht verschweigen: Man muss Zeit investieren. Ein Datenmodell zu entwerfen ist kein Abend lang Klicken. Aber wenn es einmal steht, funktioniert es.

## Selbst loslegen?

Fang klein an. Wähle einen Prozess, den du heute mit einer Tabelle oder einem losen Werkzeug pflegst, und modelliere ihn. Wird es zu groß, hörst du auf — und hast nach einem Abend eine konkrete Idee.

Willst du wissen, ob NocoBase zu deiner Situation passt, oder brauchst du Hilfe beim ersten Modell? Nimm Kontakt auf und ich schaue mir kostenlos mit dir an.

---

Quelle: [https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/](https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/)
