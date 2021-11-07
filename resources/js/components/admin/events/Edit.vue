<template>
    <v-card max-width="800px" class="mx-auto">
        <v-card-title class="title greybg primary--text">
            <div>{{ $t("admin.edit.title") }}</div>
        </v-card-title>
        <v-card-text class="mx-0 px-0">
            <v-stepper
                style="background:transparent"
                class="elevation-0 mx-2 secondary--text subtitle-1"
                v-model="stepper"
            >
                <v-stepper-header class="elevation-0 mb-0 mt-3">
                    <v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 1"
                        step="1"
                        >{{ $t("admin.event.stepper.info") }}</v-stepper-step
                    ><v-divider></v-divider
                    ><v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 2"
                        step="2"
                        >{{ $t("admin.event.stepper.dates") }}</v-stepper-step
                    ><v-divider></v-divider
                    ><v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 3"
                        step="3"
                        >{{ $t("admin.event.stepper.venues") }}</v-stepper-step
                    ><v-divider></v-divider
                    ><v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 4"
                        step="4"
                        >{{ $t("admin.event.stepper.people") }}</v-stepper-step
                    ><v-divider></v-divider
                    ><v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 5"
                        step="5"
                        >{{ $t("admin.event.stepper.prices") }}</v-stepper-step
                    ><v-divider></v-divider
                    ><v-stepper-step
                        :color="$vuetify.theme.dark ? 'greybg' : 'secondary'"
                        :complete="stepper > 6"
                        step="6"
                        >{{ $t("admin.event.stepper.contact") }}</v-stepper-step
                    >
                </v-stepper-header>
                <Info
                    :Id="this.id"
                    :Name="event.name"
                    :Description="event.description"
                    :Step="1"
                    @Step2="stepper = 2"
                />
                <Dates
                    :Id="this.id"
                    :Dates="event.dates"
                    :Step="2"
                    @Step1="stepper = 1"
                    @Step3="stepper = 3"
                />
                <Venues
                    :Id="this.id"
                    :Venues="event.venues"
                    :AllVenues="venues"
                    :Addresses="event.addresses"
                    :Step="3"
                    @Step2="stepper = 2"
                    @Step4="stepper = 4"
                />
                <People
                    :Id="this.id"
                    :People="event.people"
                    :AllPeople="people"
                    :Step="4"
                    @Step3="stepper = 3"
                    @Step5="stepper = 5"
                />
                <Prices
                    :Id="this.id"
                    :Prices="event.prices"
                    :Step="5"
                    @Step4="stepper = 4"
                    @Step6="stepper = 6"
                />
                <Contact
                    :Id="this.id"
                    :Emails="event.emails"
                    :Phones="event.phones"
                    :Websites="event.websites"
                    :Step="6"
                    @Step5="stepper = 5"
                />
            </v-stepper>
        </v-card-text>
    </v-card>
</template>

<script>
import Info from "./edit/Info";
import Dates from "./edit/Dates";
import People from "./edit/People";
import Venues from "./edit/Venues";
import Prices from "./edit/Prices";
import Contact from "./edit/Contact";

export default {
    props: { id: String },
    components: {
        Info,
        Dates,
        People,
        Venues,
        Prices,
        Contact
    },
    data() {
        return {
            event: "",
            venues: [],
            people: [],
            stepper: 1,
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: localStorage.getItem("user_api_token")
        };
    },
    methods: {
        // GET Event data
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
                    console.log(error);
                })
                .finally(() => {});
        },
        // GET Venues
        fetchVenues() {
            axios
                .request({
                    method: "get",
                    baseURL: this.baseURL + "api/venues?per_page=1000",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.venues = response.data.venues;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {});
        },
        // GET People
        fetchPeople() {
            axios
                .request({
                    method: "get",
                    baseURL: this.baseURL + "api/people?per_page=1000",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    this.people = response.data.people;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {});
        }
    },
    mounted() {
        this.fetchAPI();
        this.fetchVenues();
        this.fetchPeople();
    }
};
</script>

<style></style>
