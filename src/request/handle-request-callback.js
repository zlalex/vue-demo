import { ResponseData } from '../models'
import handleCancelRequest from './handle-cancel-request'
import handleRequestResponse from './handle-request-response'

export default function (responsePayload) {
  const { data, config } = responsePayload
  handleCancelRequest(config)
  if (config.url.includes('http')) {
    // 第三方接口直接返回数据
    return new ResponseData(
      data,
      responsePayload.status,
      responsePayload.statusText
    )
  }
  // TODO... 待验证数据格式是否符合 { data:{}, code:0, msg:'' }
  responsePayload.data = handleRequestResponse(data)
  return responsePayload
}