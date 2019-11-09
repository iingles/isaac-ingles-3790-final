import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      userName: '',
      email: 'default',
      password: '',
      permissions: 'admin',
      loggedIn: false,
    },
    modalWindow: {
      showModal: false,
      modalMessage: '',
      modalTitle: '',
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    userName(state) {
      return state.user.userName
    },
    modal(state) {
      return state.modalWindow
    }
  },
  mutations: {
    storeUser(state, user) {
      return state.user = user
    },
    changeLoggedInStatus(state) {
      state.user.loggedIn = !state.user.loggedIn
      return state.user
    },
    modalInfo(state, modalWindow) {
      state.modalWindow.showModal = modalWindow.show
      state.modalWindow.modalTitle = modalWindow.title
      state.modalWindow.modalMessage = modalWindow.message
    }
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
      router.replace('/login').catch(err => {})
    }
  },
 
})
