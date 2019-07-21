import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import elementUI from './components/element-ui'
import './assets/css/index.styl'
import './assets/js/utils/register.js'

Vue.use(elementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  router,
  components: { App },
  template: '<App/>'
})
