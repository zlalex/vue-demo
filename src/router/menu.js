export default [
  {
    name: '首页菜单',
    icon: 'icon-sidebar-home',
    path: '/'
  },
  {
    name: '一级菜单1',
    icon: 'icon-sidebar-shenhe',
    children: [
      {
        name: 'AAAA',
        path: '/a'
      },
      {
        name: 'BBBB',
        path: '/b'
      }
    ]
  },
  {
    name: '一级菜单2',
    icon: 'icon-sidebar-liuliang',
    children: [
      {
        name: 'CCCC',
        path: '/c'
      },
      {
        name: ' DDDD',
        path: '/d'
      }
    ]
  },
  {
    name: '一级菜单3',
    icon: 'icon-sidebar-data',
    children: [
      {
        name: 'FFFF',
        path: '/f'
      },
      {
        name: 'GGGG',
        path: '/g'
      },
      {
        name: 'KKKK',
        path: '/k'
      },
      {
        name: 'JJJJ',
        path: '/j'
      }
    ]
  },
  {
    name: '一级菜单4',
    icon: 'icon-sidebar-finance',
    children: [
      {
        name: 'EEEE',
        path: '/e'
      }
    ]
  }
]
