<template>
  <div class="x-cell" @click="handleClick">
    <slot name="cell-left"></slot>
    <slot name="cell-right"></slot>
  </div>
</template>
<script>
export default {
  name: 'XCell',
  data() {
    return {
      msg: '这是XCell组件'
    };
  },
  methods: {
    handleClick (e) {
      this.$emit('click',e)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .x-cell
    display: flex
    justify-content space-between 
    height .4rem
    line-height: .2rem
    box-sizing border-box
    padding .1rem
    border-bottom 1px solid #eee
</style>