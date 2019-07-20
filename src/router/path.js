const path = {
  index: resolve => require(['../components/views/index.vue'], resolve),
  empty: resolve => require(['../components/views/empty.vue'], resolve),
  // DSP
  dataCharts: resolve => require(['../components/views/data-charts/data-charts.vue'], resolve),
  dataChartsEdit: resolve => require(['../components/views/data-charts/data-charts-edit.vue'], resolve)
}

export default path
