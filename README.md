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

### 使用 Vuex 管理用户信息

```
```

### 使用 axios.cancelToken 取消重复且pending请求

### 路由懒加载

### urlMap

### 组件分割
