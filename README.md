# 基于Vue开发后台管理系统的基础架构

## 项目依赖

```shell
# 淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

# 基础依赖
$ cnpm install axios vuex

$ cnpm install element-ui stylus stylus-loader --save-dev

# element-ui 按需引入
$ cnpm install babel-plugin-component -D

# vendor.js 检测
cnpm install webpack-bundle-analyzer --save-dev
```

将 .babelrc 修改为
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

## 文件目录

> 待完善...

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
  │    │
  │    └─ .../
  │    │
  │    └─ .../
  │
  ├─ .../
  │
  ├─ .../
  │
  └─ .../
       │
       └─ ...
       │
       └─ ...
       │
       └─ ...
       │
       └─ ...
```
