---
layout: post
title: "NocoBase: build your own business system, without code"
description: "What is NocoBase and what is it good for? This is how you build your own CRM, project management and internal tools with this open-source no-code platform — self-hosted and without a subscription."
date: 2026-10-21
category: "Automatisering"
lang: en
post_id: "nocobase-no-code-platform"
image: /images/nocobase-no-code-platform-og-en.jpg
---

Almost every company has a process that fits nowhere. A CRM that almost does what you want. Projects in a spreadsheet that three people each manage differently. An inventory in an Excel file from two years ago.

Usually there are two ways out: a subscription to a SaaS platform you only half fit, or a project of months to have something custom built. NocoBase is a third way — an open-source platform you use to build those systems yourself.

In this article I explain what NocoBase is, what I use it for myself and what you can practically do with it.

## What is NocoBase?

NocoBase is an open-source no-code and low-code platform for building business systems. What sets it apart from most no-code tools is the order of things: you don't start with a form or a table, you start with the data model.

That makes sense, because those questions are usually already answered. Which objects does your company have? Customers, quotes, projects, tickets, devices, employees. And how do they relate to each other? That structure determines everything that comes after: the pages, the permissions, the automation. When your process changes later, you adjust the model — and the interface stays correct.

The platform runs on Node.js and TypeScript, with React for the interface and Koa on the server side. You host it yourself, for example in Docker, and the data stays in your own database: PostgreSQL, MySQL or MariaDB.

## What is it for?

In short: for the systems you currently maintain with spreadsheets, separate tools or a SaaS subscription, but that don't quite work well enough.

NocoBase is not an off-the-shelf package for a single process. It is a platform on which you build a system yourself. Which suits:

- **CRM and customer management** — customers, contacts, opportunities, quotes and orders in one model
- **Project management** — tasks, hours, milestones and attachments per project
- **Help desk and tickets** — reports, categories, SLAs and a customer portal
- **IT and hardware inventory** — devices, locations, licences and maintenance
- **Order and quote management** — from request to invoice, workflow included
- **Internal processes** — leave requests, purchasing, time registration and administration

## What can you actually do with it?

### 1. Build data models

Create collections with fields and relations: one-to-one, one-to-many and many-to-many. Think of a customer with multiple quotes, or a project made up of several tasks. The data stays in ordinary relational tables — no locked-in ecosystem, just your own database.

### 2. Build pages and interfaces

In a WYSIWYG interface you assemble the pages yourself: tables, forms, dashboards and detail pages. One click switches between using and configuring. The same data can be shown in different ways: an overview for yourself, a form for the customer, a dashboard for management.

### 3. Workflows and automation

A workflow is a chain of triggers, conditions and actions. For example: as soon as a quote is marked 'accepted', create a project, send a notification to the team and schedule a meeting. Actions can also call an API or send an email.

### 4. Permissions and roles

You decide who may see and edit what, down to field level. Sales sees the customer details but not the cost price; the director sees everything, the employee only their own tasks. Every change ends up in an audit log, so you can always reconstruct afterwards what happened.

### 5. Pull data from other systems

Next to its own database, NocoBase can tap external sources: SQL Server, Oracle, MySQL, PostgreSQL and REST APIs. You read that data and build your interface around it, without migrating those systems.

### 6. Connect other tools

Through the HTTP API, the MCP server, webhooks and the CLI you connect NocoBase to what you already run. Think n8n for your automations, or Telegram, WhatsApp, Slack and Gmail for messages. That is the route I use myself: n8n reads and writes in NocoBase, and an AI agent works with the same data.

### 7. AI in the system

NocoBase ships with an MCP server, a CLI and skills, so AI agents such as Claude Code, Cursor, Codex and OpenCode can set up and extend the system for you. On top of that there are AI employees: digital colleagues that think along inside the system, analyse data and process documents. One important detail: that AI works within the same permissions as a human user, and every step can be traced in the audit log.

### 8. Extend with plugins

Every feature in NocoBase is a plugin, and the platform is built as a microkernel. There is an official plugin ecosystem, and you can write your own plugins — or have an AI agent generate them.

## What does it cost?

NocoBase is open source (Apache-2.0) and the community edition has no limits: no maximum number of users, records or applications. Commercial licences are bought once — no subscription, no price per user and no price per amount of data.

That is a fundamental difference from SaaS. You make a one-off investment and from then on it runs on your own server.

## When is NocoBase not for you?

Honestly: this is not a tool for everyone.

- One simple process and no plans? A spreadsheet or a small SaaS subscription is faster.
- Nobody who can maintain the data model? Then you build a system that nobody understands after a year.
- Looking for an off-the-shelf product with support from a large company? Then you pay for SaaS, and NocoBase is not meant as the alternative.

It *is* a strong alternative if your processes are unique, you want to keep your data yourself, or you want to cut monthly software costs.

## How I use it myself

I run NocoBase myself for the administration of this site. The blog posts, the social statistics and the inventory of servers and hardware sit in my own collections, with the data on my own server. What I mainly gain is not the software itself, but the freedom: when something needs to be connected, I build that connection myself — with n8n, with an API or with an AI agent.

I don't want to hide the downside: it takes time. Designing a data model is not an evening of clicking. But once it's there, it works.

## Ready to get started?

Start small. Pick one process you currently maintain with a spreadsheet or a separate tool and model it. If it gets too big, you stop — and you have a concrete idea after one evening.

Want to know whether NocoBase fits your situation, or do you need help with your first model? Get in touch and I'll review it with you — free of charge.

---

Source: [https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/](https://boomkamponline.nl/blog/2026/10/nocobase-no-code-platform/)
