import { requestConfig } from '../config'
import getRequestName from './get-request-name'

// 阻止重复请求，非双击情况
const { CANCEL_MAP } = requestConfig
export default function (config) {
  const requestName = getRequestName(config)
  requestName && CANCEL_MAP[requestName] && (CANCEL_MAP[requestName] = null)
}