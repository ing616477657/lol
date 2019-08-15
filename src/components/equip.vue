<!-- 装备 -->
<template>
  <div class="equip">
    <div class="info">
      <h6>{{name}}</h6>
      <p>{{property}}</p>
      <p class="p1">{{special}}</p>
    </div>
    <div class="allEquip" id="equips">
      <div   v-for='item in equipOne'>
        <img  :src="item.src" @click='seteq($event)'  data-tag='0' :data-property='item.property' :data-name='item.name' :data-idx='item.number'>
        <span>X2</span>
      </div>
      <div v-for='item in equipTwo' >
        <img  :src="item.src" @click='seteq($event)' :data-property='item.property' :data-name='item.name' :data-special='item.special' data-tag='1' :data-gpl='item.number[0]' :data-gpr='item.number[1]'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equip',
  // props: {
  //   msg: String
  // }
  data: function () {
  	return {
       equipOne:null,
       equipTwo:null,
       name:'装备名称',
       property:'属性',
       special:'特性',
  	}
  },
  beforeCreate(){
     this.axios.get(process.env.VUE_APP_URL+'getEquip')
      .then(res => {
        // console.log(res.data.data)
        this.data = res.data.data
        this.equipOne = res.data.data.equipOne
        this.equipTwo = res.data.data.equipTwo
      }, res => {
        console.log(res)
      })
  },
  created () {
  },
  methods:{
    seteq(e){
      // console.log(e.target.dataset.name)
      this.name = e.target.dataset.name
      this.property = e.target.dataset.property
      this.special = e.target.dataset.special
      var number = e.target.dataset.idx
      var gpl = e.target.dataset.gpl
      var gpr = e.target.dataset.gpr
      // console.log(number)
      var divs = $('#equips').find('div img');
      divs.each(function(i,v){
        $(v).parent().removeClass('choice')
        $(v).parent().removeClass('spans')
      })
      if( e.target.dataset.tag==0){
        divs.each(function(i,v){
          if($(v).attr('data-tag')==1){
            // console.log($(v).attr('data-gpl'),number)
            if($(v).attr('data-gpl')==number||$(v).attr('data-gpr')==number){
              $(v).parent().addClass('choice')
            }
          }
          if($(v).attr('data-tag')==0&&$(v).attr('data-idx')==number){
            $(v).parent().addClass('choice')
          }
        })
      }
      if( e.target.dataset.tag==1){
        // console.log(gpl,gpr)
        divs.each(function(i,v){
          if($(v).attr('data-tag')==0){
            // console.log($(v).attr('data-gpl'),number)
            if($(v).attr('data-idx')==gpr||$(v).attr('data-idx')==gpl){
              if(gpr==gpl){
                $(v).parent().addClass('spans')
              }
              $(v).parent().addClass('choice')
            }
          }
          if($(v).attr('data-tag')==1&&$(v).attr('data-gpr')==gpr&&$(v).attr('data-gpl')==gpl){
              $(v).parent().addClass('choice')
          }
        })
      }
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
    background: #f6f6f6;
    position: fixed;
    top:120px;
    left:0px;
    width: 100%;
    height: 200px;
    text-align: center;
    z-index: 9;
    h6 {
      padding-top:20px;
      font-size: 42px;
      position: relative;
      height:70px;
      line-height: 70px;
      color:#333;
    }
    p {
      height: 40px;
      line-height: 40px;
      font-size:26px;
    }
    p.p1 {
      height:60px;
      line-height: 30px;
    }
}
.allEquip {
  padding-top:350px;
  min-height: calc(100vh - 300px);
  overflow: hidden;
  overflow-y: scroll;
  zoom:1;
  ::after {
    content: '';
    display:block;
    clear:both;
  }
  div {
    position: relative;
    transition: all 0.5s;
    float:left;
    margin-left:30px;
    border-radius: 50%;
    width: calc((100vw - 240px)/7);
    height: calc((100vw - 240px)/7);
    margin-bottom:30px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
    }
    span {
      font-size:30px;
      font-weight: bold;
      color:#000;
      position: absolute;
      top:-20px;
      right:0px;
      display: none;
      z-index: 99;
    }
  }
  div.spans {
    span {
      display: block;
    }
  }
  div.choice {
    box-shadow: 5px 5px 20px 2px red;
    transform: scale(1.3);
    img {
      width: calc(100% - 5px);
      height: calc(100% - 5px);
      border:5px solid red;
    }
  }
}
</style>
