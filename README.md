# x_fan

## Project setup
```
npm install
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
    type：按钮类型 Default, primary, success 默认：Default
    size：按钮大小 small, Default, big, lg 默认：Default
```
### 提示信息 Message
```
Message.info(msg) //msg:字符串
```
### 图标组件 XIcon
```
<x-icon type="ios-home" size=".24rem" color="#f90"/>
type：图标名称 *必填项
size：图标大小 small, Default, big,自定义大小 默认：Default
color：图标颜色
```
### header组件 Header
```
<x-header title="首页" back />
title：标题
back：是否有返回按钮  默认：false
<!-- headerR： 是否有返回按钮  默认：false -->
```
### Media组件 Media
```
<Media class="media" v-for="item in list" :key="item.id">
    <div class="media-left" slot="media-left">
        <img src="logo.png" alt>
    </div>
    <div class="media-body" slot="media-body">
        <h3>这是标题</h3>
        <p>简介说明</p>
    </div>
</Media>
接收两个slot： media-left和media-body
media-left：存放图片的容器
media-body：标题与说明
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
thumbnail-info：标题与说明
```
### XCol栅格化组件 XCol
```
<XCol span="12"></XCol>
接收一个props： span
span：1~24之间的数字或字符串
栅格化平均分成24份每份是4.16666667%
```
### XCell单元格 XCell
```
<x-cell>
    <div slot="cell-left">标签名</div>
    <div slot="cell-right"><x-icon type="ios-arrow-forward" size="big"/></div>
</x-cell>
接收两个slot： cell-left和cell-right
cell-left：包含单元格左侧的内容，内容可以
cell-right：包含单元格右侧的内容
```
