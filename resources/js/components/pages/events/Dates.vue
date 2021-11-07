<template>
    <div>
        <span v-if="StartDate === EndDate" class="caption primary--text">
            <v-icon
                class="mr-1 primary--text"
                style="margin-bottom: 0.08rem"
                small
                >mdi-calendar-blank</v-icon
            >
            {{ StartDate | formatDate }}
        </span>
        <span v-if="StartDate !== EndDate" class="caption primary--text">
            <v-icon
                class="mr-1 primary--text"
                style="margin-bottom: 0.08rem"
                small
                >mdi-calendar-blank-multiple</v-icon
            >
            {{ $t("page.events.From") }}
            {{ StartDate | formatMultipleDates }}
            {{ $t("page.events.to") }}
            {{ EndDate | formatMultipleDates }}</span
        >
        <v-spacer></v-spacer>
    </div>
</template>

<script>
export default {
    props: {
        StartDate: String,
        EndDate: String
    }
};
</script>

<style></style>
