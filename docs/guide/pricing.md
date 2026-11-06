# Pricing and margin

NetonAPI prices have a single anchor: **the official price**. Every price is written as "a share of the official price",
so customers can compare easily and operators can do the math.

## Where a user's price comes from

When a user calls a model, the price is looked up in this order and the first match wins:

| Layer | When it applies | How it is written |
|---|---|---|
| Negotiated price | The operator negotiated this model for **this user** | N% of official, e.g. 85% |
| Group price | The user's API key belongs to a billing group (enterprise, dedicated line…) | A group ratio, or per-model prices inside the group |
| Site price | None of the above | Official × site markup (a model can have its own markup) |

In the console, users see each model's price, what share of the official price it is, and whether it is a negotiated price.
In the admin console, the Negotiated Pricing page shows which layer each of that user's prices comes from.

## An example

Say Claude Sonnet's official price is $3 input / $15 output per million tokens and the site markup is 1.0 (selling at official price):

- A regular user pays $3 / $15.
- The enterprise group has ratio 0.95: $2.85 / $14.25.
- Key account Acme negotiated 85%: $2.55 / $12.75.

One Acme request with 10,000 input and 2,000 output tokens is charged
`10,000 × 2.55 / 1,000,000 + 2,000 × 12.75 / 1,000,000 = $0.051` — exactly what the unit prices in their console add up to.

## Why you can't sell at a loss

Every upstream channel records its own cost, e.g. "OpenAI direct at 82% of official" or "partner relay at 55%".
Before any price is saved — site, group or negotiated — NetonAPI checks the margin on **every channel that would actually serve it**:

- Below cost: the price can't be saved, and you are told which group, channel and price component loses money.
- Below your minimum margin: also refused.

In the example above, if the channel carrying Claude costs 90% of official, the 85% negotiated price can't be saved —
use a cheaper channel or give a smaller discount.

The model pricing list shows each model's **worst margin** across all group × channel combinations, with losses in red;
the overview breaks down revenue, cost and margin by group and channel.

## When the official price changes

NetonAPI periodically pulls official prices from a public source (the same one new-api uses by default; models.dev, LiteLLM or
OpenRouter also work), lists every increase and decrease, and applies them after an operator confirms. Because every price is a share of
the official price, site, group and negotiated prices all follow automatically — the "85%" you promised a customer stays true.

## Details

- **Cache**: cache reads and writes are priced separately; when an upstream has no cache price, cached tokens are billed at the input price, never given away.
- **Per call and long context**: image models can be priced per call; long-context models can be tiered by input length.
- **Ledger**: each request reserves an upper bound first and settles on actual usage, with the price snapshot frozen per request — price changes never affect in-flight requests.
- **Price history**: every change records who, when, and from what to what.
