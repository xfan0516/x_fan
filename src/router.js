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
        footer: true
      }
    },
    {
      path: '/basicComponent',
      name: 'basicComponent',
      component: () => import('@/pages/BasicComponent.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoButton',
      name: 'demoButton',
      component: () => import('@/demo/basic/demoButton.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoCell',
      name: 'demoCell',
      component: () => import('@/demo/basic/demoCell.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoIcon',
      name: 'demoIcon',
      component: () => import('@/demo/basic/demoIcon.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoRow',
      name: 'demoRow',
      component: () => import('@/demo/basic/demoRow.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/formComponent',
      name: 'FormComponent',
      component: () => import(/* webpackChunkName: "formComponent" */ '@/pages/FormComponent.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoInput',
      name: 'demoInput',
      component: () => import('@/demo/form/demoInput.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoCheckboxGroup',
      name: 'demoCheckboxGroup',
      component: () => import('@/demo/form/demoCheckboxGroup.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoRadioGroup',
      name: 'demoRadioGroup',
      component: () => import('@/demo/form/demoRadioGroup.vue'),
      meta:{
        footer: true
      }
    },
    {
      path: '/demoSelect',
      name: 'demoSelect',
      component: () => import('@/demo/form/demoSelect.vue'),
      meta:{
        footer: true
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
        footer: true
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
