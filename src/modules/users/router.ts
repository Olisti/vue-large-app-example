export default [
    {
        path: '/users/list',
        name: 'users-list',
        component: () => import(/* webpackChunkName: "users-list" */ '@users/pages/users-list/_index.vue')
    },
    {
        path: '/users/create',
        name: 'user-create',
        component: () => import(/* webpackChunkName: "user-maker" */ '@users/pages/user-maker/_index.vue')
    },
    {
        path: '/users/edit/:id',
        name: 'user-edit',
        component: () => import(/* webpackChunkName: "user-maker" */ '@users/pages/user-maker/_index.vue')
    },
    {
        path: '/users/info/:id',
        name: 'user-info',
        component: () => import(/* webpackChunkName: "user-info" */ '@users/pages/user-info/_index.vue')
    },
    {
        path: '/users/statistics',
        name: 'users-statistics',
        component: () => import(/* webpackChunkName: "users-statistics" */ '@users/pages/users-statistics/_index.vue')
    }
];
