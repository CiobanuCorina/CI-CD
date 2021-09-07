export default {
    namespaced: true,
    state: {
        isAuthorised: false,
        username: '',
    },
    getters: {
        getIsAuthorised: (state) => state.isAuthorised,
    },
    actions: {
        login(store, {username}) {
            store.commit('mutateUsername', username);
            store.commit('mutateIsAuthorised', true);
        },
        logout(store) {
            store.commit('mutateUsername', null);
            store.commit('mutateIsAuthorised', false);
        }
    },
    mutations: {
        mutateIsAuthorised(state, payload) {
            state.isAuthorised = payload;
        },
        mutateUsername(state, payload) {
            state.username = payload;
        }
    }
}