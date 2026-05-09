Build a modern single-page portfolio website for Paul Boomkamp — Dutch freelance web developer and AI consultant — at boomkamponline.nl.

## Tech stack
- Plain HTML + CSS + vanilla JS (no framework)
- Zero build step — deploy directly to GitHub Pages or Cloudflare Pages
- Single index.html file with embedded CSS and JS
- Contact form POSTs to n8n webhook: https://n8n.synapsisai.nl/webhook/boomkamponline-contact (use fetch + JSON body, no page reload)

## Brand
- Primary color: #FF6B00 (orange)
- Secondary: #1A1A2E (dark charcoal)
- Font: Inter (Google Fonts)
- Logo text: "BoomkampOnline" + ".NL" badge in orange

## Sections (single page, smooth scroll)
1. Hero — name, tagline ("Websites. SEO. AI. Beschikbaar als ZZP'er."), CTA button "Neem contact op"
2. Diensten — 4 cards:
   - Website bouwen (van scratch of via WordPress/TYPO3)
   - SEO optimalisatie
   - AI advies & implementatie
   - ZZP verhuur (programmeren, helpdesk, afspraken ondersteuning)
3. Over mij — kort persoonlijk stukje, foto placeholder
4. Contact — formulier met velden: Naam, Email, Telefoon (optioneel), Dienst (dropdown met de 4 diensten), Bericht — POST als JSON naar n8n webhook, toon succes/fout melding inline

## Requirements
- Fully responsive (mobile-first)
- Accessible (semantic HTML, aria labels)
- Dutch language throughout
- Subtle scroll animations (Intersection Observer, no library)
- No cookies, no tracking, no analytics
- Favicon: orange "B" letter on dark background
- Meta tags: og:title, og:description, og:image placeholder
- Footer: © 2025 Paul Boomkamp · paul@boomkamponline.nl · boomkamponline.nl

## File structure
index.html   ← everything in one file
README.md    ← deploy instructions for GitHub Pages and Cloudflare Pages

Output the complete index.html and README.md.
