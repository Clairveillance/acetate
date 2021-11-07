<template>
    <div>
        <span class="caption primary--text">
            <v-icon
                class="mr-1 primary--text"
                style="margin-bottom: 0.08rem"
                small
                >mdi-clock-time-four-outline</v-icon
            >
            {{ StartTime | formatTime }} - {{ EndTime | formatTime }}</span
        >
        <v-spacer></v-spacer>
    </div>
</template>

<script>
export default {
    props: {
        StartTime: String,
        EndTime: String
    }
};
</script>

<style></style>
