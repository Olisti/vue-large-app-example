export default [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@auth/pages/login/_index.vue'),
        meta: {
            isPublic: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '@auth/pages/register/_index.vue'),
        meta: {
            isPublic: true
        }
    },
    {
        path: '/recovery',
        name: 'recovery',
        component: () => import(/* webpackChunkName: "recovery" */ '@auth/pages/recovery/_index.vue'),
        meta: {
            isPublic: true
        }
    }
];
