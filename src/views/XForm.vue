<template>
  <div class="home">
    <Header title="表单组件"></Header>
    <x-scroll>
      <div class="main">
        <div>
          <x-cell>
            <span slot="cell-left">复选框</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big" />
            </span>
          </x-cell>
          <x-checkbox-group v-model="checkboxValue" style="padding: .1rem">
            <x-checkbox
              v-for="(item,index) in checkboxs"
              :key="index"
              :value="checkboxValue"
              :options="item"
              @change="checkboxChange"
            />
          </x-checkbox-group>
        </div>

        <div>
          <x-cell>
            <span slot="cell-left">单选框</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big" />
            </span>
          </x-cell>
          <x-radio-group v-model="radiosValue" style="padding: .1rem">
            <x-radio
              v-model="radiosValue"
              :options="item"
              v-for="item in radios"
              :key="item.id"
              :value="radiosValue"
              @change="radioChange"
            />
          </x-radio-group>
        </div>
        <div>
          <x-cell>
            <span slot="cell-left">选择器</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big" />
            </span>
          </x-cell>
          <div style="padding: .1rem">
            <x-select
              :value="selectValue"
              :options="selects"
              label="语言"
              @change="selectChange"
            >
              <option :value="item.value" v-for="item in selects" :key="item.value">{{item.text}}</option>
            </x-select>

          </div>
        </div>
        <div>
          <x-cell>
            <span slot="cell-left">inputText</span>
            <span slot="cell-right">
              <x-icon type="ios-arrow-down" size="big" />
            </span>
          </x-cell>
          <div style="padding: .1rem">
            <InputText :block="true" label="姓名" value="张三"/>
            <InputText label="身高" value="1.8m"/>

          </div>
        </div>
      </div>

    </x-scroll>
  </div>
</template>
<script>
export default {
  name: "XForm",
  data() {
    return {
      msg: "这是XForm组件",
      checkboxValue: [1],
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
      radiosValue: "30",
      radios: [
        {
          id: 10,
          text: "初中"
        },
        {
          id: 20,
          text: "高中"
        },
        {
          id: 30,
          text: "本科"
        }
      ],
      selectValue: "12",
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
    };
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
    radioChange(val) {
      this.radiosValue = val.id;
      console.log(this.radiosValue);
    },
    selectChange(value) {
      console.log(value,this.selectValue);
      this.selectValue = value;
    }
  }
};
</script>

<style scoped>
</style>