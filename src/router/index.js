import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

import {
    SARA_TOKEN_KEY_NAME,
    SARA_REFER_KEY_NAME,
} from "@/const"

import {
    saraReferTrigger,
    goToLocationSafe,
} from "@/utils";

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
        component: () => import('../views/NotFoundView.vue'),
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, _, next) => {
    if (localStorage.getItem(SARA_TOKEN_KEY_NAME)) {
        saraReferTrigger((url) => {
            goToLocationSafe(url);
        });
        if (to.name !== 'manage' && to.name !== 'manage-email') {
            next({ name: 'manage' });
        }
    } else {
        saraReferTrigger((url) => {
            localStorage.setItem(SARA_REFER_KEY_NAME, url);
        });
        if (to.name === 'manage') {
            next({ name: 'home' });
        }
    }
    next();
});

export default router;
