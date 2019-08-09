<template>
  <div class="login">
    <div :class='{hide:hide}' class="logins" v-if="logins">
	  	<input v-model="username" placeholder="账号">
	  	<input v-model="password" placeholder="账号">
	  	<button class="login" @click='login'>登录</button>
	  	<button class="register" @click='goRe'>注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  // props: {
  //   msg: String
  // }
  data: function () {
	return {
	   username: null,
	   password:null,
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
  		// console.log(this.$store.state.login)
  		this.logins= false
  		this.$store.dispatch("getLogin",{
  			name:'dingming',
  			login:true
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
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.hide {
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
