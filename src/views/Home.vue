<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App1"/> -->
    <cap />
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
  }
}
</script>
