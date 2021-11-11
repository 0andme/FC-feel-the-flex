import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import LogIn from './LogIn'
import SignUp from './SignUp'
import UserPage from './UserPage'
import Settings from './Settings'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path:'/user',
      component: UserPage
    },
    {
      path:'/settings',
      component: Settings
    }
  ]
})
