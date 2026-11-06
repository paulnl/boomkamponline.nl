---
layout: post
title: "Who is watching your AI agent? Guardrails, kill switch and human control"
description: "Your AI agent is allowed to do more and more on its own. Here is how you stay in control: clear boundaries, a kill switch, logging, and a human who approves what matters."
date: 2026-11-06
category: "AI"
lang: en
post_id: "ai-agent-guardrails"
image: /images/ai-agent-guardrails-og-en.jpg
---

An agent that only answers is a chatbot. An agent that independently sends a quote, creates an order or approves an invoice is something else. From that moment on it carries responsibility — and that responsibility stays with you.

Yet in practice I see most of the attention going to the prompt. The prettier the instruction, the better the agent supposedly works. That is the wrong order. An agent does not become reliable through a better prompt, but through boundaries that also hold when the agent comes up with something different than you did.

In this article I explain how to arrange that in practice.

## What changes the moment an agent is *allowed* to do something

As long as an agent only produces text, a mistake is annoying. The moment it is allowed to act, a mistake is an incident: an email to the wrong customer, a duplicate order, a credit card that gets charged.

In fact, three things change at once:

- The agent gets **access** to systems that used to be open only to people
- The agent gets **speed**, so mistakes repeat faster than you can notice them
- The agent gets **context** from outside, and that context can be manipulated

That last point is the one most often forgotten. Everything your agent reads — an email, a web page, an uploaded document, a CRM note — can contain an instruction. That is called prompt injection, and you do not block it with a stricter system prompt.

## Four kinds of control

Control is not a single setting. I think in four layers.

### 1. What is it allowed to do?

Start with the tool: which systems may the agent call, and with which permissions? Use a separate account with as few permissions as needed. No admin account "because it works more easily".

Also make a distinction between reading and writing. An agent that is allowed to read is already useful. Writing — sending, booking, paying — is a second step, and that step deserves its own thresholds.

### 2. What is it allowed to see?

The less context you hand over, the less can go wrong. If the question is about one order, pass that one order, not the entire customer database. That is not only safer, it is also cheaper.

### 3. What is it allowed to cost?

An agent that gets stuck in a loop burns tokens without a result. Set a maximum per task and per day. I will come back to that in a separate article, but it belongs here too: an agent without a budget limit is an agent without brakes.

### 4. Who approves?

The most important question. Not every action needs to pass a human, but determine the impact per action:

- **Low** — drafting, looking things up, summarising: automatic
- **Medium** — email to a customer, creating an order: automatic, but checked afterwards
- **High** — payments, contracts, deletions, permission changes: always a human who approves

That last one is called human-in-the-loop, and it is not a sign of weakness. It is the difference between a pilot project and something you dare to leave running when you are not behind your screen.

## The kill switch

Every agent that runs independently should have a stop you can press without any technical knowledge. Not by stopping a container, but a button in the workflow: stop processing new tasks.

Important detail: that button has to actually work while the agent is busy. Test it once a month, the way you test a smoke detector. An emergency stop you have never used is an assumption.

Large vendors are now building this in as standard. CrowdStrike announced a kill switch for agents in early November, and with platforms like n8n you can achieve the same with a simple switch in your workflow.

## Logging: the evidence afterwards

You cannot judge an agent on the end result alone. You want to know which steps it took, which tools it called, which context it used and what that cost.

So log per task: the input, the chosen route, the tool calls, the result and the costs. That is not just for when things go wrong. It is also the only way to see where your agent does unnecessary work — and therefore where you can improve it.

## How to start without boxing yourself in

The temptation is to start big, because you can. I would turn it around:

1. Pick one task with a clear end result
2. Let the agent first only read and draft
3. Add write permissions only after you have checked the drafts for a week
4. Put a budget and a kill switch in place before the first production run
5. Expand only when you understand the logs

Working this way keeps responsibility where it belongs: with the human. And that is exactly why it does work.

## Ready to get started?

Do you already have an agent running, or do you want to build one but are unsure where the boundaries should be? Get in touch and I will go through what is safe to automate with you for free — and what is not, for now.

---

Source: [https://boomkamponline.nl/blog/2026/11/ai-agent-guardrails/](https://boomkamponline.nl/blog/2026/11/ai-agent-guardrails/)
