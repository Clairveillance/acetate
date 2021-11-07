<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary
            ><v-app-bar outlined
                ><v-app-bar-nav-icon
                    :class="
                        $vuetify.theme.dark
                            ? 'secondary--text'
                            : 'primary--text'
                    "
                    @click="drawer = !drawer"
                ></v-app-bar-nav-icon>
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
                        <v-icon
                            class="flaticon-music-disc-with-white-curve-details mr-0"
                            :class="
                                $vuetify.theme.dark
                                    ? 'primary--text'
                                    : 'secondary--text'
                            "
                            style="margin-bottom: 0.175rem"
                        ></v-icon
                        ><span
                            class="app_title"
                            :class="
                                $vuetify.theme.dark
                                    ? 'primary--text'
                                    : 'secondary--text'
                            "
                        >
                            {{ appName }}</span
                        ></v-toolbar-title
                    >
                </div>
            </v-app-bar>
            <v-spacer></v-spacer>
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item
                        v-for="(item, index) in getMenu"
                        :key="index"
                        :to="baseURL + `${$i18n.locale}/${item.path}`"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{
                            $t(item.title)
                        }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <v-divider class="mx-2"></v-divider>
                <v-list nav dense>
                    <v-list-item-group class="mb-2">
                        <v-list-item :to="baseURL + `${$i18n.locale}/contact`">
                            <v-list-item-icon>
                                <v-icon>mdi-email-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                                $t("menu.contact.title")
                            }}</v-list-item-title>
                        </v-list-item>
                        <v-list-item :to="baseURL + `${$i18n.locale}/tos`">
                            <v-list-item-icon>
                                <v-icon>mdi-checkbox-marked-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                                $t("menu.tos.title")
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data: () => ({
        // App name.
        appName: process.env.MIX_APP_NAME,
        // App url.
        appURL: process.env.MIX_APP_URL,
        // Base url.
        baseURL: process.env.MIX_BASE_URL,
        // Sidebar.
        drawer: false
    }),
    // Get sidebar menu content.
    computed: mapGetters(["getMenu"]),
    methods: {
        backToHome: function() {
            if (
                this.$route.path != `${this.baseURL + this.$i18n.locale}/home`
            ) {
                this.$router.push(`${this.baseURL + this.$i18n.locale}/home`);
            }
        }
    }
};
</script>

<style></style>
