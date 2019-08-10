import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count:1,
    // 是否登陆
    login:{
      name:null,
      login:false,
      token:null,
      lv:null,
      lvs:null,
      _lvss:null
    },
    // 经验值变动
    addLv:false,
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
    },
    // 设置增加经验值
    setAddLv(state,style){
      state.addLv = style
    },
    setLvs(state,num){
      state.login.lvs +=num
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
    },
    cmAddLv(context,style){
      context.commit('setAddLv',style)
    },
    cmLvs(context,num){
      context.commit('setLvs',num)
    }
  },
  getters:{
  	getStateCount(state){
  		return state.count+1
  	}
  }
})
