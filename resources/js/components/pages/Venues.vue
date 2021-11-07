<template>
    <v-container class="my-0 py-0">
        <div class="my-0 py-0">
            <v-snackbar v-model="snackbar">
                {{ $t("errors.venues.not_found") }}
                <template v-slot:action="{ attrs }">
                    <v-btn
                        centered
                        :color="$vuetify.theme.dark ? 'info' : 'darkinfo'"
                        v-bind="attrs"
                        small
                        text
                        @click="snackbar = false"
                    >
                        {{ $t("button.close") }}
                    </v-btn>
                </template>
            </v-snackbar>
            <v-container class="my-0 py-0" v-if="overlay === false">
                <div class="my-0 py-0">
                    <div class="my-0 py-0 mx-auto my-auto col-auto">
                        <v-row justify="center">
                            <v-col
                                cols="10"
                                sm="6"
                                md="4"
                                class="mb-4 my-auto col-auto "
                            >
                                <v-text-field
                                    v-model="searchValue"
                                    :color="
                                        $vuetify.theme.dark
                                            ? 'primary'
                                            : 'secondary'
                                    "
                                    :label="$t('search.venues')"
                                    hide-details="auto"
                                    clearable
                                    @keyup.enter="onSearch"
                                ></v-text-field>
                            </v-col>
                            <v-col class="my-auto my-0 mx-0 px-0 py-0 col-auto "
                                ><v-btn
                                    :class="
                                        $vuetify.theme.dark
                                            ? 'primary'
                                            : 'secondary'
                                    "
                                    class="white--text"
                                    elevation="0"
                                    fab
                                    @click="onSearch"
                                    x-small
                                    ><v-icon>mdi-magnify</v-icon></v-btn
                                >
                            </v-col></v-row
                        >
                    </div>
                    <v-row dense>
                        <v-col
                            v-for="(venue, index) in venues"
                            :key="index"
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                            xl="2"
                        >
                            <v-card max-width="570px" class="mx-auto pb-4">
                                <div>
                                    <v-list-item
                                        three-line
                                        class="greybg rounded-t"
                                    >
                                        <!-- avatar -->
                                        <v-list-item-avatar
                                            tile
                                            size="80"
                                            class="rounded"
                                            :color="
                                                $vuetify.theme.dark
                                                    ? 'primary darken-1'
                                                    : 'greybg darken-1'
                                            "
                                            ><v-img
                                                v-if="venue.avatar != null"
                                                :src="
                                                    baseURL +
                                                        'storage/avatar/venue/' +
                                                        venue.avatar
                                                "
                                                :title="venue.nickname"
                                            ></v-img>
                                            <v-icon
                                                :title="$t('avatar.no_avatar')"
                                                :color="
                                                    $vuetify.theme.dark
                                                        ? 'greybg'
                                                        : 'primary lighten-1'
                                                "
                                                v-else
                                                >mdi-camera-off</v-icon
                                            >
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <div class="overline primary--text">
                                                <v-row>
                                                    <!-- favorite -->
                                                    <v-col
                                                        class="col-auto ml-auto"
                                                        style="margin-bottom: 1rem"
                                                    >
                                                        <span
                                                            class="primary--text px-0"
                                                        >
                                                            <v-icon
                                                                class="primary--text"
                                                                dark
                                                                small
                                                            >
                                                                mdi-star-outline
                                                            </v-icon>
                                                        </span></v-col
                                                    ></v-row
                                                >
                                            </div>
                                            <!-- name -->
                                            <v-list-item-title
                                                class="title primary--text mb-1"
                                                >{{ venue.name }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <!-- card content -->
                                    <v-row class="py-3 mx-1">
                                        <!-- address -->
                                        <v-col class="my-0 py-2">
                                            <span
                                                class="caption primary--text"
                                                v-if="
                                                    venue.addresses.length > 0
                                                "
                                            >
                                                <span>
                                                    <v-icon
                                                        class="mr-1 primary--text"
                                                        style="margin-bottom: 0.08rem"
                                                        small
                                                        :title="
                                                            $t(
                                                                'page.venues.title.address'
                                                            )
                                                        "
                                                        >mdi-map-marker</v-icon
                                                    >&nbsp;<span>
                                                        {{
                                                            venue.addresses[0]
                                                                .zip
                                                        }}
                                                        {{
                                                            venue.addresses[0]
                                                                .city
                                                        }},
                                                        {{
                                                            venue.addresses[0]
                                                                .canton
                                                        }},
                                                        {{
                                                            venue.addresses[0]
                                                                .country
                                                        }}</span
                                                    ></span
                                                > </span
                                            ><span
                                                v-else
                                                class="caption primary--text"
                                                ><span
                                                    ><v-icon
                                                        class="mr-1 "
                                                        :class="
                                                            $vuetify.theme.dark
                                                                ? 'grey--text'
                                                                : 'grey--text'
                                                        "
                                                        style="margin-bottom: 0.08rem"
                                                        small
                                                        :title="
                                                            $t(
                                                                'page.venues.no_addresses_title'
                                                            )
                                                        "
                                                        >mdi-map-marker</v-icon
                                                    ><span
                                                        :class="
                                                            $vuetify.theme.dark
                                                                ? 'grey--text'
                                                                : 'grey--text'
                                                        "
                                                        :title="
                                                            $t(
                                                                'page.venues.no_addresses_title'
                                                            )
                                                        "
                                                    >
                                                        {{
                                                            $t(
                                                                "page.venues.no_addresses"
                                                            )
                                                        }}</span
                                                    ></span
                                                >
                                            </span>
                                        </v-col>
                                    </v-row>
                                    <v-divider class="mx-2"></v-divider>
                                    <!-- card footer -->
                                    <v-row class="pt-3">
                                        <!-- more info button -->
                                        <v-col class="ml-4 my-auto col-auto">
                                            <v-btn
                                                text
                                                color="info"
                                                @click="showVenue(venue.id)"
                                                >{{
                                                    $t("page.venues.more_info")
                                                }}</v-btn
                                            >
                                        </v-col>
                                        <v-col
                                            class="mx-4 my-auto col-auto ml-auto"
                                        >
                                            <!-- comments count -->
                                            <span
                                                :class="
                                                    $vuetify.theme.dark
                                                        ? 'primary--text'
                                                        : 'secondary--text'
                                                "
                                                class="mr-3"
                                            >
                                                <v-icon
                                                    class="mr-1"
                                                    :class="
                                                        $vuetify.theme.dark
                                                            ? 'primary--text'
                                                            : 'secondary--text'
                                                    "
                                                    dark
                                                    small
                                                    style="margin-bottom: 0.05rem"
                                                >
                                                    mdi-comment-outline </v-icon
                                                ><span class="subtitle-2"
                                                    >{{ venue.comments_count }}
                                                </span>
                                            </span>
                                            <!-- likes count -->
                                            <span
                                                :class="
                                                    $vuetify.theme.dark
                                                        ? 'primary--text'
                                                        : 'secondary--text'
                                                "
                                            >
                                                <v-icon
                                                    class="mr-1"
                                                    :class="
                                                        $vuetify.theme.dark
                                                            ? 'primary--text'
                                                            : 'secondary--text'
                                                    "
                                                    dark
                                                    small
                                                    style="margin-bottom: 0.05rem"
                                                >
                                                    mdi-heart-outline </v-icon
                                                ><span class="subtitle-2">{{
                                                    venue.likes_count
                                                }}</span>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-col
                        class="my-0 py-o"
                        v-if="meta.last_page != 1 && overlay == false"
                    >
                        <div class="text-center mt-4 mb-0 py-0">
                            <v-container>
                                <v-row justify="center">
                                    <v-col cols="12">
                                        <v-container class="max-width">
                                            <v-pagination
                                                :color="
                                                    $vuetify.theme.dark
                                                        ? 'primary'
                                                        : 'secondary'
                                                "
                                                v-model="page"
                                                :length="meta.last_page"
                                                circle
                                                @input="onPageChange"
                                            ></v-pagination>
                                        </v-container>
                                    </v-col>
                                </v-row>
                            </v-container></div
                    ></v-col>
                </div>
            </v-container>
        </div>
        <!-- loading -->
        <v-overlay
            :class="$vuetify.theme.dark ? 'primary--text' : 'secondary--text'"
            :opacity="0.1"
            :value="overlay"
        >
            <v-progress-circular indeterminate size="90">
                <span
                    class="caption"
                    :class="
                        $vuetify.theme.dark
                            ? 'primary--text'
                            : 'secondary--text'
                    "
                    >{{ $t("loading") }}</span
                >
            </v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            overlay: true,
            perPage: 48,
            page: 1,
            searchValue: null,
            query: null,
            snackbar: false,
            venues: "",
            meta: "",
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: process.env.MIX_APP_API_TOKEN
        };
    },
    mounted() {
        this.fetchVenues();
    },
    methods: {
        fetchVenues: function() {
            this.overlay = true;
            this.venues = null;
            if (this.searchValue != null) {
                this.query =
                    "venues?per_page=" +
                    this.perPage +
                    "&search_field=name&search_value=" +
                    this.searchValue;
            } else {
                this.query =
                    "venues?per_page=" + this.perPage + "&page=" + this.page;
            }
            axios
                .request({
                    url: this.query,
                    method: "get",
                    baseURL: this.baseURL + "api/",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.venues = response.data.venues;
                    this.meta = response.data.meta;
                    this.overlay = false;
                })
                .catch(error => {
                    this.snackbar = true;
                    this.searchValue = null;
                    this.fetchVenues();
                })
                .finally(() => {});
        },
        onSearch() {
            this.fetchVenues();
        },
        onPageChange() {
            this.fetchVenues();
        },
        showVenue: function(id) {
            const path = "venues/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        }
    }
};
</script>

<style></style>
