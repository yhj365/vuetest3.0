import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home',
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
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/page/detail.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'tabbar-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
