import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { apiService } from '@/shared/services/api';

export interface Push {
    id?: number;
    name: string;
    send: number;
    errors: number;
    date: string;
}

export interface State {
    pushes: Push[];
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        pushes: [],
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        PUSHES: (state: State) => state.pushes
    },
    actions: {
        LIST: async ({ commit, state }) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`messages/pushes`);
            commit('SET', response);
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET: (state, payload: Push[]) => {
            state.pushes = payload;
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
