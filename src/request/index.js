import __axios from './axios-factory'

/**
 * @param { String } url => api/member/login
 * @param { Array<Object> } params => [{data},{defaultData},{injectConfig}]
 * @return { Promise } axios.instance
 */
class Request {
  get(url, params) {
    const [data, defaultData = {}] = params
    return __axios.get(url, { params: data })
      .then(response => response)
      .catch(() => ({ data: defaultData }))
  }
  post(url, params) {
    const [data, defaultData = {}, injectConfig] = params
    return __axios.post(url, data, injectConfig)
      .then(response => response)
      .catch(() => ({ data: defaultData }))
  }
  // TODO... more request method
}

export default new Request()