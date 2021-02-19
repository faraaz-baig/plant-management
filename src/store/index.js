import Vue from "vue";
import Vuex from "vuex";
import enterprisesModule from "./modules/enterprises/index";
import challansModule from "./modules/challans/index";
import authModule from "./modules/auth/index";
import VuexPersistence from 'vuex-persist';


Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  modules: {
    enterprises: enterprisesModule,
    challans: challansModule,
    auth: authModule,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
