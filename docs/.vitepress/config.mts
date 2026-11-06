import { defineConfig } from "vitepress";

const GITHUB = "https://github.com/netonapi/netonapi";
const CLOUD = "https://neton.cloud";

export default defineConfig({
  title: "NetonAPI",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#4f46e5" }],
    ["meta", { property: "og:image", content: "https://netonapi.com/screenshots/admin-overview.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: GITHUB }],
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      description: "从运营平台出发设计的开源 AI API 中转站：以官方价为锚定价、核算每条渠道的真实成本、展示的单价就是扣费的单价。",
      themeConfig: {
        nav: [
          { text: "指南", link: "/guide/what-is" },
          { text: "对照 new-api / one-api", link: "/compare" },
          { text: "发布说明", link: "/releases/1.0.0" },
          { text: "在线体验", link: CLOUD },
        ],
        sidebar: {
          "/guide/": [
            {
              text: "指南",
              items: [
                { text: "什么是 NetonAPI", link: "/guide/what-is" },
                { text: "快速开始", link: "/guide/quick-start" },
                { text: "定价与毛利", link: "/guide/pricing" },
                { text: "功能一览", link: "/guide/features" },
              ],
            },
            { text: "更多", items: [{ text: "对照 new-api / one-api", link: "/compare" }, { text: "1.0.0 发布说明", link: "/releases/1.0.0" }] },
          ],
        },
        outline: { label: "本页目录" },
        docFooter: { prev: "上一页", next: "下一页" },
        lastUpdated: { text: "最后更新" },
        footer: { message: "Apache-2.0 开源 · Neton Cloud 是基于 NetonAPI 构建的 API 中转站平台", copyright: "© 2026 NetonAPI" },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      description: "An open-source AI API relay designed from the operator's side: prices anchored to the official price, real channel cost, and the displayed unit price is the price charged.",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/what-is" },
          { text: "vs new-api / one-api", link: "/en/compare" },
          { text: "Try it", link: CLOUD },
        ],
        sidebar: {
          "/en/guide/": [
            { text: "Guide", items: [{ text: "What is NetonAPI", link: "/en/guide/what-is" }, { text: "Quick start", link: "/en/guide/quick-start" }] },
            { text: "More", items: [{ text: "vs new-api / one-api", link: "/en/compare" }] },
          ],
        },
        footer: { message: "Apache-2.0 · Neton Cloud is an API relay platform built on NetonAPI", copyright: "© 2026 NetonAPI" },
      },
    },
  },
});
