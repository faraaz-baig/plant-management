export default {
    enterprises(state) {
        return state.enterprises
    },
    hasEnterprises(state) {
        return state.enterprises && state.enterprises.length > 0;
    }
}