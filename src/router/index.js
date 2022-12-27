import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue' // 布局组件 不需要懒加载

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页面'
    },
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/page',
    name: 'Page',
    meta: {
      title: '测试页面'
    },
    component: () => import('@/views/page/card.vue')
  },
  {
    path: '/',
    redirect: '/overview',
    component: Layout
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/Netcrypto',
        name: 'Netcrypto',
        meta: {
          title: '测试工具'
        },
        redirect: '/overview', // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        component: () => import('@/views/Netcrypto/index.vue'),
        children: [
          {
            path: '/overview',
            name: 'Overview',
            meta: {
              title: '概览',
              keepAlive: true
            },
            component: () => import('@/views/Netcrypto/overview/index.vue')
          },
          {
            path: '/encrypt',
            name: 'Encrypt',
            meta: {
              title: '加解密',
              keepAlive: true
            },
            component: () => import('@/views/Netcrypto/encrypt/index.vue')
          },
          {
            path: '/signverify',
            name: 'Signverify',
            meta: {
              title: '签名/验签',
              keepAlive: true
            },
            component: () => import('@/views/Netcrypto/signverify/index.vue')
          },
          {
            path: '/certtool',
            name: 'Certtool',
            meta: {
              title: '证书工具',
              keepAlive: true
            },
            component: () => import('@/views/Netcrypto/certtool/index.vue')
          }
        ]
      },
      {
        path: '/test',
        name: 'Test',
        meta: {
          title: '测试'
        },
        redirect: '/test/overview', // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        component: () => import('@/views/test/index.vue'),
        children: [
          {
            path: '/test/overview',
            meta: {
              title: '概览'
            },
            component: () => import('@/views/test/overview.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: '404页面'
    },
    component: () => import('@/views/exception/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory('/netcrypto/'),
  routes
})

export default router
