<template>
  <div class="demo-button">
    <!-- <Header title="按钮组件" back/> -->
    <div class="main">
      <x-row title="按钮类型">
        <x-btn text="Default">Default</x-btn>
        <x-btn text="primary" type="primary">primary</x-btn>
        <x-btn text type="success">success</x-btn>
        <x-btn text type="alert">alert</x-btn>
        <x-btn text type="danger">danger</x-btn>
      </x-row>
      <x-row title="边框按钮">
        <x-btn text="primary" type="primary" plain>primary</x-btn>
        <x-btn text type="success" plain>success</x-btn>
        <x-btn text type="alert" plain>alert</x-btn>
        <x-btn text type="danger" plain>danger</x-btn>
      </x-row>
      <x-row title="按钮尺寸">
        <x-btn type="primary" size="big">big</x-btn>
        <x-btn type="primary" text="primary">Default</x-btn>
        <x-btn type="primary" size="small" text="Default">small</x-btn>
      </x-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoButton',
  data () {
    return {
      msg: '这是  组件'
    }
  }
}
</script>
<style lang="scss">
.demo-button{
  height: inherit;

  .main {
    padding: 10px;
  }

  .x-row {
    padding-top: 10px;
  }

  button[class^="x_btn"] {
    margin: 0 10px 10px 0;
  }
}
</style>
