import env from './env'

const urlPrefix = {
  prod: 'api/',
  uat: 'api/',
  dev: 'api/'
}

export default urlPrefix[env]