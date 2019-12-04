import env from '@/env'

// 暂时没有用到环境变量
// 使用环境变量 env 时，ONLINE_URL 与 TEST_URL 在 urlMap 中配置
const DEVELOPMENT = env === 'local' || env === 'mock'
const ONLINE_URL = '/'
const TEST_URL = '/'
const CONTENT_TYPE = {
  'Content-Type': 'application/json;charset=utf-8'
}

const DATE_TIME = 24 * 60 * 60 * 1e3
export {
  ONLINE_URL,
  TEST_URL,
  DEVELOPMENT,
  CONTENT_TYPE,
  DATE_TIME
}
