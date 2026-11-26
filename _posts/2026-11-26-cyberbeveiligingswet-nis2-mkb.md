---
layout: post
title: "Cyberbeveiligingswet voor je website en server: 10 dingen die je als mkb'er vandaag kunt regelen"
description: "De Cyberbeveiligingswet geldt sinds 15 augustus 2026. Wat betekent NIS2 voor jouw website en server? 10 praktische stappen voor mkb'ers."
date: 2026-11-26
category: "Webdevelopment"
lang: nl
post_id: "cyberbeveiligingswet-nis2-mkb"
image: /images/cyberbeveiligingswet-nis2-mkb-og.jpg
---

Cyberbeveiligingswet: 10 dingen die je vandaag kunt regelen

Ik hoor het de laatste maanden vaak in gesprekken met klanten. Iemand noemt de Cyberbeveiligingswet, en dan volgt de vraag: geldt dat ook voor mij? Het antwoord is meestal: misschien wel. En als het niet voor jou geldt, dan misschien voor je klant.

Soms hoor ik ook: dat is iets voor grote bedrijven. Of juist: we hebben vast een flink budget nodig. Beide kloppen niet. Ik ben webontwikkelaar, geen jurist. Dit is geen juridisch advies. Wat ik wel kan: je vertellen wat de officiële bronnen zeggen, en je een lijst geven met maatregelen die je op je website en server kunt nemen. Geen grote verhalen. Gewoon doen.

Wat de wet is en wanneer hij ingaat

De Cyberbeveiligingswet, afgekort Cbw, is de Nederlandse uitwerking van de Europese NIS2-richtlijn. Hij vervangt de Wet beveiliging netwerk- en informatiesystemen, beter bekend als Wbni. De Eerste Kamer ging op 7 juli 2026 akkoord. Op 15 augustus 2026 trad de wet in werking. Dat gebeurde tegelijk met de Wet weerbaarheid kritieke entiteiten, kortweg Wwke.

De wet geldt voor ruim 8000 organisaties in Nederland. De Rijksoverheid noemt 18 sectoren, waaronder energie, vervoer, gezondheidszorg, digitale infrastructuur, overheid en onderzoek. Of een bedrijf eronder valt, hangt af van drie dingen: de sector, de diensten die het levert en de grootte van de organisatie.

Voor de organisaties die eronder vallen, zijn er een paar vaste verplichtingen. Je registreert je in het nationale entiteitenregister. Je brengt de risico's voor je netwerk en informatiesystemen in kaart. Je neemt maatregelen om die risico's te beperken. Het bestuur is verantwoordelijk voor cyberrisicobeheersing, en bestuurders moeten genoeg kennis hebben om die rol te vervullen. Bij een significant cyberincident moet de eerste melding in de meeste gevallen binnen 24 uur bij het NCSC zijn. Er is ook toezicht en handhaving.

Val jij onder de wet?

Je kunt zelf een eerste indicatie krijgen. De Rijksinspectie Digitale Infrastructuur heeft een zelfevaluatietool op regelhulpenvoorbedrijven.nl/NIS-2-NL/. Het NCSC biedt de CyberVeilig Check voor mkb en zzp op tools.ncsc.nl/cyberscan/. Die check duurt ongeveer vijf minuten en geeft je een eigen actieplan.

Dat zijn hulpmiddelen voor een eerste indruk, geen uitspraken van een toezichthouder. Blijf je twijfelen, vraag het dan na via de officiële kanalen.

De registratie bleef overigens achter. Computable schreef op 14 augustus 2026, een dag nadat de wet inging, dat ongeveer de helft van de organisaties de deadline had gemist. Ik noem dat niet om te schrikken, maar omdat het laat zien hoeveel er nog te regelen valt.

Waarom je het ook merkt als je niet onder de wet valt

Dit is het deel dat ik in veel artikelen mis. De wet raakt ook bedrijven die er niet direct onder vallen. De RVO zegt het met zoveel woorden: ook niet-gereguleerde leveranciers kunnen indirect met de eisen te maken krijgen.

De redenering is simpel. Een organisatie die wél onder de wet valt, moet de risico's in kaart brengen van de bedrijven waarmee het zaken doet. Dat blijkt uit het NOS-verslag van 17 oktober 2026. Zo'n opdrachtgever kan daar eisen aan stellen. Niet omdat jij de wet moet naleven, maar omdat hij dat moet.

Stel je bouwt een website voor een zorginstelling of je beheert de server van een vervoersbedrijf. Dan kan de vraag komen hoe je het met tweestapsverificatie hebt geregeld, hoe je back-ups werken en wat je doet bij een incident. Dat is de toeleverancierskant van NIS2. Je hoeft niet onder de wet te vallen om dat netjes op orde te hebben. Het helpt ook gewoon als je eigen website en server goed zitten.

Tien dingen die je vandaag kunt regelen

Dit is de lijst die ik zelf zou afwerken bij een klant. Geen grote projecten. De meeste punten zijn in een uur of twee te regelen, ook al heb je er daarna nog onderhoud aan.

1. Doe je updates
Controleer het besturingssysteem van je server, je CMS en alle plugins en pakketten. Oude versies zijn de makkelijkste ingang. Ik zie het nog steeds: een website die jarenlang draait op een theme of plugin waarvoor al lang een update klaarstaat.

