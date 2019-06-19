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
      <x-btn type="primary" @click="showPrompt">modal Prompt</x-btn>
    </div>
    <Confirm title="提示" :msg="msg" :show="isShow" @onCancel="onCancel" @onConfirm="onConfirm" />
    <Prompt title="提示" :show="isShowPrompt" @onCancel="onCancel" @onConfirm="onConfirm">
      <div slot="modal-main">
        <input class="input-text" v-model="msg" type="text" placeholder="输入您想说的话" /> 
      </div>
    </Prompt>
  </div>
</template>
<script>
export default {
  name: "xfan",
  data() {
    return {
      msg: "",
      isShow: false,
      isShowPrompt:false
    };
  },
  methods: {
    showConfirm() {
      this.isShow = true;
    },
    onCancel() {
      this.isShow = false;
      this.isShowPrompt = false
    },
    showPrompt(){
      this.isShowPrompt = true
    },
    onConfirm() {
      this.$Message.info("保存成功");
      this.isShow = false;
      this.isShowPrompt = false
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xfan button {
  margin: 0.1rem;
}
.input-text {
  border: 1px solid #ccc;
  line-height: .3rem;
  padding: 0 .08rem;
  width: 80%;
}
</style>