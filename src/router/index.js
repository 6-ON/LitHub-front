import HomeVue from '@/pages/Home.vue'
import LoginVue from '@/pages/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue

    }
  ]
})
// router.beforeEach((to,from,next)=>{


// })


export default router
