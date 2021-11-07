<template>
    <v-footer outlined elevation="6" app padless>
        <v-col class="text-center" cols="12">
            <v-btn
                v-for="(socialNetwork, index) in socialNetworks"
                :key="index"
                class="mx-4"
                :class="
                    $vuetify.theme.dark ? 'secondary--text' : 'primary--text'
                "
                icon
                :href="socialNetwork.path"
                :title="socialNetwork.title"
                target="_blank"
            >
                <v-icon>
                    {{ socialNetwork.icon }}
                </v-icon>
            </v-btn>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        socialNetworks: [
            {
                icon: "mdi-git",
                title: "Github",
                path: "https://github.com/axelfaya/acetate"
            },
            {
                icon: "mdi-book-open-page-variant",
                title: "Curriculum Vitae",
                path: "https://unitysound.ch/axelwebdev"
            },
            {
                icon: "mdi-linkedin",
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/axel-duret-b5b9281ba/"
            }
        ]
    })
};
</script>

<style></style>
