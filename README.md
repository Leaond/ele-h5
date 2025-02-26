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

Husky 是一个 Git 钩子管理器，允许你在仓库级别方便地配置钩子脚本；而 Commitlint 则是用来规范 Git 提交信息的工具，确保每次提交都遵循一定的格式标准。

配置husky和commitlint安装 `@commitlint/config-conventional`是commitlint推荐的提交校验规则

```js
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional
```

初始化husky脚本

```js
npx husky init
或
pnpm exec husky init
```

初始化之后，会在项目的根目录中创建一个.husky的文件夹，下面会有一个\_的文件夹。同时在package.json中会添加一行脚本命令``. 接下来在.husky的根目录下创建`commit-msg`文件，不要给任何的后缀名。里面添加脚本

```js
// commit-msg
npx commitlint --edit $1
```

完成配置之后我们尝试一下提交校验

```js
git add . -m '测试提交'
```

如果配置没出别的问题.那么此时应该会提示校验不通过，并给出更改提示

```js
> git -c user.useConfigOnly=true commit --quiet --allow-empty-message --file -
⧗   input: 测试提交
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg script failed (code 1)
```
