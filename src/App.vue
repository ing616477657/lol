<template>
  <div id="app">
    <div id="header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about1">About1</router-link>
      <router-link to="/about2">About2</router-link>
    </div>
    <router-view/>
    <!-- <div id="footer">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

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
