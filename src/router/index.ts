import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: '标签1',
    component: Home,
  },
  {
    path: '/edit',
    name: '标签2',
    component: () => import('../views/edit.vue'),
  },
  {
    path: '/login',
    name: '标签3',
    component: () => import('../views/login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
