---
layout: post
title: "Cyberbeveiligungsgesetz für deine Website und deinen Server: 10 Dinge, die du als KMU heute regeln kannst"
description: "Das niederländische Cyberbeveiligungsgesetz gilt seit 15. August 2026. NIS2 für Website und Server: 10 Schritte für KMU."
date: 2026-11-26
category: "Webentwicklung"
lang: de
post_id: "cyberbeveiligingswet-nis2-mkb"
image: /images/cyberbeveiligingswet-nis2-mkb-og-de.jpg
---

Cyberbeveiligungsgesetz: 10 Dinge, die du heute regeln kannst

Ich höre es in den letzten Monaten oft in Gesprächen mit Kunden. Jemand erwähnt das niederländische Cyberbeveiligungsgesetz, und dann kommt die Frage: Gilt das auch für mich? Die Antwort ist meistens: vielleicht. Und wenn es nicht für dich gilt, dann vielleicht für deinen Kunden.

Manchmal höre ich auch: Das ist etwas für große Unternehmen. Oder genau das Gegenteil: Wir brauchen dafür sicher ein ordentliches Budget. Beides stimmt nicht. Ich bin Webentwickler, kein Jurist. Das hier ist keine Rechtsberatung. Was ich kann: dir sagen, was die offiziellen Quellen hergeben, und dir eine Liste mit Maßnahmen geben, die du auf deiner Website und deinem Server umsetzen kannst. Keine großen Geschichten. Einfach machen.

Was das Gesetz ist und wann es in Kraft trat

Das Cyberbeveiligungsgesetz, abgekürzt Cbw, ist die niederländische Umsetzung der EU-Richtlinie NIS2. Es ersetzt das Gesetz zur Sicherheit von Netzwerk- und Informationssystemen, bekannt als Wbni. Der Senat stimmte am 7. Juli 2026 zu. Das Gesetz trat am 15. August 2026 in Kraft, gleichzeitig mit dem Gesetz zur Widerstandsfähigkeit kritischer Einheiten.

Das Gesetz gilt für mehr als 8000 Organisationen in den Niederlanden. Die niederländische Regierung nennt 18 Sektoren, darunter Energie, Verkehr, Gesundheitswesen, digitale Infrastruktur, Verwaltung und Forschung. Ob ein Unternehmen darunter fällt, hängt von drei Dingen ab: vom Sektor, von den erbrachten Leistungen und von der Größe der Organisation.

Für die Organisationen, die darunter fallen, gibt es ein paar feste Pflichten. Du registrierst dich im nationalen Einheitenregister. Du erfasst die Risiken für dein Netzwerk und deine Informationssysteme. Du triffst Maßnahmen, um diese Risiken zu begrenzen. Die Geschäftsführung ist für das Cyberrisikomanagement verantwortlich, und die Mitglieder der Geschäftsführung brauchen genug Wissen, um diese Rolle auszufüllen. Bei einem schwerwiegenden Cybervorfall muss die erste Meldung in den meisten Fällen innerhalb von 24 Stunden beim NCSC eingehen. Es gibt auch Aufsicht und Durchsetzung.

Fällst du unter das Gesetz?

Eine erste Einschätzung kannst du selbst bekommen. Die niederländische Inspektion für digitale Infrastruktur bietet ein Selbstbewertungstool unter regelhulpenvoorbedrijven.nl/NIS-2-NL/ an. Das NCSC bietet unter tools.ncsc.nl/cyberscan/ den CyberVeilig Check für KMU und Selbstständige an. Dieser Check dauert etwa fünf Minuten und liefert dir einen eigenen Aktionsplan.

Das sind Hilfsmittel für einen ersten Eindruck, keine Entscheidungen einer Aufsichtsbehörde. Wenn du weiterhin zweifelst, frag über die offiziellen Kanäle nach.

Die Registrierung blieb übrigens hinter den Erwartungen zurück. Am 14. August 2026, einem Tag nach Inkrafttreten des Gesetzes, meldete Computable, dass etwa die Hälfte der Organisationen die Frist verpasst hatte. Ich erwähne das nicht, um Angst zu machen, sondern weil es zeigt, wie viel noch zu regeln ist.

