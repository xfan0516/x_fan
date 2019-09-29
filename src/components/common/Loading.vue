<template>
  <div class="loading" v-if="app.loading">
    <x-icon class="icon-close" type="ios-close-circle-outline" size=".36rem"  @click="changeLoading"/>
    <transition name="rotate">
      <x-icon v-if="animte" class="icon-loading" type="ios-loading" size=".5rem"/>
    </transition>
  </div>
</template>
<script>
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
