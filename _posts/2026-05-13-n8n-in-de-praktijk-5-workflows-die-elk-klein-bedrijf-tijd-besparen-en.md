---
layout: post
title: "n8n in de praktijk: 5 workflows die elk klein bedrijf tijd besparen"
description: "Verdieping op 'wat is n8n' met concrete use cases: formulier → CRM → bedankmail, factuur → boekhouding, social media planning."
date: 2026-05-13
category: "Automatisering"
lang: en
post_id: "n8n-workflows"
---

You've probably heard of n8n, or read my earlier article about it. But what can you really do with it in practice? In this article, I'll share five workflows I've built for clients. No theory, just working examples.

n8n is an automation tool that connects apps and services without code. Think: when a form is submitted, send an email and add the data to a spreadsheet. Without programming.

## Workflow 1: Contact form to CRM

This is the most requested workflow and the simplest. Ideal for getting started with n8n.

How it works:
1. A visitor fills out a contact form on your website
2. n8n catches the webhook
3. The data is sent to your CRM (e.g., HubSpot, ActiveCampaign)
4. The customer receives an automatic confirmation
5. You get a notification in Telegram or Slack

## Workflow 2: Invoice to accounting

Receive invoices by email? Let n8n process them.

How it works:
1. n8n reads your email inbox daily
2. When an invoice arrives, the data is extracted
3. The data is sent to your accounting package
4. The invoice PDF is stored in Google Drive or Dropbox

## Getting started

1. Install n8n (self-hosted or cloud)
2. Start with workflow 1 (contact form to CRM)
3. Test, improve, and expand
4. Build a second workflow when the first works well

Need help setting up an n8n workflow? Get in touch.
