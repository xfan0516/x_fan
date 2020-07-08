<template>
  <div class="demo-checkbox-group">
    <!-- <Header title="复选框组件" back/> -->
    <x-main>
      <x-row title="基本用法">
        <x-checkbox-group v-model="checkboxValue" style="padding: .1rem">
          <x-checkbox
            v-for="(item,index) in checkboxs"
            :key="index"
            :value="checkboxValue"
            :options="item"
            @change="checkboxChange"
          />
        </x-checkbox-group>
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
      checkboxValue: [],
      checkboxs: [
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
    checkboxChange(value) {
      let item = this.checkboxValue.filter(item => item === value.id)[0];
      if (item) {
        this.checkboxValue = this.checkboxValue.filter(
          item => item !== value.id
        );
      } else {
        this.checkboxValue.push(value.id);
      }
      console.log(this.checkboxValue);
    },
  }
}
</script>
<style lang="scss">
.demo-checkbox-group {
  height: inherit;
}
</style>
