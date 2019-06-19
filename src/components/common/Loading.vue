<template>
  <div class="loading">
    <x-icon class="icon-loading" type="ios-loading" size=".5rem"/>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {
      msg: '这是loading组件'
    };
  }
};
</script>

<style lang="stylus" scoped>
.loading
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 900000
  background rgba(255,255,255,.5)
  .icon-loading
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
</style>