<template>
  <div class="home">
    <Header title="首页" back />
    
    
    <span></span>
    <!-- <x-icon type="ios-home" size="small"/>small -->
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import XHeader from '@/components/common/Header.vue'

export default {
  name: 'home',
  data(){
    return{
      
      msg: '这是Media组件',
    }
  },
  components: {
    HelloWorld,
  },
  created(e){
    console.log(this)
  },
  methods:{
    to(e){
      console.log(e)
    }
  }
}
</script>
<style lang="stylus" scoped>
 
    
</style>

