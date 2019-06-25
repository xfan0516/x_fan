<template>
  <div class="thumbnail" @click="handleClick">
    <slot class="pic" name="thumbnail-pic"></slot>
    <slot class="info" name="thumbnail-info"></slot>
  </div>
</template>
<script>
export default {
  name: "Thumbnail",
  data() {
    return {
      msg: "Welcome to Your Thumbnail ",
      list: {
          title: '破十万评论歌曲[百万评论歌曲]',
          intro:' 做一件事没有放弃的就是喜欢音乐！',
          imgCrs:'http://p4.music.126.net/3hmJhssO32ex_NBb3XhUtw==/1384285150120466.jpg?param=200y200',
          id: '2'
        }
    };
  },
  methods:{
    handleClick (e) {
      this.$emit('click',e)
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.thumbnail
  box-sizing border-box
  padding .1rem
  background #ffffff
  border-radius .05rem
  .pic
    position relative
    width 100%
    height 0
    padding 50% 0
    overflow hidden
    img 
      transform translate(0, -50%)
    p 
      position absolute
      bottom 0
      left 0
      width 95%
      padding 0 2.5%
      line-height .32rem
      color: #fff
      background rgba(0,0,0,.5)
  .info
    padding-top .05rem
    line-height 1.2
    text-align justify
    overflow hidden
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;


</style>