import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/about.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/home/cart.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/home/my.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'tabbar-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
