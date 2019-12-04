import env from './index'

const urlMap = {
  local: {
    login: '',
    api: ''
  },
  mock: {
    login: '',
    api: ''
  },
  prod: {
    login: '',
    api: ''
  },
  test: {
    login: '',
    api: ''
  },
  dev: {
    login: '',
    api: ''
  }
}

// 环境变量
// 当测试环境，开发环境，线上环境对应不同的域名时处理
console.log(env)

export default urlMap[env]
