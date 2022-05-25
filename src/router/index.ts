import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
  {
    path: '/',
    redirect: '/recommand',
  },
  {
    path: '/recommend',
    name: 'Recommand',
    component: () => import('@/views/recommand/index.vue'),
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('@/views/singer/index.vue'),
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () => import('@/views/top-list/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
