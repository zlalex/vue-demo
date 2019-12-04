const config = require('./application.config')

const proxyTable = {
  '/': {
    target: config.proxyPath
  }
}

// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: './static',
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  devServer: {
    proxy: proxyTable
  }
}
