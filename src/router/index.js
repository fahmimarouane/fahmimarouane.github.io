import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserLocation from '@/pages/UserLocation'

import CloseBuy from '@/pages/CloseBuy'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Service from '@/pages/Service'

Vue.use(Router)





export default new Router({
  routes: [
    {
      path: '/UserLocation',
      component: UserLocation
    },
    {
      path: '/',
      component: Home
    },
    {
      path:'/close-buy',
      component:CloseBuy
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/service',
      component:Service
    }
  ]
})