Warum es dich auch dann betrifft, wenn du nicht darunter fällst

Das ist der Teil, den ich in vielen Artikeln vermisse. Das Gesetz betrifft auch Unternehmen, die nicht direkt darunter fallen. Die niederländische Behörde RVO sagt es ausdrücklich: Auch nicht regulierte Lieferanten können mittelbar mit diesen Anforderungen konfrontiert werden.

Die Überlegung ist einfach. Eine Organisation, die unter das Gesetz fällt, muss die Risiken der Unternehmen erfassen, mit denen sie Geschäfte macht. Das geht aus dem Bericht von NOS vom 17. Oktober 2026 hervor. Ein solcher Auftraggeber kann dann Anforderungen an dich stellen. Nicht, weil du das Gesetz einhalten musst, sondern weil er es muss.

Angenommen, du baust eine Website für eine Einrichtung im Gesundheitswesen oder verwaltest den Server eines Transportunternehmens. Dann kann die Frage kommen, wie du die Zwei-Faktor-Authentifizierung geregelt hast, wie deine Backups funktionieren und was du bei einem Vorfall tust. Das ist die Lieferantenseite von NIS2. Du musst nicht unter das Gesetz fallen, um das ordentlich im Griff zu haben. Es hilft auch einfach, wenn deine eigene Website und dein Server gut aufgestellt sind.

Zehn Dinge, die du heute regeln kannst

Das ist die Liste, die ich selbst bei einem Kunden abarbeiten würde. Keine großen Projekte. Die meisten Punkte sind in einer oder zwei Stunden erledigt, auch wenn danach noch Wartung anfällt.

1. Mach deine Updates
Prüfe das Betriebssystem deines Servers, dein CMS und alle Plugins und Pakete. Alte Versionen sind der einfachste Weg hinein. Ich sehe es immer noch: eine Website, die jahrelang mit einem Theme oder Plugin läuft, für das längst ein Update bereitsteht.

2. Mach Backups und teste eine Wiederherstellung
Ein Backup, das du nie wiederhergestellt hast, ist kein Backup. Bewahre deine Backups getrennt vom Produktionsserver auf und probiere einmal, eine alte Version in einer Testumgebung wiederherzustellen. Warte damit nicht, bis etwas schiefgeht.

3. Schalte die Zwei-Faktor-Authentifizierung ein
Für Hosting, E-Mail, dein CMS und alles, was Zugriff auf deinen Server gibt. Ein Passwort allein reicht nicht. Zwei-Faktor-Authentifizierung ist wahrscheinlich die Maßnahme mit dem größten Nutzen für den geringsten Aufwand.

4. Behalte den Zugriff im Blick
Nutze einen Passwortmanager und teile keine Konten. Schau nach, welche Konten es noch von Menschen gibt, die bereits gegangen sind. Entferne sie. Gib jedem nur die Rechte, die er braucht.

5. Schau in deine Logs
Dein Server protokolliert allerlei Dinge. Die Frage ist, ob du merkst, wenn etwas ungewöhnlich passiert. Sorge dafür, dass du fehlgeschlagene Anmeldeversuche und ungewöhnlichen Datenverkehr sehen kannst. Du brauchst kein aufwendiges Monitoring, um zu erkennen, dass etwas nicht stimmt.

6. Verschlüssele deinen Datenverkehr und deine E-Mail
HTTPS ist inzwischen Standard, aber ich stoße noch auf Websites ohne gültiges Zertifikat. Für E-Mail sind SPF, DKIM und DMARC die drei Einträge, die du haben solltest. Sie helfen anderen zu sehen, ob eine Nachricht wirklich von dir kommt.

7. Schließe Ports und Dienste, die du nicht nutzt
Auf Servern ist oft mehr offen als nötig. Prüfe, welche Ports aus dem Internet erreichbar sind, und schließe, was du nicht brauchst. Serversicherheit beginnt bei den Grundlagen, nicht bei einem komplizierten Paket.

