export interface State {
    sidenavCollapsed: boolean;
    darkTheme: boolean;
}

export default {
    namespaced: true,
    state: {
        sidenavCollapsed: false,
        darkTheme: false
    } as State,
    getters: {
        SIDENAV_COLLAPSED: (state: State) => state.sidenavCollapsed,
        DARK_THEME: (state: State) => state.darkTheme
    },
    actions: {},
    mutations: {
        SWITCH_SIDENAV_STATE: (state: State) => {
            state.sidenavCollapsed = !state.sidenavCollapsed;
        },
        SWITCH_DARK_THEME: (state: State) => {
            state.darkTheme = !state.darkTheme;
        }
    }
};
