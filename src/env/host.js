import env from './env'

const hostMap = {
  prod: 'https://www.prod.project.com/',
  uat: 'https://www.uat.project.com/',
  dev: 'https://www.dev.project.com/'
}

// 服务器路径配置
export default hostMap[env]