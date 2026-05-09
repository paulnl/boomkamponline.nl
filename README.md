# BoomkampOnline.nl

Portfolio website van **Paul Boomkamp** — Freelance webontwikkelaar en AI-consultant.

Gebouwd met **plain HTML + CSS + vanilla JS** (geen framework, geen build step).

## Inhoud

- Hero met introductie
- Diensten (4 kaarten)
- Over mij
- Contactformulier (POST naar n8n webhook)

## Deploy naar GitHub Pages

1. **Push deze repository naar GitHub** (zie hieronder).
2. **GitHub Pages inschakelen:**
   - Ga naar je repository op GitHub.
   - Klik op **Settings** → **Pages**.
   - Bij **Source** selecteer je **Deploy from a branch**.
   - Kies branch: `main` / folder: `/ (root)`.
   - Klik op **Save**.
3. Je site is live op `https://<gebruikersnaam>.github.io/boomkamponline/` (of via een custom domein).

## Deploy naar Cloudflare Pages

1. **Push deze repository naar GitHub**.
2. **Cloudflare Pages instellen:**
   - Ga naar het **Cloudflare Dashboard** → **Pages**.
   - Klik op **Create a project** → **Connect to Git**.
   - Selecteer deze repository.
   - **Build settings:**
     - Framework: **None**
     - Build command: *(leeg laten)*
     - Build output directory: `/`
   - Klik op **Deploy**.
3. Je site wordt automatisch gedeployed en krijgt een `*.pages.dev` URL.

## Contactformulier

Het formulier POST naar: `https://n8n.synapsisai.nl/webhook/boomkamponline-contact`

Bij een foutmelding wordt de bezoeker gevraagd een email te sturen naar `paul@boomkamponline.nl`.

## Aanpassingen doen

Omdat alles in één `index.html` zit, kun je simpelweg het bestand bewerken en de wijzigingen naar GitHub pushen. Bij Cloudflare Pages en GitHub Pages wordt de site automatisch opnieuw gedeployed.
