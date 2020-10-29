import axios from 'axios'
import { host } from '../env'
import { requestConfig } from '../config'
import handleRequestBeforeError from './handle-request-before-error'
import handleRequestInterceptor from './handle-request-interceptor'
import handleRequestCallback from './handle-request-callback'
import handleRequestServerError from './handle-request-server-error'

const { contentType } = requestConfig
const axiosConfig = {
  baseURL: host,
  headers: {
    post: {
      'Content-Type': contentType.default,
    }
  },
}

// 请求拦截与响应拦截，异常处理
const __axios = axios.create(axiosConfig)
__axios.interceptors.request.use(handleRequestInterceptor, handleRequestBeforeError)
__axios.interceptors.response.use(handleRequestCallback, handleRequestServerError)

export default __axios
