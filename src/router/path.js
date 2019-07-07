const components = {
    index: resolve => require(['components/views/index'], resolve),
    login: resolve => require(['components/views/login/login'], resolve),
    defaultView: resolve => require(['components/views/index/default-view'], resolve),
    schedule: resolve => require(['components/views/schedule/schedule'], resolve)
}

export default {
    name: 'path',
    index: components.index,
    login: components.login,
    defaultView: components.defaultView,
    schedule: components.schedule
}