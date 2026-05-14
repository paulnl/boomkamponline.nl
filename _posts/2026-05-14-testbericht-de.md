---
layout: post
title: "testbericht"
description: "test bericht"
date: 2026-05-14
category: "Webdevelopment"
lang: de
post_id: "dit is een test"
---

Ich arbeite seit Jahren mit beiden Systemen. WordPress für einfache 
Websites, TYPO3 für größere Projekte. Und ich habe festgestellt: Die 
Wahl wird oft aus Emotion oder Gewohnheit getroffen, nicht nach dem, 
was tatsächlich zum Projekt passt.

Dieser Artikel vergleicht TYPO3 und WordPress in zehn Punkten. 
Ehrlich, ohne ein System besser dastehen zu lassen als das andere. 
Es geht darum, was zu Ihrer Situation passt.

## Überblick

| Aspekt | TYPO3 | WordPress |
|---|---|---|
| **Am besten für** | Mittlere bis große Organisationen | Kleine bis mittlere Websites |
| **Marktanteil** | ~0,3% aller Websites | ~43% aller Websites |
| **Alter** | Seit 2004 (21 Jahre) | Seit 2003 (22 Jahre) |
| **Lizenz** | Open Source (GPL) | Open Source (GPL) |
| **Bekannte Nutzer** | Behörden, Universitäten, Enterprise | Blogs, KMU, Nachrichtenseiten |

## 1. Benutzerfreundlichkeit

Hier gewinnt WordPress deutlich. Die intuitive Oberfläche ist 
innerhalb einer Stunde verständlich. Sie können sofort Seiten 
erstellen, Beiträge schreiben und Bilder hochladen.

| | TYPO3 | WordPress |
|---|---|---|
| **Verwalten lernen** | 2-4 Tage Schulung | 1-2 Stunden selbst entdecken |
| **Neue Seite erstellen** | 3-5 Klicks | 2 Klicks |
| **Backend-Geschwindigkeit** | Manchmal langsam bei viel Inhalt | Schnell, außer bei vielen Plugins |
| **Redakteurs-Einarbeitung** | Schulung nötig | Kaum nötig |

TYPO3 hat eine steilere Lernkurve. Das Backend wirkt anfangs 
überwältigend — Menüs auf der linken Seite, eine Baumstruktur 
von Seiten und viele Optionen. Aber nach ein paar Tagen ist es 
logisch. Es ist für strukturiertes Content-Management gebaut, nicht 
für Ad-hoc-Publishing.

**Ehrliches Urteil:** WordPress gewinnt bei der Anfängerfreundlichkeit. 
TYPO3 ist leistungsfähiger, verlangt aber mehr von Redakteuren.

## 2. Sicherheit

TYPO3 gilt als extrem sicher. Nicht weil der Code besser wäre als 
bei WordPress (beide sind ausgereift), sondern aufgrund einesgrundlegenden Architekturunterschieds.

| | TYPO3 | WordPress |
|---|---|---|
| **Sicherheitsupdates** | Fester monatlicher Zyklus | Bei Schwachstellen, ungeplant |
| **Benutzerrechte** | Pro Seite/Feld/Rolle | Nur globale Rollen (Admin, Editor) |
| **Audit-Trail** | Standardmäßig vorhanden | Plugin erforderlich |
| **Zwei-Faktor-Auth** | Im Core integriert | Plugin erforderlich |
| **Sicherheitslücken (2024)** | ~20 gemeldet | ~200 gemeldet |

WordPress wird häufiger angegriffen, weil es auf ~43% aller 
Websites läuft. Aber das allein erklärt den Unterschied nicht — 
die Plugin-Architektur von WordPress macht es auch schwieriger, 
sicher zu bleiben.

**Ehrliches Urteil:** TYPO3 ist sicherer aus der Box, besonders 
für Organisationen mit Compliance-Anforderungen. WordPress ist für 
die meisten Websites sicher genug, wenn man Plugins begrenzt und 
regelmäßig wartet.

## 3. Geschwindigkeit und Leistung

TYPO3 schneidet bei großen Websites dank fortschrittlichem Caching 
generell besser ab. Aber WordPress kann mit dem richtigen Setup 
auch schnell sein.

