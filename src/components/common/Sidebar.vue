<template>
  <div class="sidebar" v-if="sideShow">
    <transition name="fade">
      <div class="mask" v-if="showBody" @click="close"></div>
    </transition>
    <transition name="slide-fade-right">
      <div class="side-body" v-if="showBody">
        <div>
          <x-cell>
            <span slot="cell-left">语言</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big"/>
            </span>
          </x-cell>
          <div class="bg-e">
            <x-btn type="primary" class="x_btn">javascript</x-btn>
            <x-btn type="primary" class="x_btn">java</x-btn>
            <x-btn type="primary" class="x_btn">PHP</x-btn>
          </div>
          <x-cell>
            <span slot="cell-left">前端框架</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big"/>
            </span>
          </x-cell>
          <div class="bg-e">
            <x-btn type="primary" class="x_btn">Vue</x-btn>
            <x-btn type="primary" class="x_btn">react</x-btn>
            <x-btn type="primary" class="x_btn">jquery</x-btn>
          </div>
          <x-cell>
            <span slot="cell-left">Vue</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big"/>
            </span>
          </x-cell>
          <div class="bg-e">
            <x-btn type="primary" class="x_btn" @click="toLink('https://cli.vuejs.org/zh/')">vue-cli</x-btn>
            <x-btn type="primary" class="x_btn" @click="toLink('https://cn.vuejs.org/')">Vue</x-btn>
            <x-btn type="primary" class="x_btn" @click="toLink('https://vuex.vuejs.org/zh/guide/')">vuex</x-btn>
            <x-btn type="primary" class="x_btn" @click="toLink('https://router.vuejs.org/zh/')">router</x-btn>
            <x-btn type="primary" class="x_btn" @click="toLink('https://vue-loader.vuejs.org/zh/')">vue-loader</x-btn>
            <x-btn type="primary" class="x_btn" @click="toLink('https://forum.vuejs.org/')">Forum</x-btn>
          </div>
        </div>
        <div class="side-body-bottom x_flex-around">
          <x-col span="10">
            <x-btn  size="lg" @click="close">取消</x-btn>
          </x-col>
          <x-col span="10">
            <x-btn  type="primary" size="lg">确定</x-btn>
          </x-col>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  props: {
    sideShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showBody: false
    };
  },
  watch: {
    sideShow(newValue) {
      this.$nextTick(() => {
        this.showBody = newValue;
      });
    }
  },
  methods: {
    close() {
      this.showBody = false;
      setTimeout(() => {
        
        this.$emit('onClose')
      }, 300);
    },
    toLink(link){
      location.href = link
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 900000;
  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.2);
  }

  .side-body {
    position: absolute;
    top: 0.45rem;
    bottom: 0.5rem;
    right: 0;
    width: 80%;
    background: #fff;
    .side-body-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: .3rem;
      padding: .1rem 0;
      border-top: .5px solid #eee;
    }
      
  }
}
.bg-e{
  padding: .1rem;
  background: #eee;

  .x_btn {
    margin: 0 .1rem .1rem 0;
  }
}
</style>