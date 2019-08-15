<template>
  <div class="cap">
    <!-- <div class="capDoor" > -->
    	<div :class='{ltM:ltM}' class="lt"><img alt="Vue logo" src="../assets/capDoorL.jpg"></div>
    	<div :class='{rtM:rtM}' class="rt"><img alt="Vue logo" src="../assets/capDoorR.jpg"></div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'cap',
  // props: {
  //   msg: String
  // }
  data: function () {
	return {
	   // openDoor:false
	}
  },
  computed: {
	ltM () {
		// 计算store状态
		return this.$store.state.login.login;
	},
	rtM (){
		return this.$store.state.login.login;
	}
  },
  watch:{
  	// door (newVal, oldVal){
  	// 	// 通过计算属性计算状态，再通过监听属性监听状态的改变然后之行逻辑
  	// 	// 监听计算后的store状态,进行逻辑处理
  	// 	console.log(this.$store.state.login)
  	// 	var lt = document.getElementById('lts');
  	// 	var rt = document.getElementById('rts');
  	// 	lt.style.marginLeft='-500px'
  	// 	rt.style.marginRight='-500px'
  	// 	// this.openDoor = this.$store.state.login.login
  	// 	// console.log(newVal, oldVal)
  	// }
  }
  // methods:{
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lt {
	width: 50%;
	height: 100vH;
	position:fixed;
	top:0px;
	left:0px;
	transition:all 1s;
	z-index: 99;
	img {
		float:right;
		display: block;
		width: 100%;
	}
}
.rt {
	width: 50%;
	height: 100vH;
	position: fixed;
	top:0px;
	right:0px;
	z-index: 99;
	transition:all 1s;
	img {
		float:left;
		display: block;
		width: 100%;
	}
}
.ltM {
	left:-500px;
}
.rtM {
	right:-500px;
}
</style>
