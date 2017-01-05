import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home'
import Room from '../views/Room'

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/room',
      name: 'room',
      component: Room
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

