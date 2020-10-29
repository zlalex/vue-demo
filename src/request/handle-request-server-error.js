import { ResponseData } from '../models'
import handleCancelRequest from './handle-cancel-request'

export default function (serverError) {
  handleCancelRequest(serverError.config)
  // TODO... 待验证数据格式
  if (serverError.response && serverError.response.status > 400) {
    serverError.response = new ResponseData(
      {},
      serverError.response.status,
      serverError.response.statusText
    )
    return serverError.response
  }
  // TODO... 异常上报处理
  return new ResponseData(
    {},
    -1,
    '请求响应出错'
  )
}