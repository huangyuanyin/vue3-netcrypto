export const cheshiMenuData = [
  {
    id: 'test01',
    title: '测试',
    path: null,
    isDisabled: true,
    type: 1,
    children: []
  },
  {
    id: 'test02',
    title: '概览',
    path: '/test/overview',
    isDisabled: false,
    children: []
  },
  {
    id: 'test03',
    title: '测试管理',
    path: null,
    isDisabled: false,
    children: [
      {
        id: 'test0301',
        title: '测试一',
        path: '/ceshiOne',
        isDisabled: false,
        children: []
      }
    ]
  }
]

export const APVAutoMenuData = [
  {
    id: '01',
    title: '测试工具',
    path: null,
    isDisabled: true,
    children: []
  },
  {
    id: '02',
    title: '概览',
    path: '/overview',
    icon: 'House',
    isDisabled: false,
    children: []
  },
  {
    id: '03',
    title: '加解密',
    path: '/encrypt',
    icon: 'School',
    isDisabled: false,
    children: []
  },
  {
    id: '04',
    title: '签名/验签',
    path: '/signverify',
    icon: 'Suitcase',
    isDisabled: false,
    children: []
  },
  {
    id: '05',
    title: '证书工具',
    path: '/certtool',
    icon: 'Money',
    isDisabled: false,
    children: []
  }
]
