<template>
  <Swiper :autoPlay="5000" :currIndex="currIndex" :list="swiperList" @change="swiperChange">
    <li :key="item.id" v-for="(item,index) in swiperList" v-show="index === currIndex">
      <img :src="item.src" alt />
      <p>{{item.text}}</p>
    </li>
    <template slot="swiper-page">
      <span
        :class="index === currIndex && 'active'"
        :key="index"
        @click="swiperChange(index)"
        v-for="(item,index) in swiperList"
      ></span>
    </template>
  </Swiper>
</template>
<script>
export default {
  name: 'demoSwiper',
  data () {
    return {
      swiperList: [
        {
          src: require('@/assets/images/1.jpg'),
          id: 1,
          text: '这是表述文字'
        },
        {
          src: require('@/assets/images/2.jpg'),
          id: 3,
          text: '这是表述文字'
        },
        {
          src: require('@/assets/images/3.jpg'),
          id: 2,
          text: '这是表述文字'
        }
      ],
      currIndex: 0
    }
  },
  methods: {
    
    swiperChange(e) {
      this.currIndex = e
    }
  }
}
</script>
<style lang="scss">
.demo-cell {
  height: inherit;

  .x-cell {
    margin-top: 10px;
  }
}
</style>
