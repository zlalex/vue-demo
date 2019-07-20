import globalUrl from './url'
import Ajax from '../js/http/fetch'

const postAuthorizations = (data) => Ajax.post(globalUrl.authorizations, data)

export {
  postAuthorizations
}
