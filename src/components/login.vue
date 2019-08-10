<template>
  <div class="login">
    <div :class='{hide:hide,loginIn:loginIn}' class="logins" v-if="logins">
	  	<input v-model.trim="users.username" placeholder="账号">
	  	<input type="password" v-model.trim="users.password" placeholder="密码">
	  	<button class="login" @click='login'>登录</button>
	  	<button class="register" @click='goRe'>注册</button>
    </div>
  </div>
</template>

<script>
// 引入第三方插件需要更改插件js抛出插件对象
import pop from "../../public/jsPopup/popup.js"
export default {
  name: 'login',
  // props: {
  //   msg: String
  // }
  data: function () {
	return {
	   users:{
		   username: 'dingming',
		   password:'dingming',
		},
	   logins:true,
	   // hide:false
	}
  },
  methods:{
  	add(){
  		this.$store.dispatch("add")
  	},
  	reduce(){
  		this.$store.dispatch("reduce",2)
  	},
  	login(){
  		var _this = this;
  		// console.log(this.$store.state.login)
  		var pops =  new pop.Popup();
		var msg = {
	   	  username: "账号",
		  password:"密码",
		}
		for(var i in this.users){
  			if(this.users[i]===''||this.users[i]===null){
  				pops.toast('请填写'+msg[i],1);
  				return;
  			}
  		}
  		this.axios.post(process.env.VUE_APP_URL+'login',this.users)
	    .then(res => {
	       // console.log(res)
	       if(res.data.success==='error'){
	    	 pops.toast(res.data.message,1);
	       }
	       if(res.data.success==='success'){
	    	pops.toast(res.data.message,1);
	        this.logins= false
	        var _lvs = ['倔强黑铁','不屈白银','荣耀黄金','霸气铂金','傲视钻石','无敌大师','最强王者']
	        var _lvss = [10,100,500,1000,2000,4000,10000,]
	        var dlv;
	        for(var i in _lvss){
	        	if(res.data.data.lvs<_lvss[i]){
	        		dlv = i
	        		break;
	        	}
	        }
	        var llvs;
	        if(res.data.data.addLv){
	        	 llvs = res.data.data.lvs-2
	        }else{
	        	 llvs = res.data.data.lvs
	        }
	    	setTimeout(function(){
	    		_this.$store.dispatch("getLogin",{
		    		name:res.data.data._name,
		    		login:true,
		    		token:res.data.data.token,
		    		lv:_lvs[dlv],
		    		lvs:llvs,
		    		_lvss:_lvss[dlv]
		    	})
		    	window.localStorage.setItem('user',JSON.stringify({
		    		name:res.data.data._name,
		    		login:true,
		    		token:res.data.data.token,
		    		lv:_lvs[dlv],
		    		lvs:llvs,
		    		_lvss:_lvss[dlv]
		    	}))
		    	setTimeout(function(){
		    		_this.$store.dispatch("cmAddLv",res.data.data.addLv)
		    		if(res.data.data.addLv){
		    			_this.$store.dispatch("cmLvs",2)
		    		}
	                setTimeout(function(){
	                  _this.$store.dispatch("cmAddLv",false)
	                },1000)
		    	},500)
	    	},1000)
	    	// console.log(this.$store.state.login)
	    }
	    }, res => {
	       console.log(res)
	    })
  	},
  	goRe(){
  		this.$store.dispatch("cmtLogOrReg")
  	}
  },
  computed: {
	hide () {
		// 通过计算属性改变状态添加动画class
		return !this.$store.state.logOrReg
	},
	loginIn(){
		return this.$store.state.login.login
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入第三方插件css
@import "../../public/jsPopup/popup.css";
div.hide {
	transform: scale(0);
}
div.loginIn {
	transform: scale(0);
}
.logins {
	transition: all 0.3s;
	transform: scale(1);
	position: fixed;
	width: 580px;
	height: 400px;
	background: rgba(0,0,0,0.7);
	border-radius: 10px;
	top:calc((100% - 400px)/2);
	left:calc((100% - 580px)/2);
	z-index: 9;
	input {
		padding-left:20px;
		font-size: 28px;
		height: 80px;
		width: 480px;
		border:1px solid #ccc;
		display: block;
		margin:0 auto;
		border-radius: 5px;
		margin-bottom:30px;
	}
	input::input-placeholder {
		color:#333;
	}
	input::-webkit-input-placeholder {
	    color: #333;
	}
	input:-ms-input-placeholder {
	    color: #333;
	}
	input:-moz-placeholder {
	    color: #333;
	}
	input:nth-child(1) {
		margin-top:50px;
	}
	button.login {
		font-size: 36px;
		width: 500px;
		height: 80px;
		display: block;
		margin:0 auto;
		background: #fff;
		border-radius:5px;
		text-align: center;
		line-height: 80px;
	}
	button.register {
		position: absolute;
		right:0px;
		bottom:-90px;
		font-size: 36px;
		width: 120px;
		height: 80px;
		display: block;
		margin:0 auto;
		background: rgba(0,0,0,0.6);
		border-radius:5px;
		text-align: center;
		line-height: 80px;
		color:#fff;
	}
}
</style>
