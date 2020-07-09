<template>
  <div class="home">
    <!-- <Header title="首页" back/> -->
    
    <x-cell v-for="item in list" :key="item.id" @click="push(item)">
      <span slot="cell-left">{{ item.typeName}}</span>
      <span slot="cell-right">
        <x-icon size="big" :type="item.icon" />
      </span>
    </x-cell>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import XHeader from '@/components/common/Header.vue'

export default {
  name: "home",
  data() {
    return {
      msg: "这是Media组件",
      list: [
        {
          id: '1',
          typeName: '基础组件',
          pushRoute: '/basicComponent',
          icon: 'ios-cube-outline'
        },
        {
          id: '3',
          typeName: '表单组件',
          pushRoute: '/formComponent',
          icon: 'ios-paper-outline'
        },
        {
          id: '5',
          typeName: '弹框组件',
          pushRoute: '/formComponent',
          icon: 'md-copy'
        },
        {
          id: '7',
          typeName: '业务组件',
          pushRoute: '/workComponent',
          icon: 'ios-construct-outline'
        }
      ]
    };
  },
  components: {
    HelloWorld
  },
  created() {
    console.log(this);
  },
  methods: {
    push (item) {
      // this.list = this.list.filter(item => item.id != items.id)
      this.$router.push(item.pushRoute)
    }
  }
};
</script>
<style lang="scss">
.home {
  padding: 10px;

  .x-cell {
    margin-bottom: 10px;
  }
}
</style>

