<template>
    <div>
        <span v-if="Prices.length > 0" class="caption primary--text">
            <v-icon
                class="mr-1 primary--text"
                style="margin-bottom: 0.08rem"
                small
                >mdi-cash-usd-outline</v-icon
            >
            <span v-for="(price, index) in Prices" :key="index">
                <span v-if="index < Prices.length - 1">
                    <span v-if="price.cost > 0"> {{ price.cost }} chf |</span>
                    <span v-else> {{ $t("price.free") }} |</span> </span
                ><span v-if="index >= Prices.length - 1">
                    <span v-if="price.cost > 0"> {{ price.cost }} chf</span>
                    <span v-else> {{ $t("price.free") }}</span></span
                > </span
            ><v-spacer></v-spacer>
        </span>
        <span v-if="Prices.length <= 0" class="caption primary--text">
            <span
                ><v-icon
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    class="mr-1 primary--text"
                    style="margin-bottom: 0.08rem"
                    small
                    >mdi-cash-usd-outline</v-icon
                ><span
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text'"
                    :title="$t('page.events.no_prices_title')"
                >
                    {{ $t("page.events.no_prices") }}</span
                ></span
            ><v-spacer></v-spacer>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        Prices: Array
    }
};
</script>

<style></style>
