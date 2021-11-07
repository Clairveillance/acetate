const state = {
    userLogged: null,
    accountMenu: {
        logged: [
            {
                title: "account-menu.logout.title",
                path: "logout"
            },
            {
                title: "account-menu.dashboard.title",
                path: "dashboard"
            }
        ],
        unlogged: [
            {
                title: "account-menu.login.title",
                path: "login"
            },
            {
                title: "account-menu.register.title",
                path: "register"
            }
        ]
    }
};
const getters = {
    getAccountMenuLogged: state => state.accountMenu.logged,
    getAccountMenuUnlogged: state => state.accountMenu.unlogged,
    getUserLogged: state => state.userLogged
};
const actions = {
    setUserLogged({ commit }, userLogged) {
        commit({
            type: "setUserLogged",
            userLogged: userLogged
        });
    }
};
const mutations = {
    setUserLogged(state, payload) {
        state.userLogged = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
