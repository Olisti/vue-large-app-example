export default [
    {
        path: '/reports',
        name: 'reports',
        component: () => import(/* webpackChunkName: "reports" */ '@reports/pages/reports/_index.vue'),
        meta: {
            title: 'Reports'
        }
    },
    {
        path: '/reports/errors',
        name: 'reports-errors',
        component: () => import(/* webpackChunkName: "reports-errors" */ '@reports/pages/errors/_index.vue'),
        meta: {
            title: 'Errors'
        }
    }
];
