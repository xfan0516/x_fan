<template>
  <label  class="x-radio">
      <x-icon type="md-radio-button-on" v-if="className" size="big"/>
      <x-icon type="md-radio-button-off" v-else size="big"/>
    <!-- <x-icon :class="{native:className}" type="md-radio" size="big"  color="#999"/> -->
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
      type:Array
    },
    name:{
      type: String
    }
  },
  watch:{
    value(){
      let item = this.value.filter(item => item === this.options.id)[0]
      this.value =  item
    }
  },
  data() {
    return {
      msg: '这是inputtext组件',
      className: ''
    };
  },
  methods:{
    handlerChange(e){
        console.log(this.value)

      this.$emit('change',this.options)
    }
  }
};
</script>

<style lang="stylus" scoped>
.x-radio{
  position relative
  line-height 1.5em
  padding .1rem .05rem

  .native{
    color: #0e90d2 !important
    vertical-align middle
  }
  .text{
    vertical-align middle
    display inline-block
    line-height 1.5em
    padding-left .05rem

  }
  .input-radio{
    position absolute
    left -2000
  }

}
</style>

