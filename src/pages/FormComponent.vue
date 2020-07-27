<template>
  <div class="formComponent">
    <!-- <Header title="表单组件" back/> -->
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
  name: 'formComponent',
  data () {
    return {
      msg: '这是 formComponent 组件',
      list: [
        {
          id: '1',
          typeName: '输入框组件',
          pushRoute: '/demoInput',
          icon: 'ios-arrow-forward'
        },
        {
          id: '3',
          typeName: '复选框组件',
          pushRoute: '/demoCheckboxGroup',
          icon: 'ios-arrow-forward'
        },
        {
          id: '5',
          typeName: '单选组件组件',
          pushRoute: '/demoRadioGroup',
          icon: 'ios-arrow-forward'
        },
        {
          id: '7',
          typeName: '选择器组件',
          pushRoute: '/demoSelect',
          icon: 'ios-arrow-forward'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.formComponent {
  height: inherit;

  .main {
      padding: 10px;
  }

  .x-cell {
    margin-bottom: 2vw;
  }
}
</style>
