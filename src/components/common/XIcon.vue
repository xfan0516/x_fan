<template>
  <i @click="hadleClick" :class="'x-icon x-icon-'+ type" :style="style"><slot></slot></i>
</template>
<script>
export default {
  name: "x-icon",
  props: {
    type: {
        type: String,
        default:''
    },
    size: {
        type: String,
        default:''
    },
    color: String
  },
  data () {
    return {};
  },
  computed: {
    style () {
      let style = {}
      switch(this.size) {
          case 'small':
              style['font-size'] = '.12rem'
              style['width'] = '.12rem'
              style['height'] = '.12rem'
              // style['lineHeight'] = '.12rem'
              break;
          case 'big':
              style['font-size'] = '.20rem'
              style['width'] = '.20rem'
              style['height'] = '.20rem'
              // style['lineHeight'] = '.20rem'
              break;
        
          default:
            if(this.size){
              style['font-size'] = this.size
              style['width'] = this.size
              style['height'] = this.size
              // style['lineHeight'] = this.size
            }else{

              style['font-size'] = '.16rem'
              style['width'] = '.16rem'
              style['height'] = '.16rem'
              // style['lineHeight'] = '.16rem'
            }
      } 
      style['color'] = this.color
      
      return style
    }
  },
  methods:{
    hadleClick(e){
      this.$emit('click',e)
    }
  },
  created(){
      
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  .x-icon {
    position: relative;
    display: inline-block;
    width: .2rem;
    height: .2rem;
    line-height: 1em;
    font-size: .2rem;
    vertical-align: middle;

  }

</style>