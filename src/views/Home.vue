<template>
  <div class="home">
    <Header title="首页" back />
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
  },
  created(){
    console.log(this)
  }
}
</script>
<style lang="stylus" scoped>
 
    
</style>

