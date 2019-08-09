<template>
  <div class="register">
    <div :class='{hide:hide}' class="logins" v-if="logins">
	  	<input v-model="users._name" placeholder="昵称">
	  	<input v-model="users.username" placeholder="账号">
	  	<input v-model="users.password" placeholder="密码">
	  	<input v-model="users.email" placeholder="邮箱">
	  	<input class="emailcode" v-model="users.email" placeholder="验证码">
	  	<button class="getCoce">获取验证码</button>
	  	<button class="login" @click='login'>注册</button>
	  	<button class="register" @click='goRe'>登陆</button>
    </div>
  </div>
</template>

<script>
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
		  email:null
	   },
	   logins:true,
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
  		// // console.log(this.$store.state.login)
  		// this.logins= false
  		// this.$store.dispatch("getLogin",{
  		// 	name:'dingming',
  		// 	login:true
  		// })
  		// process.env.VUE_APP_URL
  		var pops =  new pop.Popup();
  		// pops.toast('请填写正确邮箱',3);
  		// this.axios.get(process.env.VUE_APP_URL+'/api/loaclDate')
		  // .then(res => {
		  //   console.log(res)
		  // }, res => {
		  //   console.log(res)
		  // })
  	},
  	goRe(){
  		this.$store.dispatch("cmtLogOrReg")
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
