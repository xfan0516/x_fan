<template>
  <div class="xfan">
    <Header title="xfan组件展示"/>
    <div>
      <x-cell>
        <span slot="cell-left">单元格列表</span>
        <span slot="cell-right">
          <!-- <x-icon type="ios-arrow-down" size="big"/> -->
        </span>
      </x-cell>
      <x-cell @click="$router.push('xicon')">
        <span slot="cell-left">图标组件</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-forward" size="big"/>
        </span>
      </x-cell>
      <div class="x_flex-around col-xicon">
        <div>
          <x-icon type="ios-home" size="small"/>
          <p>small</p>
        </div>
        <div>
          <x-icon type="ios-home"/>
          <p>default</p>
        </div>
        <div>
          <x-icon type="ios-home" size="big"/>
          <p>big</p>
        </div>
        <div>
           <x-icon type="ios-home" size=".24rem" color="#f90"/>
          <p>自定义大小</p>
        </div>
       
      </div>
      <x-cell>
        <span slot="cell-left">按钮组件</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <div>
        <div>
          <x-btn text="Default">Default</x-btn>
          <x-btn text="primary" type="primary">primary</x-btn>
          <x-btn text="" type="success">success</x-btn>
          <x-btn text="" type="alert">alert</x-btn>
        </div>
        
        <div class="x_flex col-xbtn">
          <x-btn text="Default" size="small">small</x-btn>
          <x-btn text="primary" >Default</x-btn>
          <x-btn size="big">big</x-btn>
          <x-btn size="big">自定义大小</x-btn>
        </div>

      </div>
      <x-cell>
        <span slot="cell-left">栅格化</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <div class="clearfix col-xcol">
        <x-col span="1">1</x-col>
        <x-col span="1">2</x-col>
        <x-col span="1">3</x-col>
        <x-col span="1">4</x-col>
        <x-col span="1">5</x-col>
        <x-col span="1">6</x-col>
        <x-col span="1">7</x-col>
        <x-col span="1">8</x-col>
        <x-col span="1">9</x-col>
        <x-col span="1">10</x-col>
        <x-col span="1">11</x-col>
        <x-col span="1">12</x-col>
        <x-col span="1">13</x-col>
        <x-col span="1">14</x-col>
        <x-col span="1">15</x-col>
        <x-col span="1">16</x-col>
        <x-col span="1">17</x-col>
        <x-col span="1">18</x-col>
        <x-col span="1">19</x-col>
        <x-col span="1">20</x-col>
        <x-col span="1">21</x-col>
        <x-col span="1">22</x-col>
        <x-col span="1">23</x-col>
        <x-col span="1">24</x-col>
      </div>
       <div class="clearfix col-xcol">
        <x-col class="col-6" span="6">6</x-col>
        <x-col class="col-12" span="12">12</x-col>
        <x-col class="col-6" span="6">6</x-col>

       </div>
      <x-cell>
        <span slot="cell-left">模态框</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <x-btn type="primary" @click="showConfirm">modal Confirm</x-btn>
      <x-btn type="primary" @click="showPrompt">modal Prompt</x-btn>

      <x-cell>
        <span slot="cell-left">信息提示框</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <XBtn text="primary" type="primary" @click="message">信息提示框</XBtn>

      <x-cell>
        <span slot="cell-left">图文列表</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <Media class="media" v-for="item in list" :key="item.id">
        <div class="media-left" slot="media-left">
          <img :src="item.imgCrs" alt>
        </div>
        <div class="media-body" slot="media-body">
          <h3 class="x_flex-between">{{item.title}} <span class="text-9">{{item.date}}</span></h3>
          <p>{{item.intro}}</p>
        </div>
      </Media>
      <x-cell>
        <span slot="cell-left">上图下文列表</span>
        <span slot="cell-right">
          <x-icon type="ios-arrow-down" size="big"/>
        </span>
      </x-cell>
      <div class="thumbnail-list">
        <x-col class="col-thumbnail" span="12" v-for="item in list1" :key="item.id">
        <Thumbnail>
          <div class="pic" slot="thumbnail-pic">
            <img :src="item.imgCrs" alt>
            <p>{{item.date}}</p>

          </div>
          <div class="info" slot="thumbnail-info">
            <h3>{{item.intro}}</h3>
          </div>
        </Thumbnail>

        </x-col>
      </div>

      
      <div>
     
    </div>
    </div>


    <!-- 模态框 -->
    <Confirm title="提示" :msg="msg" :isShow="isShow" @onCancel="onCancel" @onConfirm="onConfirm"/>
    <Prompt title="提示" :isShow="isShowPrompt" @onCancel="onCancel" @onConfirm="onConfirm">
      <div slot="modal-main">
        <input class="input-text" v-model="msgPrompt" type="text" placeholder="输入您想说的话">
      </div>
    </Prompt>
  </div>
</template>
<script>
export default {
  name: "xfan",
  data() {
    return {
      msg: "这一个 Confirm 窗口",
      msgPrompt: "",
      isShow: false,
      isShowPrompt: false,
      list: [
        {
          title: "A太平湖休闲垂钓",
          date: "2019-06-19",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs:
            "http://7xsav2.media1.z0.glb.clouddn.com/%E5%8A%9B%E5%8F%A4%E5%8A%9B.png",
          id: "1"
        },
        {
          title: "A太平湖休闲垂钓",
          date: "2019-06-17",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs: "http://img.ycb51.com/jf_plus/1555306843107_2538.png",
          id: "2"
        }
      ],
      list1: [
        {
          title: "A太平湖休闲垂钓",
          date: "2019-06-19",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs:
            "http://7xsav2.media1.z0.glb.clouddn.com/%E5%8A%9B%E5%8F%A4%E5%8A%9B.png",
          id: "11"
        },
        {
          title: "A太平湖休闲垂钓",
          date: "2019-06-17",
          intro:
            "三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获三个月没去钓鱼，今天终于可以出海止止瘾，还好有少少收获",
          imgCrs: "http://img.ycb51.com/jf_plus/1555306843107_2538.png",
          id: "12"
        }
      ]
    };
  },
  methods: {
    showConfirm() {
      this.isShow = true;
    },
    onCancel() {
      this.isShow = false;
      this.isShowPrompt = false;
    },
    showPrompt() {
      this.isShowPrompt = true;
    },
    onConfirm() {
      this.$Message.info("保存成功");
      this.isShow = false;
      this.isShowPrompt = false;
    },
    message(){
      this.$Message.info('这是提示信息')
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.xfan button {
  margin: 0.1rem;
}
.input-text {
  border: 1px solid #ccc;
  line-height: 0.3rem;
  padding: 0 0.08rem;
  width: 80%;
}
.col-xicon {
  padding: .1rem 0;
  align-items: flex-end;
  text-align: center
}
.col-xbtn {
  align-items: flex-end;

}
.thumbnail-list
  padding .05rem
  background #eee
  overflow hidden
.col-thumbnail
  padding 0 .05rem
.col-xcol
  height: .6rem
  line-height .6rem
  text-align center
  background: rgba(0,153,229,.5) linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);
.col-6
  background: rgba(0,229,153,.5)
.col-12
  background: rgba(229,0,153,.5)
</style>