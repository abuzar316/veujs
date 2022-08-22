import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import Dashboard from '../components/pages/Dashboard.vue'
import AllUser from '../components/pages/AllUser.vue'
import Profile from '../components/pages/Profile.vue'
import Todos from'../components/Todos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/alluser',
      name: 'AllUser',
      component: AllUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Todos,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      redirect: '/login'
    },

  ]
})

function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (token == null || token == '' || token == undefined) {
    return false
  } else {
    return true
  }
}

router.beforeEach((to, from, next) => {
  const routeCheck = to.matched.some((e) => e.meta.requiresAuth);
  if (routeCheck) {
    if (isAuthenticated()) {
      next();
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

export default router
