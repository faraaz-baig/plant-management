export default {
  registerEnterprise(state, payload) {
    state.enterprises.push(payload);
  },
  setEnterprises(state, payload) {
    state.enterprises = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
