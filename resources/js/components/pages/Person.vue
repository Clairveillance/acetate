<template>
    <v-container>
        <div v-if="person !== null" class="d-flex justify-center mb-4">
            <v-btn-toggle v-if="renderToolbox" class="greybg">
                <span
                    ><v-btn
                        @click="gotoPeople()"
                        text
                        tile
                        outlined
                        small
                        color="secondary"
                        >{{ $t("button.back.people") }}</v-btn
                    ></span
                >
                <span v-if="editable()"
                    ><v-btn
                        @click="$refs.AvatarDialog.avatarDialog = true"
                        text
                        tile
                        outlined
                        small
                        color="info"
                        >{{ $t("admin.edit_avatar.title") }}</v-btn
                    ><v-btn
                        @click="editThis(person.id)"
                        text
                        tile
                        outlined
                        small
                        color="info"
                        >{{ $t("admin.edit.title") }}</v-btn
                    ><v-btn
                        @click="deleteThis(person.id)"
                        text
                        tile
                        outlined
                        small
                        color="info"
                        >{{ $t("admin.delete.title") }}</v-btn
                    ></span
                ></v-btn-toggle
            >
        </div>
        <div>
            <v-card
                v-if="overlay === false"
                max-width="800px"
                class="pb-4 mx-auto"
                ><div class="mx-4 py-4">{{ id }}</div>
                <!-- carousel -->
                <div v-if="person.files">
                    <div
                        v-if="person.files !== null && person.files.length > 0"
                    >
                        <v-carousel
                            cycle
                            interval="5000"
                            hide-delimiters
                            show-arrows-on-hover
                        >
                            <v-carousel-item
                                v-for="(file, index) in person.files"
                                :key="index"
                                :src="baseURL + 'storage/file/' + file.path"
                                :title="file.name"
                            ></v-carousel-item>
                        </v-carousel>
                    </div>
                </div>
                <div class="d-flex justify-center" v-else>
                    <v-progress-linear
                        indeterminate
                        :color="$vuetify.theme.dark ? 'info' : 'info'"
                        opacity="0.1"
                    ></v-progress-linear>
                </div>
            </v-card>
        </div>
        <!-- loading -->
        <v-overlay
            :class="$vuetify.theme.dark ? 'primary--text' : 'secondary--text'"
            opacity="0.1"
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
    props: {
        id: String
    },
    components: {},
    data() {
        return {
            overlay: true,
            avatarDialog: false,
            person: null,
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: process.env.MIX_APP_API_TOKEN,
            renderComponent: false,
            renderCardTitle: false,
            renderToolbox: false,
            adminButtons: [
                {
                    name: "edit",
                    title: "menu.edit_people.title",
                    path: "admin/people/edit",
                    icon: "mdi-calendar-range"
                },
                {
                    name: "delete",
                    title: "menu.delete_people.title",
                    path: "admin/people/delete",
                    icon: "mdi-calendar-remove"
                }
            ],
            toggle_none: null
        };
    },
    methods: {
        logged: function() {
            return localStorage.getItem("user_api_token");
        },
        author: function() {
            if (this.person.user_id == localStorage.getItem("user_id")) {
                return true;
            }
        },
        admin: function() {
            if (localStorage.getItem("user_role") === "super-admin") {
                return true;
            }
        },
        editable() {
            if (this.logged() && (this.author() || this.admin())) {
                return true;
            }
        },
        editThis: function(id) {
            this.$router.push(
                `${this.baseURL}${this.$i18n.locale}/admin/people/edit/${id}`
            );
        },
        deleteThis: function(id) {
            this.$router.push(
                `${this.baseURL}${this.$i18n.locale}/admin/people/delete/${id}`
            );
        },
        logThis: function(file) {
            console.log(this.appURL + this.baseURL + file.path);
        },
        gotoPeople() {
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/people`);
        },
        fetchAPI() {
            axios
                .request({
                    url: this.id,
                    method: "get",
                    baseURL: this.baseURL + "api/people/",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.person = response.data.data.person;
                })
                .catch(error => {
                    const path = "error/404";
                    this.$router.push(
                        `${this.baseURL}${this.$i18n.locale}/${path}`
                    );
                })
                .finally(() => {
                    this.overlay = false;
                    this.renderToolbox = true;
                    this.renderCardTitle = true;
                    this.renderComponent = true;
                    return this.person;
                });
        },
        forceRerender() {
            // Remove my-component from the DOM
            this.renderComponent = false;

            this.$nextTick(() => {
                // Add the component back in
                this.fetchAPI();
            });
        },
        rerenderCardTitle() {
            // Remove my-component from the DOM
            this.renderCardTitle = false;

            this.$nextTick(() => {
                // Add the component back in
                this.fetchAPI();
            });
        },
        rerenderToolbox() {
            // Remove my-component from the DOM
            this.renderToolbox = false;

            this.$nextTick(() => {
                // Add the component back in
                this.fetchAPI();
            });
        }
    },
    mounted() {
        this.fetchAPI();
    }
};
</script>

<style></style>
