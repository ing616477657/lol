<template>
  <div class="userInfo">
     <header>
     	<div class="name">
     		{{this.$store.state.login.name}}
     	</div>
     	<div class="lv">
     		<div class="tit">
     			等级：
     		</div>
     		<div class="lvs">
				{{this.$store.state.login.lv}}
				<span class="lvss">经验值 {{this.$store.state.login.lvs}}/{{this.$store.state.login._lvss}}</span>
				<span class="addlvs" :class='{addLv:addLv}'>+2经验值</span>
     		</div>
     	</div>
     </header>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  // props: {
  //   msg: String
  // }
  data: function () {
	return {
	   
	}
  },
  methods:{
  	
  },
  computed: {
	addLv () {
		// 通过计算属性改变状态添加动画class
		return this.$store.state.addLv
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
	position: fixed;
	top:0px;
	left:0px;
	width: 100%;
	height: 120px;
	padding-left:30px;
	background: #ff8e8e;
	color:#fff;
	zoom:1;
	&::after {
	  content: '';
	  display:block;
	  clear:both;
	}
	.name {
		font-size: 36px;
		height: 60px;
		line-height: 60px;
		padding-top:10px;
	}
	.lv {
		float:left;
		.tit {
		    font-size:24px;
			float:left;
		}
		.lvs {
			float:left;
			font-size:24px;
			.lvss {
				font-size:20px;
				margin-left:10px;
			}
			.addlvs {
				display: block;
				float:right;
				margin-left:5px;
				transition: all 1s;
				opacity: 0;
				transform: scale(1);
				color:red;
			}
			.addLv {
				opacity: 1;
				transform: scale(2.5);
				font-weight: bold;
				margin-left:50px;
			}
		}
	}
}
</style>
