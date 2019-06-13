import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/flexible.js'
import xfan from './xfan'
// import 'lib-flexible/flexible.js'
Vue.config.productionTip = false;
Vue.use(xfan)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
