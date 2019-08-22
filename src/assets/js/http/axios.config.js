import axios from 'axios'
import {
  ONLINE_URL,
  TEST_URL,
  DEVELOPMENT,
  CONTENT_TYPE
} from './global.config'

const CancelToken = axios.CancelToken

const CANCEL_OBJ = {}

const baseURL = DEVELOPMENT ? TEST_URL : ONLINE_URL

const config = {
  baseURL: baseURL,
  headers: {
    post: CONTENT_TYPE
  }
}

const transformRequestPayload = data => JSON.stringify(data)

const getRequestName = (config) => {
  let {method, url} = config
  let map = url.split('/')

  if (map && map.length) {
    let index = map.findIndex(el => el === 'api')
    let urlName = map[index + 2]

    method = method.charAt(0).toUpperCase() + method.slice(1)
    urlName = urlName.charAt(0).toUpperCase() + urlName.slice(1)
    return `cancel${method + urlName}`
  }
  return false
}

const cancelCallback = config => {
  const cancelName = getRequestName(config)
  cancelName && CANCEL_OBJ[cancelName] && (CANCEL_OBJ[cancelName] = null)
}

// token添加 cancelToken添加
const interceptorsRequest = config => {
  // json web token
  const ADX_TOKEN = sessionStorage.getItem('ADX_TOKEN')

  if (ADX_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${ADX_TOKEN}`
  }

  // cancel pedding request
  const cancelName = getRequestName(config)

  cancelName && CANCEL_OBJ[cancelName] && CANCEL_OBJ[cancelName]()
  config.cancelToken = new CancelToken(function executor (cb) {
    CANCEL_OBJ[cancelName] = cb
  })

  if (config.method === 'post') {
    config.transformRequest = [transformRequestPayload]
  }

  return config
}

// 创建axios instance
const instance = axios.create(config)

// 请求拦截 cancelToken移除
instance.interceptors.request.use(interceptorsRequest, error => {
  error.data = {
    code: -1,
    msg: '请求错误！'
  }

  cancelCallback(error.config)
  return error
})

// 响应拦截 cancelToken移除
instance.interceptors.response.use(response => {
  cancelCallback(response.config)
  return response
}, error => {
  cancelCallback(error.config)
  return error.response
})

export default instance
