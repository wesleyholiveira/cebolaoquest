export const state = () => ({
    chatMessages: ''
})

export const mutations = {
    SET_MESSAGE(state, chatMessage) {
        state.chatMessages += chatMessage
    }
}

export const actions = {
    FORMAT_MESSAGE({ commit }, chatMessage) {
        commit('SET_MESSAGE', chatMessage)
    }
}