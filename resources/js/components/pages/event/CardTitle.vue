<template>
    <v-list class="greybg rounded-t">
        <v-list-item three-line>
            <!-- avatar -->
            <v-list-item-avatar
                tile
                size="80"
                class="rounded"
                :color="
                    $vuetify.theme.dark ? 'primary darken-1' : 'greybg darken-1'
                "
                ><v-img
                    v-if="Avatar != null"
                    :src="baseURL + 'storage/avatar/event/' + Avatar"
                    :title="Name"
                ></v-img>
                <v-icon
                    :title="$t('avatar.no_avatar')"
                    :color="
                        $vuetify.theme.dark ? 'greybg' : 'primary lighten-1'
                    "
                    v-else
                    >mdi-camera-off</v-icon
                >
            </v-list-item-avatar>
            <v-list-item-content>
                <div class="overline primary--text">
                    <v-row>
                        <!-- taxonomy type -->
                        <v-col class="col-auto">
                            <span
                                v-for="(taxonomy, index) in Taxonomies"
                                :key="index"
                            >
                                <span v-if="taxonomy.type"
                                    ><span v-if="index === 0">
                                        <span
                                            class="primary--text"
                                            v-if="taxonomy.type === 'music'"
                                            >{{
                                                $t("taxonomy.type.music")
                                            }}</span
                                        >
                                        <span
                                            class="primary--text"
                                            v-if="
                                                taxonomy.type === 'conference'
                                            "
                                            >{{
                                                $t("taxonomy.type.conference")
                                            }}</span
                                        >
                                        <span
                                            class="primary--text"
                                            v-if="
                                                taxonomy.type === 'exhibition'
                                            "
                                            >{{
                                                $t("taxonomy.type.exhibition")
                                            }}</span
                                        >
                                        <span
                                            class="primary--text"
                                            v-if="taxonomy.type === 'theater'"
                                            >{{
                                                $t("taxonomy.type.theater")
                                            }}</span
                                        ></span
                                    >
                                </span></span
                            ></v-col
                        >
                        <!-- favorite -->
                        <v-col
                            class="col-auto ml-auto mr-4"
                            style="margin-bottom: 1rem"
                        >
                            <span class="primary--text px-0">
                                <v-icon class="primary--text" dark small>
                                    mdi-star-outline
                                </v-icon>
                            </span></v-col
                        ></v-row
                    >
                </div>
                <!-- name -->
                <v-list-item-title class="title primary--text mb-1"
                    >{{ Name }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    props: {
        Avatar: String,
        Taxonomies: Array,
        Name: String
    },
    data() {
        return {
            appURL: process.env.MIX_APP_URL,
            baseURL: process.env.MIX_BASE_URL
        };
    }
};
</script>

<style></style>
