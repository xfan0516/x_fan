<template>
  <div class="modal-confirm" v-if="isShow">
    <transition name="fade">
      <div class="mask" v-if="showBody" @click="close"></div>
    </transition>
    <transition name="bounce">
      <div class="modal-body" v-if="showBody">
        <div class="modal-header">
          <h1>{{title}}</h1>
        </div>
        <div class="modal-main">
          <slot v-if="!msg" name="modal-main"></slot>
          {{msg}}
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
import { setTimeout } from "timers";
export default {
  name: "confirm",
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
  created() {},
  mounted() {},
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
