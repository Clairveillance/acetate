<template>
    <div>
        <div v-if="Taxonomies !== null && Taxonomies.length > 0">
            <v-row class="py-0">
                <v-col class="my-auto col-auto mx-2">
                    <span class="primary--text">
                        <v-chip-group show-arrows class="col-auto my-2 py-0"
                            ><span
                                v-for="(taxonomy, index) in Taxonomies"
                                :key="index"
                                ><v-chip class="greybg primary--text" x-small>{{
                                    taxonomy.category
                                }}</v-chip
                                ><v-chip class="greybg primary--text" x-small>{{
                                    taxonomy.sub_category
                                }}</v-chip></span
                            >
                        </v-chip-group>
                    </span>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        Taxonomies: Array
    }
};
</script>

<style></style>
