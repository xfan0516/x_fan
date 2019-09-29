<template>
  <div class="x-checkbox-group">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'xcheckboxgroup',
  props:{
    data:{
      type: Array
    },
    value:{
      type:Array
    },
    name:{
      type: String
    }
  },
  inheritAttrs:true,
  computed:{
    className(){
      let item = this.value.filter(item => item === this.options.id)[0]
      return item
    }
  },
  created(){
    console.log(this.$attrs)
  },
  data() {
    return {
      msg: '这是xcheckboxgroup组件',
    };
  },
  methods:{
    handlerChange(value){
      this.$emit('change',value)
    }
  }
};
</script>

