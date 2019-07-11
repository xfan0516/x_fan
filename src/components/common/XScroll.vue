<template>
  <div
    class="scroll"
    :style="{top: top, right: right, bottom: bottom, left: left}"
    ref="scroll"
    @touchend="touchend"
    @touchmove="touchmove"
    @touchstart="touchstart"
  >
    <div
      class="down-update"
      v-show="loadingHeight"
      :style="{height: `${loadingHeight}px`,lineHeight:`${loadingHeight}px`}"
    >{{refreshText}}...</div>
    <slot></slot>
    <div v-if="scrollLoading" class="scroll-loading">加载中...</div>
  </div>
</template>
<script>
import { clearTimeout } from "timers";
export default {
  name: "scroll",
  props: {
    downUpdate: {
      type: Boolean,
      default: false
    },
    bottomLoading: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    bottom: {
      type: String,
      default: "0"
    },
    left: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      msg: "Welcome to Your scroll ",
      srcElement: {},
      targetTouches: [],
      scrollTop: 0,
      startY: 0,
      moveY: 0,
      endY: 0,
      loadingHeight: 0,
      bottomHeight: 0,
      scrollLoading: false,
      flag: true,
      refreshText: "下拉即可刷新",
      slotElm: null
    };
  },
  watch: {
    $slots(newV) {
      console.log(newV);
    },
    loadingHeight(newV) {
      if (newV <= 0) {
        this.loadingHeight = 0;
      }
      this.slotElm.style.transform = `translateY(${this.loadingHeight}px)`;
    }
  },
  computed: {
    slots() {
      console.log(this.$slots);
    }
  },
  created() {
    this.$nextTick(() => {});
  },
  mounted() {
    console.log(this.$slots.default[0].elm);

    const scroll = this.$el;
    scroll.addEventListener(
      "scroll",
      e => {
        this.srcElement = e.srcElement || e.terget;
        const { scrollTop, scrollHeight, clientHeight } = e.srcElement;
        let bottomNum = scrollHeight - scrollTop - clientHeight; //距离底部间距
        // 滚动距离底部小于50px，加载事件
        if (bottomNum < 50 && this.flag) {
          this.flag = false;
          setTimeout(() => {
            this.onScrollLoading();
          }, 1000);
        }
        // console.log("---",bottomNum, scrollTop, clientHeight, scrollHeight, e);
      },
      true
    );
  },
  methods: {
    /**
     * 按下时
     */
    touchstart(e) {
      if (!this.downUpdate) return;
      this.startY = e.changedTouches[0].clientY;
      this.slotElm = this.$slots.default[0].elm;
      this.refreshText = "下拉即可刷新";
    },

    /**
     * 移动时
     */
    touchmove(e) {
      e.preventDefault();
      if (!this.downUpdate) return;
      this.moveY = e.changedTouches[0].clientY;

      /**
       * 如果移动Y坐标大于按下时Y坐标是下拉更新
       * 否则是底部加载
       */
      if (this.moveY > this.startY) {
        let moveTar = (this.moveY - this.startY) / 2.5;
        this.loadingHeight = moveTar; //moveTar >= 48 ? 48 : moveTar;
        if (moveTar >= 48) {
          this.refreshText = "释放即可刷新";
        } else {
          this.refreshText = "下拉即可刷新";
        }
      }
    },

    /**
     * 离开时
     */
    touchend(e) {
      this.endY = e.changedTouches[0].clientY;
      const { scrollTop, scrollHeight, clientHeight } = this.srcElement;
      let bottomNum = scrollHeight - scrollTop - clientHeight; //距离底部间距

      /**
       * 如果离开时Y坐标大于按下时Y坐标，并且距离顶部小于10px 显示下拉更新
       * 如果离开时Y坐标小于按下时Y坐标，并且距离顶部小于10px 显示下拉更新
       * 否则是loadingHeight，bottomHeight都清0
       */
      if (
        (this.endY - this.startY) / 2.5 >= 48 &&
        (scrollTop <= 10 || isNaN(scrollTop))
      ) {
        if (!this.downUpdate) return;
        this.loadingHeight = 48;
        this.scrollLoading = true;
        this.refreshText = "加载中";

        this.initloading();
        this.$emit("downUpdate");
      } else {
        this.loadingHeight = 0;
      }
    },
    initloading() {
      setTimeout(() => {
        this.loadingHeight = 0;
        this.bottomHeight = 0;
        this.scrollLoading = false;
      }, 3000);
    },
    onScrollLoading() {
      this.flag = true;
      this.$emit("onScroll");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* overflow:hidden; */
  overflow-y: auto;
}

.down-update {
  /* position absolute
  top 0
  left 0 */
  width: 100%;
  text-align: center;
  // background: #eee;
  transition: all 0.2s;
}

.scroll-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.5);
  padding-top: 80%;
  text-align: center;
}

/* .bottom-loading {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #eee;
  transition: all 0.2s;
} */
</style>