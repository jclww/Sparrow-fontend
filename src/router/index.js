import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    component: Layout,
    redirect: 'novel'
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
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'novel',
      component: () =>
        import('@/views/Novel')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'file',
      component: () =>
        import('@/views/FileUpload')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'chapter',
      component: () =>
        import('@/views/chapter')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'catalog',
      component: () =>
        import('@/views/catalog')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'video',
      component: () =>
        import('@/views/video')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'video_detail',
      component: () =>
        import('@/views/video_detail')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'blue_video',
      component: () =>
        import('@/views/blue_video')
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'blue_video_detail',
      component: () =>
        import('@/views/blue_video_detail')
    }]
  }
  ]
})
