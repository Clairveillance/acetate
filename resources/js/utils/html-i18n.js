export function setHtmlDirectionPerLocale(locale) {
    document.dir = locale === "ar" ? "rtl" : "ltr";
}
export function setHtmlLang(lang) {
    document.documentElement.lang = lang;
}
