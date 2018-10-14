import Vue from 'vue'
import Vuex from 'vuex'
import menuList from './modules/menuList'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    menuList
  },
  getters
})

export default store
