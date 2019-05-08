import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthentificated: false,
            uid: null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthentificated = true
            state.user.uid = payload
        }
    },
    actions: {
        SIGNUP({commit}, payload) {
            commit('SET_PROCESSING', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('SET_USER', user.uid)
                commit('SET_PROCESSING', false)
            })
            .catch(function(error){
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
            })
        }
    },
    getters: {
        isUserAuthentificated: (state) => state.user.isAuthentificated
    }
}