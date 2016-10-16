// The mutations
import * as types from './../mutations'

// Import Google
import {createClient} from '@google/maps'

// State
const state = {
  // Google Maps Client
  mapsClient: null
}

// Mutations
const mutations = {
  // Create new Google Maps Client
  [types.CREATE_CLIENT] (state) {
    //
    state.mapsClient = createClient({
      key: '...'
    })
  }
}

// Export the module
export default {
  state,
  mutations
}
