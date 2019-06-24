<template>
  <div class="swiper">
    <ul>
      <transition
        :name="animate.name"
        v-enter-active-class="animate.curr"
        v-leave-active-class="animate.next"
      >
        <li v-for="(item,index) in list" v-if="index === cIndex" :key="item.id">
          <img :src="item.src" alt>
          <p>这是表述文字</p>
        </li>
      </transition>
    </ul>
    <div class="swiper-btn swiper-btn-left" @click="prev">
      <x-icon type="ios-arrow-dropleft" size=".32rem"/>
    </div>
    <div class="swiper-btn swiper-btn-right" @click="next">
      <x-icon type="ios-arrow-dropright" size=".32rem"/>
    </div>
    <div class="dice dice-right">
      <span
        v-for="(item,index) in list"
        :key="index"
        @click="dice(index)"
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
        curr: "slide-right",
        next: "slide-left",
        name: "slide-right"
      },
      cIndex: this.currIndex,
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
      ],
      timer: null
    };
  },
  created() {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.next();
      }, this.autoPlay);
    }
  },
  methods: {

    // 上一个
    prev() {
      this.animate = {
        curr: "slide-right",
        next: "slide-left",
        name: "slide-right"
      };
      this.cIndex = --this.cIndex >= 0 ? this.cIndex : this.list.length - 1;
    },
    // 下一个
    next() {
      this.animate = {
        curr: "slide-right",
        next: "slide-left",
        name: "slide-left"
      };

      this.cIndex = ++this.cIndex < this.list.length ? this.cIndex : 0;
    },

    // 点击小方框
    dice(index) {
      if (index > this.currIndex) {
        this.animate = {
          curr: "slide-right",
          next: "slide-left",
          name: "slide-left"
        };
      } else {
        this.animate = {
          curr: "slide-right",
          next: "slide-left",
          name: "slide-right"
        };
      }
      this.cIndex = index;
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
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

  .dice {
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
  transition: all 0.3s ease;
}

.slide-left-leave-active {
  transition: all 0.3s;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translate(100%, 0);
}

.slide-right-enter-active {
  transition: all 0.3s ease;
}

.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter, .slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>