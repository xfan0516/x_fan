<template>
  <div class="hello">
   <Swiper></Swiper>
  </div>
</template>

<script>
import message from "./common/Message";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
     
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.x_flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}


.thumbnail-list
  padding 0 .05rem
  background #eee
  overflow hidden
.col-thumbnail
  padding 0 .05rem
 
</style>
