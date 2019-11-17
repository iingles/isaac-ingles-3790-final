//router is imported in the main store file, store.js

const state = {
    modalWindow: {      
    showModal: false,
    id: 0,
    modalMessage: 'Message Text',
    modalTitle: 'Dialog',
    modalAction: 'default',
    },
}

const getters = {
    modalWindow(state) {
    return state.modalWindow
    },
    modalAction(state) {
    return state.modalWindow.modalAction
    }
}

const mutations = {
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
}

const actions = {
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
}

export default {
    state,
    getters,
    mutations,
    actions,
}