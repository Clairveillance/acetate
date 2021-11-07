import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../plugins/vue-i18n";

Vue.use(VueRouter);

function loadComponent(component) {
    return () => import(`../components/${component}.vue`);
}

const routes = [
    {
        path: process.env.MIX_BASE_URL + ":locale",
        component: {
            template: "<router-view></router-view>"
        },
        beforeEnter: (to, from, next) => {
            const locale = to.params.locale;
            const supported_locales = process.env.MIX_VUE_APP_I18N_SUPPORTED_LOCALE.split(
                ","
            );
            if (!supported_locales.includes(locale))
                return next(
                    process.env.MIX_VUE_APP_I18N_DEFAULT_LOCALE + "/home"
                );
            if (i18n.locale !== locale) {
                i18n.locale = locale;
            }
            return next();
        },
        children: [
            {
                path: "login",
                name: "Login",
                component: loadComponent("auth/Login"),
                meta: { guest: true }
            },
            {
                path: "register",
                name: "Register",
                component: loadComponent("auth/Register"),
                meta: { guest: true }
            },
            {
                path: "logout",
                name: "Logout",
                component: loadComponent("auth/Logout"),
                meta: { auth: true }
            },
            {
                path: "home",
                name: "Home",
                component: loadComponent("pages/Home")
            },
            {
                path: "events",
                name: "Events",
                component: loadComponent("pages/Events")
            },
            {
                path: "admin/events/post",
                name: "PostEvent",
                component: loadComponent("admin/events/Post"),
                meta: { auth: true }
            },
            {
                path: "admin/events/edit/:id",
                name: "EditEvent",
                component: loadComponent("admin/events/Edit"),
                props: true,
                meta: { auth: true }
            },
            {
                path: "events/:id",
                name: "Event",
                props: true,
                component: loadComponent("pages/Event")
            },
            {
                path: "people",
                name: "People",
                component: loadComponent("pages/People")
            },
            {
                path: "people/:id",
                name: "Person",
                props: true,
                component: loadComponent("pages/Person")
            },
            {
                path: "venues",
                name: "Venues",
                component: loadComponent("pages/Venues")
            },
            {
                path: "venues/:id",
                name: "Venue",
                props: true,
                component: loadComponent("pages/Venue")
            },
            {
                path: "users",
                name: "Users",
                component: loadComponent("pages/Users")
            },
            {
                path: "contact",
                name: "Contact",
                component: loadComponent("pages/Contact")
            },
            {
                path: "tos",
                name: "Tos",
                component: loadComponent("pages/Tos")
            },
            {
                path: "dashboard",
                name: "Dashboard",
                component: loadComponent("admin/Dashboard"),
                meta: { auth: true }
            },
            {
                path: "error/401",
                name: "401",
                component: loadComponent("errors/401")
            },
            {
                path: "*",
                component: loadComponent("errors/404")
            }
        ]
    },
    {
        path: "*",
        redirect() {
            return process.env.MIX_VUE_APP_I18N_LOCALE + "/home";
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.MIX_BASE_URL,
    routes
});

export default router;
