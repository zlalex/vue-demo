import * as login from './login'

// 请求汇总
// 请求示例-promise：api.loginAsync(params, defaultData).then(data=>{...})
// 请求示例-async/await：async api.loginAsync(params, defaultData)
export default {
  ...login
}