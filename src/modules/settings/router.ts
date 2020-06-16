export default [
    {
        path: '/settings/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '@settings/pages/account/_index.vue'),
        meta: {
            title: 'Account settings'
        }
    },
    {
        path: '/settings/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@settings/pages/profile/_index.vue'),
        meta: {
            title: 'Profile settings'
        }
    }
];
