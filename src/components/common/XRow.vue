<template>
  <div class="x-row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "XRow",
  props:{
    span: [Number, String]
  },
  data() {
    return {
      msg: "Welcome to Your col "
    };
  },
  computed: {
    className() {
      let className = 'col-md-';
      className +=this.span;
      return className
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >


</style>