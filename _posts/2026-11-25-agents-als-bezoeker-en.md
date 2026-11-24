---
layout: post
title: "Soon it will not be a visitor, but an agent: is your website ready?"
description: "AI agents are becoming the new visitors to your website. What the Personal Agent Protocol changes, why sites block agents, and what you can arrange today."
date: 2026-11-25
category: "Web Development"
lang: en
post_id: "agents-als-bezoeker"
image: /images/agents-als-bezoeker-og-en.jpg
---

Agents as visitors: is your website ready?

Most websites are built for someone clicking with a mouse. That assumption holds true less and less often. A small but growing share of your visits comes from an assistant looking, comparing and sometimes even acting on someone else's behalf.

That is not the same as a search engine indexing your page. A search bot reads and leaves. An agent reads, asks a follow-up question, fills in a form or tries to place an order. Most sites are not set up for that.

What is happening now

On 6 October 2026 Sierra announced the Personal Agent Protocol. It is an open standard for how personal AI agents talk to businesses. Sierra is developing it with, among others, Meta, Genesys, Shopify, Stripe and Walmart, and it builds on OAuth.

Note: it is still a concept, and it is not the only protocol. Stripe and Shopify are also involved in a competing protocol from Visa.

The idea behind it is simple. At the moment agents usually use websites the way people do: they load pages and click through forms. For a business that leaves two choices: block everything, or let the agent do what the customer is allowed to do. Neither is good.

The protocol turns that around:

The agent makes clear who it is and starts as a guest.
It only gains access to the customer's account once the customer logs in and gives permission.
The customer decides whether the agent may only read or also make changes.
The business decides whether the agent works through the website, via the API, or through its own agent.

That sounds technical, but the core is organisational: you get a welcoming front door for software, instead of a lock on the door.

Why sites are already blocking agents

At the same time you see the opposite movement. More and more websites are rejecting AI agents, sometimes on principle, often out of necessity. The reasons are understandable:

Cost. An agent that searches hundreds of pages costs bandwidth and computing time.
Data leaks. An agent with a customer's login details can do more than intended.
Wrong recognition. Real search engines are accidentally blocked and disappear from the results.
Unpredictable behaviour. Forms filled in by an agent produce junk.

So blocking is not stupid. But it is not a strategy either. If you close everything, you can disappear from the answers in which your customers are looking.

Three types of agent traffic

It helps to make a distinction. Not every agent asks the same thing of your site.

Search and answer bots. They read your pages in order to give an answer. They want clean HTML, a clear structure and no login.
Your visitor's assistants. They compare, summarise and ask questions. They want consistent information: prices, delivery times and terms.
Acting agents. They fill in forms, schedule an appointment or place an order. They want an API, clear limits and an identity.

The first category is mainly an SEO issue. The second is a content issue. The third is a setup issue, and that is what the next two years will be about.

What your site needs

When I look at what actually has to change in practice, I come to six points:

One source of truth. Prices, stock and delivery times must be correct in the place where you manage them. If an agent finds conflicting information, it picks the wrong one or gives up.
Clear data that a machine can read. Structured data and clean HTML help. For Google Search you do not need special AI files, Google says so itself. Your site must be understandable without JavaScript tricks.
An API where possible. Does an agent have to do something through ten clicks? Then offer it as a single API call instead. That is faster, cheaper and easier to secure.
Forms that can handle junk. Think of a limit on the number of requests, validation and, where needed, a check that the visitor is human.
Visibility in your logs. You want to know which traffic comes from people and which from agents. Without that distinction you cannot adjust anything.
A welcoming but bounded front door. As with the protocol: look first, then grant access.
And your analytics?

This surprises most teams. Your visitor numbers do not fall because fewer people come, but because one agent visits instead of ten people. Your click figures then tell a different story than your turnover.

So from now on measure three things separately:

human traffic
referrals from AI
agent traffic

Not because the numbers are already large, because AI traffic is still only a small part of your visits. But because otherwise in two years you cannot explain where your traffic went.

Start small

You do not need to make a project of this. Do three things this month:

Check that your site does not accidentally block AI search bots.
Make sure your prices and contact details are correct in one place and the same everywhere.
Look in your server logs to see which agents you already receive. There are usually more than you think.

The rest follows naturally as traffic increases. Whoever has the basics in order now does not have to rush later.

Questions?

Want to know how your website stands when an agent drops by instead of a visitor? Get in touch, then I will look with you for free. 
