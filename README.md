<!--
 * @Date: 2025-02-21 11:39:37
 * @LastEditors: liuzhengliang
 * @LastEditTime: 2025-02-21 13:48:26
 * @Description:
-->

# vue3+vite+pinia移动端项目

1. 创建项目
2. 配置husky commitlint prettier eslint
3. 安装使用postcss以及配套插件

```js
npm i -D postcss autoprefixer postcss-pxtorem
```

配置postcss

```js
import autoprefixer from 'autoprefixer';
import postcssPxtorem from 'postcss-pxtorem';
/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['Android >=4.0', 'ios >=7']
    }),
    postcssPxtorem({
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root']
    })
  ]
};
```

在main.ts中添加代码计算设备大小

```js
const rootValue = 16;
const rootWidth = 390;
const deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px';
```

安装normalize.css

```js
npm i normalize.css
npm i sass -D
```

在app.vue中引入normalizecss

配置路径别名1.在vite.config.ts中设置路径别名2.在根目录上配置tsconfig.json，如果没有该文件需要自主创建。并配置3.如果path模块引入报错，需要安装@types/node插件。

使用iconfont来替代图片资源1.创建项目，将图标添加到项目里面2.下载项目，并且将里面的资源放到项目里：/assets/iconfont 3.再index.html里面添加引用css样式文件：
<link rel="stylesheet" href="/src/assets/iconfont/iconfont.css" />
