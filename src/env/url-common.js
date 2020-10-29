import { requestUrl } from '../config'

export default class CommonApi {
  constructor() {
    Object.keys(requestUrl).forEach(url => {
      const path = requestUrl[url]
      this[url] = path
    })
  }
}