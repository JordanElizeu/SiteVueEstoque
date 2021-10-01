import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewInformation from '../views/ViewInformation.vue'
import produtos from '../views/produtos.vue'
import Inicio from '../views/Inicio.vue'
import Vendas from '../views/Vendas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/viewinformation',
    name: 'viewinformation',
    component: ViewInformation
  },
  {
  path: '/',
  name: 'Inicio',
  component: Inicio
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: produtos 
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: Vendas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
