<template>
    <v-container>
        <div v-if="event !== null" class="d-flex justify-center mb-4">
            <v-btn-toggle v-if="renderToolbox" class="greybg">
                <span
                    ><v-btn
                        @click="gotoEvents()"
                        text
                        tile
                        outlined
                        small
                        color="secondary"
                        >{{ $t("button.back.events") }}</v-btn
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
                        @click="editThis(event.id)"
                        text
                        tile
                        outlined
                        small
                        color="info"
                        >{{ $t("admin.edit.title") }}</v-btn
                    ><v-btn
                        @click="deleteThis(event.id)"
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
            >
                <!-- card title -->
                <CardTitle
                    v-if="renderCardTitle"
                    :Avatar="event.avatar ? event.avatar : null"
                    :Taxonomies="event.taxonomies ? event.taxonomies : null"
                    :Name="event.name ? event.name : null"
                />
                <!-- carousel -->
                <div v-if="event.files">
                    <div v-if="event.files !== null && event.files.length > 0">
                        <v-carousel
                            cycle
                            interval="5000"
                            hide-delimiters
                            show-arrows-on-hover
                        >
                            <v-carousel-item
                                v-for="(file, index) in event.files"
                                :key="index"
                                :src="baseURL + 'storage/file/' + file.path"
                                :title="file.name"
                            ></v-carousel-item>
                        </v-carousel>
                    </div>
                </div>
                <!-- likes -->
                <Likes
                    v-if="event.likes"
                    :LikesCount="event.likes_count"
                    :Likes="event.likes"
                    :Id="event.id"
                />
                <v-divider></v-divider>
                <!-- event details -->
                <EventDetails
                    v-if="event.dates"
                    :Description="event.description ? event.description : null"
                    :CurrentDates="
                        event.current_dates ? event.current_dates : null
                    "
                    :OldDates="event.old_dates ? event.old_dates : null"
                    :People="event.people ? event.people : null"
                    :Venues="event.venues ? event.venues : null"
                    :Addresses="event.addresses ? event.addresses : null"
                    :Prices="event.prices ? event.prices : null"
                    :Emails="event.emails ? event.emails : null"
                    :Phones="event.phones ? event.phones : null"
                    :Websites="event.websites ? event.websites : null"
                />
                <v-divider></v-divider>
                <!-- taxonomies -->
                <Taxonomies
                    v-if="event.taxonomies"
                    :Taxonomies="event.taxonomies ? event.taxonomies : null"
                />
                <v-divider></v-divider>
                <!-- comments -->
                <Comments
                    ref="CommentsContent"
                    v-if="renderComponent"
                    :Comments="event.comments ? event.comments : null"
                    @comment-dialog="$refs.CommentDialog.dialog = true"
                />
                <div class="d-flex justify-center" v-else>
                    <v-progress-linear
                        indeterminate
                        :color="$vuetify.theme.dark ? 'info' : 'info'"
                        opacity="0.1"
                    ></v-progress-linear>
                </div>
                <!-- comment dialog -->
                <CommentDialog
                    ref="CommentDialog"
                    @refreshComments="forceRerender"
                    :Id="event.id"
                />
                <!-- comment dialog -->
                <EditAvatar
                    ref="AvatarDialog"
                    :Id="event.id"
                    :Avatar="event.avatar ? event.avatar : null"
                    @refreshAvatar="rerenderCardTitle"
                    @refreshToolbox="rerenderToolbox"
                />
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
import CardTitle from "./event/CardTitle";
import EventDetails from "./event/EventDetails";
import Likes from "./event/Likes";
import Taxonomies from "./event/Taxonomies";
import Comments from "./event/Comments";
import CommentDialog from "./event/CommentDialog";
import EditAvatar from "../admin/events/EditAvatar";

export default {
    props: {
        id: String
    },
    components: {
        CardTitle,
        EventDetails,
        Likes,
        Taxonomies,
        Comments,
        CommentDialog,
        EditAvatar
    },
    data() {
        return {
            overlay: true,
            avatarDialog: false,
            event: null,
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
                    title: "menu.edit_events.title",
                    path: "admin/events/edit",
                    icon: "mdi-calendar-range"
                },
                {
                    name: "delete",
                    title: "menu.delete_events.title",
                    path: "admin/events/delete",
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
            if (this.event.user_id == localStorage.getItem("user_id")) {
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
                `${this.baseURL}${this.$i18n.locale}/admin/events/edit/${id}`
            );
        },
        deleteThis: function(id) {
            this.$router.push(
                `${this.baseURL}${this.$i18n.locale}/admin/events/delete/${id}`
            );
        },
        logThis: function(file) {
            console.log(this.appURL + this.baseURL + file.path);
        },
        gotoEvents() {
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/events`);
        },
        fetchAPI() {
            axios
                .request({
                    url: this.id,
                    method: "get",
                    baseURL: this.baseURL + "api/events/",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.event = response.data.data.event;
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
                    return this.event;
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
