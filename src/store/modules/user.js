// The mutations
import * as types from './../mutations'

// State
const state = {
  // If the user is logged
  logged: true,
  // User position
  pos: null,
  // User ID
  id: null
}

// Mutations
const mutations = {
  // Login the user
  [types.LOGIN] (state, id) {
    state.logged = true
    state.id = id
  },
  // Loggout the user
  [types.LOGOUT] (state) {
    state.logged = false
    state.id = null
  },
  [types.GET_CURRENT_POS] (state, pos) {
    state.pos = pos
  }
}

// Export the module
export default {
  state,
  mutations
}
