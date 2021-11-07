<template>
    <div>
        <v-stepper-content :step="Step"
            ><v-card class="m-0 mt-4 p-0 primary--text"
                ><v-divider></v-divider>
                <div class="pt-8">
                    <v-card-text
                        v-for="(email, index) in Emails"
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
                            :id="'email[' + index + ']'"
                            :label="'Email ' + (index + 1)"
                            v-model="JSON.stringify(email, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                </div>
                <div>
                    <v-card-text
                        v-for="(phone, index) in Phones"
                        :key="index"
                        class=" mb-0 py-0"
                        ><v-textarea
                            class="my-0 py-0 primary--text"
                            height="240"
                            clearable
                            no-resize
                            outlined
                            rows="1"
                            row-height="25"
                            :id="'phone[' + index + ']'"
                            :label="'Phone ' + (index + 1)"
                            v-model="JSON.stringify(phone, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                </div>
                <div>
                    <v-card-text
                        v-for="(website, index) in Websites"
                        :key="index"
                        class=" mb-0 py-0"
                        ><v-textarea
                            class="my-0 py-0 primary--text"
                            height="310"
                            clearable
                            no-resize
                            outlined
                            rows="1"
                            row-height="25"
                            :id="'website[' + index + ']'"
                            :label="'Website ' + (index + 1)"
                            v-model="JSON.stringify(website, undefined, 4)"
                        ></v-textarea
                    ></v-card-text>
                </div>
                <v-divider></v-divider>
                <v-card-actions class="mx-1 mt-4 p-0">
                    <v-btn
                        class="primary--text"
                        @click="$emit('Step5')"
                        outlined
                    >
                        {{ $t("button.back.back") }} </v-btn
                    ><v-spacer></v-spacer
                    ><v-btn color="info" outlined @click="submit()">
                        {{ $t("button.submit") }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-stepper-content>

        <!-- Dialog -->
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="title greybg primary--text">
                    Error </v-card-title
                ><v-card-text>
                    <div class="error--text mx-4 mt-4 px-4  py-2 rounded">
                        {{ JSON.stringify(errors, undefined, 4) }}
                    </div></v-card-text
                >
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary--text" text @click="closeDialog()">{{
                        $t("button.close")
                    }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        Id: String,
        Phones: Array,
        Emails: Array,
        Websites: Array,
        Step: Number
    },
    data() {
        return {
            form: {
                id: this.id,
                name: "",
                description: "",
                user_id: localStorage.getItem("user_id")
            },
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: localStorage.getItem("user_api_token"),
            errors: false,
            dialog: false
        };
    },
    methods: {
        // PATCH
        submit() {
            let emails = [];
            for (let i = 0; i < this.Emails.length; i++) {
                if (document.getElementById("email[" + i + "]").value) {
                    emails.push(
                        JSON.parse(
                            document.getElementById("email[" + i + "]").value
                        )
                    );
                }
            }
            let phones = [];
            for (let i = 0; i < this.Phones.length; i++) {
                if (document.getElementById("phone[" + i + "]").value) {
                    phones.push(
                        JSON.parse(
                            document.getElementById("phone[" + i + "]").value
                        )
                    );
                }
            }
            let websites = [];
            for (let i = 0; i < this.Websites.length; i++) {
                if (document.getElementById("website[" + i + "]").value) {
                    websites.push(
                        JSON.parse(
                            document.getElementById("website[" + i + "]").value
                        )
                    );
                }
            }
            console.log("emails: ", emails);
            console.log("phones: ", phones);
            console.log("websites: ", websites);

            const config = {
                headers: {
                    Authorization: "Bearer " + this.apiToken
                }
            };
            axios
                .patch(
                    this.baseURL + "api/events/" + this.Id,
                    this.form,
                    config
                )
                .then(response => {
                    this.historyBack();
                })
                .catch(error => {
                    this.errors = error.response.data.message;
                    this.dialog = true;
                    return this.errors;
                });
        },
        closeDialog() {
            this.errors = false;
            this.dialog = false;
        }
    }
};
</script>

<style></style>
