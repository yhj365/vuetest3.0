import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuexMsg: 'vuex测试'
  },
  getters:{
    showMsg: state =>{
      return state.vuexMsg
    }
  },
  mutations: {
    ADDMSG(state){
      state.vuexMsg = `vuex测试ADDMSG`
    },
    DELMSG(state){
      state.vuexMsg = `vuex测试DELMSG`
    },
  },
  actions: {
    ADDMSG({commit}){
      commit('ADDMSG')
    },
    DELMSG({commit}){
      commit('DELMSG')
    },
  },
  modules: {
  }
})
