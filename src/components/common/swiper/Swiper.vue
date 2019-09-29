<template>
  <div class="swiper">
    <transition-group tag="ul" :name="animate.name">
      <slot></slot>
    </transition-group>
    <div class="swiper-btn swiper-btn-left" @click="prev">
      <x-icon type="ios-arrow-dropleft" size=".32rem"/>
    </div>
    <div class="swiper-btn swiper-btn-right" @click="next">
      <x-icon type="ios-arrow-dropright" size=".32rem"/>
    </div>
    <div class="swiper-page">
      <slot name="swiper-page"></slot>
      <span
        v-if="isPage"
        v-for="(item,index) in list"
        :key="index"
        @click="pageChange(index)"
        :class="index === cIndex && 'active'"
      ></span>
    </div>
  </div>
</template>
<script>
import { setInterval, clearTimeout } from "timers";
export default {
  name: "swiper",
  props: {
    autoPlay: {
      type: [Number, String],
      default: 3000
    },
    currIndex: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default:[]
    }
  },
  watch: {
    currIndex(newVal) {
      this.cIndex = newVal;
    }
  },
  data() {
    return {
      msg: "Welcome to Your swiper ",
      animate: {
        name: "slide-right"
      },
      cIndex: this.currIndex,
      isPage: true,
      timer: null
    };
  },
  created() {
    this.$nextTick(() => {
      if (this.autoPlay) {
        this.timer = setInterval(() => {
          this.next();
        }, this.autoPlay);
      }
    });
    if(this.$slots['swiper-page']){
      this.isPage = false

    }

    console.log(this.$slots['swiper-page'])
  },
  methods: {
    // 上一个
    prev() {
      this.animate = {
        name: "slide-right"
      };
      this.cIndex = --this.cIndex >= 0 ? this.cIndex : this.list.length - 1;
      this.$emit("change", this.cIndex);
    },
    // 下一个
    next() {
      this.animate = {
        name: "slide-left"
      };

      this.cIndex = ++this.cIndex < this.list.length ? this.cIndex : 0;
      this.$emit("change", this.cIndex);
    },

    // 点击小方框
    pageChange(index) {
      if (index > this.cIndex) {
        this.animate = {
          name: "slide-left"
        };
      } else {
        this.animate = {
          name: "slide-right"
        };
      }
      this.cIndex = index;
      this.$emit("change", this.cIndex);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>