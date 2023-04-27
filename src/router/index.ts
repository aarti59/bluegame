import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignUp
    },
    {
      path: '/displayname',
      name: 'displayname',
      component: () => import('../views/DisplayName.vue')
    }
  ]
})

export default router
