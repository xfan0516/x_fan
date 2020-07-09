import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import xfan from './xfan'
Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  console.log(err, vm, info)
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
Vue.use(xfan)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
