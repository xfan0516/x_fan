<template>
  <i class="badge">{{num}}</i>
</template>
<script>
export default {
  name: 'badge',
  props:{
    num: [String,Number]
  },
  data() {
    return {
      msg: '这是badge组件'
    };
  }
};
</script>
