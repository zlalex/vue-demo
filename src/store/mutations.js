import * as types from './mutations-type'

const mutations = {
  [types.SET_USERINFO] (state) {
    console.log('mutations', state)
  }
}

export default mutations
