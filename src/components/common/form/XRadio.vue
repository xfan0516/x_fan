<template>
  <label  class="x-radio" >
    <x-icon type="md-radio-button-on" v-if="className" size="big" color="#0e90d2"/>
    <x-icon type="md-radio-button-off" v-else size="big" color="#0e90d2"/>
    <input class="input-radio" type="radio" :value="options.id" :name="name" @change="handlerChange">
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
      type:[String, Number]
    },
    name:{
      type: String
    }
  },
  created(){
    // console.log(this.$attrs)
  },
  computed:{
    className(){
      return this.value == this.options.id;
    }
  },
  data() {
    return {
      msg: '这是inputtext组件',
      // className: ''
    };
  },
  methods:{
    handlerChange(e){
      this.$emit('change', e.target.value)
    }
  },
  model: {
    event: 'change'
  }
};
</script>


