export default {
  enterprises(state) {
    return state.enterprises;
  },
  hasEnterprises(state) {
    return state.enterprises && state.enterprises.length > 0;
  },
  isEnterprise(_, getters, _2, rootGetters) {
    const enterprises = getters.enterprises;
    const userId = rootGetters.userId;
    return enterprises.some((enterprise) => enterprise.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
