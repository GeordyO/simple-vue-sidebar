import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
