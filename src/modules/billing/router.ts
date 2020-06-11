export default [
    {
        path: '/billing',
        name: 'billing',
        component: () => import(/* webpackChunkName: "billing" */ '@billing/pages/billing/_index.vue')
    }
];
