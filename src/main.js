import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
var a = true
if (a) {

}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
