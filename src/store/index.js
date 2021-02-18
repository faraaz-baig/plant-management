import Vue from "vue";
import Vuex from "vuex";
import enterprisesModule from "./modules/enterprises/index";
import challansModule from "./modules/challans/index";
import authModule from "./modules/auth/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    enterprises: enterprisesModule,
    challans: challansModule,
    auth: authModule,
  },
});

export default store;
