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
      loggedIn: true,
    },
    modalWindow: {
      showModal: false,
      modalMessage: 'Message',
      modalTitle: 'Dialog',
      modalAction: 'default',
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
    },
    modalAction(state) {
      return state.modalWindow.modalAction
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
      return state.modalWindow
    },
    modalSelectedOption(state, modalWindowOption) {
      return state.modalWindow.modalAction = modalWindowOption
    },
    changeModalDisplay(state, modalWindowMessage) {
      state.modalWindow.modalMessage = modalWindowMessage
      state.modalWindow.showModal = !state.modalWindow.showModal
      return state.modalWindow
    },
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
      //change the user's login status
      commit('changeLoggedInStatus', user)
      //set login to true, route to main app
      router.replace('/').catch(err => {console.log(err)})
    },
    userLoggedOut({commit}, user) {
      commit('changeLoggedInStatus', user)
      router.replace('/login').catch(err => {console.log(err)})
    },
    modalSelectedOption({commit}, modalWindowOption) {
      //handle the modal window option
      commit('modalSelectedOption', modalWindowOption)
    },
    displayModal({commit}, modalWindowMessage) {
      //toggle the display state of the modal window
      commit('changeModalDisplay', modalWindowMessage)
    },
  },
})
