<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Col",
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
      let className = [],
          basicName = 'col-md-';
      className.push(basicName + this.span);
      return className
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >


</style>