# TailWind 上手

## 安装

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 修改配置文件

```js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 添加文件

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 在项目在引入

此次以 Vue 为例，其他框架类型

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

createApp(App).mount("#app");
```

## 使用

```vue
<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
```

## 链接

[官方文档](https://tailwindcss.com/)
