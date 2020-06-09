<template>
  <label for="" class="label-text" :class="{'label-block':block}">
    <p class="label">{{label}}</p>
    <input class="input-text" :type="type" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)" v-bind="$attrs">
  </label>
</template>
<script>
export default {
  name: 'inputtext',
  props:{
    placeholder: String,
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
  }
};
</script>


