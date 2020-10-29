import axios from 'axios'
import { requestConfig } from '../config'
import getRequestName from './get-request-name'

// 阻止重复请求，非双击情况
const CancelToken = axios.CancelToken
const scopeConfig = { token: null }
const { CANCEL_MAP, webTokenName, hasWebRequestToken, contentType } = requestConfig
const transformRequestPayload = data => JSON.stringify(data)
const getToken = () => (Math.random() * 10).toString(32).slice(2)

export default function (config) {
  const requestName = getRequestName(config)
  if (!scopeConfig.token) {
    scopeConfig.token = getToken()
  }

  if (scopeConfig.token && hasWebRequestToken) {
    config.headers.common[webTokenName] = scopeConfig.token
  }

  // 同一次请求重复请求时，取消上一次请求
  requestName && CANCEL_MAP[requestName] && CANCEL_MAP[requestName]()
  config.cancelToken = new CancelToken(function executor(callback) {
    CANCEL_MAP[requestName] = callback
  })

  if (config.method === 'post' && config.headers['Content-Type'] === contentType.default) {
    config.transformRequest = [transformRequestPayload]
  }

  return config
}