<template>
  <div :class="className">
    <h3 v-if="title" class="x-row-title"> {{ title }}</h3>
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
    },
    title: String
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
  &-title {
    margin: .1rem 0 .08rem;
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