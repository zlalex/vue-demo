// echarts 按需加载
const config = require('../../../../application.config')

if(config.hasECharts){
  const echarts = require('echarts/lib/echarts');

  require('echarts/lib/chart/line')
  require("echarts/lib/chart/pie");
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

  Vue.prototype.$echarts = echarts
}

import Vue from 'vue'
import {
  goRoute,
  message,
  alert,
  confirm,
  downloadFile
} from './tools'

// 挂载 Vue 原型方法
Vue.prototype.$BUS = new Vue()
Vue.prototype.$goRoute = goRoute
Vue.prototype.$message = message
Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$downloadFile = downloadFile

document.addEventListener('error', function (e) {
  const elem = e.target

  if (elem.tagName.toLowerCase() === 'img') {
    // elem.src = `${process.env.BASE_URL}default-img.png`
  }
}, true)
