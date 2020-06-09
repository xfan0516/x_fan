<template>
  <div class="demo-checkbox-group">
    <Header title="选择器组件" back/>
    <x-main>
      <x-row title="基本用法">
        <x-select
          :value="selectValue"
          :options="selects"
          label="选择语言"
        >
          <option :value="item.value" v-for="item in selects" :key="item.value">{{ item.text }}</option>
        </x-select>
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
      value: '',
      selectValue: '',
      selects: [
        {
          value: "12",
          text: "javascript"
        },
        {
          value: "13",
          text: "html"
        },
        {
          value: "30",
          text: "css"
        }
      ],
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.demo-checkbox-group {
  height: inherit;
}
</style>
