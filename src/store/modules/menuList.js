export const menuRouterList = [{
  path: '/novel',
  name: '小说查询',
  hasChild: false,
  selected: true
}
// },{
//   path: '/myNote',
//   name: '我的笔记',
//   hasChild: false,
//   selected: true
// },
// {
//   path: '/myBlog',
//   name: '我的博客',
//   hasChild: false,
//   selected: false
// },
// {
//   path: '/file',
//   name: '文件上传',
//   hasChild: false,
//   selected: false
// }
]

const menuList = {
  state: {
    menuRouter: menuRouterList
  }
}

export default menuList
