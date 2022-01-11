import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/myblog/",
  lang: "zh-cn",
  title: "ZT'Blog",
  description: "This is ZT'Blog",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      "/",
      { text: "文章", link: "/blog" },
      { text: "项目", link: "/project" },
    ],
    repo: "https://github.com/ZXYT/myblog",
    editLink: false,
  },
});
