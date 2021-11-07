<template>
    <div>
        <!-- Dialog -->
        <v-dialog persistent v-model="avatarDialog" width="500">
            <form id="myForm" @submit.prevent>
                <v-card max-width="800px" class="mx-auto">
                    <v-card-title class="title greybg primary--text">
                        <div>{{ $t("admin.edit_avatar.title") }}</div>
                    </v-card-title>
                    <v-card-text>
                        <v-card
                            elevation="0"
                            width="300"
                            :class="$vuetify.theme.dark ? 'greybg' : 'greybg'"
                            class="mt-4 col-auto mx-auto my-auto"
                        >
                            <div
                                v-if="errors"
                                class="error mb-2 px-4 white--text py-2 rounded"
                            >
                                {{ errors }}
                            </div>
                            <v-card-text class="white"
                                ><img
                                    v-if="currentAvatar"
                                    class="mx-4 my-3 primary--text col-auto mx-auto my-auto"
                                    width="213"
                                    :src="currentAvatar"/>
                                <v-spacer></v-spacer
                                ><input
                                    class="mx-4 my-4 primary--text"
                                    type="file"
                                    id="file"
                                    ref="file"
                                    v-on:change="handleFileUpload()"
                            /></v-card-text>
                        </v-card>
                    </v-card-text>
                    <v-divider class="mt-2"></v-divider>
                    <v-card-actions>
                        <v-btn
                            class="primary--text"
                            text
                            @click="closeDialog()"
                            >{{ $t("button.cancel") }}</v-btn
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            v-if="currentAvatar"
                            @click="deleteAvatar()"
                            text
                            color="warning"
                            type="submit"
                        >
                            {{ $t("button.delete") }}
                        </v-btn>
                        <v-btn
                            v-if="currentAvatar"
                            @click="submit()"
                            text
                            color="info"
                            type="submit"
                        >
                            {{ $t("button.submit") }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        Id: String,
        Avatar: String
    },
    data() {
        return {
            avatarDialog: false,
            currentAvatar: null,
            event: "",
            file: "",
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: localStorage.getItem("user_api_token"),
            errors: false
        };
    },
    mounted() {
        // Load event.avatar
        if (this.Avatar) {
            this.currentAvatar =
                this.baseURL + "storage/avatar/event/" + this.Avatar;
        } else {
            this.currentAvatar = null;
        }
    },
    methods: {
        // Validate file type.
        handleFileUpload() {
            if (
                this.$refs.file.files[0]["type"] !== "image/jpeg" &&
                this.$refs.file.files[0]["type"] !== "image/gif" &&
                this.$refs.file.files[0]["type"] !== "image/png"
            ) {
                this.errors = "Invalid file type ( gif, jpg or png ).";
            } else {
                this.errors = false;
                this.file = this.$refs.file.files[0];
                this.filePreview = this.$refs.file.files[0];
                this.currentAvatar = URL.createObjectURL(this.filePreview);
            }
        },
        // POST
        submit() {
            if (!this.errors) {
                const formData = new FormData();
                const blob = this.file.slice(0, this.file.size, this.file.type);
                const filename = this.file.name.substr(0, 30);
                const newFile = new File([blob], filename, {
                    type: this.file.type
                });
                //this.file.name = this.file.name.trim();
                formData.append("upload", newFile);
                const config = {
                    headers: {
                        "Content-Type":
                            "multipart/form-data; charset=utf-8; boundary=" +
                            Math.random()
                                .toString()
                                .substr(2),
                        Authorization: "Bearer " + this.apiToken
                    }
                };
                axios
                    .post(
                        this.baseURL + "api/events/" + this.Id + "/avatar",
                        formData,
                        config
                    )
                    .then(
                        function(response) {
                            this.refreshAll();
                            this.closeDialog();
                        }.bind(this)
                    )
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        // DELETE
        deleteAvatar() {
            const formData = new FormData();
            formData.append("upload", "");
            const config = {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2),
                    Authorization: "Bearer " + this.apiToken
                }
            };
            axios
                .post(
                    this.baseURL + "api/events/" + this.Id + "/avatar",
                    formData,
                    config
                )
                .then(
                    function(response) {
                        this.currentAvatar = null;
                        this.refreshAll();
                        this.closeDialog();
                    }.bind(this)
                )
                .catch(function(error) {
                    console.log(error);
                });
        },
        // GET
        fetchAPI() {
            axios
                .request({
                    url: this.Id,
                    method: "get",
                    baseURL: this.baseURL + "api/events/",
                    headers: {
                        Authorization: "Bearer " + this.apiToken
                    }
                })
                .then(response => {
                    console.log("response");
                    this.event = response.data.data.event;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {});
        },
        refreshAll() {
            this.$emit("refreshAvatar");
            this.$emit("refreshToolbox");
        },
        closeDialog() {
            this.errors = false;
            this.avatarDialog = false;
            this.refreshAll();
        }
    }
};
</script>

<style></style>
