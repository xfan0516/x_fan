<template>
  <div class="modal" v-if="isShow">
    <transition name="fade">
      <div class="mask" v-if="showBody" @click="close"></div>
    </transition>
    <transition name="bounce">
      <div class="modal-body" v-if="showBody">
        <div class="modal-header">
          <h1>{{title}}</h1>
        </div>
        <div class="modal-main">
          <slot name="modal-main"></slot>
        </div>
        <div class="modal-footer x_flex-between">
          <span @click="cancel">{{cancelText}}</span>
          <span @click="confirm">{{confirmText}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "prompt",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: String,
    msg: String,
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  data() {
    return {
      showBody: false
    };
  },
  computed: {},
  watch: {
    isShow() {
      this.$nextTick(() => {
        this.showBody = this.isShow;
      });
    }
  },
  methods: {
    
    close(e) {
      this.showBody = false;
      setTimeout(() => {
        this.$emit("onClose", e);
      }, 300);
    },
    cancel(e) {
      this.showBody = false;
      setTimeout(() => {
        this.$emit("onCancel", e);
      }, 300);
    },
    confirm(e) {
      this.showBody = false;
      setTimeout(() => {
        this.$emit("onConfirm", e);
      }, 300);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90000;
  width: 100%;
  height: 100%;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .modal-body {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 80%;
    text-align: center;
    background: #ffffff;
    border-radius: 0.05rem;
  }

  .modal-header {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.5px solid #fafafa;
  }

  .modal-main {
    line-height: 0.4rem;
    padding: 0.05rem 0;
  }

  .modal-footer {
    line-height: 0.45rem;
    border-top: 0.5px solid #eee;

    span {
      width: 50%;
      line-height: inherit;
      font-size: 0.14rem;
      color: #09f;
      border-right: 0.5px solid #eee;
    }
  }
}
</style>