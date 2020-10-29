import * as types from './mutation-types'

export default {
  [types.UPDATE_USER_INFO](state, payload) {
    state.user = payload
  }
}