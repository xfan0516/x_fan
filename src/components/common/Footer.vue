<template>
  <footer class="footer flex_space-around">
    <!-- <slot></slot> -->
    <div :class="(active === 'home') && 'active'" @click="$router.push('/home')">
      <x-icon type="ios-home" size="big"/>
      <p>首页</p>
    </div>
    <div :class="active === 'search' && 'active'" @click="$router.push('/search')">
      <x-icon type="ios-contact" size="big"/>
      <p>搜索</p>
    </div>
    <div :class="active === 'cart' && 'active'" @click="$router.push('/cart')">
      <x-icon type="ios-cart" size="big"/>
      <p>购物车</p>
    </div>
    <div :class="active === 'user' && 'active'" @click="$router.push('/user')">
      <x-icon type="ios-contact" size="big"/>
      <p>我的</p>
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
          console.log(newVal.name)
      }
  },
  computed:{

  },
  created() {
    this.active = this.$route.name
      console.log(this.$route.name)
  }
};
</script>

<style lang="stylus" >
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #eee;
  background: #fff;
  text-align: center;

  p {
    padding-top: 0.05rem;
  }
  .active{
      color: #f55
  }
}



.flex_space-around {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
