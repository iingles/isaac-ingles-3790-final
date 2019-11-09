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
      modalAction: '',
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
    },
    changeModalDisplay(state) {
      state.modalWindow.showModal = !state.modalWindow.showModal
      return state.modalWindow
    },
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
      commit('changeLoggedInStatus', user)
      //set login to true, route to main app
      router.replace('/').catch(err => {console.log(err)})
    },
    userLoggedOut({commit}, user) {
      commit('changeLoggedInStatus', user)
      router.replace('/login').catch(err => {console.log(err)})
    },
    displayModal({commit}, modalWindow) {
      commit('changeModalDisplay', modalWindow)

    },
  },
 
})
