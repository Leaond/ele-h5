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
      //      // 要转化的单位
      //    unitToConvert: 'px',
      //    // UI设计稿的大小
      //    viewportWidth: 1920,
      //    // 转换后的精度
      //    unitPrecision: 6,
      //    // 转换后的单位
      //    viewportUnit: 'vw',
      //    // 字体转换后的单位
      //    fontViewportUnit: 'vw',
      //    // 能转换的属性，*表示所有属性，!border表示border不转
      //    propList: ['*'],
      //    // 指定不转换为视窗单位的类名，
      //    selectorBlackList: ['ignore-'],
      //    // 最小转换的值，小于等于1不转
      //    minPixelValue: 1,
      //    // 是否在媒体查询的css代码中也进行转换，默认false
      //    mediaQuery: false,
      //    // 是否转换后直接更换属性值
      //    replace: true,
      //    // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      //    exclude: [],
      //    // 包含那些文件或者特定文件
      //    include: [],
      //    // 是否处理横屏情况
      //    landscape: false
    })
  ]
};
