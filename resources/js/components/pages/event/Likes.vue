<template>
    <div>
        <v-col class="col-auto ml-auto" style="text-align: right">
            <span
                v-if="!logged()"
                :class="
                    $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
                "
                class="mr-2"
            >
                <v-icon
                    class="mr-1"
                    :class="
                        $vuetify.theme.dark
                            ? 'primary--text'
                            : 'secondary--text'
                    "
                    dark
                    small
                    style="margin-bottom: 0.05rem"
                >
                    mdi-heart-outline </v-icon
                ><span class="subtitle-2">{{ LikesCount }}</span>
            </span>
            <v-btn
                text
                small
                v-else
                :class="
                    $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
                "
                ><span v-if="!likked()" @click="likeThis()"
                    ><v-icon
                        class="mr-1"
                        :class="
                            $vuetify.theme.dark
                                ? 'primary--text'
                                : 'secondary--text'
                        "
                        dark
                        small
                        style="margin-bottom: 0.05rem"
                    >
                        mdi-heart-outline </v-icon
                    ><span class="subtitle-2">{{ LikesCount }}</span></span
                ><span v-else @click="unlikeThis()"
                    ><v-icon
                        class="pink--text mr-1"
                        dark
                        small
                        style="margin-bottom: 0.05rem"
                    >
                        mdi-heart </v-icon
                    ><span class="subtitle-2 pink--text mr-1">{{
                        LikesCount
                    }}</span></span
                >
            </v-btn>
        </v-col>
    </div>
</template>

<script>
export default {
    props: {
        LikesCount: Number,
        Likes: Array,
        Id: String
    },
    data() {
        return {
            // App url.
            appURL: process.env.MIX_APP_URL,
            // Base url.
            baseURL: process.env.MIX_BASE_URL,
            apiToken: process.env.MIX_APP_API_TOKEN,
            query: null
        };
    },
    methods: {
        logged: function() {
            return localStorage.getItem("user_api_token");
        },
        likked: function() {
            const likked = this.Likes.find(
                l => l.user_id == localStorage.getItem("user_id")
            );
            return likked;
        },
        likeThis: function() {
            /* 
      this.apiToken = localStorage.getItem("user_api_token");
      axios
        .request({
          url: {
            name: this.Name,
            id: this.Id,
            user_id: this.UserId,
          },

          method: "patch",
          baseURL: this.baseURL + "api/events/" + this.Id,
          headers: {
            Authorization: "Bearer " + this.apiToken,
          },
        })
        .then((response) => {
          this.events = response.data.events;
        })
        .catch((errors) => {
          // Returns errors.
          console.log(errors.response.data);
        }); */
        },
        unlikeThis: function() {}
    }
};
</script>

<style></style>
