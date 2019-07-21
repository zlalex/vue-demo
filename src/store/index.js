import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
