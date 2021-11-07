<template>
    <div>
        <span v-if="People.length > 0" class="caption primary--text">
            <span>
                <v-icon
                    class="mr-1 primary--text"
                    style="margin-bottom: 0.08rem"
                    small
                    >mdi-account-group</v-icon
                ><span v-for="(person, index) in People" :key="index">
                    <span v-if="People.length < 4"
                        >&nbsp;<a
                            class="events_links"
                            :title="person.nickname"
                            @click="showPerson(person.id)"
                            >{{ person.nickname }}</a
                        >
                        <span v-if="index < People.length - 1">, </span>
                    </span>
                    <span v-if="People.length >= 4">
                        <span v-if="index < 2"
                            >&nbsp;<a
                                class="events_links"
                                :title="person.nickname"
                                @click="showPerson(person.id)"
                                >{{ person.nickname }}</a
                            >,
                        </span>
                        <span v-if="index === 2"
                            >&nbsp;<a
                                class="events_links"
                                :title="person.nickname"
                                @click="showPerson(person.id)"
                                >{{ person.nickname }}</a
                            >, ...</span
                        >
                    </span> </span
                ><v-spacer></v-spacer
            ></span> </span
        ><span v-if="People.length <= 0" class="caption primary--text"
            ><span
                ><v-icon
                    class="mr-1 "
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    style="margin-bottom: 0.08rem"
                    small
                    >mdi-account-group</v-icon
                ><span
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    :title="$t('page.events.no_people_title')"
                >
                    {{ $t("page.events.no_people") }}</span
                ></span
            ><v-spacer></v-spacer>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        People: Array
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
        showPerson: function(id) {
            const path = "people/" + id;
            this.$router.push(`${this.baseURL}${this.$i18n.locale}/${path}`);
        }
    }
};
</script>

<style></style>
