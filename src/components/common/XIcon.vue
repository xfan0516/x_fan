<template>
  <i :class="className" :style="style" @click="hadleClick"><slot></slot></i>
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
    className() {
      var className = ['x-icon'],
          baseClass = "x-icon";
          
      className.push(baseClass + '-' + this.type)
      if (this.size) {
        className.push(baseClass + '-' + this.size)
      }
      return className.join(' ');
    },
    style() {
      var style = {};
      if (this.size) {
        style.height = this.size;
      }
      return style;
    },
    // style () {
    //   let style = {}
    //   switch(this.size) {
    //       case 'small':
    //           style['font-size'] = '.12rem'
    //           style['width'] = '.12rem'
    //           style['height'] = '.12rem' 
    //           // style['lineHeight'] = '.12rem'
    //           break;
    //       case 'big':
    //           style['font-size'] = '.20rem'
    //           style['width'] = '.20rem'
    //           style['height'] = '.20rem'
    //           // style['lineHeight'] = '.20rem'
    //           break;
        
    //       default:
    //         if(this.size){
    //           style['font-size'] = this.size
    //           style['width'] = this.size
    //           style['height'] = this.size
    //           // style['lineHeight'] = this.size
    //         }else{

    //           style['font-size'] = '.16rem'
    //           style['width'] = '.16rem'
    //           style['height'] = '.16rem'
    //           // style['lineHeight'] = '.16rem'
    //         }
    //   } 
    //   style['color'] = this.color
      
    //   return style
    // }
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