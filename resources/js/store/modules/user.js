const state = {
    userFields: {
        id: null,
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        language: null,
        theme: null,
        themeSwitch: null,
        avatar: null,
        api_token: null,
        role: null,
        abilities: null
    }
};
const getters = {
    getUserFields: state => state.userFields
};
const actions = {
    setId({ commit }, id) {
        commit({
            type: "setId",
            id: id
        });
    },
    setUsername({ commit }, username) {
        commit({
            type: "setUsername",
            username: username
        });
    },
    setFirstname({ commit }, firstname) {
        commit({
            type: "setFirstname",
            firstname: firstname
        });
    },
    setLastname({ commit }, lastname) {
        commit({
            type: "setLastname",
            lastname: lastname
        });
    },
    setEmail({ commit }, email) {
        commit({
            type: "setEmail",
            email: email
        });
    },
    setLanguage({ commit }, language) {
        commit({
            type: "setLanguage",
            language: language
        });
    },
    setTheme({ commit }, theme) {
        commit({
            type: "setTheme",
            theme: theme
        });
    },
    setThemeSwitch({ commit }, themeSwitch) {
        commit({
            type: "setThemeSwitch",
            theme: themeSwitch
        });
    },
    setAvatar({ commit }, avatar) {
        commit({
            type: "setAvatar",
            avatar: avatar
        });
    },
    setApiToken({ commit }, api_token) {
        commit({
            type: "setApiToken",
            api_token: api_token
        });
    },
    setRole({ commit }, role) {
        commit({
            type: "setRole",
            role: role
        });
    },
    setAbilities({ commit }, abilities) {
        commit({
            type: "setAbilities",
            abilities: abilities
        });
    }
};
const mutations = {
    setId(state, payload) {
        state.userFields.id = payload.id;
    },
    setUsername(state, payload) {
        state.userFields.setUsername = payload.username;
    },
    setFirstname(state, payload) {
        state.userFields.firstname = payload.firstname;
    },
    setLastname(state, payload) {
        state.userFields.lastname = payload.lastname;
    },
    setEmail(state, payload) {
        state.userFields.email = payload.email;
    },
    setLanguage(state, payload) {
        state.userFields.language = payload.language;
    },
    setTheme(state, payload) {
        state.userFields.theme = payload.theme;
    },
    setThemeSwitch(state, payload) {
        state.userFields.themeSwitch = payload.themeSwitch;
    },
    setAvatar(state, payload) {
        state.userFields.avatar = payload.avatar;
    },
    setApiToken(state, payload) {
        state.userFields.api_token = payload.api_token;
    },
    setRole(state, payload) {
        state.userFields.role = payload.role;
    },
    setAbilities(state, payload) {
        state.userFields.abilities = payload.abilities;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
