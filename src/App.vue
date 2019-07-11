<template>
  <div id="app" :style="style">
    <router-view/>
    <Footer v-if="showFooter"/>
    <Loading />
  </div>
</template>
<script>

export default {
  name: "App",
  data() {
    return {
      msg: "这是App组件",
      showFooter: false,
      loading: false
    };
  },
  provide(){
    return{
      app: this
    }
  },
  created() {},
  watch: {
    $route(newValue) {
      this.showFooter = newValue.meta.footer;
    }
  },
  computed: {
    style() {
      var style = {};
      if (!this.showFooter) {
        style.paddingBottom = "10px";
      }
      return style;
    }
  },
  methods: {
    changeLoading (loading) {
      this.loading = loading
    }
  }
};
</script>

<style lang="stylus">
@import './assets/css/reset.css';
@import './assets/css/animation.styl';
@import './assets/css/x_fan.styl';
@import './assets/x-font/iconfont/ionicons.css';
@import './assets/css/pulic.styl';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 640px;
  min-height: 100%;
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 0.46rem;
  padding-bottom: 0.5rem;
  overflow-y: auto;
  background: #fafafa;
}
</style>
