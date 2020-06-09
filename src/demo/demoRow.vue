<template>
  <div class="demo-cell">
    <Header title="单元格" back/>
    <div class="main">
      <x-row class="text-l">
        基本用法
      </x-row>
      <x-row class="text-c">
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
        <x-col span="8">8</x-col>
      </x-row>
      <x-row class="text-c">
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
        <x-col span="6">6</x-col>
      </x-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demoCell',
  data () {
    return {
      msg: '这是 demoCell 组件'
    }
  }
}
</script>
<style lang="scss">
.demo-cell {
  height: inherit;

  .main {
    padding: 10px;
  }

  .x-row {
    padding-top: 10px;
  }
  
  .col-md-8:nth-child(2n) {
    line-height: 0.4rem;
    background: #0e90d2;
  }
  .col-md-8:nth-child(2n + 1) {
    line-height: 0.4rem;
    background: #5eb95e;
  }
  .col-md-6:nth-child(2n + 1) {
    line-height: 0.4rem;
    background: #5eb95e;
  }
  .col-md-6:nth-child(2n) {
    line-height: 0.4rem;
    background: #0e90d2;
  }
}
</style>
