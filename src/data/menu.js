export const cheshiMenuData = [
  {
    id: "01",
    title: "测试",
    path: null,
    isDisabled: true,
    type: 1,
    children: [],
  },
  {
    id: "02",
    title: "概览",
    path: "/test/overview",
    isDisabled: false,
    children: [],
  },
  {
    id: "03",
    title: "测试管理",
    path: null,
    isDisabled: false,
    children: [
      {
        id: "0301",
        title: "测试一",
        path: "/ceshiOne",
        isDisabled: false,
        children: [],
      },
    ],
  },
];

export const APVAutoMenuData = [
  {
    id: "01",
    title: "测试工具",
    path: null,
    isDisabled: true,
    children: [],
  },
  {
    id: "02",
    title: "概览",
    path: "/Netcrypto/overview",
    icon: "House",
    isDisabled: false,
    children: [],
  },
  {
    id: "0301",
    title: "密码服务",
    path: "/Netcrypto/passwordService",
    icon: "School",
    isDisabled: false,
    children: [],
  }
];
