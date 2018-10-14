import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      component: Layout,
      redirect: 'myNote',
    },
    {
      path: '*',
      redirect: '/index',
      hidden: true
    },
    {
      path: '/index',
      component: Layout,
      redirect: 'myNote'
    },
    {
      path: '',
      component: Layout,
      children: [{
        path: 'myNote',
        component: () =>
          import('@/views/Mynote')
      }]
    },
    {
      path: '',
      component: Layout,
      children: [{
        path: 'myBlog',
        component: () =>
          import('@/views/MyBlog')
      }]
    }
  ]
})
