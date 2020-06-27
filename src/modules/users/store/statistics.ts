import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { apiService } from '@/shared/services/api';

export interface UsersStatistics {
    emails: number;
    pushes: number;
    phones: number;
}

export interface State {
    statistics: UsersStatistics;
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        statistics: {},
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        STATISTICS: (state: State) => state.statistics
    },
    actions: {
        GET: async ({ commit, state }, id: number) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`users/statistics`);
            commit('SET', response);
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET: (state, payload: UsersStatistics) => {
            state.statistics = payload;
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
