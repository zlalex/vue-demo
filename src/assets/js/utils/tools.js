import Qs from 'qs'
import ElementUI from '@/components/element-ui'
// echarts 按需加载
const config = require('../../../../application.config')
const _toString = Object.prototype.toString

const isUndef = val => typeof val === 'undefined'

const isComplex = val => val !== null && typeof val === 'object'

const isArr = val => _toString.call(val).slice(8, -1) === 'Array'

const isStr = val => _toString.call(val).slice(8, -1) === 'String'

const isFunc = val => _toString.call(val).slice(8, -1) === 'Function'

const deepClone = val => {
  if (!val) {
    return val
  }

  var result
  const types = [Number, String, Boolean]

  types.forEach(function (type) {
    if (val instanceof type) {
      result = type(val)
    }
  })

  if (isUndef(result)) {
    if (isArr(val)) {
      result = []
      val.forEach(function (item, i) {
        result[i] = deepClone(item)
      })
    } else if (isComplex(val)) {
      if (!val.prototype) {
        if (val instanceof Date) {
          result = new Date(val)
        } else {
          result = {}
          for (let key in val) {
            result[key] = deepClone(val[key])
          }
        }
      }
    } else {
      result = val
    }
  }

  return result
}

const dateFormatter = (style = 'YYYY-MM-DD hh:mm:ss', date) => {
  const _this = date || new Date()
  const regMap = {
    'M+': _this.getMonth() + 1,
    'D+': _this.getDate(),
    'h+': _this.getHours(),
    'm+': _this.getMinutes(),
    's+': _this.getSeconds()
  }

  if (/(Y+)/.test(style)) {
    style = style.replace(RegExp.$1, (_this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let key in regMap) {
    if (new RegExp('(' + key + ')').test(style)) {
      style = style.replace(RegExp.$1, RegExp.$1.length === 1 ? regMap[key] : ('00' + regMap[key]).substr(('' + regMap[key]).length))
    }
  }

  return style
}

const getUrlParams = url => {
  const pattern = /(\w+)=(\w+)/ig
  const parames = {}

  url.replace(pattern, function (a, b, c) {
    parames[b] = c
  })

  return parames
}

const getQueryString = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }

  return null
}

const setCookie = (name, value) => {
  const days = 30
  const expires = new Date()

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + expires.toGMTString()
}

const getCookie = name => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const result = document.cookie.match(reg)

  if (result && result.length) {
    return unescape(result[2])
  }

  return null
}

const delCookie = name => {
  const expires = new Date()
  const cookie = getCookie(name)

  expires.setTime(expires.getTime() - 1)

  if (cookie) {
    document.cookie = name + '=' + cookie + ';expires=' + expires.toGMTString()
  }
}

// vue methods
const downloadFile = (url, params) => {
  try {
    const queryString = Qs.stringify(params)
    const openUrl = `${config.proxyPath}${url}?${queryString}`
    window.open(openUrl)
  } catch (e) { }
}

const goRoute = function (path, params) {
  isComplex(params) ? this.$router.push({
    path: path,
    query: params
  }) : this.$router.push(path)
}

const message = (text, type, close, duration) => {
  isStr(text) && ElementUI.Message({
    message: text,
    type: type || 'success',
    showClose: close,
    duration: duration ? 0 : 3000
  })
}

const alert = (text, callback) => {
  isStr(text) && ElementUI.MessageBox.alert(text, '提示', {
    confirmButtonText: '确认',
    callback: action => {
      isFunc(callback) && callback(action)
    }
  })
}

const confirm = (message, success, cancel) => {
  // 保持文档使用规则不变，confirm方法返回 promise 对象
  return (isComplex(message) || isStr(message)) && ElementUI.MessageBox.confirm(message.message || message, message.title || '提示', {
    confirmButtonText: message.choose || '确认',
    cancelButtonText: message.another || '取消',
    showClose: !!message.close,
    type: 'warning'
  }).then(() => {
    isFunc(success) && success()
  }).catch(() => {
    isFunc(cancel) && cancel()
  })
}

export {
  isUndef,
  isComplex,
  isArr,
  isStr,
  isFunc,
  deepClone,
  dateFormatter,
  getUrlParams,
  setCookie,
  getCookie,
  delCookie,
  goRoute,
  message,
  alert,
  confirm,
  getQueryString,
  downloadFile
}
