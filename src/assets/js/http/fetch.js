import axios from './axios.config'

const handlerRequestError = (error) => {
  if (error.data) {
    return error.data
  }

  // 当没有 error.data 时，说明触发了 cancelToken 逻辑
  return {
    code: -2,
    msg: '频繁操作！'
  }
}

const Ajax = function () {}

Ajax.prototype = {
  get: (url, data) => axios.get(url, { params: data }).then(response => response.data).catch(handlerRequestError),
  post: (url, data) => axios.post(url, data).then(response => response.data).catch(handlerRequestError)
}

export default new Ajax()
