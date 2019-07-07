// import framework && plugins
import Vue from 'vue'
import router from 'router'

// import components
import root from 'components/root'
import elementUI from 'components/element-ui'
import layoutPackage from 'components/packages/layout'
import themes from 'components/packages/themes'

// import project scripts
import 'assets/scripts/common'
import store from './store'
import { Tools } from 'assets/scripts/tools'

const globalApi = require('assets/scripts/globalApi');

window.$tools = new Tools();
window.globalApi = globalApi;

// import project styles
import 'assets/styles/include.styl'
import 'font-awesome/css/font-awesome.min.css'

// setting
Vue.use(elementUI);
Vue.use(layoutPackage);
Vue.use(themes);
Vue.config.productionTip = false;

new Vue({
    el: '#root',
    router,
    store,
    components: { root },
    template: '<root/>'
})