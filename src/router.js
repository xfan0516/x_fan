import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta:{
        footer: true,
        title: '首页'
      }
    },
    {
      path: '/basicComponent',
      name: 'basicComponent',
      component: () => import('@/pages/BasicComponent.vue'),
      meta:{
        footer: true,
        title: '基础组件'
      }
    },
    {
      path: '/demoButton',
      name: 'demoButton',
      component: () => import('@/demo/basic/demoButton.vue'),
      meta:{
        footer: true,
        title: '按钮组件'
      }
    },
    {
      path: '/demoCell',
      name: 'demoCell',
      component: () => import('@/demo/basic/demoCell.vue'),
      meta:{
        footer: true,
        title: '单元格'
      }
    },
    {
      path: '/demoIcon',
      name: 'demoIcon',
      component: () => import('@/demo/basic/demoIcon.vue'),
      meta:{
        footer: true,
        title: '图标组件(双击复制)'
      }
    },
    {
      path: '/demoRow',
      name: 'demoRow',
      component: () => import('@/demo/basic/demoRow.vue'),
      meta:{
        footer: true,
        title: '布局组件'
      }
    },
    {
      path: '/formComponent',
      name: 'FormComponent',
      component: () => import(/* webpackChunkName: "formComponent" */ '@/pages/FormComponent.vue'),
      meta:{
        footer: true,
        title: '表单组件'
      }
    },
    {
      path: '/demoInput',
      name: 'demoInput',
      component: () => import('@/demo/form/demoInput.vue'),
      meta:{
        footer: true,
        title: '输入框'
      }
    },
    {
      path: '/demoCheckboxGroup',
      name: 'demoCheckboxGroup',
      component: () => import('@/demo/form/demoCheckboxGroup.vue'),
      meta:{
        footer: true,
        title: '复选框组件'
      }
    },
    {
      path: '/demoRadioGroup',
      name: 'demoRadioGroup',
      component: () => import('@/demo/form/demoRadioGroup.vue'),
      meta:{
        footer: true,
        title: '单选框组件'
      }
    },
    {
      path: '/demoSelect',
      name: 'demoSelect',
      component: () => import('@/demo/form/demoSelect.vue'),
      meta:{
        footer: true,
        title: '选择器组件'
      }
    },
    {
      path: '/workComponent',
      name: 'WorkComponent',
      component: () => import(/* webpackChunkName: "WorkComponent" */ '@/pages/WorkComponent.vue'),
      meta:{
        footer: true,
        title: '业务组件'
      }
    },
    {
      path: '/demoSwiper',
      name: 'demoSwiper',
      component: () => import('@/demo/work/demoSwiper.vue'),
      meta:{
        footer: true,
        title: 'Swiper'
      }
    },

    
    {
      path: '/xfan',
      name: 'xfan',
      component: () => import('@/components/XFan.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/xform',
      name: 'xform',
      component: () => import('@/views/XForm.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue'),
      meta:{
        footer: true,
        title: '我的'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
      meta:{
        footer: true
      }
    },
    { //查看字体图标
      path: '/xicon',
      name: 'x-icon',
      component: () => import('@/views/XIcon.vue'),
      meta:{
        footer: true
      }
    }
  ]
})
