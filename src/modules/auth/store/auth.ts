import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { ApiService } from '@/shared/services/api';
import router from '@/app/router';

const apiService = new ApiService();

export interface State {
    token: string | null;
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        token: null,
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        TOKEN: (state: State) => state.token
    },
    actions: {
        LOGIN: async ({ commit, state }, payload) => {
            commit('SET_LOADING', true);
            const response = await apiService.post(`auth/login`, payload);
            commit('LOGIN', response);
            commit('SET_LOADING', false);
        },
        LOGOUT: async ({ commit, state }) => {
            commit('LOGOUT');
        },
        REGISTER: async (context, payload) => {
            context.commit('SET_LOADING', true);
            const response = await apiService.post('auth/register', payload);
            context.commit('LOGIN', response);
            context.commit('SET_LOADING', false);
        }
    },
    mutations: {
        LOGIN: (state, payload) => {
            state.token = payload.token;
            router.push({
                name: 'home'
            });
        },
        LOGOUT: (state, payload) => {
            state.token = null;
            router.push({
                name: 'login'
            });
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
