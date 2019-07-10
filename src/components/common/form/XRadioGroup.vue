<template>
  <div class="x-radio-group">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'xradiogroup',
  props:{
    data:{
      type: Array
    },
    value:{
      type:[String,Number]
    },
    name:{
      type: String
    }
  },
  inheritAttrs:true,
  computed:{
    className(){
      return this.value == this.options.id;
    }
  },
  created(){
    console.log(this.$attrs)
  },
  data() {
    return {
      msg: '这是xradiogroup组件',
    };
  },
  methods:{
    handlerChange(value){
      this.$emit('change',this.options)
    }
  }
};
</script>
</script>

<style scoped>

</style>