import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { ApiService } from '@/shared/services/api';

const apiService = new ApiService();

export interface User {
    id?: number;
    name: string;
}

export interface State {
    users: User[];
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        users: [],
        loading: false
    } as State,
    getters: {
        LOADING: (state: State) => state.loading,
        USERS: (state: State) => state.users
    },
    actions: {
        LIST: async ({ commit, state }) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`users`);
            commit('SET', response);
            commit('SET_LOADING', false);
        },
        GET: async ({ commit, state }, id: number) => {
            commit('SET_LOADING', true);
            const response = await apiService.get(`users/${id}`);
            commit('ADD', response);
            commit('SET_LOADING', false);
        },
        CREATE: async ({ commit, state }, user: User) => {
            commit('SET_LOADING', true);
            const response = await apiService.post(`users`, user);
            commit('ADD', response);
            commit('SET_LOADING', false);
        },
        UPDATE: async ({ commit, state }, user: User) => {
            commit('SET_LOADING', true);
            const response = await apiService.put(`users/${user.id}`, user);
            commit('ADD', response);
            commit('SET_LOADING', false);
        },
        DELETE: async ({ commit, state }, id: number) => {
            commit('SET_LOADING', true);
            await apiService.delete(`users/${id}`);
            commit('REMOVE', id);
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET: (state, payload: User[]) => {
            state.users = payload;
        },
        ADD: (state, payload: User) => {
            const index = state.users.findIndex(user => user.id === payload.id);
            if (index >= 0)
                state.users.splice(index, 1, {
                    ...state.users[index],
                    ...payload
                });
            else state.users.push(payload);
        },
        REMOVE: (state, id: number) => {
            const index = state.users.findIndex(user => user.id === id);
            state.users.splice(index, 1);
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;
