import Vue from 'vue';
import App from './app/app.vue';
import './registerServiceWorker';
import router from './app/router';
import store from './app/store';

import '@shared/services/axios';
import './styles/global.scss';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
