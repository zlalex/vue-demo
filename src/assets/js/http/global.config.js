const DEVELOPMENT = process.env.NODE_ENV === 'development'
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
