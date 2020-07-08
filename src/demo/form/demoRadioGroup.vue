<template>
  <div class="demo-checkbox-group">
    <!-- <Header title="单选组件" back/> -->
    <x-main>
      <x-row title="基本用法">
        <x-radio-group v-model="radiosValue" style="padding: .1rem">
          <x-radio
            v-model="radiosValue"
            :options="item"
            v-for="item in radios"
            :key="item.id"
            :value="radiosValue"
          />
        </x-radio-group>
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
      radiosValue: '',
      radios: [
        {
          id: 1,
          text: "上海"
        },
        {
          id: 2,
          text: "广州"
        },
        {
          id: 3,
          text: "深圳"
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
