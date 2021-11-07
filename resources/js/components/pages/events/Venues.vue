<template>
    <div>
        <span v-if="Venues.length > 0" class="caption primary--text">
            <span>
                <v-icon
                    class="mr-1 primary--text"
                    style="margin-bottom: 0.08rem"
                    small
                    >mdi-office-building-marker</v-icon
                >&nbsp;<a
                    class="events_links"
                    :title="Venues[0].name"
                    @click="showVenue(Venues[0].id)"
                    >{{ Venues[0].name }}</a
                >
                <v-spacer></v-spacer
            ></span>
        </span>
        <span v-if="Venues.length <= 0" class="caption primary--text"
            ><span
                ><v-icon
                    class="mr-1 "
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    style="margin-bottom: 0.08rem"
                    small
                    >mdi-office-building-marker</v-icon
                ><span
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    :title="$t('page.events.no_venues_title')"
                >
                    {{ $t("page.events.no_venues") }}</span
                ></span
            ><v-spacer></v-spacer>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        Venues: Array
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
        showVenue: function(id) {
            const path = "venues/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        }
    }
};
</script>

<style></style>
