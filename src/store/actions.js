import * as types from './mutations-type'

const loginAction = ({state, dispatch, commit}) => {
  console.log('-- actions --', state)
  setTimeout(() => {
    commit(types.SET_USERINFO)
  }, 1e3)
}

export {
  loginAction
}
