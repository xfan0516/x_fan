<template>
  <div id="app" :style="style">
    <router-view/>
    <Footer v-if="footer"/>
    <!-- <Loading /> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '这是App组件',
      footer: false
    };
  },
  watch:{
    $route(newValue){
      this.footer = newValue.meta.footer;
      console.log(newValue.meta)
    }
  },
  computed:{
    style(){
      var style = {};
      if(!this.footer){
        style.paddingBottom = '10px'
      }
      return style
    }
  }
};
</script>

<style lang="stylus">
@import './assets/css/reset.css'
@import './assets/css/x_fan.styl'
@import './assets/x-font/iconfont/ionicons.css'
@import './assets/css/pulic.styl'
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  width 100%
  max-width 640px
  min-height 100%
  box-sizing border-box
  margin 0 auto
  padding-top .46rem
  padding-bottom .5rem
  overflow-y auto
  background #fafafa


</style>
