
const REG_TELPHONE = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
const REG_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const REG_MOBILE_PHONE = /^1[34578]\d{9}$/
const REG_POSTAL_CODE = /[1-9]\d{5}(?!\d)/
const REG_NUMBER = /^([1-9])[0-9]*$/
const REG_STRING = /(^[\u4E00-\u9FA5A-Za-z0-9_]+){2,10}$/
const REG_IP_CODE = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/
const REG_HTTP_URL = /[a-zA-z0-9]+:\/\/[^\s]*$/

export {
  REG_TELPHONE,
  REG_EMAIL,
  REG_MOBILE_PHONE,
  REG_POSTAL_CODE,
  REG_NUMBER,
  REG_STRING,
  REG_IP_CODE,
  REG_HTTP_URL
}
