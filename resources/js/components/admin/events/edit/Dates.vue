<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <div class="pt-8">
                    <v-card-text
                        v-for="(date, index) in Dates"
                        :key="index"
                        class=" mb-0 py-0"
                        ><v-textarea
                            class="my-0 py-0 primary--text"
                            height="220"
                            clearable
                            no-resize
                            outlined
                            rows="1"
                            row-height="25"
                            :id="'date[' + index + ']'"
                            :label="'Date ' + (index + 1)"
                            v-model="JSON.stringify(date, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                    <!-- :value="JSON.stringify(date, undefined, 4)" -->
                </div>
                <v-divider></v-divider>
                <v-card-actions class="mx-1 mt-4 p-0">
                    <v-btn
                        class="primary--text"
                        @click="$emit('Step1')"
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
        Dates: Array,
        Step: Number
    },
    data() {
        return {
            dateMenu: false,
            dateMenu2: false,
            StartDate: null,
            EndDate: null
        };
    },
    computed: {},
    methods: {
        nextStep() {
            let dates = [];
            for (let i = 0; i < this.Dates.length; i++) {
                if (document.getElementById("date[" + i + "]").value) {
                    dates.push(
                        JSON.parse(
                            document.getElementById("date[" + i + "]").value
                        )
                    );
                }
            }
            console.log("dates: ", dates);
            this.$emit("Step3");
        }
    }
};
</script>

<style></style>
