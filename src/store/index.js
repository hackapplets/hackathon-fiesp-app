// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'

// Hooking
Vue.use(Vuex)

// Root things
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutations'

// Modules
import user from './modules/user'
import google from './modules/google'

// Export a new Store
export default new Vuex.Store({
  actions,
  types,
  getters,
  modules: {
    user,
    google
  }
})
