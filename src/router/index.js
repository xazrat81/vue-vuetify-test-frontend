import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsPage from '../views/GoodsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GoodsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
