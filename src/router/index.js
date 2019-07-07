import Vue from 'vue'
import Router from 'vue-router'
import path from './path'
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/login',
            component: path.login
        },
        {
            path: '/index',
            redirect: '/'
        },
        {
            path: '/',
            component: path.index,
            children: [{
                    path: '/',
                    component: path.defaultView
                },
                {
                    path: 'schedule',
                    component: path.schedule
                }
            ]
        }
    ]
})