---
aside: false
---

# NetonAPI vs new-api / one-api

NetonAPI is not a fork of one-api / new-api. It was designed from the **operator's** side: prices are anchored to the official
price, every channel carries its real cost, a price that would lose money cannot be saved, and every charge reconciles as
"unit price × tokens". The table compares it with the two most widely used open-source relay projects.

| Capability | NetonAPI 1.0 | [new-api](https://github.com/QuantumNous/new-api) | [one-api](https://github.com/songquanpeng/one-api) |
|---|---|---|---|
| **Pricing** | Anchored to the official price: sale = official × markup; groups and individual users can get "N% of official" per model | Ratio system: model ratio × completion ratio × group ratio; fixed per-request price; tiered expression pricing | Ratio system: group ratio × model ratio × completion ratio |
| **Per-user, per-model negotiated price** | Yes ("Negotiated pricing": find a user, discount model by model, in bulk) | Via user group ratio | Via user group ratio |
| **Real channel cost** | Each channel records its cost (official × discount / upstream pricing API / per-model manual); abnormal jumps wait for approval | Not covered in public docs | Not covered in public docs |
| **Margin protection** | A price below channel cost **cannot be saved**; price health check shows the worst margin per group × channel; profit dashboard | Not covered in public docs | Not covered in public docs |
| **Official price upkeep** | Scheduled sync from a price source; changes held for operator approval; full price history | Ratio settings, can sync upstream ratios | Built-in default ratios, edited by hand |
| **Charge vs. displayed price** | Charge = tokens × the unit price the user sees (rounded per item); console, price list and bill agree; unknown cache price bills at input price | Pre-deduct, then settle the difference | Pre-deduct, then settle |
| **Ledger** | Two-phase reserve → settle, crash-recoverable, anomalies go to a manual review queue; price snapshot frozen per request | Pre-deduct + post-settle | Pre-deduct + post-settle |
| **Billing group** | Decided by the API key; operators can pin a key to a group (dedicated route / special price) | User group, selectable per token | User and channel groups |
| **API key handling** | Shown once at creation, only a hash is stored; upstream keys encrypted at rest | Viewable and copyable in the list | Viewable and copyable in the list |
| **Inbound protocols** | Native OpenAI (Chat, Responses), Anthropic and Gemini endpoints, **converted in any direction** (tools, images, thinking, cache usage preserved) | Conversion among OpenAI Chat, Responses, Anthropic and Gemini; Realtime WebSocket | Unified to the OpenAI format |
| **Upstream types** | OpenAI-compatible, Azure OpenAI, Anthropic, Gemini, AWS Bedrock, Vertex AI | Dozens, domestic and international | 30+ providers |
| **Channel failover** | Priority + weight; automatic failover; an upstream "model not found" moves to the next channel instead of failing the user; key auto-disable and cooldown; scheduled probes | Priority + weight, retries, channel affinity, multiple keys | Load balancing, retries, auto-disable by success rate |
| **Task APIs** (Midjourney, video…) | Not yet | Yes (JavaScript plugins) | No |
| **Operator permissions** | Menu- and button-level permissions; preset gateway ops / finance / support / read-only roles | Fine-grained permissions | Admin / root |
| **User sign-in** | Username and password, SMS code (needs an SMS provider), email password reset | OAuth / OIDC, passkeys, 2FA | Email, GitHub, Feishu, WeChat |
| **Top-up** | Manual top-up by admins, redemption codes, online payment (Alipay, aggregators, pluggable); payment secrets write-only | Redemption codes, EPay, Stripe, subscriptions | Redemption codes, top-up link |
| **Build and deploy** | Kotlin/Native **single native executable**, no JVM at runtime; PostgreSQL (Redis optional) | Go binary / Docker; SQLite / MySQL / PostgreSQL | Go binary / Docker; SQLite / MySQL |
| **Status** | 1.0.0 | Releasing continuously (v1.0.0-rc series) | Latest release v0.6.10 (2025-02), none since |

The new-api and one-api columns are compiled from their public READMEs and documentation (2026-11). "Not covered in public docs" means
we found no description, not that the feature certainly does not exist; check their latest releases for details.

Want to see NetonAPI running? Sign up at [Neton Cloud](https://neton.cloud).
