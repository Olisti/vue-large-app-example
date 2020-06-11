import axios from 'axios';

const isMockData: boolean = true;
axios.interceptors.request.use(
    config => {
        // const token = store.getters['auth/TOKEN'];
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
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
        // store.dispatch('common/RESET_LOADING', store);
        // console.log(error.response);
        // if (error.response.status === 400 && error.response.config.url.includes('auth/')) {
        //     store.commit('auth/SET_ERROR', true);
        // } else if (error.response.status === 401) {
        //     store.dispatch('auth/LOGOUT');
        // } else {
        //     snackbarErrorAPI(error.response.status);
        // }
        return Promise.reject(error);
    }
);
