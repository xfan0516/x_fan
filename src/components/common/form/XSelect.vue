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

<style lang="scss">
.x-select {

  display: flex;
  align-items: center;
  line-height: .37rem;
  margin-bottom: .1rem;
  justify-content: flex-start;
  width: 100%;
  .label {

    width: 25%;
    height: .37rem;
    line-height: .37rem;
  }
  .select{
    position: relative;
    width: 100%;
    select{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      background: transparent;
      opacity: 0;
    }
  }
  .icon-select {

    position: absolute;
    top: .08rem;
    right: .1rem;
  }
  .input-text {

    width: 100%;
    height: .37rem;
    box-sizing: border-box;
    border: 1px solid #eee;
    padding: 0 .1rem;
    border-radius: .05rem;
    font-size: .14rem;
  }
}
.select-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .label {

    height: .37rem;
    line-height: .37rem;
  }

}

</style>
