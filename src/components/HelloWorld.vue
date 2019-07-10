<template>
  <div class="hello">
    <Swiper :autoPlay="5000" :currIndex="currIndex" :list="list" @change="swiperChange">
      <li v-for="(item,index) in list" v-show="index === currIndex" :key="item.id">
        <img :src="item.src" alt />
        <p>{{item.text}}</p>
      </li>
      <template slot="swiper-page">
        <span
          v-for="(item,index) in list"
          :key="index"
          @click="swiperChange(index)"
          :class="index === currIndex && 'active'"
        ></span>
      </template>
    </Swiper>
    <div class="pad10">
      <input-text label="账号" type="text" :value="text" :block="true" @change="InputChange" />
      <input-text label="密码" type="text" :value="text" @change="InputChange" />
    </div>
    <div class="pad10">
     
      <br />
      <x-radio
        v-model="radiosValue"
        :options="item"
        v-for="item in radios"
        :key="item.id"
        :value="radiosValue"
        @change="radioChange"
      />
      <br />
      <x-select
        :value="selectValue"
        :options="selects"
        label="lang"
        :block="true"
        @change="selectChange"
      >
        <option :value="item.value" v-for="item in selects" :key="item.value">{{item.text}}</option>
      </x-select>
    </div>


    <div class="pad10">
      <form >
      <input-text label="用户名" type="text" :value="text" @change="InputChange" />
      <input-text label="密码" type="text" :value="text" @change="InputChange" />
      <x-btn type="">提交</x-btn>
        
      </form>
    </div>
  </div>
</template>

<script>
import message from "./common/Message";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
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
          value: "23",
          text: "css"
        }
      ],
      text: "rwerwe",
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
    
      list: [
        {
          src: require("@/assets/images/1.jpg"),
          id: 1,
          text: "这是表述文字"
        },
        {
          src: require("@/assets/images/2.jpg"),
          id: 3,
          text: "这是表述文字"
        },
        {
          src: require("@/assets/images/3.jpg"),
          id: 2,
          text: "这是表述文字"
        }
      ],
      currIndex: 0
    };
  },
  methods: {
    swiperChange(e) {
      this.currIndex = e;
    },
    change(value) {
      let item = this.value.filter(item => item === value.id)[0];
      if (item) {
        this.value = this.value.filter(item => item !== value.id);
      } else {
        this.value.push(value.id);
      }
    },
    InputChange(val) {
      console.log(val);
      this.text = val;
    },
    radioChange(val) {
      this.radiosValue = val.id;
      console.log(this.radiosValue);
    },
    selectChange(option) {
      this.selectValue = option;
      console.log(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.pad10 {
  padding: 0.1rem;
}
</style>
