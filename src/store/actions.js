// Mutations
import * as types from './mutations'

// User actions
export const login = ({ commit }, email, password) => {
  // Commit the change
  commit(types.LOGIN, 1)

  // Success!
  // return true
  return false
}

//
export const logout = ({ commit }) => {
  // LOGOUT
  commit(types.LOGOUT)
}

export const createGoogleMapsClient = ({commit}) => {
  commit(types.CREATE_CLIENT)
}

export const getGeolocation = ({ commit }) => {
  window.navigator.geolocation.getCurrentPosition((pos) => {
    commit(types.GET_CURRENT_POS, pos.coords)
  })
}
