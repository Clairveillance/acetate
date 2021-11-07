<template>
    <v-container>
        <div>
            <!-- tabs -->
            <v-tabs
                v-model="activeTab"
                show-arrows
                background-color="appBackground"
                :color="$vuetify.theme.dark ? 'primary' : 'secondary'"
                grow
            >
                <v-tab
                    v-for="(tab, index) in eventTabs"
                    :key="index"
                    @click="showTab(tab.name)"
                    >{{ $t("page.events.tabs." + tab.name) }}</v-tab
                >
            </v-tabs>
            <v-tabs-items v-model="activeTab">
                <v-tab-item v-for="(tab, index) in eventTabs" :key="index">
                    <v-container>
                        <div>
                            <v-row dense>
                                <v-col
                                    v-for="(event, index) in events"
                                    :key="index"
                                    cols="12"
                                    sm="12"
                                    md="6"
                                    lg="4"
                                    xl="3"
                                    class=""
                                >
                                    <v-card
                                        max-width="500px"
                                        class="mx-auto pb-4"
                                    >
                                        <div>
                                            <!-- card title -->
                                            <CardTitle
                                                :Name="event.name"
                                                :Avatar="event.avatar"
                                                :Taxonomies="event.taxonomies"
                                            />
                                            <!-- card content -->
                                            <v-row class="pb-3">
                                                <v-col
                                                    class="mx-4 pt-5 col-auto mr-auto"
                                                >
                                                    <!-- people -->
                                                    <People
                                                        :People="event.people"
                                                    />
                                                    <!-- venues -->
                                                    <Venues
                                                        :Venues="event.venues"
                                                    />
                                                    <!-- dates -->
                                                    <Dates
                                                        :StartDate="
                                                            event.start_date
                                                        "
                                                        :EndDate="
                                                            event.end_date
                                                        "
                                                    />
                                                    <!-- time -->
                                                    <Time
                                                        :StartTime="
                                                            event.start_time
                                                        "
                                                        :EndTime="
                                                            event.end_time
                                                        "
                                                    />
                                                    <!-- prices -->
                                                    <Prices
                                                        :Prices="event.prices"
                                                    />
                                                </v-col>
                                            </v-row>
                                            <!-- taxonomies -->
                                            <Taxonomies
                                                :Taxonomies="event.taxonomies"
                                            />
                                            <!-- card footer -->
                                            <CardFooter
                                                :Id="event.id"
                                                :Comments="event.comments_count"
                                                :Likes="event.likes_count"
                                            />
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
                </v-tab-item>
            </v-tabs-items>
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
import CardTitle from "./events/CardTitle";
import People from "./events/People";
import Venues from "./events/Venues";
import Dates from "./events/Dates";
import Time from "./events/Time";
import Prices from "./events/Prices";
import Taxonomies from "./events/Taxonomies";
import CardFooter from "./events/CardFooter";

export default {
    components: {
        CardTitle,
        People,
        Venues,
        Dates,
        Time,
        Prices,
        Taxonomies,
        CardFooter
    },
    data() {
        return {
            activeTab: "all",
            overlay: true,
            perPage: 48,
            page: 1,
            events: "",
            meta: "",
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: process.env.MIX_APP_API_TOKEN,
            eventTabs: [
                { name: "all" },
                { name: "conference" },
                { name: "exhibition" },
                { name: "music" },
                { name: "theater" }
            ],
            query: null
        };
    },
    mounted() {
        this.showTab(this.activeTab);
    },
    methods: {
        showTab: function(item) {
            this.overlay = true;
            this.events = null;
            if (item === "all") {
                this.query = "events?page=" + this.page + "&per_page=";
            } else {
                this.query = "events?type=" + item + "&per_page=";
            }
            axios
                .request({
                    url: this.query + this.perPage,
                    method: "get",
                    baseURL: this.baseURL + "api/",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.events = response.data.events;
                    this.meta = response.data.meta;
                    this.overlay = false;
                    return this.events;
                })
                .catch(error => {
                    const path = "error/404";
                    this.$router.push(
                        `${this.baseURL}${this.$i18n.locale}/${path}`
                    );
                })
                .finally(() => {});
        },
        onPageChange() {
            this.showTab(this.activeTab);
        }
    }
};
</script>

<style></style>
