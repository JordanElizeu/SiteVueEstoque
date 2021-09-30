import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import produtos from '../views/produtos.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: produtos 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
