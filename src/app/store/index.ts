import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import moduleAuth from '@auth/store';
import moduleCommon from '@common/store';
import moduleUsers from '@users/store';
import modulemMssages from '@messages/store';
import moduleReports from '@reports/store';
import moduleBilling from '@billing/store';
import moduleSettings from '@settings/store';
import layout from './layout';

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
    modules: {
        ...moduleAuth,
        ...moduleCommon,
        ...moduleUsers,
        ...modulemMssages,
        ...moduleReports,
        ...moduleBilling,
        ...moduleSettings,
        layout
    },
    mutations: {
        RESET_ALL_LOADINGS: (state: any) => {
            Object.keys(state).map((module: string) => (state[module].loading = false));
        }
    },
    plugins: [createPersistedState({ paths: ['layout', 'auth'] })]
});
