<template>
  <div class="home">
  	<!-- <h1>{{this.$store.state.count}}</h1>
  	<h1>{{this.$store.getters.getStateCount}}</h1>
  	<button @click='add'>add</button>
    <button @click='reduce'>reduce</button> -->
  	<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App1"/> -->
    <cap />
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import cap from '@/components/cap.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'

export default {
  name: 'home',
  components: {
  	cap,
  	register,
  	login
    // HelloWorld
  },
  methods:{
  	add(){
  		this.$store.dispatch("add")
  	},
  	reduce(){
  		this.$store.dispatch("reduce",2)
  	}
  },
}
</script>
<style scoped lang="scss">
.home {
	width: calc(100vW);
	height: calc(100vH);
	background: #000;
}
</style>