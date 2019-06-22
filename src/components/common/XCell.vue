<template>
  <div class="x-cell" @click="handleClick">
    <slot class="cell-left" name="cell-left"></slot>
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
    position relative
    display: flex
    justify-content space-between 
    height .44rem
    line-height: .24rem
    box-sizing border-box
    padding .1rem
    border-bottom 1px solid #eee
    background #fff
    font-size .16rem
    .cell-left
      position relative
      .date
        font-weight 500
</style>