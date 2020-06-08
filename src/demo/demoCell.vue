<template>
  <div class="demo-cell">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'demoCell',
  data () {
    return {
      msg: '这是 demoCell 组件'
    }
  }
}
</script>
<style lang="scss">
.demo-cell {
  height: inherit;
}
</style>
