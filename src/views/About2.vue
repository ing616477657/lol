<template>
  <div class="about2">
    <h1>This is an about page22222</h1>
    <router-link to="/about2/about2-1">About2-1</router-link>
    <router-link to="/about2/about2-2">About2-2</router-link>
    <router-view/>
<!--     <cap />
    <register />
    <login /> -->
  </div>
</template>
<script >
	// import cap from '@/components/cap.vue'
	// import login from '@/components/login.vue'
	// import register from '@/components/register.vue'
export default {
  name: 'about2',
  components: {
  	// cap,
  	// register,
  	// login
    // HelloWorld
  },
}
</script>