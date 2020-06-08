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
  created () {
    console.log(22)
  },
  
  mounted () {
    console.log(33)
  },
  methods: {
    handleClick (e) {
      this.$emit('click',e)
    }
  }
};
</script>
