import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import modal from './modules/modal.js'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    modal
  }
})
