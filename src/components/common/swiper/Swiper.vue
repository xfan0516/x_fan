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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.swiper {
  position: relative;
  width: 100%;
  height: 1.7rem;
  background: #eee;
  overflow: hidden;


  li {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.75rem;
    height: 1.7rem;
    overflow: hidden;

    p {
      position: absolute;
      bottom: 0.4rem;
      left: 10%;
      width: 80%;
      text-align: center;
      color: #fff;
      overflow: hidden;
    }
  }

  img {
    width: 100%;
  }

  .swiper-page {
    position: absolute;
    bottom: 0.08rem;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    padding: 0 0.05rem;
    height: 0.1rem;
    display: flex;
    justify-content: center;

    span {
      height: 0.1rem;
      width: 0.1rem;
      margin: 0 0.05rem;
      border-radius: 50%;
      background: #fff;
      border: 0.02rem solid #fff;
      box-sizing: border-box;
    }

    .active {
      background: #fff;
      border: 0.02rem solid #09f;
    }
  }

  .dice-left {
    justify-content: flex-start;
  }

  .dice-right {
    justify-content: flex-end;
  }

  .swiper-btn {
    position: absolute;
    top: 50%;
    width: 0.32rem;
    height: 0.32rem;
    color: #fff;
    opacity: 0.5;
    margin-top: -0.16rem;
  }

  .swiper-btn-left {
    left: 0.1rem;
  }

  .swiper-btn-right {
    right: 0.1rem;
  }
}

/* 可以设置不同的进入和离开动画 左进左出 */
/* 设置持续时间和动画函数 */
.slide-left-enter-active {
  transition: all 0.5s ease;
}

.slide-left-leave-active {
  transition: all 0.5s;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translate(100%, 0);
}

.slide-right-enter-active {
  transition: all 0.5s ease;
}

.slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter, .slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>