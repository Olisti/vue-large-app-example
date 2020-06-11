export default [
    {
        path: '/messages/email',
        name: 'email-list',
        component: () => import(/* webpackChunkName: "email-list" */ '@messages/pages/emails-list/_index.vue')
    },
    {
        path: '/messages/push',
        name: 'push-list',
        component: () => import(/* webpackChunkName: "push-list" */ '@messages/pages/pushes-list/_index.vue')
    },
    {
        path: '/messages/sms',
        name: 'sms-list',
        component: () => import(/* webpackChunkName: "sms-list" */ '@messages/pages/sms-list/_index.vue')
    }
];
