# 基于 Vue 开发后台管理系统

零零碎碎, 写中后台系统时的一些个人看法.

## 项目依赖

```shell
# 淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

# 基础依赖
$ cnpm install axios vuex

$ cnpm install element-ui stylus stylus-loader --save-dev

# element-ui 按需引入
$ cnpm install babel-plugin-component --save-dev

# vendor.js 检测
$ cnpm install webpack-bundle-analyzer --save-dev

# 注册环境变量
$ cnpm install cross-env --save-dev
```

### Element-UI按需加载 `.babelrc` 修改为

```js
{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "component",
      [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
  ]
}
```

### 注册环境变量

1. step1 `package.json`

执行 `npm` 命令时注入环境变量 `VUE_APP_ENV` 至 `process.env` 对象中

```json
{
  "scripts": {
    "dev": "cross-env VUE_APP_ENV=local webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "build": "cross-env VUE_APP_ENV=prod node build/build.js",
    "build:dev": "cross-env VUE_APP_ENV=dev node build/build.js",
    "build:test": "cross-env VUE_APP_ENV=test node build/build.js"
  }
}
```

2. step2 `webpack.base.conf.js`

通过 `webpack.DefinePlugin` 在项目中注册一个全局常量, 用来接收 `process.env.VUE_APP_ENV`

```js
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VUE_APP_ENV: JSON.stringify(process.env.VUE_APP_ENV)
    }),
  ]
}
```

3. step3 `.eslintrc.js`

解禁 eslint 对未声明的变量报错

```js
{
  globals: {
    'VUE_APP_ENV': true
  }
}
```

4. step4 `env.config.js`

```js
// env.config.js
const ENV = VUE_APP_ENV

export default ENV

// api.config.js
import env from './env.config.js'

// 对应执行 `npm` 命令时注入环境变量 `VUE_APP_ENV` 的值
const urlMap = {
  local: {
    login: ''
    api: ''
  },
  prod: {
    login: ''
    api: ''
  },
  test: {
    login: ''
    api: ''
  },
  dev: {
    login: ''
    api: ''
  }
}

export default urlMap[env]
```

## 文件目录

```
static  // 静态资源文件，
  |
  ├─ ...
  |
 src    // 开发目录文件
  |
  ├─ main.js
  |
  ├─ assets/
  │    │
  │    └─ .../
  │
  └─ .../
       │
       └─ ...
```

### Vue 文档相关

```
1. 预响应值需给初始值。
2. Object.freeze()锁定对象不参与响应。
3. vue实例方法和周期函数中不使用箭头函数。
4. vue周期函数有[beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed]
5. v-once[一次性插值，不再更新]
6. 模板中只能访问全局变量的一个白名单，如 Math 和 Date 。不能在模板表达式中访问自定义的全局变量。
7. 方括号内的值作为动态参数: `v-bind:[attribute],v-on:[eventName],v-slot:[slotName]`。
8. 动态参数避免运算逻辑。
9. 动态参数的值不为null, undefind。
10. 模块中的逻辑运算，都应该用计算属性代替（computed）。
11. 计算属性依赖响应式数据（data中的属性）。
12. 计算属性与方法的缓存合理利用，可以优化性能，计算一次性复杂运算数据+简单多次运算数据。
13. 慎用watch属性，勿滥用。
14. 默认情况，被计算的属性不能再赋值，如果计算属性需要重新赋值，计算属性提供get,set方法（不推荐）。
15. watch中可以使用异步函数（ajax），计算属性不行（computed）。
16. 不推荐同时使用 v-if 和 v-for，v-for的优先级比v-if高。
17. v-for遍历数组时(value,index) in array, 遍历对象时(value, key) in object。
18. v-for遍历对象时的顺序是按照Object.keys()遍历。# {key: value}中key的顺序 [0-9,$,A-Z,a-z,中文,_ ...]
19. v-for渲染列表时, :key为必须属性。
20. 原生dom事件 $event。
21. vue 事件修饰符号：.stop(阻止单击事件继续传播)；.prevent(提交事件不再重载页面)，.capture，.self(自身元素触发事件)，.once(触发一次)，.passive(优化移动端事件，参见文档)。
22. v-on:keyup 按键事件，# keyCode 按键码尽量不用(新版被废弃)
23. v-on:click.[left, right, middle]鼠标修饰符.
24. 在文本区域插值 (<textarea>{{text}}</textarea>) 并不会生效，应用 v-model 来代替。
25. v-model 语法糖在不同的表单元素上，$emit的事件也不同，input、textarea元素绑定的是：value和input，checkbox、radio绑定的是checked属性和change事件；select将value作为prop并将 change作为事件。
26. v-model 语法糖在自定义组件中可以自定义传值。
27. v-model 修饰符有[.lazy(把默认的input事件切换成change事件), .number, .trim]
27. 注册组件Vue.component(组件名称, {
  data(){
    return {
      name: 'Alex'
    }
  },
  template:`
    <div>
    {{name}}
    </div>
  `
}), 为避免数据引用地址混肴，data必须是一个函数。

28. 组件接收参数props="params[Object, Array]"
29. 组件自定义事件$emit('事件名称', 传递值)
30. v-model === this.$emit('input', value)
31. <slot/> 占位标签 <div class="name" componentName="item">hello<slot></slot></div> === <item>Alex</item> === <div class="name">Hello Alex</div>
32. 动态组件 <div :is="componentName"></div> === componentName ? 'var-title' : 'var-nav'
33. 组件命名方式[kebab-case(短横线), PascalCase(大驼峰)]
34. 组件注册分为全局注册(Vue.component(...))和局部注册(export default { components: a: import A from './A.vue'})
35. Props单向数据流：如果局部希望使用 prop 数据或改变局部变量，则data: this[props].data，如果局部依赖 prop 数据显示，则computed: this[props].data。(参见文档)
36. 自定义事件修饰符号.sync === this.$emit('eventName:dataName', value) === :attr.sync="dataName"(详见文档)
37. v-slot 只能添加在 <template> 上，<template v-slot="slotName"> === <slot name="slotName"> === <template #slotName>
38. 动态指令参数也可以用在 v-slot 上，来定义动态的插槽名<template v-slot:[slotName]>
39. slot-scope已经废弃使用，<slot slot-scope="scopeData">{{scopeData.msg}}</slot> === <slot :scopeData="data">{{scopeData.msg}}</slot>(存疑，详见文档) === <template v-slot="slotName">{{slotName.data.msg}}</template>
40. 区别动态组件和异步组件，动态组件:is="componentName"，异步组件Vue.component('componentName',()=>import('./componentpath,vue'))(详见文档)
41. $refs 只会在组件渲染完成之后生效，并且它们不是响应式的。应该避免在模板或计算属性中访问 $refs。
42. 组件依赖注入 provide 和 inject。
```

### 使用 Vuex 管理用户信息

### 使用 axios.cancelToken 取消重复且pending请求

### 路由懒加载

### urlMap

### 组件分割

### SMART
