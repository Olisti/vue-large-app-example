import { Module } from 'vuex';
import { RootState } from '@/app/store';
import { apiService, isMockData } from '@/shared/services/api';
import { Message } from 'element-ui';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    gender: 'Male' | 'Female';
    job: string;
    language: string;
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
        USERS: (state: State) => (search: string) =>
            state.users.filter(user => `${user.firstName} ${user.lastName}`.includes(search)),
        USER: (state: State) => (id: number) => state.users.find(user => user.id === id)
    },
    actions: {
        LIST: async ({ commit, state }) => {
            if (isMockData && state.users.length) return;
            commit('SET_LOADING', true);
            const response = await apiService.get(`users`);
            commit('SET', response);
            commit('SET_LOADING', false);
        },
        GET: async ({ commit, state }, id: number) => {
            if (isMockData && state.users.find(user => user.id === id)) return;
            commit('SET_LOADING', true);
            const response = await apiService.get(`users/${id}`);
            commit('ADD', response);
            commit('SET_LOADING', false);
        },
        CREATE: async ({ commit, state }, user: User) => {
            commit('SET_LOADING', true);
            const response: User = await apiService.post(`users`, user);
            commit('ADD', response);
            commit('SET_LOADING', false);
            Message.success({
                showClose: true,
                duration: 5000,
                message: `User ${response.firstName} ${response.lastName} created successfully.`
            });
        },
        EDIT: async ({ commit, state }, user: User) => {
            commit('SET_LOADING', true);
            const response: User = await apiService.put(`users/${user.id}`, user);
            commit('UPDATE', response);
            commit('SET_LOADING', false);
            Message.success({
                showClose: true,
                duration: 5000,
                message: `User ${response.firstName} ${response.lastName} edited successfully.`
            });
        },
        DELETE: async ({ commit, state }, id: number) => {
            commit('SET_LOADING', true);
            await apiService.delete(`users/${id}`);
            commit('REMOVE', id);
            commit('SET_LOADING', false);
            Message.success({
                showClose: true,
                duration: 5000,
                message: `User ${id} deleted successfully.`
            });
        }
    },
    mutations: {
        SET: (state, payload: User[]) => {
            state.users = payload;
        },
        ADD: (state, payload: User) => {
            const index = state.users.findIndex(user => user.id === payload.id);
            state.users.push({
                ...payload,
                id:
                    payload.id ||
                    state.users.reduce((maxIndex, item) => {
                        return item.id >= maxIndex ? item.id + 1 : maxIndex;
                    }, 0)
            });
        },
        UPDATE: (state, payload: User) => {
            const index = state.users.findIndex(user => user.id === payload.id);
            state.users.splice(index, 1, {
                ...state.users[index],
                ...payload
            });
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
