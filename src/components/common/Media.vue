<template>
  <div class="media" @click="handleClick">
    <slot class="media-left" name="media-left"></slot>
    <slot class="media-body" name="media-body"></slot>
    
  </div>
</template>
<script>
export default {
  name: 'Media',
  data() {
    return {
      msg: '这是Media组件',
    };
  },
  methods:{
    handleClick(e){
      this.$emit('click',e)
    }
  }
};
</script>

