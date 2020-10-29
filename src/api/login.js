import request from '../request'
import { url } from '../env'

/**
 * @example requestNameAsync = (...params) => request[requestMethod](requestUrl, ...param)
 */
// 登录相关请求汇总
export const loginAsync = (...params) => request.post(url.login, ...params)
export const logoutAsync = (...params) => request.get(url.logout, ...params)
export const getWeatherAsync = (...params) => request.get('https://v0.yiketianqi.com/api', params)
