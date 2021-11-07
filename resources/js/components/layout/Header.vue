<template>
    <div>
        <!-- header -->
        <v-app-bar app outlined>
            <!-- Navigation Toggler icon -->
            <v-app-bar-nav-icon
                :class="
                    $vuetify.theme.dark ? 'secondary--text' : 'primary--text'
                "
                @click.stop="$emit('toggle-drawer')"
            ></v-app-bar-nav-icon>
            <!-- App title -->
            <div
                class="rounded-sm mx-2"
                :class="$vuetify.theme.dark ? 'darken-3' : 'lighten-4'"
            >
                <v-toolbar-title
                    :class="
                        $vuetify.theme.dark
                            ? 'secondary--text'
                            : 'primary--text'
                    "
                    style="font-family: monospace; cursor:pointer"
                    :title="$t('button.back.home')"
                    @click="backToHome()"
                >
                    <!-- App icon -->
                    <v-icon
                        class="flaticon-music-disc-with-white-curve-details mr-0"
                        :class="
                            $vuetify.theme.dark
                                ? 'primary--text'
                                : 'secondary--text'
                        "
                        style="margin-bottom: 0.175rem"
                    ></v-icon>
                    <!-- App name -->
                    <span
                        class="app_title"
                        :class="
                            $vuetify.theme.dark
                                ? 'primary--text'
                                : 'secondary--text'
                        "
                    >
                        {{ appName }}</span
                    >
                </v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <!-- Theme switch -->
            <div
                :title="
                    $vuetify.theme.dark
                        ? $t('theme.switcher.light-title')
                        : $t('theme.switcher.dark-title')
                "
                style="margin-top: 1.32rem"
            >
                <v-switch
                    inset
                    v-model="themeSwitch"
                    :prepend-icon="
                        $vuetify.theme.dark
                            ? 'mdi-white-balance-sunny'
                            : 'mdi-weather-night'
                    "
                    @click="themeSwitcher"
                ></v-switch>
            </div>
            <!-- Locale menu -->
            <div :title="$t(localeSwitcherTitle)">
                <v-menu bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <!-- locale menu icon -->
                        <v-btn
                            :class="
                                $vuetify.theme.dark
                                    ? 'secondary--text'
                                    : 'primary--text'
                            "
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-web</v-icon>
                        </v-btn>
                    </template>
                    <!-- locale menu list -->
                    <v-list>
                        <v-list-item-group v-model="$i18n.locale" mandatory>
                            <v-list-item
                                v-for="(locale, index) in locales"
                                :value="locale"
                                :key="index"
                                @click="localeSwitcher(locale)"
                            >
                                <!-- locale menu title -->
                                <v-list-item-title>{{
                                    $t("lang." + locale)
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </div>
            <!-- account menu -->
            <div :title="$t(accountMenuTitle)">
                <v-menu bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :class="
                                $vuetify.theme.dark
                                    ? 'secondary--text'
                                    : 'primary--text'
                            "
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <!-- account menu avatar -->
                            <v-avatar size="30">
                                <img
                                    v-if="getUserFields.avatar != null"
                                    alt="Avatar"
                                    :src="
                                        baseURL +
                                            'storage/avatar/user/' +
                                            getUserFields.avatar
                                    "
                                /><v-icon v-else>mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <!-- account menu list -->
                    <v-list v-if="getUserLogged != null"
                        ><v-list-item
                            v-for="(item, index) in getAccountMenuLogged"
                            :key="index"
                            :to="baseURL + $i18n.locale + '/' + item.path"
                        >
                            <!-- account menu titile -->
                            <v-list-item-title>{{
                                $t(item.title)
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <v-list v-else>
                        <v-list-item
                            v-for="(item, index) in getAccountMenuUnlogged"
                            :key="index"
                            :to="baseURL + $i18n.locale + '/' + item.path"
                        >
                            <!-- account menu titile -->
                            <v-list-item-title>{{
                                $t(item.title)
                            }}</v-list-item-title>
                        </v-list-item></v-list
                    >
                </v-menu>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { setHtmlDirectionPerLocale, setHtmlLang } from "../../utils/html-i18n";
export default {
    data: () => ({
        // App name.
        appName: process.env.MIX_APP_NAME,
        // App url.
        appURL: process.env.MIX_APP_URL,
        // Base url.
        baseURL: process.env.MIX_BASE_URL,
        // Sidebar.
        drawer: false,
        // Locale switch title.
        localeSwitcherTitle: "lang.switcher.title",
        // Available locales.
        locales: process.env.MIX_VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
        // Account menu title.
        accountMenuTitle: "account-menu.title",
        themeSwitch: true,
        language: null,
        avatar: null,
        apiToken: null
    }),
    computed:
        // Get states from vuex store.
        mapGetters({
            getLang: "getLang",
            getAccountMenuLogged: "account/getAccountMenuLogged",
            getAccountMenuUnlogged: "account/getAccountMenuUnlogged",
            getUserLogged: "account/getUserLogged",
            getUserFields: "user/getUserFields"
        }),
    methods: {
        // Set states to vuex store.
        ...mapActions({
            setLanguage: "user/setLanguage",
            setTheme: "user/setTheme",
            setAvatar: "user/setAvatar",
            setUserLogged: "account/setUserLogged"
        }),
        backToHome: function() {
            if (
                this.$route.path != `${this.baseURL + this.$i18n.locale}/home`
            ) {
                this.$router.push(`${this.baseURL + this.$i18n.locale}/home`);
            }
        },
        // Theme switch.
        themeSwitcher: function() {
            // Switch theme.
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            // Update current theme.
            this.updateCurrentTheme();
        },
        setCurrentTheme: function() {
            // Get theme from localStorage.
            this.theme = localStorage.getItem("user_theme");
            this.setTheme(this.theme);
            if (this.theme === null) {
                // If localStorage is empty, get theme from vuex store.
                this.theme = this.getUserFields.theme;
                this.setTheme(this.theme);
            }
            if (this.theme === null) {
                // If vuex store is empty, get default theme.
                this.theme = process.env.MIX_VUE_DEFAULT_THEME;
                this.setTheme(this.theme);
            }
            if (this.theme === "dark") {
                // Activate dark theme.
                this.$vuetify.theme.dark = true;
                this.themeSwitch = false;
            } else {
                // Activate light theme.
                this.$vuetify.theme.dark = false;
                this.themeSwitch = true;
            }
        },
        updateCurrentTheme: function() {
            if (this.$vuetify.theme.dark === true) {
                this.themeSwitch = false;
                // Set theme to dark in vuex store.
                this.setTheme("dark");
                // Save theme to dark in localStorage.
                localStorage.setItem("user_theme", "dark");
            } else {
                this.themeSwitch = true;
                // Set theme to light in vuex store.
                this.setTheme("light");
                // Save theme to light in localStorage.
                localStorage.setItem("user_theme", "light");
            }
        },
        // Locale switch.
        localeSwitcher: function(locale) {
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
                const to = this.$router.resolve({ params: { locale } });
                this.$router.push(to.location);
            }
        }
    },
    mounted() {
        this.setCurrentTheme();
        // Theme watcher.
        this.$watch(
            "$store.state.user.userFields.theme",
            (newState, oldState) => {
                if (newState === oldState) {
                    return;
                }
                // Update current theme.
                this.updateCurrentTheme();
            },
            { immediate: true }
        );
        // Locale watcher.
        this.$watch(
            "$i18n.locale",
            (newState, oldState) => {
                if (newState === oldState) {
                    return;
                }
                // Set Html lang attribute in DOM.
                setHtmlDirectionPerLocale(newState);
                setHtmlLang(newState);
            },
            { immediate: true }
        );

        // Set Avatar path in store.
        this.apiToken = localStorage.getItem("user_api_token");
        !!this.apiToken ? this.setUserLogged(this.apiToken) : null;

        // Set Avatar path in store.
        this.avatar = localStorage.getItem("user_avatar");
        !!this.avatar ? this.setAvatar(this.avatar) : null;

        // TODO Set locale in store.
        this.language = localStorage.getItem("user_language");
        !!this.language ? this.setLanguage(this.language) : null;
    }
};
</script>

<style></style>
