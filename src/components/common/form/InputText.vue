<template>
  <label for="" class="label-text" :class="{block:block}">
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

<style lang="scss">
.label-text {
  width: 100%;
  display: flex;
  align-items: center;
  line-height: .37rem;
  margin-bottom: .1rem;
  justify-content: flex-start;

  .label {
    width: 25%;
    height: .37rem;
    line-height: .37rem;

  }
  .input-text {

    height: .37rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    padding: 0 .1rem;
    border-radius: .05rem;
    font-size: .14rem;
  }
}
.block {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .label {

    height: .37rem;
    line-height: .37rem;
  }
}
</style>
