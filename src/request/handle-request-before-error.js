import { ResponseData } from '../models'
import handleCancelRequest from './handle-cancel-request'

// 请求前异常处理
export default function (error) {
  error && handleCancelRequest(error.config)
  if (error && !error.data) {
    error.data = new ResponseData(
      {},
      -1,
      '请求时异常'
    )
  }

  // TODO... 异常上报处理
  return error
}