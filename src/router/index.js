import BooksVue from '@/pages/Books.vue'
import HomeVue from '@/pages/Home.vue'
import LoginVue from '@/pages/Login.vue'
import RegisterVue from '@/pages/Register.vue'
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

    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue

    }
    ,
    {
      path: '/books',
      name: 'books',
      component: BooksVue

    }
    ,
    {
      path: '/groups',
      name: 'groups',
      component: null

    }
  ]
})
// router.beforeEach((to,from,next)=>{


// })


export default router
