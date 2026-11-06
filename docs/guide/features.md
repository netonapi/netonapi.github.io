# Features

## Endpoints

- OpenAI: Chat Completions, Responses, Embeddings, Images, Audio, Rerank
- Anthropic Messages and native Gemini
- Conversion between the three protocols **in any direction**, preserving tool calls, images, thinking and cache usage; streaming and non-streaming
- Claude Code and official SDKs work out of the box

## Upstreams and routing

- Upstream types: OpenAI-compatible (including other relays), Azure OpenAI, Anthropic, Gemini, AWS Bedrock, Vertex AI
- Priority + weight routing with automatic failover; when an upstream says "no such model", the request moves to another channel instead of failing
- Automatic key suspension and cooldown, scheduled latency probes, long answers never cut off
- Outbound address checks against SSRF

## Pricing and ledger

- Anchored to the official price: site, group and negotiated prices (see [Pricing and margin](./pricing))
- Real cost per channel; loss-making prices can't be saved; pricing health check and profit dashboard
- Per-token, per-call and long-context tiers; cache reads and writes priced separately
- Two-phase ledger: reserve → settle, crash recovery, manual review for unclear cases
- Scheduled official price sync and calibration, full price history

## Admin console

- Gateway overview: revenue, cost, margin, daily trend, top models and users, channel health
- Negotiated pricing: find a user, set "N% of official" per model or in bulk, see the margin live
- Billing group decided by API key: dedicated lines and special rates attach to a specific key
- Usage logs, settlement review, balance ledger
- Menu- and button-level permissions with four preset roles (gateway ops, finance, support, read-only); admin 2FA and IP allowlist
- Prometheus metrics

## For users

- Sign-up and login: username + password, SMS code, email password reset
- Self-service API keys: budget, expiry, model scope, IP allowlist; **a key is shown only once at creation** and only its hash is stored
- Model and price list, usage and billing, integration guide

## Payments

- Manual top-up by admins, redemption codes
- Online payment: Alipay and aggregated payment providers, extensible; payment secrets are write-only
- Referral rewards

## Deployment

- A single native executable, no JVM at runtime
- PostgreSQL; Redis optional
- Official backup script and timer, with optional sync to object storage

## Not supported yet

- Task-style APIs such as Midjourney, Suno and video generation
- Third-party login for users (GitHub, OIDC…)
- Databases other than PostgreSQL
