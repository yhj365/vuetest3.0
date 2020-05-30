import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import '@/assets/iconfont/iconfont.css' // global css

// 体验vue3.0需要引入
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

Vue.prototype.$msg = (msg)=>{
  console.log('全局方法',msg)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
