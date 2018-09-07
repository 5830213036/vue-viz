import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addblog from '@/components/Addblog'
import Editblog from '@/components/Editblog'
import SignIn from '@/components/SignIn'

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
    },
    {
      path: '/edit-blog/:blog_slug',
      name: 'Editblog',
      component: Editblog
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    }
  ]
  
})



