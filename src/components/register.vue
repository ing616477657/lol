<template>
  <div class="register">
    <div :class='{hide:hide}' class="logins" v-if="logins">
	  	<input v-model.trim="users._name" placeholder="昵称">
	  	<input v-model.trim="users.username" placeholder="账号">
	  	<input type="password" v-model.trim="users.password" placeholder="密码">
	  	<input v-model.trim="users.email" placeholder="邮箱">
	  	<input class="emailcode" v-model.trim="users.emailCode" placeholder="验证码">
	  	<button class="getCoce" @click='getCode'>{{getCodeTxt}}</button>
	  	<button class="login" @click='login'>注册</button>
	  	<button class="register" @click='goRe'>登陆</button>
    </div>
  </div>
</template>

<script>
// 引入第三方插件需要更改插件js抛出插件对象
import pop from "../../public/jsPopup/popup.js"
export default {
  name: 'register',
  // props: {
  //   msg: String
  // }
  data: function () {
	return {
	   // 用户信息
	   users:{
	   	  _name:null,
	   	  username: null,
		  password:null,
		  email:null,
		  emailCode:null,
	   },
	   logins:true,
	   getCodeTxt:'获取验证码',
	   getCodeCk:0
	}
  },
  created: function () {

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
  		// // console.log(this.$store.state.login)
  		// this.logins= false
  		// this.$store.dispatch("getLogin",{
  		// 	name:'dingming',
  		// 	login:true
  		// })
  		// process.env.VUE_APP_URL
  		var pops =  new pop.Popup();
		var msg = {
			_name:"昵称",
	   	  username: "账号",
		  password:"密码",
		  email:"邮箱",
		  emailCode:"验证码",
		}
  		for(var i in this.users){
  			if(this.users[i]===''||this.users[i]===null){
  				pops.toast('请填写'+msg[i],1);
  				return;
  			}
  		}
  		this.axios.post(process.env.VUE_APP_URL+'register',this.users)
		  .then(res => {
		    console.log(res)
		    if(res.data.success==='error'){
		    	pops.toast(res.data.message,1);
		    }
		    if(res.data.success==='success'){
		    	pops.toast(res.data.message,1);
		    	setTimeout(function(){
		    		_this.$store.dispatch("cmtLogOrReg")
		    	},1000)
		    }
		  }, res => {
		    console.log(res)
		  })
  	},
  	goRe(){
  		this.$store.dispatch("cmtLogOrReg")
  	},
  	getCode(){
  		var pops =  new pop.Popup();
  		if(this.getCodeCk>0) {
  			pops.toast('60秒内只能发送一次',1);
  			return;
  		};
  		this.getCodeCk++
  		var obj = {email:this.users.email}
		var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		if(reg.test(obj.email)){
			this.getCodeTxt = "发送中..."
			this.axios.post(process.env.VUE_APP_URL+'emails',obj)
		  .then(res => {
		    console.log(res)
		    if(res.data.success==='success'){
		    	pops.toast(res.data.message,1);
		    }
		  }, res => {
		    console.log(res)
		  })
		  var _this =this;
		  var time = 61;
		  setBtn()
		  function setBtn(){
		  	 var t = setTimeout(function(){
		  		if(time>0){
		  			time--
		  			_this.getCodeTxt = time
		  			setBtn()
		  		} else {
		  			_this.getCodeTxt = "获取验证码"
		  			_this.getCodeCk = 0
		  			time = 61
		  			clearTimeout(t)
		  		}
		    },1000)
		  }
		}else{
			pops.toast('请填写正确的邮箱号',1);
		}
  	}
  },
  computed: {
	hide () {
		// 通过计算属性改变状态添加动画class
		return this.$store.state.logOrReg
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
.logins {
	transition: all 0.3s;
	transform: scale(1);
	position: fixed;
	width: 580px;
	height: 730px;
	background: rgba(0,0,0,0.7);
	border-radius: 10px;
	top:calc((100% - 730px)/2);
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
	input.emailcode {
		width: 300px;
		float:left;margin-left:40px;
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
	button.getCoce {
		border-radius:5px;
		font-size:24px;
		float:left;
		margin-left:20px;
		width: 160px;
		height: 80px;
		background: #fff;

	}
}
</style>
