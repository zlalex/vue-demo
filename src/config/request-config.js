// 请求相关的配置项
export default {
  dataName: 'result',
  successCode: 'resultCode',
  errorMessageName: 'msg',
  CANCEL_MAP: {}, // axios CancelToken map
  hasWebRequestToken: false, // 是否携带 token
  webTokenName: 'token', // json web token name
  contentType: {
    default: 'application/json',
    formData: 'multipart/form-data',
    emptyParam: 'application/x-www-form-urlencoded'
  }
}