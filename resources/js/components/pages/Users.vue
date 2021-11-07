<template>
    <div>
        <div
            :class="$vuetify.theme.dark ? 'tealBackground' : ''"
            class="mx-auto my-auto col-auto d-flex align-center justify-center"
        >
            <img
                width="100%"
                style="max-width:550px"
                :src="
                    $vuetify.theme.dark
                        ? baseURL + 'img/errors/teal_construction.gif'
                        : baseURL + 'img/errors/light_construction.gif'
                "
            />
        </div>
        <v-spacer></v-spacer>
        <div
            :class="$vuetify.theme.dark ? 'tealBackground' : ''"
            class="mx-auto my-auto col-auto"
        >
            <div
                class="mt-2 mb-2 d-flex align-center justify-center"
                :class="
                    $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
                "
            >
                {{ $t("page.error.construction.description") }}
            </div>
            <v-spacer></v-spacer>
            <div class="mt-0 mb-4 d-flex align-center justify-center">
                <v-btn text color="info" @click="goBack()">{{
                    $t("button.back.back")
                }}</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseURL: process.env.MIX_BASE_URL
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style></style>
