const state = {
    searchResults: [],
}

const getters = {

}

const mutations = {
    setSearchResults(state, payload) {
        state.searchResults = payload
    }
}

const actions = {
    actSearchResults({commit}, response) {
        //handle our search results
        commit('setSearchResults', response)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}