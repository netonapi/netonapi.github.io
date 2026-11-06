---
layout: home

hero:
  name: NetonAPI
  text: 从运营平台出发设计的 AI API 中转站
  tagline: 一个 Key 调用所有主流大模型。以官方价为锚定价，核算每条渠道的真实成本，亏本的价格保存不了，展示的单价就是扣费的单价。开源、自托管、单个可执行文件。
  image:
    src: /logo.png
    alt: NetonAPI
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 在线体验 Neton Cloud
      link: https://neton.cloud
    - theme: alt
      text: GitHub
      link: https://github.com/netonapi/netonapi

features:
  - icon: 🏷️
    title: 以官方价为锚定价
    details: 售价写成「官方价 × 加价率」，给一组用户或单个大客户的优惠写成「官方价 N 折」。官方价调整时自动跟随，不用换算一层层倍率。
  - icon: 🛡️
    title: 亏本的价格保存不了
    details: 每条渠道记录真实拿货价。任何定价保存前按真实会走的每条渠道核算毛利，低于成本直接拒绝；定价体检列出最差毛利。
  - icon: 🧾
    title: 展示的单价就是扣费的单价
    details: 扣费 = tokens × 用户看到的单价，价格页、控制台、账单三处是同一个数，客户可以逐笔对账。
  - icon: 🔒
    title: 两阶段账务
    details: 先预留、后结算，定价快照随请求冻结；进程崩溃自动恢复，说不清的账进人工复核，不会自动退款也不会重复扣费。
  - icon: 🤝
    title: 协议定价
    details: 搜一个用户，逐模型或批量设「官方价 N 折」，实时显示他的价格与毛利；专线与特价直接指定到 API Key。
  - icon: 🔁
    title: 三种协议任意互转
    details: OpenAI、Anthropic、Gemini 原生入口，工具调用、图片、thinking、缓存用量跨协议保真；Claude Code 与各家官方 SDK 直接可用。
---

<div class="vp-doc" style="max-width: 1152px; margin: 64px auto 0; padding: 0 24px;">

## Neton Cloud：基于 NetonAPI 构建的 API 中转站平台

[Neton Cloud](https://neton.cloud) 是用 NetonAPI 运营的 API 中转站：注册即可创建 API Key，按官方价计费，调用 GPT、Claude、Gemini、DeepSeek、Qwen、GLM、Kimi、Grok 等主流模型。
想看看 NetonAPI 跑起来是什么样，或者只想直接用，[去 Neton Cloud 注册试用](https://neton.cloud)。

## 看一眼

**运营侧**

| 网关概览：收入、成本、毛利 | 协议定价：给大客户逐模型打折，实时显示毛利 |
|---|---|
| ![网关概览](/screenshots/admin-overview.png) | ![协议定价](/screenshots/admin-negotiated-detail.png) |
| **模型定价：每个模型在每条渠道上的最差毛利** | **上游渠道：每条渠道的拿货折扣** |
| ![模型定价](/screenshots/admin-pricing.png) | ![上游渠道](/screenshots/admin-channels.png) |

**用户侧**

| 控制台 | 模型与价格：你的价格、相当于官方价几折、协议价 |
|---|---|
| ![控制台](/screenshots/console-overview.png) | ![模型与价格](/screenshots/console-models.png) |

## 和主流开源中转站有什么不同

| | NetonAPI | new-api | one-api |
|---|---|---|---|
| 定价方式 | 官方价为锚，「官方价 N 折」 | 模型 × 补全 × 分组倍率 | 分组 × 模型 × 补全倍率 |
| 按用户 × 模型的协议价 | 有 | 按用户分组倍率 | 按用户分组倍率 |
| 渠道真实成本 / 毛利保护 | 有，低于成本保存不了 | 公开文档未涉及 | 公开文档未涉及 |
| 展示单价 = 扣费单价 | 是，逐笔可对账 | 预扣后多退少补 | 预扣后结算 |
| API Key | 只显示一次，只存哈希 | 可随时查看 | 可随时查看 |
| 部署 | 单个原生可执行文件 | Go / Docker | Go / Docker |

[查看完整对照 →](/compare)

</div>
