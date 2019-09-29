<template>
<label  class="x-checkbox">
    <x-icon :class="{native:className}" type="md-checkbox" size="big"  color="#999"/>
    <input class="input-checkbox" type="checkbox" :value="options.id" :name="name" @change="handlerChange">
    <span class="text">{{options.text}}</span>
  </label>
</template>
<script>

export default {
  name: 'inputtext',
  props:{
    options:{
      type: Object
    },
    value:{
      type:Array
    },
    name:{
      type: String
    }
  },
  computed:{
    className(){
      let item = this.value.filter(item => item === this.options.id)[0]
      return item
    }
  },
  data() {
    return {
      msg: '这是inputtext组件',
    };
  },
  methods:{
    handlerChange(e){
      this.$emit('change',this.options)
    }
  }
};
</script>

