import { ResponseData } from '../models'
import { requestConfig, responseConfig } from '../config'

export default function (data, defaultData = {}) {
  const { dataName, successCode, errorMessageName } = requestConfig
  const { successCodeValue } = responseConfig
  const code = data[successCode]
  const result = data[dataName]
  const message = data[errorMessageName]

  return new ResponseData(
    code === successCodeValue ? result : defaultData,
    code,
    message
  )
}