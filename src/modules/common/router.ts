export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@common/pages/home/_index.vue'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@common/pages/404/_index.vue'),
        meta: {
            title: 'Page not found'
        }
    }
];
