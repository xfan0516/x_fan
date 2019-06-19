<template>
  <i class="badge">{{num}}</i>
</template>
<script>
export default {
  name: 'badge',
  props:{
    num: [String,Number]
  },
  data() {
    return {
      msg: '这是badge组件'
    };
  }
};
</script>

<style lang="stylus" scoped>
.badge
  position absolute
  top -.1rem
  right -.1rem
  width .2rem
  height .2rem
  line-height .2rem
  text-align center
  background #dd514c
  font-size .12rem
  color #ffffff
  border-radius 1rem

</style>