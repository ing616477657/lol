import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count:1,
    // 是否登陆
    login:{
      name:null,
      login:false
    },
    // 登陆/注册窗口状态
    logOrReg:true
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
    },
    // 切换登陆注册窗口状态
    setLogOrReg(state){
      state.logOrReg = !state.logOrReg
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
    },
    cmtLogOrReg(context){
      context.commit('setLogOrReg')
    }
  },
  getters:{
  	getStateCount(state){
  		return state.count+1
  	}
  }
})
