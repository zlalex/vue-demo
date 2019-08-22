
import env from './env.config'

const urlMap = {
  local: {
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

export default urlMap[env]
