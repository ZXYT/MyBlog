import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/thozt/",
  lang: "zh-cn",
  title: "My Blog",
  description: "This is My Blog",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
});
