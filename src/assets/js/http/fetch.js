import axios from './axios.config'

const handlerRequestError = (error) => {
  if (error.data) {
    return error.data
  }

  return {
    code: -2,
    msg: '请求中止！'
  }
}

const Ajax = function () {}

Ajax.prototype = {
  get: (url, data) => axios.get(url, { params: data }).then(response => response.data).catch(handlerRequestError),
  post: (url, data) => axios.post(url, data).then(response => response.data).catch(handlerRequestError)
}

export default new Ajax()
