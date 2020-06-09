<template>
  <div class="user">
    <div><img src="./../assets/images/userpic.jpg" alt=""></div>
    <Header title="我的"></Header>
    <x-cell @click="handleClick">
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
  },
  methods: {
    handleClick () {
      this.$Message.info('维护中...')
      return false
      // this.$router.push('xfan')
    }
  }
}
</script>