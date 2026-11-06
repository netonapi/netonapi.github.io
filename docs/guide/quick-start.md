# 快速开始

## 先看看效果

不想自己装，直接去 [Neton Cloud](https://neton.cloud) 注册一个账号：它就是用 NetonAPI 搭的中转站，
注册、创建 API Key、调用模型、看用量的完整流程都在那里。

拿到 Key 后，把各家官方 SDK 的地址换成 `https://api.neton.cloud`（OpenAI SDK 用 `https://api.neton.cloud/v1`）即可：

::: code-group

```bash [OpenAI 协议]
curl https://api.neton.cloud/v1/chat/completions \
  -H "Authorization: Bearer $NETON_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-5-mini","messages":[{"role":"user","content":"你好"}]}'
```

```bash [Anthropic 协议]
curl https://api.neton.cloud/v1/messages \
  -H "x-api-key: $NETON_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-4-6","max_tokens":256,"messages":[{"role":"user","content":"你好"}]}'
```

```bash [Claude Code]
export ANTHROPIC_BASE_URL=https://api.neton.cloud
export ANTHROPIC_AUTH_TOKEN=$NETON_API_KEY
claude
```

:::

三种协议（OpenAI、Anthropic、Gemini）用同一个 Key，模型之间任意互转：用 Anthropic SDK 调 GPT、用 OpenAI SDK 调 Claude 都可以。

## 自己部署

需要准备：

- 一台 Linux 服务器（2 核 4G 起）和 PostgreSQL；
- 两个域名：管理后台（同时承载 API）与网站；
- 至少一个上游账号的 API Key。

部署步骤、必须设置的密钥、反向代理与上线前检查清单都在
[部署文档 DEPLOY.md](https://github.com/zoujiaqing/nanogate/blob/main/DEPLOY.md) 里。要点：

1. 按文档的目录布局拉取源码（服务端、管理后台、网站前端，以及 Neton 框架与模块）。
2. 编译服务端得到单个可执行文件；构建两个前端。
3. 设置 `JWT_SECRET`、`CHANNEL_KEY_ENC_KEY`、`MFA_MASTER_KEY` 等密钥，配好 PostgreSQL。
4. 启动后登录管理后台：接入渠道 → 校准官方价 → 设置加价率 → 发布模型。
5. 按「上线前检查」逐项核对，配好每日备份。

::: tip 部署方式
目前推荐按文档的「裸机部署」方式安装，Neton Cloud 也是这么跑的。Docker / compose 方式的文件已经写好，但还没在真实的 Docker 主机上验证过。
:::

## 第一次配置

1. **接渠道**：「上游渠道」里新增渠道，填地址和 Key，点「测试连通」；在「成本」里填这条渠道的拿货折扣。
2. **定价**：「模型定价」里点「校准官方价」拉取最新官方价，勾选要卖的模型；全站加价率在「配置管理」里设。
3. **看体检**：定价列表会显示每个模型在每条渠道上的最差毛利，亏本的标红。
4. **给用户充值**：用户注册后，在后台给他手动充值；要接在线支付再配支付渠道。
5. **大客户**：「协议定价」里搜到这个用户，按模型设「官方价 N 折」。

定价怎么算，见 [定价与毛利](./pricing)。
