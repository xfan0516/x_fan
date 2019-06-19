<template>
  <div class="xfan">
    <Header title="xfan组件展示"/>
    <div>
      <x-cell @click="$router.push('xicon')">
        <span slot="cell-left">图标组件</span>
        <span slot="cell-right"><x-icon type="ios-arrow-forward" size="big"/></span>
      </x-cell>
      <x-cell>
        <span slot="cell-left">模态框</span>
        <span slot="cell-right"><x-icon type="ios-arrow-down" size="big"/></span>
      </x-cell>
      <x-btn type="primary" @click="showConfirm">modal Confirm</x-btn>
    </div>
    <Confirm :show="isShow" @onCancel="onCancel" @onConfirm="onConfirm"/>
  </div>
</template>
<script>
export default {
  name: "xfan",
  data() {
    return {
      msg: "Welcome to Your xfan ",
      isShow: false
    };
  },
  methods: {
    showConfirm() {
      this.isShow = true;
    },
    onCancel() {
      this.isShow = false;
    },
    onConfirm() {
      this.$Message.info("保存成功");
      this.isShow = false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xfan button {
  margin: 0.1rem;
}
</style>