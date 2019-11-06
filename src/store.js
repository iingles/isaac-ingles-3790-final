import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Dummy login stuff ( I don't know anything about authentication)
export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    'SET_LOGIN'(state, login) {
      state.login = login
    },
  },
  actions: {
    userLogin: ({commit}, order)  {
      commit()
    },
    setLogin: ({commit}) => {
      commit('SET_LOGIN')
    },
  },
})
