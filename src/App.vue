<template>
  <div id="app">
<!--     <div id="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about1">About1</router-link>
      <router-link to="/about2">About2</router-link>
    </div> -->
    <userInfo v-if='this.$store.state.login.login'/>
    <router-view/>
    <!-- <div id="footer">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>
<script>
  import userInfo from '@/components/userInfo.vue'
  export default {
  name: 'model',
  components: {
    userInfo
  },
  beforeCreate () {
    var _this = this;
    console.log('根组件：beforeCreate')
    if(window.localStorage.getItem('user')){
      // 判断用户信息是否存在
      var users = JSON.parse(window.localStorage.getItem('user'))
      this.$store.dispatch("getLogin",users)

      // 判断是否第一次打开网页
      if(!window.sessionStorage.getItem('firsted')){
        window.sessionStorage.setItem('firsted',true)
        var _users = {
          token:users.token
        }
        this.axios.post(process.env.VUE_APP_URL+'login',_users)
          .then(res => {
             console.log(res)
             if(res.data.success==='error'){
              // pops.toast(res.data.message,1);
                if(!res.data.data.tokens){
                  window.localStorage.removeItem('user')
                  _this.$store.dispatch("getLogin",{
                      name:null,
                      login:false,
                      token:null,
                      lv:null,
                  })
                }
             }
             if(res.data.success==='success'){
            // pops.toast(res.data.message,1);
            // console.log(this.$store.state.login)
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
              if(res.data.data.addLv){
                this.$store.dispatch("cmAddLv",res.data.data.addLv)
                if(res.data.data.addLv){
                  this.$store.dispatch("cmLvs",2)
                }
                setTimeout(function(){
                  _this.$store.dispatch("cmAddLv",false)
                },1000)
              }
            }
          }, res => {
             console.log(res)
          })
      }
    }
  },
  created () {
    console.log('根组件：created')
  },
  beforeMount () {
    console.log('根组件：beforeMount')
  },
}
</script>
<style lang="scss">
*{margin:0;padding:0;border:none;outline:none;text-decoration:none;font-size:14px;}
ol,li,ul{list-style:none;}
text{cursor:default;user-select:none;-webkit-user-select: none}
select,input,button{}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
a:hover{text-decoration:none;}
svg{width:16px;height:16px;fill:#9254de;}
img[src=''],img:not([src]){opacity:0;}
img {border:none;}
button{cursor: pointer;}
a:hover {cursor:pointer;}
</style>
