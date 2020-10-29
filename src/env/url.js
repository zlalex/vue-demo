import env from './env'
import urlPrefix from './url-prefix'
import prodUrl from './url-prod'
import uatUrl from './url-uat'
import devUrl from './url-dev'

const urlMap = { prodUrl, uatUrl, devUrl }
export const __url = urlMap[`${env}Url`]

const url = Object.keys(__url).reduce((total, api) => {
  total[api] = urlPrefix ? urlPrefix + __url[api] : __url[api]
  return total
}, {})

// 请求路径前缀配置 urlPrefix
// 获取当前环境Url
export default url