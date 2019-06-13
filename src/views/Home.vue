<template>
  <div class="home">
    <x-header title="首页" back />
    <span></span>
   <x-icon type="ios-home" size="small"/>small
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import XHeader from '@/components/common/Header.vue'

export default {
  name: 'home',

  components: {
    HelloWorld,
    XHeader: reslove =>require(['@/components/common/Header.vue'],reslove),
    // "x-header" : () =>require('./../components/common/Header.vue')
  },
  created(){
    console.log(this)
  }
}
</script>
<style lang="stylus" scoped>
 
    
</style>

