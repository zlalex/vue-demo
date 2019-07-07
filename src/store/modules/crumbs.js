export default {
    state: {
        crumbsTitle: '面包屑'
    },
    mutations: {
        setCrumbs(state, message) {
            state.crumbsTitle = message;
        }
    }
}