2. Maak back-ups en test het herstel
Een back-up waar je nooit een herstel van hebt gedaan, is geen back-up. Zet je back-ups ergens apart van de productieserver en probeer eens een oude versie terug te zetten op een testomgeving. Doe dat niet pas als het misgaat.

3. Zet tweestapsverificatie aan
Voor hosting, e-mail, je CMS en alles wat toegang geeft tot je server. Een wachtwoord alleen is te weinig. Tweestapsverificatie is misschien wel de maatregel met de meeste winst voor de minste moeite.

4. Houd greep op toegang
Gebruik een wachtwoordmanager en deel geen accounts. Kijk eens welke accounts er nog bestaan van mensen die al weg zijn. Verwijder ze. Geef iedereen alleen de rechten die hij nodig heeft.

5. Kijk naar je logs
Je server logt van alles. De vraag is of jij het ziet als er iets vreemds gebeurt. Zorg dat je inzicht hebt in mislukte inlogpogingen en ongebruikelijk verkeer. Je hoeft geen uitgebreide monitoring te bouwen om te zien dat er iets niet klopt.

6. Versleutel je verkeer en je e-mail
HTTPS is inmiddels normaal, maar ik kom nog sites tegen zonder geldig certificaat. Voor e-mail zijn SPF, DKIM en DMARC de drie records die je behoort te hebben. Ze helpen anderen te zien of een mail echt van jou komt.

7. Sluit poorten en diensten die je niet gebruikt
Op een server staat vaak meer open dan nodig. Kijk welke poorten bereikbaar zijn vanaf het internet en zet dicht wat je niet gebruikt. Server beveiliging begint bij de basis, niet bij een ingewikkeld pakket.

8. Weet wat je aan leveranciers en plugins hebt
Welke externe partijen hebben toegang tot je site of server? Welke plugins gebruik je eigenlijk niet meer? Verwijder wat overbodig is. Dit is ook het punt waarop je als toeleverancier NIS2-vragen van je klanten kunt beantwoorden.

9. Maak een incidentplan
Eén pagina is genoeg. Wie bel je als er iets gebeurt? Waar staan je inloggegevens? Wie mag besluiten om de site even uit te zetten? Je wilt daar niet naar zoeken op het moment dat de site down is.

10. Schrijf op wat je hebt gedaan
Je hoeft geen dik rapport te schrijven. Een korte notitie met datum en wat je hebt aangepast, helpt je later enorm. En als een klant of toezichthouder vraagt wat je hebt gedaan, hoef je het niet uit je hoofd te halen.

Als er iets gebeurt

Op 17 oktober 2026 beschreef de NOS wat er speelde bij Albert Heijn na een cyberincident. Website en app waren onbereikbaar, online boodschappen konden niet worden bezorgd en een aantal distributiecentra lag stil. Het bedrijf moest het incident melden. Ik noem dit alleen als voorbeeld van de gevolgen en van het feit dat melden onderdeel is van het verhaal. Niet als speculatie over oorzaak of boetes.

Bij een significant incident moet de eerste melding in de meeste gevallen binnen 24 uur bij het NCSC zijn. Na 72 uur volgt een update. Je kunt dus niet wachten tot je alles exact weet. Je meldt wat je op dat moment weet en vult later aan.

Een praktisch punt dat ik vaak zie misgaan: bij een incident heeft niemand zin om te zoeken naar het nummer van de hostingpartij of naar wie er toegang heeft tot de server. Dat staat dus in je incidentplan. Zie punt 9.

Geen juridisch advies

Ik zeg het nog een keer, want het is belangrijk. Wat NIS2 voor het mkb betekent, verschilt per organisatie. Dit artikel is praktische informatie op basis van openbare bronnen, geen juridisch advies. Laat de vraag of jouw bedrijf onder de wet valt, beantwoorden door de officiële kanalen of door je eigen adviseur.

Waar begin je

Als je dit nog niet hebt gedaan, doe dan drie dingen:

- Check met de RDI-zelftest of de wet voor jouw organisatie geldt.
- Doe de CyberVeilig Check van het NCSC en werk het actieplan af.
- Kies uit de lijst hierboven de drie punten die je deze week kunt regelen.

De rest volgt. Je hoeft het niet in één keer goed te hebben, maar je moet wel weten waar je staat.

Wil je dat ik met je meekijk naar je website of server? Op [mijn dienstenpagina](/services/) zie je wat ik doe. Via het [contactformulier](/#contact) stuur je me je vraag. Ik kijk gratis met je mee.

Bronnen:

- [Rijksoverheid, 7 juli 2026](https://rijksoverheid.nl/actueel/nieuws/2026/07/07/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-15-augustus-2026-van-kracht)
- [Rijksoverheid, 15 augustus 2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/08/15/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-vandaag-van-kracht)
- [RVO, gecontroleerd op 21 augustus 2026](https://www.rvo.nl/nieuws/wat-betekent-cyberbeveiligingswet-voor-uw-bedrijf)
- [Computable, 14 augustus 2026](https://www.computable.nl/2026/08/14/helft-bedrijven-mist-deadline-registratie-cyberbeveiligingswet-nis2/)
- [NOS, 17 oktober 2026](https://nos.nl/artikel/2635327-ah-moest-hack-melden-vanwege-nieuwe-cyberwet-verantwoordelijkheid-reikt-verder)
- [NCSC, Cyberbeveiligingswet (NIS2)](https://www.ncsc.nl/cyberbeveiligingswet-nis2)
