<template
    ><div>
        <div
            :class="$vuetify.theme.dark ? 'tealBackground' : ''"
            class="mx-auto my-auto col-auto d-flex align-center justify-center"
        >
            <img
                width="100%"
                style="max-width:550px"
                :src="
                    $vuetify.theme.dark
                        ? '/img/page/home/teal_home.gif'
                        : '/img/page/home/light_home.gif'
                "
            />
        </div>
        <v-spacer></v-spacer>
        <div>
            <div
                :class="$vuetify.theme.dark ? 'tealBackground' : ''"
                class="px-10 mx-auto my-auto col-auto"
            >
                <div
                    class="mb-4 d-flex align-center justify-center"
                    :class="
                        $vuetify.theme.dark
                            ? 'primary--text'
                            : 'secondary--text'
                    "
                >
                    {{ $t("page.home.title") }}
                </div>
                <v-spacer></v-spacer>
                <div
                    class="mb-8 d-flex align-center justify-center"
                    :class="
                        $vuetify.theme.dark
                            ? 'primary--text'
                            : 'secondary--text'
                    "
                >
                    {{ $t("page.home.description") }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style></style>
