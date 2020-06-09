<template>
  <div class="demo-cell">
    <Header title="单元格" back/>
    <div class="main">
      <x-cell>
        <span slot="cell-left">单元格</span>
        <span slot="cell-right">
          <x-icon size="big" type="ios-arrow-forward" />
        </span>
      </x-cell>
      <x-cell>
        <span slot="cell-left">单元格</span>
        <span slot="cell-right">
          <span class="text-9">内容</span>
          <x-icon size="big" type="ios-arrow-forward" />
        </span>
      </x-cell>
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

  .x-cell {
    margin-top: 10px;
  }
}
</style>
