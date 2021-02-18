export default {
  challans(state, _, _2, rootGetters) {
    const enterpriseId = rootGetters.userId;
    return state.challans.filter(
      (challan) => challan.enterpriseId === enterpriseId
    );
  },
  hasChallans(_, getters) {
    return getters.challans && getters.challans.length > 0;
  },
};
