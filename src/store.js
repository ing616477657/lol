import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count:1,
    login:{
      name:null,
      login:false
    }
  },
  mutations: {
  	addCount(state){
  		state.count++
  	},
  	reduceCount(state,num){
  		state.count-=num
  	},
    setLogin(state,data){
      state.login = data
    }
  },
  actions: {
  	add(context){
  		context.commit('addCount')
  	},
  	reduce(context,num){
  		context.commit('reduceCount',num)
  	},
    getLogin(context,data){
      context.commit('setLogin',data)
    }
  },
  getters:{
  	getStateCount(state){
  		return state.count+1
  	}
  }
})
