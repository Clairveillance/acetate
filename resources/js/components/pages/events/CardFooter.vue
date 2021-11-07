<template>
    <v-row class="pt-3">
        <!-- more info button -->
        <v-col class="ml-4 my-auto col-auto">
            <v-btn text color="info" @click="showEvent(Id)">{{
                $t("page.events.more_info")
            }}</v-btn>
        </v-col>
        <v-col class="mx-4 my-auto col-auto ml-auto">
            <!-- comments count -->
            <span
                :class="
                    $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
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
                ><span class="subtitle-2">{{ Comments }} </span>
            </span>
            <!-- likes count -->
            <span
                :class="
                    $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
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
                ><span class="subtitle-2">{{ Likes }}</span>
            </span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        Id: String,
        Comments: Number,
        Likes: Number
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
        showEvent: function(id) {
            const path = "events/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        }
    }
};
</script>

<style></style>
