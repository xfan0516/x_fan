<template>
  <label for="" class="label-text">
    <p class="label">姓名</p>
    <input class="input-text" type="text" placeholder="请输入关键字">
  </label>
</template>
<script>
export default {
  name: 'inputtext',
  data() {
    return {
      msg: '这是inputtext组件'
    };
  },
  created(){
    console.log(this.$props)
  }
};
</script>

<style lang="stylus" scoped>
.label-text
  display inline-block
  margin-bottom .1rem
  width 100%
  .label
    line-height 1em
    padding-bottom.1rem
.input-text
  height .37rem
  width 100%
  box-sizing border-box
  border 1px solid #eee
  padding 0 .1rem
  border-radius .05rem
  font-size .14rem
</style>
