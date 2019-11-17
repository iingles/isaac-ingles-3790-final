//Module for the "user" state store
//not sure if I need to import router here
import router from '../../router'

const state = {
    user: {
        name: '',
        userName: '',
        email: 'default',
        password: '',
        permissions: 'admin',
        loggedIn: true,
    },
}

const getters = {
    user(state) {
        return state.user
    },
    userName(state) {
        return state.user.userName
    },
}

const mutations = {
    storeUser(state, user) {
        return state.user = user
      },
    changeLoggedInStatus(state, user) {
        state.user.userName = user.userName
        state.user.password = user.password
        state.user.loggedIn = user.loggedIn
        return state.user
    },
}

const actions = {
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
}

export default {
    state,
    getters,
    mutations, 
    actions,
    // namespaced: true,
}