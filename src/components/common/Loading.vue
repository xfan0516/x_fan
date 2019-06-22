<template>
  <div class="loading" v-if="app.loading">
    <x-icon class="icon-close" type="ios-close-circle-outline" size=".36rem"  @click="changeLoading"/>
    <transition name="rotate">
      <x-icon v-if="animte" class="icon-loading" type="ios-loading" size=".5rem"/>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "loading",
  inject:['app'],
  data() {
    return {
      msg: "这是loading组件",
      animte: false
    };
  },
  watch: {
    'app.loading'(newValue) {
      this.$nextTick(() => {
        console.log(newValue);
        this.animte = newValue;
      });
    }
  },
  methods: {
    changeLoading() {
      this.app.changeLoading(false)
    }
  }
};
</script>

<style lang="stylus" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900000;
  background: rgba(255, 255, 255, 0.5);

  .icon-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -0.25rem;
    color: #999;
    animation: changDeg 2s linear 0.2s infinite;
  }
  .icon-close{
    position: absolute;
    top: .5rem;
    right: .1rem;
    color: #f5f5f5
  }
}
</style>