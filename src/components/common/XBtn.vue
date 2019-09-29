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

<style lang="scss">
/* @import '@/assets/css/pulic.styl' */
/* 默认大小 */
$btn-default: 0.3rem;

@mixin btn($num) {
  height: $btn-default + $num;
  line-height: $btn-default + $num;
  border-radius: ($btn-default + $num) * 0.1;
}

.x_btn {
  position: relative;
  display: inline-block;
  @include btn(0);
  padding: 0 0.15rem;
  background: #e6e6e6;
  color: #333;
}

.x_btn-primary {
  background: #0e90d2;
  color: #fff;
}

.x_btn-success {
  background: #5eb95e;
  color: #fff;
}

.x_btn-alert {
  background: #dd514c;
  color: #fff;
}

.x_btn-small {
  @include btn(-0.08rem);
}

.x_btn-big {
  @include btn(0.08rem);
}

.x_btn-lg {
  width: 100%;
}
</style>