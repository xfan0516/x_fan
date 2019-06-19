<template>
  <button :class="'x_btn-'+type +' '+ 'x_btn-'+size" @click="handleClick">
    <slot></slot>
    <!-- {{text}} -->
  </button>
</template>
<script>
export default {
  name: "x-btn",
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    type: String,
    size: {
      type: String,
      default: ""
    }
  },
  data(){
	  return{

	  }
  },
  methods:{
	  handleClick(){
		  this.$emit('click')
	  }
  }
};
</script>

<style lang="stylus" scoped>
/* @import '@/assets/css/pulic.styl' */
/* 默认大小 */
$btn-default = 0.3rem;

btn(num) {
  height: $btn-default + num;
  line-height: $btn-default + num;
  border-radius: ($btn-default + num) * 0.15;
}

[class^='x_btn'] {
  display: inline-block;
  btn(0);
  padding: 0 0.1rem;
  background: #ccc;
  color: #333;
}

.x_btn-primary {
  background: #09f;
  color: #fff;
}

.x_btn-success {
  background: #19be6b;
  color: #fff;
}

.x_btn-small {
  btn(-0.08rem);
}

.x_btn-big {
  btn(0.08rem);
}

.x_btn-lg {
  width: 100%;
}
</style>