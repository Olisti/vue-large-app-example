export default [
    {
        path: '/billing',
        name: 'billing',
        component: () => import(/* webpackChunkName: "billing" */ '@billing/pages/billing/_index.vue'),
        meta: {
            title: 'Billing'
        }
    },
    {
        path: '/payment',
        name: 'payment',
        component: () => import(/* webpackChunkName: "payment" */ '@billing/pages/payment/_index.vue'),
        meta: {
            title: 'Payment'
        }
    }
];
