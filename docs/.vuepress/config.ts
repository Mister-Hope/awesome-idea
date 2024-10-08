import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dist",

  title: "IDEA 高效使用指南",
  lang: "zh-CN",

  bundler: viteBundler(),

  theme,
});
