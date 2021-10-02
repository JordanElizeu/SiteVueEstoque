import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Vendas from '../views/Vendas.vue'
import Produtos from '../views/Produtos.vue'
import ViewInformation from '../views/ViewInformation.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'Inicio',
  component: Inicio
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos 
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: Vendas
  },
  {
    path: '/info',
    name: 'Viewinformation',
    component: ViewInformation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
