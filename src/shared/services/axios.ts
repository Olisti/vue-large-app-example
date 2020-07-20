import axios from 'axios';
import store from '@/app/store';
import { Notification } from 'element-ui';

axios.interceptors.request.use(
    config => {
        const token = store.getters['auth/TOKEN'];
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        config.baseURL = 'http://httpbin.org/';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        store.commit('RESET_ALL_LOADINGS');
        if (error.response.status === 400 && error.response.config.url.includes('auth/')) {
            // store.commit('auth/SET_ERROR', true);
        } else if (error.response.status === 401) {
            store.dispatch('auth/LOGOUT');
        } else {
            Notification.error({
                title: `Error ${error.response.status}`,
                message: 'An error has occurred'
            });
        }
        return Promise.reject(error);
    }
);
