import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from './components/element-ui'
import packages from './components/packages'
import './assets/iconfont/iconfont.css'
import './assets/css/index.styl'
import './assets/js/utils/register.js'

Vue.use(elementUI)
Vue.use(packages)

Vue.config.productionTip = false

// vue-cli3
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
