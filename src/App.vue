<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
@import './assets/css/reset.css'
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

#nav
  padding-top .4rem
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
