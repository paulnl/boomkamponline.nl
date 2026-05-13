---
layout: post
title: "Using AI within n8n: how to build smart workflows with artificial intelligence"
description: "n8n has built-in support for AI models like OpenAI, Claude, and local LLMs. This article shows how to add AI to your automations — without writing a single line of code."
date: 2025-05-20
category: "Automation"
lang: en
post_id: "ai-in-n8n"
---

n8n is already powerful when you connect forms, emails, and spreadsheets. 
But the latest updates make it even more interesting: you can now call AI 
models directly in your workflows. Think of a chatbot answering customer 
questions, an AI summarizing incoming emails, or a tool that automatically 
writes SEO-friendly texts.

This article explains how it works and what you can do with it.

## How does AI work inside n8n?

Since version 1.0, n8n includes a set of nodes that connect to various 
AI services:

- **OpenAI** — ChatGPT, GPT-4, DALL-E for images
- **Anthropic Claude** — an alternative to OpenAI, great for long texts
- **Hugging Face** — open-source models, often free
- **Local LLM** — via Ollama or LM Studio on your own server

You add a node to a workflow, feed it text, and get a response back. 
Just like any other node in n8n.

## Example 1: Smart chatbot for your website

Say you have a contact form on your site. You often get the same 
questions: "How much does it cost?", "How long does it take?", 
"Can you also...?"

With n8n + AI, you can build a workflow that:

1. Receives the form submission
2. Sends the question to ChatGPT
3. Replies to the customer by email

You configure the AI node with a *system prompt* — an instruction that 
determines how the AI behaves:

```
You are a helpful assistant for BoomkampOnline.NL.
Answer questions about web development and AI automation.
If you don't know the answer, suggest a free consultation.
```

The result: every inquiry gets a personal answer within seconds, even 
when you're not at your desk.

## Example 2: Automatically summarizing emails

Do you receive dozens of emails daily? Hook up an n8n workflow to your 
Gmail inbox and let AI summarize them.

The workflow:

1. **Gmail Trigger** — on new email
2. **OpenAI Node** — summarize the email in 3 sentences
3. **Telegram Node** — send the summary to your phone

The beauty is that you can see at a glance which emails are important 
and which can wait.

## What does a workflow look like?

In n8n, it's visual drag-and-drop:

```
[Webhook] → [OpenAI] → [Telegram]
```

No code. You configure each step with a form. The OpenAI node has two 
key fields:

- **Model** — choose `gpt-4o-mini` for fast, cheap answers
- **Messages** — this is where you put the input and system instruction

For simple tasks (answering questions, summarizing), `gpt-4o-mini` is 
more than enough. It costs about €0.001 per request. For more complex 
tasks like writing long texts, use `gpt-4o`.

## Local AI — privacy on your own server

Want all data to stay on your own server? Run a local model with 
**Ollama**. Install it on your VPS next to n8n, load a model like 
`llama3` or `mistral`, and your n8n workflow talks to it locally.

Advantages:
- No data leaks to third parties
- No cost per request
- Works without an internet connection

Downside: free models are less capable than GPT-4. For simple tasks 
(translating, summarizing, categorizing) they work fine. For complex 
reasoning, use a cloud model.

## When is it worth it?

AI inside n8n becomes interesting when you recognize this:

- You receive many similar questions via email or contact form
- You want to auto-reply with meaningful content, not just templates
- You have a process where text needs to be read, assessed, or written
- You want a chatbot on your site without expensive external services

## When NOT?

For very simple tasks (send a confirmation email, save data to a sheet) 
you don't need AI. A regular n8n workflow is faster, cheaper, and more 
reliable.

## Getting started

The easiest way to begin: build one workflow. For example, the chatbot 
for your contact form. That way you'll immediately see what's possible, 
without weeks of studying.

Have an idea for an AI workflow but not sure if it's feasible? 
[Get in touch](/#contact) — I'll review it with you for free.
