<template>
  <div class="x-main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'x-main',
  data () {
    return {
      msg: '这是 x-main 组件'
    }
  }
}
</script>
<style lang="scss">
.x-main {
  height: inherit;
  padding: 10px;
}
</style>
