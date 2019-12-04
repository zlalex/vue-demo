import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

Vue.use(Router)

const routerComponents = []
const accessMenu = routerComponents.map(el => el.path.replace(/\/:id/, '')).filter(el => el)
const VueRouter = new Router({
  routes: [{
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
    children: routerComponents
  }]
})

VueRouter.beforeEach((to, from, next) => {
  if(accessMenu.length){
    let access = false
    if (to.path === '/') {
      access = !access
    } else {
      accessMenu.some(el => {
        if (to.path.includes(el) && el !== '/') {
          access = !access

          return true
        }
      })
    }
    access ? next() : next('/')
  }else{
    next()
  }
})

export default VueRouter
