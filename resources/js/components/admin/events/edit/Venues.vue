<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <div class="pt-8">
                    <v-card-text
                        v-for="(address, index) in Addresses"
                        :key="index"
                        class=" mb-0 py-0"
                        ><v-textarea
                            class="my-0 py-0 primary--text"
                            height="460"
                            clearable
                            no-resize
                            outlined
                            rows="1"
                            :label="'Address ' + (index + 1)"
                            row-height="25"
                            v-model="JSON.stringify(address, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                </div>
                <v-spacer></v-spacer>
                <div class="">
                    <v-card-text class=" mb-0 py-0"
                        ><v-combobox
                            v-model="selectedVenues"
                            :items="AllVenues"
                            item-value="id"
                            item-text="name"
                            label="Venues"
                            clearable
                            multiple
                            outlined
                            return-object
                        ></v-combobox
                    ></v-card-text>
                </div>
                <v-divider></v-divider>
                <v-card-actions class="mx-1 mt-4 p-0">
                    <v-btn
                        class="primary--text"
                        @click="$emit('Step2')"
                        outlined
                    >
                        {{ $t("button.back.back") }} </v-btn
                    ><v-spacer></v-spacer
                    ><v-btn color="info" outlined @click="nextStep()">
                        {{ $t("button.next") }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-stepper-content>
    </div>
</template>

<script>
export default {
    props: {
        Id: String,
        Venues: Array,
        AllVenues: Array,
        Addresses: Array,
        Step: Number
    },
    data() {
        return { attachedVenues: null };
    },
    computed: {
        selectedVenues: {
            get() {
                return this.Venues;
            },
            set(val) {
                this.$emit("selectedVenues", val);
                this.attachedVenues = val;
            }
        }
    },
    methods: {
        nextStep() {
            let venues = [];
            if (this.attachedVenues != null) {
                venues = this.attachedVenues;
            } else {
                venues = this.selectedVenues;
            }
            console.log("venues: ", venues);
            this.$emit("Step4");
        }
    },
    mounted() {}
};
</script>

<style></style>
