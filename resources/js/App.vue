<template>
    <v-app>
        <Sidebar ref="sidebar" />
        <Header
            ref="header"
            @toggle-drawer="$refs.sidebar.drawer = !$refs.sidebar.drawer"
        />
        <v-main
            ><!-- 
      <v-img
        style="min-height: 100vh; overflow: hidden"
        :src="
          $vuetify.theme.dark
            ? appURL + baseURL + 'img/background_firework.jpg'
            : appURL + baseURL + 'img/background_mountain.jpg'
        "
      > -->
            <v-container fluid
                ><v-btn
                    v-scroll="onScroll"
                    v-show="fab"
                    fab
                    dark
                    fixed
                    bottom
                    right
                    :color="$vuetify.theme.dark ? 'primary' : 'secondary'"
                    @click="toTop"
                >
                    <v-icon>mdi-arrow-up-thick</v-icon>
                </v-btn>
                <router-view></router-view>
            </v-container>
            <!-- </v-img> -->
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
export default {
    components: { Header, Sidebar, Footer },
    data: () => ({
        // App url.
        appURL: process.env.MIX_APP_URL,
        // Base url.
        baseURL: process.env.MIX_BASE_URL,
        fab: false
    }),
    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20;
        },
        toTop() {
            this.$vuetify.goTo(0);
        }
    }
};
</script>

<style></style>
