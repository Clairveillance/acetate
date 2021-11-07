<template>
    <div>
        <div v-if="Comments !== null && Comments.length > 0">
            <v-row
                class="pt-3 my-2 mx-4 overflow-y-auto"
                style="max-height: 300px"
                ><v-col
                    cols="12"
                    v-for="(comment, index) in Comments"
                    :key="index"
                    class="subtitle-2"
                    ><v-col class="my-0 py-0">
                        <v-list-item>
                            <!-- avatar -->
                            <v-list-item-avatar
                                class="d-none align-self-start mt-4 d-sm-flex"
                                style="cursor: pointer"
                                size="30"
                                ><v-img
                                    v-if="
                                        comment.user_avatar !== null &&
                                            comment.user_avatar.length > 0
                                    "
                                    :src="
                                        baseURL +
                                            'storage/avatar/user/' +
                                            comment.user_avatar
                                    "
                                    alt="Avatar"
                                    :title="comment.user_name"
                                    @click="showUser(comment.user_id)"
                                /><v-icon
                                    v-else
                                    large
                                    :title="comment.user_name"
                                    @click="showUser(comment.user_id)"
                                    >mdi-account-circle</v-icon
                                >
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <span class="my-0 grey--text"
                                    ><a
                                        class="comments_links"
                                        :title="comment.user_name"
                                        @click="showUser(comment.user_id)"
                                        >{{ comment.user_name }}</a
                                    >
                                    <span class="caption grey--text"
                                        >({{ comment.created_at | formatDate }}
                                        |
                                        {{
                                            comment.created_at
                                                | formatStringToTime
                                        }}) :</span
                                    >
                                    <v-spacer class="mb-2"></v-spacer>
                                    {{ comment.text }}</span
                                >
                                <div class="d-flex justify-end mt-4">
                                    <!-- likes count -->
                                    <span class="grey--text mr-4">
                                        <v-icon
                                            class="grey--text mr-1"
                                            dark
                                            small
                                            style="margin-bottom: 0.05rem"
                                        >
                                            mdi-thumb-up</v-icon
                                        ><span class="grey--text subtitle-2">{{
                                            comment.likes_count
                                        }}</span>
                                    </span>
                                    <!-- dislikes count -->
                                    <span class="grey--text mr-4">
                                        <v-icon
                                            class="grey--text mr-1"
                                            dark
                                            small
                                            style="margin-bottom: 0.05rem"
                                        >
                                            mdi-thumb-down </v-icon
                                        ><span class="grey--text subtitle-2">{{
                                            comment.dislikes_count
                                        }}</span>
                                    </span>
                                </div>
                            </v-list-item-content>
                        </v-list-item></v-col
                    ><v-col>
                        <v-divider
                            v-if="index < Comments.length - 1"
                            class="pb-1"
                        ></v-divider> </v-col></v-col
            ></v-row>
            <v-divider class="mx-2"></v-divider>
        </div>
        <v-row v-if="!showUserToken()" class="pt-3">
            <!-- post a comment -->
            <v-col class="my-auto mx-auto col-auto">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <div v-on="on">
                            <v-btn
                                text
                                disabled
                                outlined
                                color="info accent-4"
                                >{{ $t("page.event.comment.post") }}</v-btn
                            >
                        </div>
                    </template>
                    <span>{{ $t("not_logged_in") }}</span>
                </v-tooltip></v-col
            >
        </v-row>
        <v-row v-else class="pt-3">
            <!-- post a comment -->
            <v-col class="my-auto mx-auto col-auto">
                <v-btn
                    @click.stop="$emit('comment-dialog')"
                    text
                    color="info"
                    >{{ $t("page.event.comment.post") }}</v-btn
                >
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        Comments: Array
    },
    data() {
        return {
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL
        };
    },
    methods: {
        showUser: function(id) {
            const path = "users/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        },
        showUserToken: function() {
            return localStorage.getItem("user_api_token");
        }
    },
    mounted() {}
};
</script>

<style></style>
