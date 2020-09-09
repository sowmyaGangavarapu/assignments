import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'
Vue.use(VueSession)
import './assets/css/styles.css'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
