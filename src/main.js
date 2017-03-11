import Vue from 'vue'
import App from './App'
import 'webrtc-adapter'
import 'normalize.css'

import NProgress from 'vue-nprogress'
Vue.use(NProgress, { http: false })

import 'element-theme-default/lib/loading.css'
import ElLoading from 'element-loading'
Vue.use(ElLoading)

import TFooter from './components/TFooter'
Vue.component(TFooter.name, TFooter)

import 'element-theme-default/lib/upload.css'
import ElUpload from 'element-upload'
import 'element-theme-default/lib/icon.css'
Vue.use(ElUpload)

import * as filters from './filters.js'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import Login from 'components/Login'
Vue.use(Login)
import InputPassWord from 'components/InputPassWord'
Vue.use(InputPassWord)

import Message from 'components/Message'
Vue.use(Message)
import api from './api'
import router from './router'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!api.loggedIn()) {
      // 需要登录
      Vue.prototype.$message({
        type: 'info',
        msg: '请先登录'
      })
      Vue.prototype.$showLogin()
    } else {
      next()
    }
  } else {
    next()
  }
})
const nprogress = new NProgress({ parent: '.nprogress-container' })
window.app = new Vue({
  router,
  nprogress,
  ...App
}).$mount('#app')
