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