module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-undef': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}