// 懒加载配置项
const NODE_ENV = process.env.NODE_ENV || 'production'
const __require = require('@/router/handle-require-' + NODE_ENV + '.js')

export default __require