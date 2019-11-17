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
      id: 0,
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
    modalEditorConfirm(state, modalAction) {
      //check for save/cancel in the editor
      state.modalWindow.modalAction = modalAction
      return state.modalWindow.modalAction
    },
    changeModalDisplay(state, modal) {
      if(modal.id != 0) {
        state.modalWindow.id = modal.id
        state.modalWindow.modalTitle = modal.title
        state.modalWindow.modalMessage = modal.message
        state.modalWindow.showModal = true
      }  else {
        //if the id is zero, there is no message and don't show the modal
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
      let id = this.state.modalWindow.id
      if(id === 1) {
        commit('modalSelectLogout', modalWindowOption)
      }
      if(id === 2) {
        commit('modalEditorConfirm', modalWindowOption)
      }
    },
    displayModal({commit}, modalInfo) {
      //toggle the display state of the modal window
      commit('changeModalDisplay', modalInfo)
    },
  },
})
