<template>
  <p class="toast">
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
    console.log(2)
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>