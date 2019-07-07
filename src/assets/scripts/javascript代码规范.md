# JavaScript代码规范

所有的代码规范基本遵循《编写可维护的JavaScript》，并针对该项目新增部分规范与补充说明。

## 该目录下的文件说明

ajax.js : 在插件 axios.js 的基础上，封装的 request 请求函数，配合 config.js 使用。

axiosConfig.js : axios 配置项。

common.js : 绑定在 Vue.prototype 上的方法，在实例中可以通过 this.xxx 调用。

config.js : 项目的配置文件，服务端地址配置或返回数据(response)配置。

globalApi.js : module.exports 导出的 request api，通过 require() 函数引入。

tools.js : 常用函数集合。

## 缩进

强制要求 4 个空格符作为缩进要求。

## 命名规范

