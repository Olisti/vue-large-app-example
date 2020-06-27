import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { apiService } from '@/shared/services/api';

export interface Sms {
    id?: number;
    name: string;
    send: number;
    errors: number;
    date: string;
}

export interface State {
    sms: Sms[];
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        sms: [],
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        SMS: (state: State) => state.sms
    },
    actions: {
        LIST: async ({ commit, state }) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`messages/sms`);
            commit('SET', response);
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET: (state, payload: Sms[]) => {
            state.sms = payload;
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
