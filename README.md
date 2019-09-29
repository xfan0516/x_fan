# x_fan-ui
这是用于vue的组件库

## 快速使用
```
npm install x_fan-ui --save
import xFanUi from 'x_fan-ui'
Vue.use(xFanUi)

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 按钮组件 XBtn
```
<x-btn type="success" size="small">success</x-btn>

XIcon 接收两个props: type, size
    type：按钮类型 Default, primary, success 默认：Default
    size：按钮大小 small, Default, big, lg 默认：Default
```
### 提示信息 Message
```
this.$Message.info(msg) //msg:字符串
```
### 图标组件 XIcon
```
<x-icon type="ios-home" size=".24rem" color="#f90"/>

XIcon 接收三个props: type, size, color
    type：图标名称 *必填项
    size：图标大小 small, Default, big,自定义大小 默认：Default
    color：图标颜色
```
### header组件 Header
```
<x-header title="首页" back />

Header 接收三个props : title, back, headerR
    title：标题
    back：是否有返回按钮  默认：false
    headerR： 是否有返回按钮  默认：false
```
### Media组件 Media
```
<Media class="media" v-for="item in list" :key="item.id">
    <div class="media-left" slot="media-left">
        <img :src="item.imgCrs" alt>
    </div>
    <div class="media-body" slot="media-body">
        <h3 class="x_flex-between">
        <span class="media-title">{{item.title}}</span>
        <span class="text-9 h5 date">{{item.date}}</span>
        </h3>
        <p class="h3">{{item.intro}}</p>
    </div>
</Media>

Media 接收两个slot： media-left和media-body
    media-left：存放图片的容器
    media-body：存放标题与说明，内容可以自定义
```
### Thumbnail视图组件 Thumbnail
```
<Thumbnail>
    <div class="pic" slot="thumbnail-pic">
        <img :src="item.imgCrs" alt>
    </div>
    <div class="info" slot="thumbnail-info">
        <h3>{{item.intro}}</h3>
    </div>
</Thumbnail>

接收两个slot： thumbnail-pic和mthumbnail-info
    thumbnail-pic：存放图片的容器
    thumbnail-info：存放标题或说明，内容可以自定义
```
### XCol栅格化组件 XCol
```
<XCol span="12"></XCol>

XCol 接收一个props： span
    span：1~24之间的数字或字符串
    栅格化平均分成24份每份是4.16666667%
```
### XCell单元格 XCell
```
<x-cell>
    <div slot="cell-left">标签名</div>
    <div slot="cell-right"><x-icon type="ios-arrow-forward" size="big"/></div>
</x-cell>

XCell 接收两个slot： cell-left和cell-right
    cell-left：包含单元格左侧的内容，内容可以自定义
    cell-right：包含单元格右侧的内容，内容可以自定义
```
### Modal 模态框
#### Confirm
```
<Confirm 
    title="提示" 
    :msg="msg" 
    :isShow="false" 
    cancelText="取消"
    confirmText="确定"
    @onCancel="onCancel" 
    @onConfirm="onConfirm" 
/>

Confirm 接受5个props： title, msg, isShow, cancelText, confirmText
    title: 标题
    msg： 提示信息
    isShow：是否显示, 默认是false
    cancelText: 取消按钮文字，默认是取消
    confirmText: 确认按钮文字，默认是确认

事件: onCancel,onConfirm
    onCancel: 用户取消
    onConfirm: 用户确认

```
#### Prompt
```
<Prompt 
    title="提示" 
    :isShow="false" 
    cancelText="取消"
    confirmText="确定"
    @onCancel="onCancel" 
    @onConfirm="onConfirm"
>
    <div slot="modal-main">
        <input class="input-text" v-model="msgPrompt" type="text" placeholder="输入您想说的话" /> 
    </div>
</Prompt>

Prompt 接受5个props,一个slot;
props: title, msg, isShow, cancelText, confirmText;
    title: 标题
    msg： 提示信息
    isShow：是否显示, 默认是false
    cancelText: 取消按钮文字，默认是取消
    confirmText: 确认按钮文字，默认是确认

slot: modal-main
    modal-main: Prompt的主体内容

事件: onCancel,onConfirm
    onCancel: 用户取消
    onConfirm: 用户确认
```
#### Swiper组件
```
<Swiper :autoPlay="5000" :currIndex="currIndex" :list="list" @change="swiperChange">
    <li v-for="(item,index) in list" v-show="index === currIndex" :key="item.id">
    <img :src="item.src" alt>
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

Prompt 接受3个props,两个slot;
props: autoPlay, currIndex, list;
    autoPlay:轮播停留时长,默认是3000
    currIndex:当前显示第一个的索引
    list: 数组类型

slot: default(slot) swiper-page
    default(slot): 显示图片类容
    swiper-page: 自定义分页器，非必选




```



