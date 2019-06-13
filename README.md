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
