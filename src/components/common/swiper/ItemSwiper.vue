<template>
<li  v-show="index === currIndex" :key="vattr.item.id">
    <img :src="vattr.item.src" alt />
    <p>{{vattr.item.text}}</p>
</li>
</template>
<script>
export default {
  name: 'ItemSwiper',
  props:{
    vattr:{
      type: Object
    }
  },
  data () {
    return {
      msg: '这是ItemSwiper组件'
    }
  }
}
</script>
<style lang="scss">
.ItemSwiper {
  height: inherit
}
</style>
