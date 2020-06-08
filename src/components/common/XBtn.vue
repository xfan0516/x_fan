<template>
  <button :class="className" @click="handleClick" :style="style">
    <slot></slot>
    <!-- {{text}} -->
  </button>
</template>
<script>
export default {
  name: "x-btn",
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ""
    },
    plain: Boolean
  },
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    className() {
      var className = [],
          baseClass = "x_btn",
          plain = this.plain ? '-plain' : '';
      className.push(baseClass)   
      if (this.type) {
        className.push(baseClass + '-' + this.type + plain)
      } else {
        className.push(baseClass + plain)
      }
      if (this.size) {
        className.push(baseClass + '-' + this.size)
      }
      return className.join(' ');
    },
    style() {
      var style = {};
      if (this.size) {
        style.height = this.size;
      }
      return style;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
