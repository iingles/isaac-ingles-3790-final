import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      userName: '',
      email: '',
      password: '',
      permissions: '',
      loggedIn: false,
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    userName(state) {
      return state.user.userName
    },
  },
  mutations: {
    storeUser(state, user) {
      return state.user = user
    },
    changeLoggedInStatus(state) {
      state.user.loggedIn = !state.user.loggedIn
      return state.user.loggedIn
    },
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
      commit('changeLoggedInStatus', user)
      //set login to true, route to main app
      router.replace('/').catch(err => {})
    },
    userLoggedOut({commit}, user) {
      commit('changeLoggedInStatus', user)
      router.replace('/').catch(err => {})
    }
  },
 
})
