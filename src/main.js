// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'webrtc-adapter'
import 'normalize.css'

import NProgress from 'vue-nprogress'
Vue.use(NProgress)

import ElLoading from 'element-loading'
import 'element-theme-default/lib/loading.css'
Vue.use(ElLoading)

/* Using these kinds of IScroll class for different cases. */

import TFooter from './components/TFooter'
Vue.component(TFooter.name, TFooter)

import ElUpload from 'element-upload'
import 'element-theme-default/lib/upload.css'
import 'element-theme-default/lib/icon.css'
Vue.component('el-upload', ElUpload)

import TIsroll from './components/TIsrocll'
Vue.use(TIsroll)

const nprogress = new NProgress({ parent: '.nprogress-container' })
new Vue({
  router,
  nprogress,
  ...App
}).$mount('#app')
