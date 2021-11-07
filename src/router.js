import * as VueRouter from 'vue-router'

//Define some routes
// Each route should map to a component.
const routes = [
  {
    path: '/guest',
    name: 'guest',
    component: () => import('@/components/GuestLayout'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/LoginPage')
      }, 
      { 
        path: 'signup',
        name: 'signup',
        component: () => import('@/views/SignupPage')
      },
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage'),
  }, 
  {
    path: '/createpost',
    name: 'createpost',
    component: () => import('@/views/CreatePost')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/components/AccountLayout'),
    children: [
      {
        path: '',
        name: 'account',
        component: () => import('@/views/AccountInfoPage')
      },
      {
        path: 'changepassword',
        name: 'changepassword',
        component: () => import('@/views/ChangePasswordPage')
      },
      {
        path: 'usercontent',
        name: 'usercontent',
        component: () => import('@/views/UserContentPage')
      }
    ]
  }
]
  //Create the router instance and pass the `routes` option
  const router = VueRouter.createRouter({
    // Provide the history implementation to use.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router  
