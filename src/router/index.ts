import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/articleList.vue'

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit.vue'),
    meta: {
      notHeaderNav: true,
    },
  },
  {
    path: '/article/:article_id(\\d+)',
    name: 'article',
    component: () => import('../views/articleDetail.vue'),
    meta: {
      notHeaderMenu: true,
    },
  },
  {
    path: '/sign',
    component: () => import('../views/sign/sign.vue'),
    meta: {
      notHeaderNav: true,
      notHeaderMenu: true,
    },
    children: [
      {
        path: '',
        redirect: 'in',
      },
      {
        path: 'in',
        name: 'login',
        component: () => import('../views/sign/in.vue'),
        meta: {
          notHeaderNav: true,
        },
      },
      {
        path: 'up',
        name: 'register',
        component: () => import('../views/sign/up.vue'),
        meta: {
          notHeaderNav: true,
        },
      },
    ],
  },
  {
    path: '*',
    name: 'notFound',
    meta: {
      notHeaderNav: true,
      notHeaderMenu: true,
    },
    component: () => import('../views/notFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
