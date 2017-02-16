// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'webrtc-adapter'
import 'normalize.css'

import TFooter from './components/TFooter'
Vue.component(TFooter.name, TFooter)
new Vue({
  router,
  ...App
}).$mount('#app')
