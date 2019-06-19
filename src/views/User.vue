<template>
  <div class="user">
    <div><img src="./../assets/images/userpic.jpg" alt=""></div>
    <Header title="我的"></Header>
    <x-cell @click="$router.push('xfan')">
      <span slot="cell-left">xfan组件</span>
      <span slot="cell-right"><x-icon type="ios-arrow-forward" size="big"/></span>
    </x-cell>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Your user '
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>