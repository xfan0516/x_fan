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
      let className = 'col-md-';
      className +=this.span;
      return className
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-13, .col-md-14, .col-md-15, .col-md-16, .col-md-17, .col-md-18, .col-md-19, .col-md-20, .col-md-21, .col-md-22, .col-md-23, .col-md-24 {
  float: left;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  box-sizing border-box
}
.col-md-1
  width 4.16666667%
.col-md-2
  width 8.33333333%
.col-md-3
  width 12.5%
.col-md-4
  width 16.66666667%
.col-md-5
  width 20.83333333%
.col-md-6
  width 25%
.col-md-7
  width 29.16666667%
.col-md-8
  width 33.33333333%
.col-md-9
  width 37.5%
.col-md-10
  width: 41.66666667%
.col-md-11
  width: 45.83333333%
.col-md-12
  width 50%
.col-md-13
  width 54.16666667%
.col-md-14
  width 58.33333333%
.col-md-15
  width 62.5%
.col-md-16
  width 66.66666667%
.col-md-17
  width 70.83333333%
.col-md-18
  width 75%
.col-md-19
  width 79.16666667%
.col-md-20
  width 83.33333333%
.col-md-21
  width 87.5%
.col-md-22
  width 91.66666667%
.col-md-23
  width 95.83333333%
.col-md-24
  width 100%

</style>