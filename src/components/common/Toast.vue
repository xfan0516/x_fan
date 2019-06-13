<template>
  <p class="toast" ref="toast">
    <span>{{msg}}</span>
  </p>
</template>
<script>
export default {
  name: "Toast",
  props: {
    msg: String
  },
  data () {
    return {};
  },
  created(){
      setTimeout(() => {
        this.$refs.toast.style.opacity = 0;
      }, 2000);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>