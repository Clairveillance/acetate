<template>
    <v-container class="my-0 py-0">
        <div class="my-0 py-0">
            <v-snackbar v-model="snackbar">
                {{ $t("errors.people.not_found") }}
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
                                    :label="$t('search.people')"
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
                            v-for="(person, index) in people"
                            :key="index"
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                            xl="2"
                        >
                            <v-card max-width="570px" class="mx-auto pb-4">
                                <v-list-item
                                    three-line
                                    class="greybg rounded-t"
                                >
                                    <!-- avatar -->
                                    <v-list-item-avatar
                                        size="80"
                                        rounded
                                        :color="
                                            $vuetify.theme.dark
                                                ? 'primary darken-1'
                                                : 'greybg darken-1'
                                        "
                                        ><v-img
                                            v-if="person.avatar != null"
                                            :src="
                                                baseURL +
                                                    'storage/avatar/person/' +
                                                    person.avatar
                                            "
                                            :title="person.nickname"
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
                                        <!-- nickname -->
                                        <v-list-item-title
                                            class="title primary--text mb-1"
                                            >{{ person.nickname }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <!-- card content -->
                                <v-row class="py-3 mx-1">
                                    <!-- firstname and lastname -->
                                    <v-col class="my-0 pt-2 pb-0">
                                        <span
                                            class="caption primary--text"
                                            v-if="
                                                person.firstname &&
                                                    person.lastname
                                            "
                                        >
                                            <span>
                                                <v-icon
                                                    class="mr-1 primary--text"
                                                    style="margin-bottom: 0.08rem"
                                                    small
                                                    :title="
                                                        $t(
                                                            'page.people.title.name'
                                                        )
                                                    "
                                                    >mdi-account-box</v-icon
                                                ><span
                                                    >&nbsp;{{
                                                        person.firstname
                                                    }}
                                                    {{ person.lastname }}</span
                                                ><v-spacer></v-spacer></span></span
                                        ><span
                                            class="caption primary--text"
                                            v-else-if="
                                                person.firstname &&
                                                    !person.lastname
                                            "
                                        >
                                            <span>
                                                <v-icon
                                                    class="mr-1 primary--text"
                                                    style="margin-bottom: 0.08rem"
                                                    small
                                                    :title="
                                                        $t(
                                                            'page.people.title.name'
                                                        )
                                                    "
                                                    >mdi-account-box</v-icon
                                                ><span
                                                    >&nbsp;{{
                                                        person.firstname
                                                    }}</span
                                                ><v-spacer></v-spacer></span></span
                                        ><span
                                            class="caption primary--text"
                                            v-else-if="
                                                !person.firstname &&
                                                    person.lastname
                                            "
                                        >
                                            <span>
                                                <v-icon
                                                    class="mr-1 primary--text"
                                                    style="margin-bottom: 0.08rem"
                                                    small
                                                    :title="
                                                        $t(
                                                            'page.people.title.name'
                                                        )
                                                    "
                                                    >mdi-account-box</v-icon
                                                ><span
                                                    >&nbsp;{{
                                                        person.lastname
                                                    }}</span
                                                ><v-spacer></v-spacer></span></span
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
                                                            'page.people.no_name_title'
                                                        )
                                                    "
                                                    >mdi-account-box</v-icon
                                                ><span
                                                    :class="
                                                        $vuetify.theme.dark
                                                            ? 'grey--text'
                                                            : 'grey--text'
                                                    "
                                                    :title="
                                                        $t(
                                                            'page.people.no_name_title'
                                                        )
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            "page.people.no_name"
                                                        )
                                                    }}</span
                                                ><v-spacer></v-spacer
                                            ></span>
                                        </span>
                                    </v-col>
                                    <!-- company -->
                                    <v-col class="my-0 pt-0 pb-2" cols="12">
                                        <span
                                            class="caption primary--text"
                                            v-if="person.company"
                                        >
                                            <span>
                                                <v-icon
                                                    class="mr-1 primary--text"
                                                    style="margin-bottom: 0.08rem"
                                                    small
                                                    :title="
                                                        $t(
                                                            'page.people.title.company'
                                                        )
                                                    "
                                                    >mdi-briefcase</v-icon
                                                ><span
                                                    >&nbsp;{{
                                                        person.company
                                                    }}</span
                                                ></span
                                            ></span
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
                                                            'page.people.no_company_title'
                                                        )
                                                    "
                                                    >mdi-briefcase</v-icon
                                                ><span
                                                    :class="
                                                        $vuetify.theme.dark
                                                            ? 'grey--text'
                                                            : 'grey--text'
                                                    "
                                                    :title="
                                                        $t(
                                                            'page.people.no_company_title'
                                                        )
                                                    "
                                                >
                                                    {{
                                                        $t(
                                                            "page.people.no_company"
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
                                            @click="showPerson(person.id)"
                                            >{{
                                                $t("page.people.more_info")
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
                                                >{{ person.comments_count }}
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
                                                person.likes_count
                                            }}</span>
                                        </span>
                                    </v-col>
                                </v-row>
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
            people: "",
            meta: "",
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: process.env.MIX_APP_API_TOKEN
        };
    },
    mounted() {
        /* 
        axios.get("/sanctum/csrf-cookie").then(response => {
            console.log(response.config.headers.["X-XSRF-TOKEN"]);
        }); */
        this.fetchPeople();
    },
    methods: {
        fetchPeople: function() {
            this.overlay = true;
            this.people = null;
            if (this.searchValue != null) {
                this.query =
                    "people?per_page=" +
                    this.perPage +
                    "&search=" +
                    this.searchValue;
            } else {
                this.query =
                    "people?per_page=" + this.perPage + "&page=" + this.page;
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
                    this.people = response.data.people;
                    this.meta = response.data.meta;
                    this.overlay = false;
                })
                .catch(error => {
                    this.snackbar = true;
                    this.searchValue = null;
                    this.fetchPeople();
                })
                .finally(() => {});
        },
        onSearch() {
            this.fetchPeople();
        },
        onPageChange() {
            this.fetchPeople();
        },
        showPerson: function(id) {
            const path = "people/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        }
    }
};
</script>

<style></style>
