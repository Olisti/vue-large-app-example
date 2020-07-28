import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import moduleAuth from '@auth/router';
import moduleCommon from '@common/router';
import moduleUsers from '@users/router';
import moduleMessages from '@messages/router';
import moduleReports from '@reports/router';
import moduleBilling from '@billing/router';
import moduleSettings from '@settings/router';

Vue.use(VueRouter);

// Error fix "Avoided redundant navigation to current location" (ElementsUI menu)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
    return (originalPush.call(this, location) as any).catch((err: any) => err);
};

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...moduleAuth,
        ...moduleUsers,
        ...moduleMessages,
        ...moduleReports,
        ...moduleBilling,
        ...moduleSettings,
        ...moduleCommon
    ]
});

router.beforeEach((to, from, next) => {
    const token = store.getters['auth/TOKEN'];
    if (!to.meta.isPublic && !token) next({ name: 'login' });
    else next();
});

export default router;
