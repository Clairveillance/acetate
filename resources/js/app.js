import Vue from "vue";
import Vuelidate from "vuelidate";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/vue-i18n";
import router from "./router/routes";
import store from "./store/vuex";
import App from "./App.vue";
import {
    truncateFilter,
    subStringFilter,
    dateFilter,
    multipleDateFilter,
    timeFilter,
    stringTimeFilter
} from "./utils/filters";

// Laravel required.
require("./bootstrap");

Vue.config.productionTip = false;

// Validation.
Vue.use(Vuelidate);

// Custom filters.
Vue.filter("truncate", truncateFilter);
Vue.filter("subStr", subStringFilter);
Vue.filter("formatDate", dateFilter);
Vue.filter("formatMultipleDates", multipleDateFilter);
Vue.filter("formatTime", timeFilter);
Vue.filter("formatStringToTime", stringTimeFilter);

// Get logged user's API Token.
function loggedIn() {
    return localStorage.getItem("user_api_token");
}

// Vue Router Auth middleware.
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!loggedIn()) {
            next({
                path: process.env.MIX_BASE_URL + i18n.locale + "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: process.env.MIX_BASE_URL + i18n.locale + "/home",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

// VueJs rendering.
const app = new Vue({
    el: "#app",
    vuetify,
    router,
    i18n,
    store,
    render: h => h(App)
});
