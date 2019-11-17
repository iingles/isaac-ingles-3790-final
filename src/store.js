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
    changeLoggedInStatus(state, user) {
      state.user.userName = user.userName
      state.user.password = user.password
      state.user.loggedIn = user.loggedIn
      return state.user
    },
    modalSelectLogout(state, modalAction) {
      //Check for yes/no at logout
      state.modalWindow.modalAction = modalAction
      return state.modalWindow.modalAction
    },
    modalSelectEditor(state, modalAction) {
      //check for save/cancel in the editor
      state.modalWindow.modalAction = modalAction
      return state.modalWindow.modalAction
    },
    changeModalDisplay(state, modal) {
      if(modal.title != '' || modal.message != '') {
        state.modalWindow.modalTitle = modal.title
        state.modalWindow.modalMessage = modal.message
        state.modalWindow.showModal = true
      }  else {
        //if there is no message/title to display, don't show the modal
        state.modalWindow.showModal = false
      }
      return state.modalWindow
    },
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
      //change the user's login status
      commit('changeLoggedInStatus', user)
      //route to main app
      router.replace('/').catch(err => {/*catching duplicate route error*/})
    },
    userLoggedOut({commit}, user) {
      commit('changeLoggedInStatus', user)
      //route back to login screen
      router.replace('/login').catch(err => {/*catching duplicate route error*/})
    },
    modalOption({commit}, modalWindowOption) {
      //handle the modal window option
      if(this.state.modalWindow.modalTitle === 'Logout') {
        commit('modalSelectLogout', modalWindowOption)
      }
      
    },
    displayModal({commit}, modal) {
      //toggle the display state of the modal window
      commit('changeModalDisplay', modal)
    },
  },
})
