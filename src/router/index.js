import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addblog from '@/components/Addblog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-blog',
      name: 'Addblog',
      component: Addblog
    }
  ]
})
