import BooksVue from '@/pages/Books.vue'
import GroupsVue from '@/pages/Groups.vue'
import HomeVue from '@/pages/Home.vue'
import LoginVue from '@/pages/Login.vue'
import RegisterVue from '@/pages/Register.vue'
import BookVue from '@/pages/Book.vue'
import groupVue from '@/pages/GroupOverview.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getGroup } from '@/api/groups'
import ProfileVue from '@/pages/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue,
      meta: {
        title: 'Home'
      }

    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue,
      meta: {
        title: 'Login'
      }

    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue,
      meta: {
        title: 'Register'
      }

    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileVue,
      meta: {
        title: 'Profile'
      }

    },
    {
      path: '/books',
      name: 'books',
      component: BooksVue,
      meta: {
        title: 'Books'
      }

    }
    ,
    {
      path: '/book:/:id',
      name: 'book',
      component: BookVue,
      meta: {
        title: 'Book'
      }

    }
    ,
    {
      path: '/groups',
      name: 'groups',
      component: GroupsVue,
      meta: {
        title: 'Groups'
      }

    }
    ,
    {
      path: '/group/:id',
      name: 'group',
      component: groupVue,
      meta: {
        title: 'Group'
      },
      beforeEnter: async (to, from) => {
        const group = await getGroup(to.params.id)
        if (group) {
          to.params.group = group
        } else {
          alert('join first')
          return false
        }
      }

    }
  ]
})
// router.beforeEach((to,from,next)=>{


// })
router.afterEach((to, from, next) => {
  document.title = to.meta.title || 'LitHub'
})


export default router
