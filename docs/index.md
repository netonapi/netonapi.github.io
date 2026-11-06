---
layout: home

hero:
  name: NetonAPI
  text: An AI API relay designed from the operator's side
  tagline: One key for every major model. Prices anchored to the official price, real cost tracked per channel, loss-making prices refused at save time, and the unit price shown is the unit price charged. Open source, self-hosted, a single native binary.
  image:
    src: /logo.png
    alt: NetonAPI
  actions:
    - theme: brand
      text: Quick start
      link: /guide/quick-start
    - theme: alt
      text: Try Neton Cloud
      link: https://neton.cloud
    - theme: alt
      text: GitHub
      link: https://github.com/netonapi/netonapi

features:
  - icon: 🏷️
    title: Anchored to the official price
    details: Sale price is "official × markup"; discounts for a group or a key account are "N% of official". When the official price moves, every price follows.
  - icon: 🛡️
    title: Loss-making prices can't be saved
    details: Each channel records its real cost. Every price is checked against every channel that would actually serve it before it is saved; a price health check lists the worst margin.
  - icon: 🧾
    title: Shown price = charged price
    details: Charge = tokens × the unit price the user sees. The pricing page, the console and the bill agree to the cent.
  - icon: 🔒
    title: Two-phase ledger
    details: Reserve, then settle, with the price snapshot frozen per request. Crashes recover automatically; unclear cases go to manual review — never auto-refunded, never double-charged.
  - icon: 🤝
    title: Negotiated pricing
    details: Find a user, set "N% of official" per model or in bulk, and see their price and your margin live. Dedicated lines and special rates attach to an API key.
  - icon: 🔁
    title: Any protocol to any protocol
    details: Native OpenAI, Anthropic and Gemini endpoints, converted in any direction with tool calls, images, thinking and cache usage preserved. Claude Code and official SDKs just work.
---

<div class="vp-doc" style="max-width: 1152px; margin: 64px auto 0; padding: 0 24px;">

## Neton Cloud: an API relay platform built on NetonAPI

[Neton Cloud](https://neton.cloud) is an API relay operated with NetonAPI: sign up, create an API key and call GPT, Claude, Gemini,
DeepSeek, Qwen, GLM, Kimi, Grok and more, billed at official prices.

## A quick look

| Gateway overview: revenue, cost, margin | Negotiated pricing: per-model discounts for a key account |
|---|---|
| ![Overview](/screenshots/admin-overview.png) | ![Negotiated pricing](/screenshots/admin-negotiated-detail.png) |
| **Model pricing: worst margin across channels** | **User console: models and prices** |
| ![Model pricing](/screenshots/admin-pricing.png) | ![Console models](/screenshots/console-models.png) |

[Full comparison with new-api and one-api →](/compare)

</div>