8. Wisse, was du an Lieferanten und Plugins hast
Welche externen Anbieter haben Zugriff auf deine Website oder deinen Server? Welche Plugins nutzt du eigentlich gar nicht mehr? Entferne, was überflüssig ist. Das ist auch der Punkt, an dem du als Lieferant NIS2-Fragen deiner Kunden beantworten kannst.

9. Mach einen Vorfallsplan
Eine Seite reicht. Wen rufst du an, wenn etwas passiert? Wo stehen deine Zugangsdaten? Wer darf entscheiden, die Website kurz vom Netz zu nehmen? Du willst danach nicht suchen müssen, wenn die Website down ist.

10. Schreib auf, was du getan hast
Du brauchst keinen dicken Bericht. Eine kurze Notiz mit Datum und dem, was du geändert hast, hilft dir später enorm. Und wenn ein Kunde oder eine Aufsichtsbehörde fragt, was du getan hast, musst du es nicht aus dem Gedächtnis rekonstruieren.

Wenn etwas passiert

Am 17. Oktober 2026 beschrieb NOS, was bei Albert Heijn nach einem Cybervorfall passierte. Website und App waren nicht erreichbar, online bestellte Lebensmittel konnten nicht geliefert werden und mehrere Verteilzentren standen still. Das Unternehmen musste den Vorfall melden. Ich erwähne das nur als Beispiel für die Folgen und dafür, dass die Meldung Teil der Geschichte ist. Nicht als Spekulation über Ursache oder Bußgelder.

Bei einem schwerwiegenden Vorfall muss die erste Meldung in den meisten Fällen innerhalb von 24 Stunden beim NCSC eingehen. Nach 72 Stunden folgt ein Update. Du kannst also nicht warten, bis du alles genau weißt. Du meldest, was du in diesem Moment weißt, und ergänzt später Details.

Ein praktischer Punkt, der oft schiefgeht: Bei einem Vorfall hat niemand Lust, die Nummer des Hosting-Anbieters oder die Zugriffsrechte auf den Server zu suchen. Das gehört in deinen Vorfallsplan. Siehe Punkt 9.

Keine Rechtsberatung

Ich sage es noch einmal, weil es wichtig ist. Was NIS2 für KMU bedeutet, unterscheidet sich von Organisation zu Organisation. Dieser Artikel ist praktische Information auf Basis öffentlicher Quellen, keine Rechtsberatung. Lass die Frage, ob dein Unternehmen unter das Gesetz fällt, über die offiziellen Kanäle oder durch deinen eigenen Berater beantworten.

Wo fängst du an?

Wenn du das noch nicht getan hast, mach drei Dinge:

- Prüfe mit dem RDI-Selbstbewertungstool, ob das Gesetz für deine Organisation gilt.
- Mach den CyberVeilig Check des NCSC und arbeite den Aktionsplan ab.
- Such aus der Liste oben drei Punkte aus, die du diese Woche regeln kannst.

Der Rest folgt. Du musst es nicht auf einmal perfekt haben, aber du musst wissen, wo du stehst.

Willst du, dass ich mir deine Website oder deinen Server ansehe? Auf [meiner Leistungsseite](/services/) siehst du, was ich mache. Über das [Kontaktformular](/#contact) schickst du mir deine Frage. Ich schaue kostenlos mit dir drüber.

Quellen:

- [Niederländische Regierung, 7. Juli 2026](https://rijksoverheid.nl/actueel/nieuws/2026/07/07/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-15-augustus-2026-van-kracht)
- [Niederländische Regierung, 15. August 2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/08/15/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-vandaag-van-kracht)
- [RVO, geprüft am 21. August 2026](https://www.rvo.nl/nieuws/wat-betekent-cyberbeveiligingswet-voor-uw-bedrijf)
- [Computable, 14. August 2026](https://www.computable.nl/2026/08/14/helft-bedrijven-mist-deadline-registratie-cyberbeveiligingswet-nis2/)
- [NOS, 17. Oktober 2026](https://nos.nl/artikel/2635327-ah-moest-hack-melden-vanwege-nieuwe-cyberwet-verantwoordelijkheid-reikt-verder)
- [NCSC, Cyberbeveiligingswet (NIS2)](https://www.ncsc.nl/cyberbeveiligingswet-nis2)
