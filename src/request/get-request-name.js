const re = /\/(\w)/g;
export const toKebabCase = value => value.replace(re, ($0, $1) => $1.toUpperCase())

// 将请求路径转成驼峰名 例：api/member/login => apiMemberLogin
export default function (config = { method: 'get', url: 'api' }) {
  const { method, url } = config
  if (url.includes('http')) {
    return `${method}Http`
  }
  const urlKebabCase = toKebabCase(url)
  return `${method}${urlKebabCase.charAt(0).toUpperCase()}${urlKebabCase.slice(1)}`
}
