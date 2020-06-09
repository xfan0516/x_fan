<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "XRow",
  props:{
    align: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      msg: "Welcome to Your col "
    };
  },
  computed: {
    className() {
      let className = [],
          baseicName = 'x-row';
      className.push(baseicName);
      this.align && className.push(baseicName + '-' + this.align);
      return className.join(' ')
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.x-row {
  &::after {
    content: ".";
    display: block;
    clear: both;
    height: 0;
    font-size: 0;
    visibility: hidden;
    overflow: hidden;
  }
  &-left {
    text-align: left;
  }
  &-center {
    text-align: center;
  }
  &-right {
    text-align: right;
  }

}

</style>