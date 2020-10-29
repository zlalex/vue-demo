const env = process.env.VUE_APP_ENV
const isProd = env === 'prod'
const isUat = env === 'uat'

module.exports = {
  publicPath: isProd || isUat ? '' : '/',
  outputDir: 'dist',
  assetsDir: './',
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 全局引入sass 新 sass-loader { prependData:'' } 旧版 { data:'' }
        prependData: `@import "@/styles/_variable.scss";`
      }
    }
  }
}