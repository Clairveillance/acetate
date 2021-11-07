<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <div class="pt-8">
                    <v-card-text
                        v-for="(price, index) in Prices"
                        :key="index"
                        class=" mb-0 py-0"
                        ><v-textarea
                            class="my-0 py-0 primary--text"
                            height="160"
                            clearable
                            no-resize
                            outlined
                            rows="1"
                            row-height="25"
                            :id="'price[' + index + ']'"
                            :label="'Price ' + (index + 1)"
                            v-model="JSON.stringify(price, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                </div>
                <v-divider></v-divider>
                <v-card-actions class="mx-1 mt-4 p-0">
                    <v-btn
                        class="primary--text"
                        @click="$emit('Step4')"
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
    props: { Id: String, Prices: Array, Step: Number },
    data() {
        return {};
    },
    methods: {
        nextStep() {
            let prices = [];
            for (let i = 0; i < this.Prices.length; i++) {
                if (document.getElementById("price[" + i + "]").value) {
                    prices.push(
                        JSON.parse(
                            document.getElementById("price[" + i + "]").value
                        )
                    );
                }
            }
            console.log("prices: ", prices);
            this.$emit("Step6");
        }
    }
};
</script>

<style></style>
