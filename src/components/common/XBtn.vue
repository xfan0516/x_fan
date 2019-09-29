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
    type: String,
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    className() {
      var type = "x_btn ",
        size = "";

      if (this.type) {
        type += "x_btn-" + this.type;
      }
      if (this.size) {
        size = "x_btn-" + this.size;
      }
      return type + " " + size;
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
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
