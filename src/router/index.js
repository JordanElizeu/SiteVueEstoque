import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewInformation from '../views/ViewInformation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/viewinformation',
    name: 'viewinformation',
    component: ViewInformation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
