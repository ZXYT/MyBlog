# 上手 electron

## 背景

因为工作需要用到 WebSocket，但是网上没有好用的测试工具，使用准备自己写一个。既然我是前端那顺理成章的选择了 electron。

## 安装

```
npm install electron --save-dev
```

没想到一上来就出问题了

研究了一下发现原来是下载失败了，更换淘宝镜像然后就可以了

```
npm config set registry https://registry.npmmirror.com
```

```
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
```

怎么还是怎么慢，又研究一番后发现把 electron 也设置成淘宝源就立马完成了。
参考链接 https://www.jianshu.com/p/73f33d48c0af

## 写个 demo

```js
// 引入两个模块：app 和 BrowserWindow

// app 模块，控制整个应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理程序的窗口。

const { app, BrowserWindow } = require("electron");

// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on("ready", () => {
  // 创建一个窗口
  const mainWindow = new BrowserWindow();

  // 窗口加载html文件
  mainWindow.loadFile("./src/main.html");
});
```

```html
<!-- ./src/main.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    hello world
  </body>
</html>
```

## 启动

package.json 中添加

```json
// package.json

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "electron ."
},
```

运行

```
npm run start
```

## 打包

使用 Electron Forge 打包

安装

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

打包
`npm run make`

## 链接

<https://github.com/electron/i18n/tree/master/content/zh-CN>
<https://zhuanlan.zhihu.com/p/27740025>\
<https://zhuanlan.zhihu.com/p/399390542>
