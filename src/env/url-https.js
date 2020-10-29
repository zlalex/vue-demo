import env from './env'

const httpsMap = {
  prod: {
    cdn: 'https://www.prod.cdn.com/'
  },
  uat: {
    cdn: 'https://www.uat.cdn.com/'
  },
  dev: {
    cdn: 'https://www.dev.cdn.com/'
  },
  base: {
    baidu: 'https://www.baidu.com/'
  }
}

// 外部链接配置项(CDN,第三方链接)
export default {
  ...httpsMap[env],
  ...httpsMap.base
}