<template>
  <div class="xfan">
    <Header title="xfan组件展示">
      <span
        class="header-r"
        :style="{transform: 'rotate('+ headerDeg + 'deg)'}"
        @click="showSidebar"
        slot="header-right"
      >
        <transition name="rotate">
          <x-icon size="big" type="ios-menu" />
        </transition>
      </span>
    </Header>
    <x-scroll
      :bottomLoading="true"
      :downUpdate="true"
      @onScroll="onScroll"
      bottom=".49rem"
      top=".44rem"
    >
      <div class="main">
        <x-cell>
          <span slot="cell-left">Swiper组件</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <Swiper :autoPlay="5000" :currIndex="currIndex" :list="swiperList" @change="swiperChange">
          <li :key="item.id" v-for="(item,index) in swiperList" v-show="index === currIndex">
            <img :src="item.src" alt />
            <p>{{item.text}}</p>
          </li>
          <template slot="swiper-page">
            <span
              :class="index === currIndex && 'active'"
              :key="index"
              @click="swiperChange(index)"
              v-for="(item,index) in swiperList"
            ></span>
          </template>
        </Swiper>
        <x-cell>
          <span slot="cell-left">单元格列表</span>
          <span slot="cell-right">
            <!-- <x-icon type="ios-arrow-down" size="big"/> -->
          </span>
        </x-cell>
        <x-cell @click="$router.push('xicon')">
          <span slot="cell-left">图标组件</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-forward" />
          </span>
        </x-cell>
        <div class="x_flex-around col-xicon">
          <div>
            <x-icon size="small" type="ios-home" />
            <p>small</p>
          </div>
          <div>
            <x-icon type="ios-home" />
            <p>default</p>
          </div>
          <div>
            <x-icon size="big" type="ios-home" />
            <p>big</p>
          </div>
          <div>
            <x-icon color="#f90" size=".34rem" type="ios-home" />
            <p>自定义大小</p>
          </div>
        </div>
        <x-cell @click="$router.push('xform')">
          <span slot="cell-left">表单组件</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-forward" />
          </span>
        </x-cell>

        <x-cell>
          <span class="cell-left" slot="cell-left">
            Badge组件
            <Badge :num="badge" />
          </span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <div></div>
        <x-cell @click="showLoading">
          <span slot="cell-left">Loading组件</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <x-cell>
          <span slot="cell-left">按钮组件</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <div class="box-btn">
          <div>
            <x-btn text="Default">Default</x-btn>
            <x-btn text="primary" type="primary">primary</x-btn>
            <x-btn text type="success">success</x-btn>
            <x-btn text type="alert">alert</x-btn>
          </div>

          <div class="x_flex col-xbtn">
            <x-btn size="small" text="Default">small</x-btn>
            <x-btn text="primary">Default</x-btn>
            <x-btn size="big">big</x-btn>
            <x-btn size=".44rem">自定义大小</x-btn>
          </div>
        </div>
        <x-cell>
          <span slot="cell-left">栅格化</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
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
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <div class="box-btn">
          <x-btn @click="showConfirm" type="primary">modal Confirm</x-btn>
          <x-btn @click="showPrompt" type="primary">modal Prompt</x-btn>
        </div>

        <x-cell>
          <span slot="cell-left">信息提示框</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <div class="box-btn">
          <XBtn @click="message" text="primary" type="primary">信息提示框</XBtn>
        </div>

        <x-cell>
          <span slot="cell-left">图文列表</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <Media :key="item.id" class="media" v-for="item in list">
          <div class="media-left" slot="media-left">
            <img :src="item.imgCrs" alt />
          </div>
          <div class="media-body" slot="media-body">
            <h3 class="x_flex-between">
              <span class="media-title">{{item.title}}</span>
              <span class="text-9 h5 date">{{item.date}}</span>
            </h3>
            <p class="h3">{{item.intro}}</p>
          </div>
        </Media>
        <x-cell>
          <span slot="cell-left">上图下文列表</span>
          <span slot="cell-right">
            <x-icon size="big" type="ios-arrow-down" />
          </span>
        </x-cell>
        <div class="thumbnail-list">
          <x-col :key="item.id" class="col-thumbnail" span="12" v-for="item in list1">
            <Thumbnail>
              <div class="pic" slot="thumbnail-pic">
                <img :src="item.imgCrs" alt />
                <p>{{item.date}}</p>
              </div>
              <div class="info" slot="thumbnail-info">
                <h3>{{item.intro}}</h3>
              </div>
            </Thumbnail>
          </x-col>
        </div>
      </div>
    </x-scroll>

    <!-- 模态框 -->
    <Confirm
      :isShow="isShow"
      :msg="msg"
      @onCancel="onCancel"
      @onClose="onClose"
      @onConfirm="onConfirm"
      title="提示"
    />
    <Prompt :isShow="isShowPrompt" @onCancel="onCancel" @onConfirm="onConfirm" title="提示">
      <div slot="modal-main">
        <input class="input-text" placeholder="输入您想说的话" type="text" v-model="msgPrompt" />
      </div>
    </Prompt>

    <!-- 侧边栏 -->
    <Sidebar :sideShow="sideShow" @onCancel="onCancel" @onClose="onClose" @onConfirm="onConfirm" />
  </div>
