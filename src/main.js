// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue.prototype.$rootUrl = 'http://123.207.27.38'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'webrtc-adapter'
import 'normalize.css'

import NProgress from 'vue-nprogress'
Vue.use(NProgress)

import 'element-theme-default/lib/loading.css'
import ElLoading from 'element-loading'
Vue.use(ElLoading)

/* Using these kinds of IScroll class for different cases. */

import TFooter from './components/TFooter'
Vue.component(TFooter.name, TFooter)

import 'element-theme-default/lib/upload.css'
import ElUpload from 'element-upload'
import 'element-theme-default/lib/icon.css'
Vue.use(ElUpload)

import TIsroll from './components/TIsrocll'
Vue.use(TIsroll)

import * as filters from './filters.js'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import io from 'socket.io-client'
window.io = io
import Echo from 'laravel-echo'
import api from './api'
Vue.prototype.$echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://192.168.7.239:6001',
  auth: {
    headers: {
      'Authorization': 'Bearer ' + api.getToken()
    }
  }
})
const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  router,
  nprogress,
  ...App
}).$mount('#app')
