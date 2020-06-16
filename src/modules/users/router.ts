export default [
    {
        path: '/users/list',
        name: 'users-list',
        component: () => import(/* webpackChunkName: "users-list" */ '@users/pages/users-list/_index.vue'),
        meta: {
            title: 'Users list'
        }
    },
    {
        path: '/users/create',
        name: 'user-create',
        component: () => import(/* webpackChunkName: "user-maker" */ '@users/pages/user-maker/_index.vue'),
        meta: {
            title: 'User create'
        }
    },
    {
        path: '/users/edit/:id',
        name: 'user-edit',
        component: () => import(/* webpackChunkName: "user-maker" */ '@users/pages/user-maker/_index.vue'),
        meta: {
            title: 'User edit'
        }
    },
    {
        path: '/users/info/:id',
        name: 'user-info',
        component: () => import(/* webpackChunkName: "user-info" */ '@users/pages/user-info/_index.vue'),
        meta: {
            title: 'User info'
        }
    },
    {
        path: '/users/statistics',
        name: 'users-statistics',
        component: () => import(/* webpackChunkName: "users-statistics" */ '@users/pages/users-statistics/_index.vue')
    }
];
