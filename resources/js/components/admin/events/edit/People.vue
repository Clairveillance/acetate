<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <div class="pt-8">
                    <v-card-text class=" mb-0 py-0"
                        ><v-combobox
                            v-model="selectedPeople"
                            :items="AllPeople"
                            item-value="id"
                            item-text="nickname"
                            label="People"
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
                        @click="$emit('Step3')"
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
    props: { Id: String, People: Array, AllPeople: Array, Step: Number },
    data() {
        return { attachedPeople: null };
    },
    computed: {
        selectedPeople: {
            get() {
                return this.People;
            },
            set(val) {
                this.$emit("selectedPeople", val);
                this.attachedPeople = val;
            }
        }
    },
    methods: {
        nextStep() {
            let people = [];
            if (this.attachedPeople != null) {
                people = this.attachedPeople;
            } else {
                people = this.selectedPeople;
            }
            console.log("people: ", people);
            this.$emit("Step5");
        }
    }
};
</script>

<style></style>
