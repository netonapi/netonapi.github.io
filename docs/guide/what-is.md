# What is NetonAPI

NetonAPI is an open-source, self-hosted relay for large-model APIs. You connect the upstream accounts you buy
(OpenAI, Anthropic, Google, Chinese vendors or other relays), issue your own API keys to your users and bill them per token.
Users call every major model with one key; official SDKs and tools such as Claude Code only need a new base URL.

It ships with two interfaces:

- **Admin console** for operators: channels, pricing, negotiated prices for key accounts, revenue / cost / margin, ledger review.
- **Website and user console** for buyers: sign-up, models and prices, API keys, usage and billing, top-up.

[Neton Cloud](https://neton.cloud) is a relay run on NetonAPI — sign up to see it in action.

## What is different

Most open-source relays start from "forward the request" and add billing as stacked ratios on top.
Running a relay as a business is about other questions: what does each model sell for, what does it cost me,
did this request make money, will the discount I gave a key account lose money on some channel, and does the user's bill match the price they saw?

| Operator question | NetonAPI |
|---|---|
| How is the price set? | Anchored to the official price: sale = official × markup; discounts are "N% of official" and follow official price changes |
| What does it cost me? | Every channel records real cost: official × discount, pulled from an upstream relay's price API, or entered per model |
| Can I sell at a loss? | Every price is checked against each channel that would serve it; below cost is refused |
| Does the bill match? | Charge = tokens × the unit price the user sees |
| What if something crashes? | Reserve then settle; crashes recover, unclear cases go to manual review, nothing is double-charged |

## Under the hood

- Server compiled with Kotlin/Native into **a single native executable** — no JVM at runtime.
- PostgreSQL only; Redis optional (shared rate limits across instances).
- Two Next.js apps for the admin console and the website.
- License: Apache-2.0.

Next: [Quick start](./quick-start) · [Pricing and margin](./pricing) · [Features](./features)
