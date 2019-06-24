<template>
  <div class="hello">
   <Swiper :autoPlay="3000" :currIndex="2"></Swiper>
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
</style>
