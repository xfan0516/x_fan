<template>
  <label for="" class="x-select" :class="{'select-block':block}">
    <p class="label" v-if="label">{{label}}</p>
    <div class="select">
      <input class="input-text" type="text" :value="item.text" placeholder="请输入关键字" />
      <select name="" id="" :value="value" @change="handlerChange">
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
      type: Array,
      default: () => []
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
  created(){
      this.item =  this.options.filter(item => item.value == this.value )[0] || {}

    if (this.defaultValue) this.$emit('change', this.defaultValue)
  },
  methods:{
    handlerChange(e){
      var value = e.target.value
      this.item =  this.options.filter(item => item.value == value )[0]
      console.log(this.item)
      this.$emit('change', value)
    }
  },
  model: {
    event: 'change'
  }
};
</script>
