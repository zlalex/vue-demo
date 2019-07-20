
const _toString = Object.prototype.toString

const isUndef = val => typeof val === 'undefined'

const isComplex = val => val !== null && typeof val === 'object'

const isArr = val => _toString.call(val).slice(8, -1) === 'Array'

const isStr = val => _toString.call(val).slice(8, -1) === 'String'

const isFunc = val => _toString.call(val).slice(8, -1) === 'Function'

const deepClone = val => {
  if (!val) { return val }

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
          for (var key in val) {
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

const dateFormatter = (style = 'YYYY-MM-DD hh:mm:ss') => {
  const regMap = {
    'M+': this.getMonth() + 1,
    'D+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  }

  if (/(Y+)/.test(style)) {
    style = style.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let key in regMap) {
    if (new RegExp('(' + key + ')').test(style)) {
      style = style.replace(RegExp.$1, (RegExp.$1.length === 1) ? (regMap[key]) : (('00' + regMap[key]).substr(('' + regMap[key]).length)))
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
  delCookie
}
