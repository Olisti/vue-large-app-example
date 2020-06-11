export interface State {
    sidenavCollapsed: boolean;
}

export default {
    namespaced: true,
    state: {
        sidenavCollapsed: false
    } as State,
    getters: {
        SIDENAV_COLLAPSED: (state: State) => state.sidenavCollapsed
    },
    actions: {},
    mutations: {
        SWITCH_SIDENAV_STATE: (state: State) => {
            state.sidenavCollapsed = !state.sidenavCollapsed;
        }
    }
};
