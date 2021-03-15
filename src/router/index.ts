import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    // webpackChunkName 方便调试
    component: layout,
    children: [
      {
        path: '/advert',
        name: 'advert',
        // webpackChunkName 方便调试
        component: () =>
          import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        // webpackChunkName 方便调试
        component: () =>
          import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue')
      },
      {
        path: '/menu/create',
        name: 'menu-create',
        // webpackChunkName 方便调试
        component: () =>
          import(
            /* webpackChunkName: 'menu-create' */ '@/views/menu/create.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // webpackChunkName 方便调试
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
