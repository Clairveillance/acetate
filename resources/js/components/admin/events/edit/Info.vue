<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <v-card-text class="m-0 p-0">
                    <v-text-field
                        class="primary--text p-0 m-0"
                        type="text"
                        id="name"
                        :value="Name"
                        clearable
                        required
                        counter="100"
                        :label="$t('admin.event.title')"
                    ></v-text-field>
                    <v-textarea
                        class="mt-4 m-0 m-0 primary--text"
                        id="description"
                        :value="Description"
                        height="400"
                        clearable
                        no-resize
                        outlined
                        rows="1"
                        :label="$t('admin.event.description')"
                        row-height="25"
                    ></v-textarea> </v-card-text
                ><v-divider></v-divider>
                <v-card-actions class="mx-1 mt-4 p-0">
                    <v-btn
                        class="primary--text"
                        @click="historyBack()"
                        outlined
                    >
                        {{ $t("button.cancel") }} </v-btn
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
    props: { Id: String, Name: String, Description: String, Step: Number },
    data() {
        return {};
    },
    methods: {
        nextStep() {
            const name = document.getElementById("name").value;
            const description = document.getElementById("description").value;
            console.log("name: ", name);
            console.log("description: ", description);
            this.$emit("Step2");
        },
        historyBack() {
            this.$router.push(`/${this.$i18n.locale}/events/${this.Id}`);
        }
    },
    mounted() {}
};
</script>

<style></style>
