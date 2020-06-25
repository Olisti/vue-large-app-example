import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { apiService } from '@/shared/services/api';

export interface Email {
    id?: number;
    name: string;
    send: number;
    errors: number;
    date: string;
}

export interface State {
    emails: Email[];
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        emails: [],
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        EMAILS: (state: State) => state.emails
    },
    actions: {
        LIST: async ({ commit, state }) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`messages/emails`);
            commit('SET', response);
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET: (state, payload: Email[]) => {
            state.emails = payload;
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
