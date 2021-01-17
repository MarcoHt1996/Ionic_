import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import component from '../views/Home.vue';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessage.vue')
  },
{
  path: '/Login',
name: '/Login',
component:() => import('../views/Login.vue')

},
{
  path: '/kelas',
name: '/kelas',
component:() => import('../views/kelas.vue')

},
{
  path: '/kelas/:id',
  name: '/Kelas Detail',
  component:() => import ('../views/KelasDetail.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
