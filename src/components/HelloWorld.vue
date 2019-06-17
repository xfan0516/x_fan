<template>
  <div class="hello">
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>-->
    <h4>按钮</h4>
    <ul>
      <li class="x_flex">
        <x-btn text="Default">Default</x-btn>
        <x-btn text="primary" type="primary">primary</x-btn>
        <x-btn text="uccess" type="success">success</x-btn>
      </li>
      <li class="x_flex">
        <x-btn text="Default" size="small">Default</x-btn>
        <x-btn text="primary" type="primary" size="small">primary</x-btn>
        <x-btn text="uccess" type="success" size="small">success</x-btn>
      </li>
      <li class="x_flex">
        <x-btn text="Default" size="big">Default</x-btn>
        <x-btn text="primary" type="primary" size="big">primary</x-btn>
        <x-btn text="uccess" type="success" size="big">success</x-btn>
      </li>
      <li>
        <x-btn text="Default" size="lg">Default</x-btn>
        <x-btn text="primary" type="primary" size="lg">primary</x-btn>
        <x-btn text="uccess" type="success" size="lg" @click="toast">success</x-btn>
      </li>
    </ul>
    <h4>提示信息</h4>
    <ul>
      <li>
        <XBtn text="primary" type="primary" @click="toast">提示框</XBtn>
        <XBtn text="primary" type="primary" @click="message">全局提示框</XBtn>
      </li>
    </ul>
    <h4>图标</h4>
    <li>
      <x-icon type="ios-home" size="small"/>small
      <x-icon type="ios-home"/>default
      <x-icon type="ios-home" size="big"/>big
      <x-icon type="ios-home" size=".24rem" color="#f90"/>自定义大小
    </li>
    <!-- <Toast msg="这是提示框" /> -->
    <!--   <span class="x_btn">完成</span>
    <span class="x_btn-primary">完成</span>-->
    <h4>列表</h4>
    <Media class="media" v-for="item in list" :key="item.id">
      <div class="media-left" slot="media-left">
        <img :src="item.imgCrs" alt>
      </div>
      <div class="media-body" slot="media-body">
        <h3>{{item.title}}</h3>
        <p>{{item.intro}}</p>
      </div>
    </Media>
    <h4>视图</h4>
    <div class="thumbnail-list">
      <x-col class="col-thumbnail" span="12" v-for="item in list1" :key="item.id">
      <Thumbnail>
        <div class="pic" slot="thumbnail-pic">
          <img :src="item.imgCrs" alt>
        </div>
        <div class="info" slot="thumbnail-info">
          <h3>{{item.intro}}</h3>
        </div>
      </Thumbnail>

      </x-col>
    </div>
    <h4>单元格</h4>
    <div>
      <x-cell>
        <div slot="cell-left">标签名</div>
        <div slot="cell-right"><x-icon type="ios-arrow-forward" size="big"/></div>
      </x-cell>
     
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
      list: [
        {
          title: "A太平湖休闲垂钓",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs:
            "http://7xsav2.media1.z0.glb.clouddn.com/%E5%8A%9B%E5%8F%A4%E5%8A%9B.png",
          id: "1"
        },
        {
          title: "A太平湖休闲垂钓",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs: "http://img.ycb51.com/jf_plus/1555306843107_2538.png",
          id: "2"
        }
      ],
      list1: [
        {
          title: "A太平湖休闲垂钓",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs:
            "http://7xsav2.media1.z0.glb.clouddn.com/%E5%8A%9B%E5%8F%A4%E5%8A%9B.png",
          id: "11"
        },
        {
          title: "A太平湖休闲垂钓",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs: "http://img.ycb51.com/jf_plus/1555306843107_2538.png",
          id: "12"
        }
      ]
    };
  },
  components: {
    XBtn: reslove => require(["./common/XBtn.vue"], reslove),
    XIcon: reslove => require(["./common/XIcon.vue"], reslove)
  },
  methods: {
    toast() {
      let p = document.createElement("p");
      p.className = "toast";
      let span = document.createElement("span");
      p.append(span);
      span.innerHTML = "这是提示框";
      document.body.append(p);
      setTimeout(() => {
        p.remove();
      }, 1000);
    },
    message() {
      message.info("这是全局提示框");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.x_flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.hello {
  ul, li {
    list-style: none;
    padding: 2px 10px;
  }

  h4 {
    background: #eee;
    padding: 0.05rem 10px;
  }
}
.thumbnail-list
  padding 0 .05rem
  background #eee
  overflow hidden
.col-thumbnail
  padding 0 .05rem
 
</style>
