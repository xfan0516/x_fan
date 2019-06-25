<template>
  <div class="hello">
    <Swiper :autoPlay="5000" :currIndex="currIndex" :list="list" @change="swiperChange">
      <li v-for="(item,index) in list" v-show="index === currIndex" :key="item.id">
        <img :src="item.src" alt>
        <p>{{item.text}}</p>
      </li>
      <template slot="swiper-page">
        <span
          v-for="(item,index) in list"
          :key="index"
          @click="swiperChange(index)"
          :class="index === currIndex && 'active'"
        ></span>
      </template>
    </Swiper>
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
      list: [
        {
          src: require("@/assets/images/1.jpg"),
          id: 1,
          text:'这是表述文字'
        },
        {
          src: require("@/assets/images/2.jpg"),
          id: 3,
          text:'这是表述文字'
        },
        {
          src: require("@/assets/images/3.jpg"),
          id: 2,
          text:'这是表述文字'
        }
      ],
      currIndex: 0
    };
  },
  methods: {
    swiperChange(e) {
      this.currIndex = e;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus"></style>
