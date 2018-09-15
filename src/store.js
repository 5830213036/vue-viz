import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        signinState: false
    },
    mutations: {
        signinState(state, payload) {
            state.signinState = payload;
        }
    },
    actions: {
        
    }
})