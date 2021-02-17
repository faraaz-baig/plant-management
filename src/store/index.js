import Vue from 'vue'
import Vuex from 'vuex'
import enterprisesModule from './modules/enterprises/index'
import challansModule from './modules/challans/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    enterprises: enterprisesModule,
    challans: challansModule
  },
  state() {
    return {
      userId: 'c6'
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
})

export default store
