import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

Vue.use(Router)

// 动态路径参数 以冒号开头
export default new Router({
  routes: [
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/error',
      component: path.empty
    },
    {
      path: '/',
      component: path.index,
      children: [
        {
          path: '/',
          component: path.empty
        },
        {
          path: 'dataCharts',
          component: path.dataCharts
        },
        {
          path: 'dataCharts/:id',
          component: path.dataChartsEdit
        }
      ]
    }
  ]
})
