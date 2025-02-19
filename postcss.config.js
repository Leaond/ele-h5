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
  
