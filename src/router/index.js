import Vue from 'vue'
import Router from 'vue-router'
import msite from '@/pages/msite/msite'
import order from '@/pages/order/order'
import profile from '@/pages/profile/profile'
import search from '@/pages/search/search'
import login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: msite,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/',
      redirect: 'msite'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
