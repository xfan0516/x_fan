<template>
  <footer class="footer flex_space-around">
    <!-- <div :class="(active === 'home') && 'active'" @click="$router.push('/home')">
      <x-icon type="ios-home" size="big"/>
      <p>首页</p>
    </div>
    <div :class="active === 'search' && 'active'" @click="$router.push('/search')">
      <x-icon type="ios-contact" size="big"/>
      <p>搜索</p>
    </div>
    <div :class="active === 'cart' && 'active'" @click="$router.push('/cart')">
      <x-icon type="ios-cart" size="big"><Badge num="19"/></x-icon>
      <p>购物车</p>
    </div>
    <div :class="active === 'user' && 'active'" @click="$router.push('/user')">
      <x-icon type="ios-contact" size="big"/>
      <p>我的</p>
    </div> -->
    
    <div :class="active === 'home' && 'active'" @click="$router.push('/home')">
      <x-icon type="ios-cart" size=".25rem"><Badge num="13"/></x-icon>
      <p>组件</p>
    </div>
    <div :class="active === 'user' && 'active'" @click="$router.push('/user')">
      <x-icon type="ios-contact" size=".25rem"/>
      <p>关于</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
 
  data () {
    return {
        active: 'home'
    };
  },
  watch: {
      $route (newVal) {
          this.active = newVal.name
      }
  },
  computed:{

  },
  created() {
    this.active = this.$route.name
  }
};
</script>