| | TYPO3 | WordPress |
|---|---|---|
| **Caching** | Mehrstufig, integriert | Plugin erforderlich (WP Rocket u.a.) |
| **Datenbankabfragen** | Für große Datenmengen optimiert | Kann bei vielen Daten langsam werden |
| **CDN** | Funktioniert mit jedem CDN | Funktioniert mit jedem CDN |
| **Geschätzte Ladezeit (10.000 Seiten)** | 0,3-0,8 Sek. | 1-3 Sek. (ohne Optimierung) |

**Praxisbeispiel:** Die Schuco-Varianto-Site in TYPO3 mit tausenden 
Produkten liefert Seiten innerhalb von 300ms aus. Eine vergleichbare 
WordPress-Site mit WooCommerce und 10.000 Produkten benötigt deutlich 
mehr Optimierung, um unter einer Sekunde zu bleiben.

**Ehrliches Urteil:** TYPO3 gewinnt bei großen Websites. Bei kleinen 
Sites (bis 500 Seiten) ist der Unterschied kaum spürbar.

## 4. Mehrsprachigkeit

Dies ist einer der größten Unterschiede zwischen beiden Systemen.

| | TYPO3 | WordPress |
|---|---|---|| **Mehrsprachigkeit** | Standardmäßig integriert | Plugin erforderlich (WPML, Polylang) |
| **Kosten** | €0 | €50-200/Jahr für WPML |
| **Anzahl Sprachen** | Unbegrenzt | Unbegrenzt |
| **Übersetzungsworkflow** | Ja, umfangreich | Begrenzt, plugin-abhängig |
| **Domain pro Sprache** | Ja, standardmäßig | Ja, mit Plugin |

**Ehrliches Urteil:** TYPO3 gewinnt deutlich bei Mehrsprachigkeit. 
Es ist integriert, kostenlos und funktioniert besser als jedes 
WordPress-Plugin.

## 5. Kosten

Die Kosten einer Website setzen sich aus Entwicklung, Hosting, 
Wartung und Erweiterungen zusammen.

| | TYPO3 | WordPress |
|---|---|---|
| **CMS selbst** | Kostenlos | Kostenlos |
| **Durchschnittliche Entwicklungskosten** | €5.000-20.000 | €1.000-10.000 |
| **Hosting** | €20-100/Monat | €5-30/Monat |
| **Premium-Erweiterungen** | Meist kostenlos | Oft kostenpflichtig (€50-200/Jahr) |
| **TYPO3/WordPress-Spezialist** | €75-125/Stunde | €50-100/Stunde |

TYPO3 ist in der Anschaffung teurer (mehr Entwicklungszeit), kann 
aber günstiger im Betrieb sein (weniger Plugins, stabiler). Für 
eine einfache Informationswebsite ist WordPress deutlich günstiger.

**Ehrliches Urteil:** WordPress ist günstiger für kleine Projekte. 
Bei großen Projekten ist TYPO3 langfristig oft günstiger.

## 6. Skalierbarkeit

TYPO3 ist für Wachstum gebaut. WordPress kann wachsen, stößt aber 
schneller an Grenzen.

| | TYPO3 | WordPress |
|---|---|---|
| **Maximale Seitenanzahl** | Millionen | Zehntausende (dann langsamer) |
| **Multi-Site** | Ja, standardmäßig | Ja (WordPress Multisite) |
| **Enterprise-Integrationen** | Ja (LDAP, SSO, REST API) | Eingeschränkt, oft individuell |
| **Workspaces/Staging** | Standardmäßig | Plugin |

**Praxisbeispiel:** Die Universität zu Köln läuft auf TYPO3 mit 
100.000+ Seiten. Das wäre in WordPress technisch möglich, erfordert 
aber umfangreiche Optimierung und Individualentwicklung.

**Ehrliches Urteil:** TYPO3 gewinnt bei Skalierbarkeit. WordPressist für 90% der Websites ausreichend, aber für die restlichen 10% 
ist TYPO3 die bessere Wahl.

## 7. Flexibilität und Individualisierung

Beide Systeme sind flexibel, aber auf unterschiedliche Weise.

