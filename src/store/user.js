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
        },
        UNSET_USER(state) {
            state.user = {
                isAuthentificated: false,
                uid: null
            }
        }
    },
    actions: {
        SIGNUP ({commit}, payload) {
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('SET_PROCESSING', false)
            })
            .catch(function(error){
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
            })
        },
        SIGNIN ({commit}, payload) {
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('SET_PROCESSING', false)
            })
            .catch(function(error) {
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGNOUT (){
            firebase.auth().signOut()
        },
        STATE_CHANGED ({commit, dispatch}, payload){
            if(payload){
                commit('SET_USER', {uid: payload.uid, email: payload.email})
                commit('SET_USER_NAME', payload.displayName)
                dispatch('LOAD_USER_DATA', payload.uid)
            } else {
                commit('UNSET_USER')
            }
        },
    },
    getters: {
        isUserAuthentificated: (state) => state.user.isAuthentificated
    }
}