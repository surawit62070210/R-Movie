import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import VueCookies from 'vue-cookies'
Vue.prototype.$accessToken ="test"
Vue.prototype.$users = ''
Vue.use(VueCookies, { expire: '7d'})
Vue.use(BootstrapVue)
Vue.config.productionTip = false





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

