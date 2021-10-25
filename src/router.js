import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import * as VueRouter from 'vue-router'

//Define some routes
// Each route should map to a component.
const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
  }, 
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }, 
  { 
    path: '/signup',
    name: 'signup',
    component: SignupPage
  }, ]
  
  //Create the router instance and pass the `routes` option
  const router = VueRouter.createRouter({
    // Provide the history implementation to use.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router  