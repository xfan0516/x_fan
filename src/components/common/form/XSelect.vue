<template>
  <label for="" class="x-select" :class="{'select-block':block}">
    <p class="label" v-if="label">{{label}}</p>
    <div class="select">
      <input class="input-text" type="text" :value="item.text" placeholder="请输入关键字" />
      <select name="" id="" @change="handlerChange">
        <slot></slot>
      </select>
      <x-icon class="icon-select" type="ios-arrow-down" size="big"/>
    </div>
  </label>
</template>
<script>
export default {
  name: 'inputtext',
  props:{
    options: {
      type:Array,
      default:[]
    },
    block:{
      type: Boolean
    },
    label:{
      type: String
    },
    value:{
      type: [String, Number]
    },
    defaultValue:{
      type: [String,Number],
      default: ''
    }
  },
  data() {
    return {
      msg: '这是inputtext组件',
      item:{}
    };
  },
  
  watch:{
    value(){
      console.log(this.value,this.options)
      this.item =  this.options.filter(item => item.value == this.value )[0]
    }
  },
  created(){
      console.log(this.value,this.options)
      this.item =  this.options.filter(item => item.value == this.value )[0]

    if(this.defaultValue) this.$emit('change',this.defaultValue)
  },
  methods:{
    handlerChange(e){
      
      this.$emit('change',e.target.value)
    }
  }
};
</script>
