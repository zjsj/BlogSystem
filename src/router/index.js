import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'
// import Login from '../views/Login'
// import Add from '../views/Add'
// import Index from '../components/Index/Index.vue'
// import List from '../views/List'
// import User from '../views/User'
// import Add from '../views/Add'
import Index from '../components/Index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
  // {
  //   path: '/add',
  //   name: 'add',
  //   component: Add
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home,
  //   children: [
  //     {
  //       path: '/list',
  //       name: 'list',
  //       // which is lazy-loaded when the route is visited.懒加载，用到才加载
  //       component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  //     },
  //     {
  //       path: '/user',
  //       name: 'user',
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  //     }
  //   ]
  // }
  // {
  //   path: '/add',
  //   name: 'add',
  //   component: Add
  // },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
