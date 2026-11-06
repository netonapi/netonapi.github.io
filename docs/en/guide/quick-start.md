# Quick start

## Try it first

Sign up at [Neton Cloud](https://neton.cloud), create an API key, and point any official SDK at `https://api.neton.cloud`
(`https://api.neton.cloud/v1` for OpenAI SDKs):

::: code-group

```bash [OpenAI]
curl https://api.neton.cloud/v1/chat/completions \
  -H "Authorization: Bearer $NETON_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-5-mini","messages":[{"role":"user","content":"Hello"}]}'
```

```bash [Anthropic]
curl https://api.neton.cloud/v1/messages \
  -H "x-api-key: $NETON_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-4-6","max_tokens":256,"messages":[{"role":"user","content":"Hello"}]}'
```

```bash [Claude Code]
export ANTHROPIC_BASE_URL=https://api.neton.cloud
export ANTHROPIC_AUTH_TOKEN=$NETON_API_KEY
claude
```

:::

## Self-host

You need a Linux server (2 vCPU / 4 GB or more), PostgreSQL, two domains (admin console + API, and the website) and at least one upstream API key.
Step-by-step instructions, required secrets, reverse proxy and the go-live checklist are in
[DEPLOY.md](https://github.com/zoujiaqing/nanogate/blob/main/DEPLOY.md) (Chinese).

::: tip
The bare-metal install described in DEPLOY.md is the recommended path — Neton Cloud runs that way.
The Docker / compose files exist but have not yet been verified on a real Docker host.
:::
