import * as VueRouter from 'vue-router'
import store from '../store'

//Define routes
// Each route should map to a component.
const routes = [
  {
    path: '/guest',
    name: 'guest',
    meta: { guest: true },
    component: () => import(/* webpackChunkName: "guestlayout" */'@/components/GuestLayout'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */'@/views/LoginPage')
      }, 
      { 
        path: 'signup',
        name: 'signup',
        component: () => import(/* webpackChunkName: "signup" */'@/views/SignupPage')
      },
    ]
  },
  {
    path: '/',
    name: 'home',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "homepage" */'@/views/HomePage'),
  }, 
  {
    path: '/usercontent',
    name: 'usercontent',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "usercontent" */'@/views/UserContentPage')
  },
  {
    path: '/modifypost/:postId',
    name: 'modifypost',
    meta: {auth: true },
    component: () => import(/* webpackChunkName: "modifypost" */'@/views/ModifyPost')
  },
  {
    path: '/account',
    name: 'account',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "accountlayout" */'@/components/AccountLayout'),
    children: [
      {
        path: '',
        name: 'account',
        component: () => import(/* webpackChunkName: "accountinfo" */'@/views/AccountInfoPage')
      },
      {
        path: 'profilepicture',
        name: 'profilepicture',
        component: () => import(/* webpackChunkName: "profilepicture" */'@/views/ProfilePicturePage')
      },
      {
        path: 'changepassword',
        name: 'changepassword',
        component: () => import(/* webpackChunkName: "changepassword" */'@/views/ChangePasswordPage')
      },
      {
        path: 'createpost',
        name: 'createpost',
        component: () => import(/* webpackChunkName: "createpost" */'@/views/CreatePostPage')
      },
      {
        path: 'deleteaccount',
        name: 'deleteaccount',
        component: () => import(/* webpackChunkName: "deleteaccount" */'@/views/DeleteAccount')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */'@/views/NotFound')
  }
]
  //Create the router instance and pass the `routes` option
  const router = VueRouter.createRouter({
    // Provide the history implementation to use.
    history: VueRouter.createWebHashHistory(),
    routes,
  })
  //middleware before our req
  router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => record.meta.guest)) {
      // route Guests only
      if (store.getters['isAuthenticated']) {
        // Authenticated, redirect to homepage
        next('/')
      } else {
        // Guest, continue
        next()
      }
    } else if (to.matched.some(record => record.meta.auth)) {
      // Authentication required
      if (store.getters['isAuthenticated']) {
        // Authenticated and verified, continue
        next()
      } else {
        // Guest, redirect to login page
        next('/guest/login')
      }
    } else {
      next()
    }
  })

export default router  
