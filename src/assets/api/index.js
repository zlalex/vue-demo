import globalUrl from './url'
import Ajax from '../js/http/fetch'

// 审核管理
const testRequest = (params) => Ajax.get(globalUrl.testRequest, params).then(res=>res.data).catch(res=>res.data)

export {
  testRequest
}
