<template>
  <div class="scroll" ref="scroll" @touchend="touchend" @touchmove="touchmove" @touchstart="touchstart">
    <div class="loading" :style="{height: `${loadingHeight}px`}">

    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "scroll",
  props:{
    downUpdate:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "Welcome to Your scroll ",
      srcElement:{},
      targetTouches:[],
      scrollTop:0,
      startY:0,
      moveY: 0,
      endY: 0,
      loadingHeight: 0
    };
  },
  inject:['app'],
  watch: {
    $slots(newV){
      console.log(newV);
    },
    loadingHeight(newV){
      if(newV <= 0){
        this.loadingHeight = 0

      }
    }
  },
  computed:{
    slots(){
      console.log(this.$slots);
    }
  },
  created() {
    this.$nextTick(() => {
      });
  },
  mounted(){
    // console.log(this.$slots.default[0].elm);
    console.log(this.$slots.default[0].elm);

    const scroll = this.$el;
      // console.log(e)
    scroll.addEventListener("scroll", (e)=> {
      this.srcElement = e.srcElement || e.terget;
      const { scrollTop, scrollHeight, clientHeight } = e.srcElement;
      this.scrollTop = scrollTop;
      console.log(scrollTop, clientHeight, scrollHeight, e);
      // this.$slots.default[0].elm
    });

  },
  methods: {
    touchstart(e){
      if(!this.downUpdate) return;
      this.startY = e.changedTouches[0].clientY
      // console.log(e.changedTouches[0].clientY)

    },
    touchmove(e){
      if(!this.downUpdate) return;
      this.moveY = e.changedTouches[0].clientY;
      let moveTar = (this.moveY- this.startY) / 2.5;
      const elm = this.$slots.default[0].elm;
      this.loadingHeight = moveTar >= 48 ? 48 : moveTar;
     },
    touchend(e) {
      if(!this.downUpdate) return;
      this.endY = e.changedTouches[0].clientY;
      if((this.endY - this.startY) / 2.5 >= 48 && this.scrollTop < 10){
        this.initloading()
        this.app.changeLoading(true)
        this.$emit('downUpdate',e)
      }else{
        this.loadingHeight = 0
      }
      // console.log(this.startY, this.endY, this.scrollTop)
      
    },
    initloading(){
      setTimeout(() => {
        this.loadingHeight = 0
        this.app.changeLoading(false)
      }, 1000);
    }
    
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll {
  position: absolute;
  top: .44rem;
  right: 0;
  bottom: 0;
  left: 0;
  /* overflow:hidden; */
  overflow-y: auto;
}
.loading{
  height: 0;
  background: #eee;
  transition: all .2s
}
</style>