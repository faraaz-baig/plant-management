import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  lastFetch: null,
  state() {
    return {
      enterprises: [],
    };
  },
  mutations,
  actions,
  getters,
};
