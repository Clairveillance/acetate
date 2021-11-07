import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
    iconfont: "mdi"
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#455A64",
                secondary: "#136c83",
                info: "#2196F3",
                greybg: colors.teal.lighten5,
                accent: colors.shades.white,
                contrast: colors.shades.black,
                error: colors.red.accent3,
                darkprimary: "#4db6ac",
                darksecondary: "#ECEFF1",
                darkinfo: "#DBFE87",
                appBackground: "#ECEFF1"
            },
            dark: {
                primary: "#4db6ac",
                secondary: "#ECEFF1",
                info: "#DBFE87",
                greybg: colors.cyan.darken4,
                accent: colors.shades.black,
                contrast: colors.shades.white,
                error: colors.red.accent3,
                lightprimary: "#455A64",
                lightsecondary: "#136c83",
                lightinfo: "#2196F3",
                appBackground: "#263238",
                tealBackground: "#006064"
            }
        }
    }
});
