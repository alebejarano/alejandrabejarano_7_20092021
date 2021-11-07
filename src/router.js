import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import CreatePost from '@/views/CreatePost'
import AccountInfoPage from '@/views/AccountInfoPage'
import ChangePasswordPage from '@/views/ChangePasswordPage'
import UserContentPage from '@/views/UserContentPage'
import AppLayout from '@/components/AppLayout'
import GuestLayout from '@/components/GuestLayout'
import * as VueRouter from 'vue-router'

//Define some routes
// Each route should map to a component.
const routes = [
  {
    path: '/guest',
    name: 'guest',
    component: GuestLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage
      }, 
      { 
        path: 'signup',
        name: 'signup',
        component: SignupPage
      },
    ]
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage
      }, 
      {
        path: 'createpost',
        name: 'createpost',
        component: CreatePost
      },
      {
        path: 'account',
        name: 'account',
        component: AccountInfoPage,
        children: [
          {
            path: 'changepassword',
            name: 'changepassword',
            component: ChangePasswordPage
          },
          {
            path: 'usercontent',
            name: 'usercontent',
            component: UserContentPage
          }
        ]
      },
    ]
  },
]
  
  //Create the router instance and pass the `routes` option
  const router = VueRouter.createRouter({
    // Provide the history implementation to use.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router  
