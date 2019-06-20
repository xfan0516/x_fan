<template>
  <div class="loading" v-if="loading" @click="hideLoading">
    <transition name="rotate">
      <x-icon v-if="animte" class="icon-loading" type="ios-loading" size=".5rem"/>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "loading",
  data() {
    return {
      msg: "这是loading组件",
      animte: false
    };
  },
  computed: {
    ...mapGetters(["loading"])
  },
  watch: {
    loading(newValue) {
      this.$nextTick(() => {
        console.log(newValue);
        this.animte = newValue;
      });
    }
  },
  methods: {
    hideLoading() {
      this.set_loading(false);
    },

    ...mapMutations({
      set_loading: "set_loading"
    })
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
}
</style>