import moment from "moment";
import i18n from "../plugins/vue-i18n";

export function truncateFilter(text, length, clamp) {
    clamp = clamp || "...";
    const node = document.createElement("div");
    node.innerHTML = text;
    const content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
}

export function subStringFilter(text, length) {
    const node = document.createElement("div");
    node.innerHTML = text;
    const content = node.textContent;
    return content.slice(length);
}

export function dateFilter(value) {
    if (value) {
        const formattedDay = moment(String(value))
            .locale(i18n.locale)
            .format("dddd");
        const formattedDate = moment(String(value))
            .locale(i18n.locale)
            .format("LL");
        return (
            formattedDay.charAt(0).toUpperCase() +
            formattedDay.slice(1) +
            " " +
            formattedDate
        );
    }
}

export function multipleDateFilter(value) {
    if (value) {
        return moment(String(value))
            .locale(i18n.locale)
            .format("LL");
    }
}

export function timeFilter(value) {
    if (value) {
        return moment(String(value), "hh:mm:ss")
            .locale(i18n.locale)
            .format("LT");
    }
}

export function stringTimeFilter(value) {
    if (value) {
        return moment(String(value))
            .locale(i18n.locale)
            .format("LT");
    }
}
