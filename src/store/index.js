import Vue from 'vue'
import Vuex from 'vuex'
import enterprisesModule from './modules/enterprises/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    enterprises: enterprisesModule
  }
})

export default store
