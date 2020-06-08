<template>
  <div class="basicComponent">
    <Header title="基础组件" back/>
    <div class="main">
      <x-cell v-for="item in list" :key="item.id" @click="$router.push(item.pushRoute)">
        <span slot="cell-left">{{ item.typeName}}</span>
        <span slot="cell-right">
          <x-icon size="big" :type="item.icon" />
        </span>
      </x-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: 'basicComponent',
  data () {
    return {
      msg: '这是 basicComponent 组件',
      list: [
        {
          id: '1',
          typeName: '按钮组件',
          pushRoute: '/demoButton',
          icon: 'ios-arrow-forward'
        },
        {
          id: '3',
          typeName: '单元格',
          pushRoute: '/demoCell',
          icon: 'ios-arrow-forward'
        },
        {
          id: '5',
          typeName: '图标组件',
          pushRoute: '/demoIcon',
          icon: 'ios-arrow-forward'
        },
        {
          id: '7',
          typeName: '布局组件',
          pushRoute: '/demoRow',
          icon: 'ios-arrow-forward'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.basicComponent {
  height: inherit;

  .main {
      padding: 10px;
  }

  .x-cell {
    margin-bottom: 10px;
  }
}
</style>
