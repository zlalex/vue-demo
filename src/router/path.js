// 路由懒加载
const path = {
  index: resolve => require(['../components/views/index.vue'], resolve)
}

export default path
