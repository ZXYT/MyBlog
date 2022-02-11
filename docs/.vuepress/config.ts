import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/myblog/",
  lang: "zh-cn",
  title: "ZT'Blog",
  description: "This is ZT'Blog",
  theme: "@vuepress/theme-default",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/logo.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/logo.svg",
    navbar: [
      "/",
      { text: "笔记", link: "/blog" },
      { text: "项目", link: "/project" },
    ],
    repo: "https://github.com/ZXYT/myblog",
    editLink: false,
  },
});
