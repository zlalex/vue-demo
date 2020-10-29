import Vue from 'vue'
import Router from 'vue-router'
import pagePath from './page-path'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: pagePath.index
  }
]

export default new Router({ routes })