</template>
<script>
export default {
  name: 'xfan',
  data() {
    return {
      msg: '这一个 Confirm 窗口',
      msgPrompt: '',
      isShow: false,
      isShowPrompt: false,
      sideShow: false,
      headerDeg: 0,
      badge: 12,
      list: [
        {
          title: `迈克尔·杰克逊 | 怀念你的第一个十年`,
          date: '2019-06-19',
          intro: ` [Michael Jackson1958年8月29日－2009年6月25日]
被尊称为“流行乐之王”（King of Pop），杰克逊对音乐、舞蹈和时尚的贡献，以及备受关注的个人生活，使他成为全球流行文化的代表人物超过四十年，并且活跃超过半世纪的歌手。`,
          imgCrs:
            'http://p2.music.126.net/fSC3dcJU2YaL1XogI6PWoA==/109951164163538572.jpg?param=140y140',
          id: '1'
        },
        {
          title: `迈克尔·杰克逊 | 怀念你的第一个十年`,
          date: '2019-06-17',
          intro: ` [Michael Jackson1958年8月29日－2009年6月25日]
被尊称为“流行乐之王”（King of Pop），杰克逊对音乐、舞蹈和时尚的贡献，以及备受关注的个人生活，使他成为全球流行文化的代表人物超过四十年，并且活跃超过半世纪的歌手。`,
          imgCrs:
            'http://p2.music.126.net/fSC3dcJU2YaL1XogI6PWoA==/109951164163538572.jpg?param=140y140',
          id: '2'
        }
      ],
      list1: [
        {
          title: `迈克尔·杰克逊 | 怀念你的第一个十年`,
          date: '2019-06-19',
          intro: ` [Michael Jackson1958年8月29日－2009年6月25日]
被尊称为“流行乐之王”（King of Pop），杰克逊对音乐、舞蹈和时尚的贡献，以及备受关注的个人生活，使他成为全球流行文化的代表人物超过四十年，并且活跃超过半世纪的歌手。`,
          imgCrs:
            'http://p2.music.126.net/fSC3dcJU2YaL1XogI6PWoA==/109951164163538572.jpg?param=140y140',
          id: '11'
        },
        {
          title: `迈克尔·杰克逊 | 怀念你的第一个十年`,
          date: '2019-06-17',
          intro: ` [Michael Jackson1958年8月29日－2009年6月25日]
被尊称为“流行乐之王”（King of Pop），杰克逊对音乐、舞蹈和时尚的贡献，以及备受关注的个人生活，使他成为全球流行文化的代表人物超过四十年，并且活跃超过半世纪的歌手。`,
          imgCrs:
            'http://p2.music.126.net/fSC3dcJU2YaL1XogI6PWoA==/109951164163538572.jpg?param=140y140',
          id: '12'
        }
      ],
      swiperList: [
        {
          src: require('@/assets/images/1.jpg'),
          id: 1,
          text: '这是表述文字'
        },
        {
          src: require('@/assets/images/2.jpg'),
          id: 3,
          text: '这是表述文字'
        },
        {
          src: require('@/assets/images/3.jpg'),
          id: 2,
          text: '这是表述文字'
        }
      ],
      currIndex: 0
    }
  },
  inject: ['app'],
  created() {
    this.$set(this.list1, 2, {
      title: '网易云音乐评论或单评点赞超过十万',
      date: '2019-06-18',
      intro: `本歌单所收藏歌曲
            语种不限，曲风不限，形式不限
            皆为评论过十万
            或单评点赞过十万
            及部分评论即将过十万
            或单评点赞即将过十万

            謹以此歌单送给我一生最爱的人`,
      imgCrs:
        'http://p3.music.126.net/IXvcNIY4pDSx_HhlPDRxBA==/109951164031716633.jpg?param=200y200',
      id: '13'
    })
  },
  watch: {
    sideShow(newValue) {
      this.headerDeg = newValue ? 90 : 0
    }
  },
  computed: {},
  methods: {
    showConfirm() {
      this.isShow = true
    },
    onClose() {
      this.isShow = false
      this.isShowPrompt = false
      this.sideShow = false
    },
    onCancel() {
      this.isShow = false
      this.isShowPrompt = false
      this.sideShow = false
    },
    showPrompt() {
      this.isShowPrompt = true
    },
    onConfirm() {
      this.$Message.info('保存成功')
      this.isShow = false
      this.isShowPrompt = false
      this.sideShow = false
    },
    showSidebar() {
      this.sideShow = true
    },
    message() {
      this.$Message.info('这是提示信息')
    },
    showLoading() {
      this.app.changeLoading(true)
    },
    swiperChange(e) {
      this.currIndex = e
    },
    onScroll() {
      this.$Message.info('数据加载中。。。')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.xfan .box-btn button {
  margin: vw(10vw);
}

.input-text {
  border: 1px solid #ccc;
  line-height: vw(30vw);
  padding: 0 vw(8vw);
  width: 80%;
}

.col-xicon {
  padding: vw(10vw) 0;
  align-items: flex-end;
  text-align: center;
}

.col-xbtn {
  align-items: flex-end;
}

.thumbnail-list {
  padding: vw(5vw);
  background: #eee;
  overflow: hidden;
}

.col-thumbnail {
  padding: 0 vw(5vw);
}

.col-xcol {
  height: vw(60vw);
  line-height: vw(60vw);
  text-align: center;
  background: rgba(0, 153, 229, 0.5)
    linear-gradient(
      90deg,
      #f5f5f5 4.16666667%,
      transparent 0,
      transparent 8.33333333%,
      #f5f5f5 0,
      #f5f5f5 12.5%,
      transparent 0,
      transparent 16.66666667%,
      #f5f5f5 0,
      #f5f5f5 20.83333333%,
      transparent 0,
      transparent 25%,
      #f5f5f5 0,
      #f5f5f5 29.16666667%,
      transparent 0,
      transparent 33.33333333%,
      #f5f5f5 0,
      #f5f5f5 37.5%,
      transparent 0,
      transparent 41.66666667%,
      #f5f5f5 0,
      #f5f5f5 45.83333333%,
      transparent 0,
      transparent 50%,
      #f5f5f5 0,
      #f5f5f5 54.16666667%,
      transparent 0,
      transparent 58.33333333%,
      #f5f5f5 0,
      #f5f5f5 62.5%,
      transparent 0,
      transparent 66.66666667%,
      #f5f5f5 0,
      #f5f5f5 70.83333333%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0,
      #f5f5f5 79.16666667%,
      transparent 0,
      transparent 83.33333333%,
      #f5f5f5 0,
      #f5f5f5 87.5%,
      transparent 0,
      transparent 91.66666667%,
      #f5f5f5 0,
      #f5f5f5 95.83333333%,
      transparent 0
    );
}

.col-6 {
  background: rgba(0, 229, 153, 0.5);
}

.col-12 {
  background: rgba(229, 0, 153, 0.5);
}
</style>