<template>
  <label for="" class="label-text" :class="{'label-block':block}">
    <p class="label">{{label}}</p>
    <input class="input-text" :type="type" :value="value" placeholder="请输入关键字" @input="change">
  </label>
</template>
<script>
export default {
  name: 'inputtext',
  props:{
    block:{
      type: Boolean
    },
    label:{
      type: String
    },
    value:{
      type: [String, Boolean]
    },
    type:{
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      msg: '这是inputtext组件'
    };
  },
  created(){
    // console.log(this.$props)
  },
  methods:{
    change(e){
      this.$emit('change',e.target.value)
    }
  }
};
</script>


