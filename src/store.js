import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Dummy login stuff ( I don't know anything about authentication)
export default new Vuex.Store({
  state: {
    login: false,
    showHelp: false,
  },
  mutations: {
    'SET_LOGIN'(state, login) {
      state.login = login
    },
    'SET_HELP'(state, showHelp) {
      state.showHelp = showHelp
    },
  },
  actions: {
    userLogin: ({commit}) => {
      commit()
    },
    setLogin: ({commit}) => {
      commit('SET_LOGIN')
    },
    setHelp: ({commit}) => {
      commit('SET_HELP')
    }
  },
  getters: {
    login: state => {
      return state.login
    },
    showHelp: state => {
      return state.showHelp
    }
  }
})
