<template>
  <div id="app">
    
    <router-view/>
    <Footer/>
  </div>
</template>
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
  margin 0 auto
  padding-top .4rem
  padding-bottom .44rem


</style>
