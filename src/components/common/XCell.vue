<template>
  <div class="x-cell" @click="handleClick">
    <slot class="cell-left" name="cell-left"></slot>
    <slot name="cell-right"></slot>
  </div>
</template>
<script>
export default {
  name: 'XCell',
  data() {
    return {
      msg: '这是XCell组件'
    };
  },
  methods: {
    handleClick (e) {
      this.$emit('click',e)
    }
  }
};
</script>
