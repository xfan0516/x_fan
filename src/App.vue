<template>
  <div id="app" :style="style">
    <Header :title="title" back/>
    <transition :name="transitionName"  mode="out-in">
      <router-view/>
    </transition>
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
      loading: false,
      transitionName: 'side-right',
      title: ''
    };
  },
  // watch: {
  //   '$route' (to, from) {
  //     console.log(this.$route)
  //     let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
  //     if(isBack) {
  //       this.transitionName = 'side-right'
  //     } else {
  //       this.transitionName = 'side-left'
  //     }
  //   }
  // },
  provide(){
    return{
      app: this
    }
  },
  created() {},
  watch: {
    $route(newValue) {
      this.title = this.$route.meta.title
      // console.log(this.$route.meta.title)
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

<style lang="scss">
@import './assets/css/index.scss';


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
