// 生产环境路由懒加载
// TODO... chunkName is undefined
// module.exports = file => () => import('@/pages/' + file + '.vue')
module.exports = file => resolve => require(['@/pages/' + file + '.vue'], resolve)