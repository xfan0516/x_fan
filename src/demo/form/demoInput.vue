<template>
  <div class="demo-input">
    <Header title="输入框" back/>
    <x-main>
      <x-row>
        基本用法
      </x-row>
      <x-row>
        <InputText v-model="value" label="标签" placeholder="请输入内容"/>
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
