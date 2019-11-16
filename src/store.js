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
      modalMessage: 'Message Text',
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
    modalWindow(state) {
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
    modalSelectedOption(state, modalAction) {
      state.modalWindow.modalAction = modalAction
      return state.modalWindow.modalAction
    },
    changeModalDisplay(state, modal) {
      if(modal.title || modal.message) {
        state.modalWindow.modalTitle = modal.title
        state.modalWindow.modalMessage = modal.message
      }      
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
    modalOption({commit}, modalWindowOption) {
      //handle the modal window option
      commit('modalSelectedOption', modalWindowOption)
    },
    displayModal({commit}, modal) {
      //toggle the display state of the modal window
      commit('changeModalDisplay', modal)
    },
  },
})
