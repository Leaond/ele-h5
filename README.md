# vue3+vite+pinia移动端项目
1. 创建项目
2. 配置husky commitlint prettier eslint 
3. 安装使用postcss以及配套插件
```js
npm i -D postcss autoprefixer postcss-pxtorem
```
配置postcss
```js
import autoprefixer from 'autoprefixer'
import postcssPxtorem from 'postcss-pxtorem'
/** @type {import('postcss-load-config').Config} */
export default  {
    plugins: [
        autoprefixer({
            overrideBrowserslist:['Android >=4.0','ios >=7']
        }),
        postcssPxtorem({
            rootValue:16,
            propList:['*'],
            selectorBlackList:[':root']
        })
    ],
  }
  
```
在main.ts中添加代码计算设备大小
```js
const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth*rootValue)/rootWidth + 'px'
```

安装normalize.css
```js
npm i normalize.css
npm i sass -D
```

在app.vue中引入normalizecss