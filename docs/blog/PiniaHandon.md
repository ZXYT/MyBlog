# Pinia 上手

## 背景

随着 Vue3 正式发布，Vue3 的生态也在不到完善，Pinia 就是其中一员。Pinia 是 Vue 的一个状态仓库，与 Vuex 相比它有很多优点，更轻量，更简洁，更好的类型支持等等。

## 安装

```bash
npm i pinia
```

如果在 Vue2 中使用还需要安装 @vue/composition-api。

```bash
npm i @vue/composition-api
```

## 使用

### 创建 Pinia 实例，并添加到应用中

**Vue3 写法**

```ts
import { createPinia } from "pinia";

app.use(createPinia());
```

**Vue2 写法**

```ts
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: "#app",
  // 其他配置
  pinia,
});
```

### 定义一个仓库

```ts
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    double: (state) => state.count * 2,
    plus(): number {
      return this.double + 1;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    asyncfn() {
      setTimeout(() => {
        this.count *= 2;
      }, 3000);
    },
  },
});
```

### 使用

**setup**

```ts
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store/module/counter";

const counter = useCounterStore();
const { count, double, plus } = storeToRefs(counter);
const { increment, asyncfn } = counter;
```

**Options API**

```ts
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../store/module/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["count", "double", "plus"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "asyncfn"]),
  },
};
```

更多使用细节可以阅读官方文档[官方文档](https://pinia.vuejs.org/)

## 常见问题

##### 在 Vue Cli 中使用出现 Can't import the named export 'computed' from non EcmaScript module (only default export is available) 等问题如下图

```bash
ERROR  Failed to compile with 18 errors

 error  in ./node_modules/pinia/dist/pinia.mjs

Can't import the named export 'computed' from non EcmaScript module (only default export is available)

 error  in ./node_modules/pinia/dist/pinia.mjs

Can't import the named export 'del' from non EcmaScript module (only default export is available)

...

```

###### 可能原因

第三方包没有导出对应版本的包

##### 解决办法

- 修改 vue.config.js 配置

```js
// vue.config.js
module.exports = {
  // 导出对象
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ]
    }
  }
 // 导出函数
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
  }
}
```

###### 可选步骤

- 更新 typescript 版本
- 跳过第三方包检查

```json
{
  "compilerOptions": {

 	  ...

    "skipLibCheck": true
  }
}
```

## 参考链接

官方文档 <https://pinia.vuejs.org/>