| | TYPO3 | WordPress |
|---|---|---|
| **Templating** | Fluid (eigene Sprache) | PHP-basiert (The Loop) |
| **Inhaltstypen** | Custom Content Elements | Custom Post Types |
| **Verfügbare Erweiterungen** | ~6.000 in TER | ~60.000 im Repository |
| **Individualisierung** | Sehr umfangreich | Sehr umfangreich |
| **Qualität der Erweiterungen** | Allgemein hoch | Sehr unterschiedlich |

WordPress hat eine viel größere Plugin-Bibliothek, aber die Qualität 
schwankt enorm — viele sind veraltet oder schlecht gewartet. 
TYPO3-Erweiterungen gibt es weniger, aber die Qualität ist 
durchschnittlich höher, weil die Community strenger ist.

**Ehrliches Urteil:** WordPress gewinnt bei der Quantität der 
Erweiterungen. TYPO3 gewinnt bei der Qualität der Erweiterungen und 
der Architektur.

## 8. SEO

| | TYPO3 | WordPress |
|---|---|---|
| **SEO-Funktionen** | Gut aus der Box | Ordentlich aus der Box |
| **SEO-Plugins** | Eingeschränkt | Sehr umfangreich (Yoast, RankMath) |
| **Metadaten pro Seite** | Ja, standardmäßig | Ja, mit Plugin |
| **Sitemap** | Ja, standardmäßig | Ja, mit Plugin oder seit WP 5.5 |
| **Schema.org-Markup** | Manuell hinzufügen | Mit Plugin |

**Ehrliches Urteil:** Gleichstand. Mit den richtigen Tools 
schneiden beide Systeme gleich gut ab.

## 9. Community und Support

| | TYPO3 | WordPress |
|---|---|---|
| **Community-Größe** | Klein aber aktiv | Sehr groß |
| **Konferenzen** | Jährlich (TYPO3 Conference) | Hunderte weltweit (WordCamps) |
| **Deutsche Community** | Sehr aktiv | Sehr aktiv |
| **Dokumentation** | Gut, manchmal technisch | Sehr umfangreich |
| **Freiwillige Entwickler** | ~200 Core Contributors | ~600 Core Contributors |

**Ehrliches Urteil:** WordPress hat eine größere Community, wasmehr Tutorials, mehr Hilfe und mehr Entwickler bedeutet. TYPO3 hat 
eine kleinere, aber sehr fachkundige Community.

## 10. Wann wählt man was?

### Wählen Sie WordPress wenn:
- Sie eine einfache Website benötigen (5-50 Seiten)
- Sie die Site selbst ohne technische Kenntnisse verwalten möchten
- Sie einen Blog oder eine einfache Unternehmensseite bauen
- Sie einen Onlineshop möchten (WooCommerce ist ausgereift)
- Sie ein kleines Budget für die Entwicklung haben

### Wählen Sie TYPO3 wenn:
- Ihre Site 200+ Seiten hat
- Sie mehrere Sprachen benötigen
- Sie im Team an Inhalten arbeiten
- Sie hohe Sicherheitsanforderungen haben
- Sie komplexe Benutzerrechte benötigen
- Sie eine Site bauen, die Jahre ohne Neubau halten soll

### Wählen Sie keines von beiden wenn:
- Sie eine einfache 1-Seiten-Landingpage brauchen → nutzen Sie Webflow 
  oder ein HTML-Template
- Sie einen Onlineshop mit 100.000+ Produkten wollen → erwägen Sie 
  Magento oder Shopware
- Sie eine Webanwendung bauen (kein CMS) → wählen Sie ein Framework 
  wie Laravel, Django oder Next.js

## Fazit

WordPress und TYPO3 sind beide ausgezeichnete Systeme, aber für 
unterschiedliche Zwecke. Es ist wie die Wahl zwischen einem Auto 
und einem Lastwagen: beide fahren, aber Sie ziehen nicht mit einem 
Fiat 500 um und Sie fahren nicht täglich mit einem Scania zur Arbeit.

Wichtig ist, dass Sie nach Ihren tatsächlichen Bedürfnissen wählen, 
nicht nach dem, was gerade populär ist. Lassen Sie sich nicht von 
Diskussionen darüber verrückt machen, welches CMS "besser" ist — es 
geht darum, was zu Ihrem Projekt passt.

Sie brauchen Beratung, welches System zu Ihrem Projekt passt? 
[Kontaktieren Sie mich](/#contact) — ich denke gerne mit Ihnen.
