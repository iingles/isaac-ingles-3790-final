import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'
import user from './modules/user.js'
import modal from './modules/modal.js'
import searchResults from './modules/searchResults.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  getters: {

  },
  mutations: {
 
  },
  actions: {
 
  },
  modules: {
    user,
    modal,
    searchResults,
  }
})
