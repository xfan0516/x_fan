<template>
  <div class="swiper">
    <ul>
      <transition 
        :name="animate.name" 
        v-enter-active-class="animate.prev"
        v-leave-active-class="animate.next"
      >
        <li v-for="(item,index) in list" v-if="index === currIndex" :key="item.id">
          <img :src="item.src" alt>
        </li>
      </transition>    
    </ul>
    <div class="swiper-btn swiper-btn-left" @click="prev">
      <x-icon type="ios-arrow-dropleft" size=".32rem"/>
    </div>
    <div class="swiper-btn swiper-btn-right" @click="next">
      <x-icon type="ios-arrow-dropright" size=".32rem"/>
    </div>
    <div class="sp">
      <span v-for="(item,index) in list" :key="index" :class="index === currIndex && 'active'"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      msg: "Welcome to Your swiper ",
      currIndex: 0,
      animate:{
        prev:'slide-right',
        next:'slide-left',
        name: 'slide-left'
      },
      list: [
        {
          src: require("./images/0.jpg"),
          id: 1
        },
        {
          src: require("./images/0.jpg"),
          id: 3
        },
        {
          src: require("./images/0.jpg"),
          id: 2
        }
      ]
    };
  },
  methods:{
    prev(){
      this.$set(this.animate,'prev','slide-right')
      this.$set(this.animate,'next','slide-left')
      this.$set(this.animate,'name','slide-left')
      this.currIndex = --this.currIndex >= 0 ? this.currIndex : this.list.length -1;
    },
    next(){
      this.$set(this.animate,'prev','slide-right')
      this.$set(this.animate,'next','slide-left')
      this.$set(this.animate,'name','slide-right')
      this.currIndex = ++this.currIndex < this.list.length ? this.currIndex : 0;
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper {
  position: relative;
  width: 100%;
  height: 1.7rem;
  background: #eee;

  li {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.75rem;
    height: 1.7rem;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .sp {
    position: absolute;
    bottom: 0.08rem;
    width: 100%;
    left: 0;
    height: 0.1rem;
    display: flex;
    justify-content: center;

    span {
      height: 0.05rem;
      width: 0.2rem;
      background: #fff;
      margin: 0 0.05rem;
    }

    .active {
      background: #f90;
    }
  }

  .swiper-btn {
    position: absolute;
    top: 50%;
    width: 0.32rem;
    height: 0.32rem;
    color: #fff;
    opacity .5
    margin-top: -.16rem;
  }
  .swiper-btn-left{
    left: .1rem
  }
  .swiper-btn-right{
    right: .1rem
  }
}
</style>