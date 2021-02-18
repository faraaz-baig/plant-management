export default {
  addChallan(state, payload) {
    state.challans.push(payload);
  },
  setChallans(state, payload) {
    state.challans = payload;
  },
};
