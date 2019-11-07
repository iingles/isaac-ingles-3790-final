import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Dummy login stuff ( I don't know anything about authentication)
export default new Vuex.Store({
  state: {
    loggedIn: false,
    showHelp: false,
  },
  mutations: {
    'SET_LOGGEDIN'(state, loggedIn) {
      state.loggedIn = loggedIn
    },
    'SET_HELP'(state, showHelp) {
      state.showHelp = showHelp
    },
  },
  actions: {
    //using destructuring
    setLogin: ({commit}) => {
      commit('SET_LOGGEDIN')
    },
    setHelp: ({commit}) => {
      commit('SET_HELP')
    }
  },
  getters: {
    loggedIn: state => {
      return state.loggedIn
    },
    showHelp: state => {
      return state.showHelp
    }
  }
})
