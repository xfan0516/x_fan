<template>
  <div class="demo-input">
    <!-- <Header title="输入框" back/> -->
    <x-main>
      <x-row title="基本用法">
        <InputText v-model="value" label="标签" placeholder="请输入内容"/>
      </x-row>
      <x-row title="自定义类型">
        <InputText v-model="value" label="文本" placeholder="请输入内容"/>
        <InputText v-model="value" type="number" label="数字" placeholder="请输入数字" />
        <InputText v-model="value" type="password" label="密码" placeholder="请输入密码" />
      </x-row>
    </x-main>
  </div>
</template>
<script>
export default {
  name: 'demoInput',
  data () {
    return {
      msg: '这是 demoInput 组件',
      value: ''
    }
  }
}
</script>
<style lang="scss">
.demo-input {
  height: inherit;
}
</style>
