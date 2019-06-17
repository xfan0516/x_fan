<template>
  <div class="media" @click="handleClick">
    <slot class="media-left" name="media-left"></slot>
    <slot class="media-body" name="media-body"></slot>
    
  </div>
</template>
<script>
export default {
  name: 'Media',
  data() {
    return {
      msg: '这是Media组件',
    };
  },
  methods:{
    handleClick(e){
      this.$emit('click',e)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .media
    position relative
    height .7rem
    padding .1rem
    border-bottom 1px solid #eee
    min-height 20
    .media-left
      position relative
      top 0
      left 0
      width 20%
      height 0
      float left
      padding 10% 0
      overflow hidden
      border-radius .05rem
      img 
        position absolute
        top 50%
        left 0
        width 100%
        height auto
        transform translate(0, -50%)
    .media-body
      padding-left 22%
      line-height 1.5
      h3
        padding-bottom .05rem
        line-height 2
        font-weight 600
      p
        overflow hidden
        color #666
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
</style>