import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home'
import Room from '../views/Room'
import Host from '../views/Host'
import CreateRoom from '../views/CreateRoom'

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/room/:id',
      name: 'room',
      component: Room,
      meta: { requiresAuth: true }
    },
    {
      path: '/create-room',
      name: 'createRoom',
      component: CreateRoom,
      meta: { requiresAuth: true }
    },
    {
      path: '/host/:id',
      name: 'host',
      component: Host,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

