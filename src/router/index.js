import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {replaceToLocationSafe} from "@/utils";
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/ManageView.vue')
  },
  {
    path: '/manage/email',
    name: 'manage-email',
    component: () => import('../views/ManageEmailView.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    props: true
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('unified_token')) {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      if (params.has('refer')) {
        replaceToLocationSafe(params.get('refer'));
        return;
      }
    }
    if (to.name !== 'manage' && to.name !== 'manage-email') {
      next({name: 'manage'});
    }
  } else {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      if (params.has('refer')) {
        sessionStorage.setItem('sara_refer', params.get('refer'));
      }
    }
    if (to.name === 'manage') {
      next({name: 'home'});
    }
  }
  next();
});

export default router;
