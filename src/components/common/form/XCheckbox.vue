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

<style lang="stylus" scoped>
.x-checkbox{
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
  .input-checkbox{
    position absolute
    left -2000
  }

}
</style>


<!--script>
// import Vue from 'vue'
// export default Vue.component('input-checkbox', {
//   model: {
//     prop: 'checked',
//     event: 'change'
//   },
//   props: {
//     // this allows using the `value` prop for a different purpose
//     value: [Number,String],
//     // use `checked` as the prop which take the place of `value`
//     checked: {
//       type: [Number,String],
//       default: 0
//     }
//   },
//   template:`
//     <input />
//   `
//   // ...
// })

// </script>